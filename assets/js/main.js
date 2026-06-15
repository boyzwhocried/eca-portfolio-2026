/* ================================================================
   ECA PORTFOLIO 2026 — Shared JavaScript

   USAGE: Include on every page just before </body>:
     Root pages:         <script src="assets/js/main.js"></script>
     Subdirectory pages: <script src="../assets/js/main.js"></script>

   WHAT THIS DOES:
   - Custom cursor (acid dot + lagging ring)
   - Scroll reveal (.reveal elements fade in when entering viewport)
   - Nav color switch (adds "on-light" class when over .section-light sections)
   - Active nav link (marks current page link with aria-current="page")
   - Lightbox (click any detail-grid or detail-hero image to enlarge)
   ================================================================ */

/* ── Custom Cursor ─────────────────────────────────────────── */
const dot  = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');
let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let rx = mx, ry = my;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * .11;
  ry += (my - ry) * .11;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

/* Register hover targets — add selectors here to grow the cursor on new elements */
const HOVER_SEL = 'a, button, .proj-card, .client-cell, .acid-btn, .work-nav a, .back-link, .lb-thumb, .detail-hero-wrap';
document.querySelectorAll(HOVER_SEL).forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

/* ── Cursor-reactive blobs + constellation (About section) ──────
   Dots stay put and morph (border-radius) + grow + glow near the
   cursor; the photo blob leans, swells and gently squishes toward it;
   a canvas links the cursor to nearby dots. translate/scale ride the
   longhands so the CSS keyframe `transform`s (float / morph / drift)
   still compose on top. */
(function () {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const about = document.getElementById('about');
  if (!about) return;

  const photoEl = about.querySelector('.about-photo-blob');
  const dots = Array.from(about.querySelectorAll('.blob'));
  if (!dots.length && !photoEl) return;

  // organic border-radius targets the dots morph toward (cycled per dot)
  const SHAPES = [
    [60, 40, 55, 45, 50, 60, 40, 55],
    [40, 60, 45, 55, 60, 45, 55, 40],
    [55, 45, 62, 38, 46, 58, 50, 60],
  ];
  const make = (el, mode, i) => ({ el, mode, x: 0, y: 0, vx: 0, vy: 0, s: 1, p: 0, shape: SHAPES[i % SHAPES.length] });
  const items = [
    ...dots.map((el, i) => make(el, 'morph', i)),
    ...(photoEl ? [make(photoEl, 'lean', 0)] : []),
  ];

  // constellation canvas, behind the about content
  const cv = document.createElement('canvas');
  cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0';
  about.insertBefore(cv, about.firstChild);
  const ctx = cv.getContext('2d');
  let dpr = 1;
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = about.clientWidth * dpr;
    cv.height = about.clientHeight * dpr;
  }
  size();
  window.addEventListener('resize', size);

  const GROW_R = 175, DOT_GROW = 0.16;        // dot reaction reach + gentle scale-up
  const LEAN_R = 460, LEAN = 0.05, LEAN_MAX = 28, BLOB_GROW = 0.045;
  const LINK = 170;                            // constellation link distance
  const STIFF = 0.09, DAMP = 0.84, SE = 0.12;  // spring stiffness/damping + scale ease

  let active = false;
  new IntersectionObserver(
    es => { active = es.some(e => e.isIntersecting); },
    { threshold: 0.04 }
  ).observe(about);

  (function loop() {
    const ar = about.getBoundingClientRect();
    const culx = mx - ar.left, culy = my - ar.top;   // cursor in about-local px

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (active) {
      const pts = dots.map(d => {
        const r = d.getBoundingClientRect();
        return { x: r.left + r.width / 2 - ar.left, y: r.top + r.height / 2 - ar.top };
      });
      ctx.lineWidth = 1;
      pts.forEach(p => {                 // cursor -> nearby dots
        const d = Math.hypot(p.x - culx, p.y - culy);
        if (d < LINK) {
          ctx.strokeStyle = 'rgba(204,255,0,' + ((1 - d / LINK) * 0.3).toFixed(3) + ')';
          ctx.beginPath(); ctx.moveTo(culx, culy); ctx.lineTo(p.x, p.y); ctx.stroke();
        }
      });
      for (let i = 0; i < pts.length; i++) {   // dot -> dot when both near cursor
        if (Math.hypot(pts[i].x - culx, pts[i].y - culy) >= LINK) continue;
        for (let j = i + 1; j < pts.length; j++) {
          if (Math.hypot(pts[j].x - culx, pts[j].y - culy) >= LINK) continue;
          const dd = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (dd < LINK) {
            ctx.strokeStyle = 'rgba(204,255,0,' + ((1 - dd / LINK) * 0.12).toFixed(3) + ')';
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
    }

    items.forEach(b => {
      const r = b.el.getBoundingClientRect();
      const cx = r.left + r.width / 2 - b.x;   // rest center (strip our own offset)
      const cy = r.top + r.height / 2 - b.y;
      const d = Math.hypot(cx - mx, cy - my) || 0.01;

      let tx = 0, ty = 0, pT = 0;
      if (active) {
        if (b.mode === 'lean') {
          tx = Math.max(-LEAN_MAX, Math.min(LEAN_MAX, (mx - cx) * LEAN));
          ty = Math.max(-LEAN_MAX, Math.min(LEAN_MAX, (my - cy) * LEAN));
          pT = Math.max(0, 1 - d / LEAN_R);
        } else {
          pT = Math.max(0, 1 - d / GROW_R);
        }
      }
      b.p += (pT - b.p) * SE;                  // ease proximity so nothing snaps
      const p = b.p;

      if (b.mode === 'lean') {
        // leans toward the cursor (soft spring) + swells + a gentle, continuous squish
        b.vx = (b.vx + (tx - b.x) * STIFF) * DAMP; b.x += b.vx;
        b.vy = (b.vy + (ty - b.y) * STIFF) * DAMP; b.y += b.vy;
        b.el.style.translate = b.x.toFixed(2) + 'px ' + b.y.toFixed(2) + 'px';
        b.s += ((1 + p * BLOB_GROW) - b.s) * SE;
        const dirx = Math.max(-1, Math.min(1, (mx - cx) / (LEAN_R * 0.5)));  // smooth thru centre — no flip
        const sq = p * 0.02 * dirx;
        b.el.style.scale = (b.s + sq).toFixed(3) + ' ' + (b.s - sq).toFixed(3);
        b.el.style.filter = 'drop-shadow(0 0 ' + (p * 22).toFixed(1) + 'px rgba(204,255,0,' + (p * 0.28).toFixed(3) + '))';
      } else {
        // dots stay put and MORPH (circle -> organic) + grow + glow, no repositioning
        b.s += ((1 + p * DOT_GROW) - b.s) * SE;
        b.el.style.scale = b.s.toFixed(3);
        const t = b.shape;
        b.el.style.borderRadius =
          (50 + (t[0] - 50) * p).toFixed(1) + '% ' + (50 + (t[1] - 50) * p).toFixed(1) + '% ' +
          (50 + (t[2] - 50) * p).toFixed(1) + '% ' + (50 + (t[3] - 50) * p).toFixed(1) + '% / ' +
          (50 + (t[4] - 50) * p).toFixed(1) + '% ' + (50 + (t[5] - 50) * p).toFixed(1) + '% ' +
          (50 + (t[6] - 50) * p).toFixed(1) + '% ' + (50 + (t[7] - 50) * p).toFixed(1) + '%';
        b.el.style.boxShadow = '0 0 ' + (p * 16).toFixed(1) + 'px rgba(204,255,0,' + (p * 0.45).toFixed(3) + ')';
      }
    });

    requestAnimationFrame(loop);
  })();
})();

/* ── Scroll Reveal ──────────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Nav Color Switch ───────────────────────────────────────── */
/* Sections with class "section-light" trigger the nav to go dark */
const nav = document.getElementById('nav');
if (nav) {
  const lightSections = document.querySelectorAll('.section-light');
  if (lightSections.length) {
    const navObs = new IntersectionObserver(entries => {
      const anyLight = entries.some(e => e.isIntersecting);
      nav.classList.toggle('on-light', anyLight);
    }, { threshold: 0.1 });
    lightSections.forEach(s => navObs.observe(s));
  }
}

/* ── Lightbox ───────────────────────────────────────────────── */
(function () {
  const hero = document.querySelector('.detail-hero');
  const grid = document.querySelector('.detail-grid');
  if (!hero && !grid) return;

  // Wrap hero in .detail-hero-wrap for hover overlay
  if (hero) {
    const wrap = document.createElement('div');
    wrap.className = 'detail-hero-wrap';
    hero.parentNode.insertBefore(wrap, hero);
    wrap.appendChild(hero);
  }

  // Wrap grid images in .lb-thumb for hover overlay
  if (grid) {
    Array.from(grid.querySelectorAll('img')).forEach(img => {
      const wrap = document.createElement('div');
      wrap.className = 'lb-thumb';
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
    });
  }

  const heroImgs = hero ? [hero] : [];
  const gridImgs = grid ? Array.from(grid.querySelectorAll('img')) : [];
  const imgs = [...heroImgs, ...gridImgs];
  if (!imgs.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.innerHTML = `
    <button class="lb-close" aria-label="Close">✕</button>
    <button class="lb-prev" aria-label="Previous">‹</button>
    <img src="" alt="" />
    <button class="lb-next" aria-label="Next">›</button>
  `;
  document.body.appendChild(overlay);

  const lbImg    = overlay.querySelector('img');
  const btnClose = overlay.querySelector('.lb-close');
  const btnPrev  = overlay.querySelector('.lb-prev');
  const btnNext  = overlay.querySelector('.lb-next');
  let current = 0;

  function open(idx, dir) {
    current = (idx + imgs.length) % imgs.length;
    lbImg.src = imgs[current].dataset.srcFull || imgs[current].src;
    lbImg.alt = imgs[current].alt;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (dir) {
      lbImg.classList.remove('slide-left', 'slide-right');
      void lbImg.offsetWidth; // force reflow to restart animation
      lbImg.classList.add(dir === 'left' ? 'slide-left' : 'slide-right');
    }
  }
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  imgs.forEach((img, i) => img.addEventListener('click', () => open(i)));
  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', e => { e.stopPropagation(); open(current - 1, 'left'); });
  btnNext.addEventListener('click', e => { e.stopPropagation(); open(current + 1, 'right'); });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  open(current - 1, 'left');
    if (e.key === 'ArrowRight') open(current + 1, 'right');
  });

  // Touch swipe
  let touchStartX = 0;
  overlay.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? open(current + 1, 'right') : open(current - 1, 'left');
  }, { passive: true });
})();

/* ── Active Nav Link ─────────────────────────────────────────── */
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
const workPages = ['logofolio.html','social-media.html','motion.html','illustration.html'];
document.querySelectorAll('.nav-links a').forEach(link => {
  link.removeAttribute('aria-current');
  const href = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
  const isWorkLink = href === 'logofolio.html';
  const onWorkPage = workPages.includes(currentFile);
  const inSubdir = window.location.pathname.includes('/works/') || window.location.pathname.includes('/clients/');
  if (isWorkLink && (onWorkPage || inSubdir)) {
    link.setAttribute('aria-current', 'page');
  } else if (!isWorkLink && href && href === currentFile) {
    link.setAttribute('aria-current', 'page');
  }
});

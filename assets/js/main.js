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

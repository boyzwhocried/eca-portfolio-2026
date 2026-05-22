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
const HOVER_SEL = 'a, button, .proj-card, .client-cell, .acid-btn, .work-nav a, .back-link';
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

/* ── Active Nav Link ─────────────────────────────────────────── */
/* Marks the nav link matching the current page with aria-current="page" */
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
  if (href && href === currentFile) {
    link.setAttribute('aria-current', 'page');
  }
});

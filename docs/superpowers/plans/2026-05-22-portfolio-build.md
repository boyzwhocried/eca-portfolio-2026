# ECA Portfolio 2026 — Implementation Plan

> **STATUS: COMPLETE** — All tasks shipped 2026-05-22 across 7 sessions + 10 commits.
> Live at https://penatcotta.vercel.app/

**Goal:** Build a complete multi-page portfolio website for Annisa Raihan Djatmiko (ECA) — refactoring the existing single-page `index.html` into a structured multi-page site with dedicated client and work detail pages.

**Architecture:** Vanilla HTML + CSS + JS, no build tools. Shared `assets/css/style.css` and `assets/js/main.js` linked on every page. Work/client data embedded directly in HTML. PDF screenshots in `_ref/` were visual reference.

**Final Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, IntersectionObserver), vanilla JS (ES6+), **Plus Jakarta Sans** (Google Fonts), no dependencies.

---

## What Was Built

### Pages (22 total)
- [x] `index.html` — Hero, About, Clients grid (logo grid), CV, Contact
- [x] `logofolio.html` — Work category page
- [x] `social-media.html` — Work category page
- [x] `motion.html` — Work category page (QR + GDrive link)
- [x] `illustration.html` — Work category page
- [x] `clients/suntory.html`
- [x] `clients/amber.html`
- [x] `clients/pernod-ricard.html`
- [x] `clients/sazerac.html`
- [x] `clients/makmur-bahagia.html`
- [x] `clients/rich-music.html`
- [x] `clients/distorsi-keras.html`
- [x] `works/yokocho-mural.html`
- [x] `works/smoked-house.html`
- [x] `works/nasi-cemek.html`
- [x] `works/suntory-social.html`
- [x] `works/amber-social.html`
- [x] `works/fireball-buffalo.html`
- [x] `works/makmur-social.html`
- [x] `works/rich-music-event.html`
- [x] `works/distorsi-event.html`
- [x] `works/character-illustration.html`

### Features Shipped
- [x] Custom acid cursor (dot + lagging ring, grows on hover)
- [x] Lightbox — click to enlarge, prev/next, Esc, touch swipe
- [x] Scroll reveal (IntersectionObserver)
- [x] Nav color switch (dark ↔ light based on `.section-light` sections)
- [x] Frosted glass nav (backdrop-filter blur)
- [x] Responsive layout (breakpoints: 900px, 600px, 380px)
- [x] Mobile nav initials ("Eca" on ≤600px)
- [x] Acid SVG blob favicon
- [x] WebP thumbnails for all images (`thumbs/` dir) + originals for lightbox full-res
- [x] "Let's work together" CTA cell in clients grid

### Content / Fixes
- [x] All 7 client logo PNGs (Suntory, Amber, Pernod Ricard, Sazerac, Makmur, Rich Music, DistorsiKERAS)
- [x] Real product images (`assets/images/products/`)
- [x] Profile photo as transparent PNG cutout
- [x] Hero headline: "Curriculum Vitae / Curated Works" (2-line, typo fixed)
- [x] "Selected Clients & Collaboration" (singular per ref)
- [x] After Effect (no s) in CV — matches PDF original
- [x] `.cat-nav` / `.active` class on all 4 work category pages (replaced inline styles)
- [x] `fireball-igf-jan26b.png` added to fireball-buffalo work page
- [x] `mockup-rich.png` wired to rich-music pages
- [x] `mockup-sazerac.png` wired to sazerac page
- [x] DistorsiKERAS clarified as Rich Music sub-brand
- [x] GDrive link for PDF portfolio (too large to serve locally)
- [x] `.vercelignore` — strips _source-assets (747MB), _archive, _fonts, _ref, raw PNGs/JPGs; deploy size ~50MB

### Font History
- Started: Space Grotesk (Google Fonts)
- Session 7: Switched to NHaasGroteskTX/DS (local OTF — unlicensed, not suitable for public)
- Final: **Plus Jakarta Sans** (Google Fonts, weights 300–700) — licensed, fast, similar feel

---

## Possible Next Steps

- Custom domain (currently on `penatcotta.vercel.app`)
- Astro migration when ECA wants to self-manage content
- Add more work pages as ECA's portfolio grows


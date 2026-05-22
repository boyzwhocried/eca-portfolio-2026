# ECA Portfolio 2026 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete multi-page portfolio website for Annisa Raihan Djatmiko (ECA) — refactoring the existing single-page `index.html` into a structured multi-page site with dedicated client and work detail pages.

**Architecture:** Vanilla HTML + CSS + JS, no build tools. Shared `assets/css/style.css` and `assets/js/main.js` linked on every page. Work/client data embedded directly in HTML. PDF screenshots in `_ref/` are visual reference — match layout and hierarchy.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, IntersectionObserver), vanilla JS (ES6+), Google Fonts (Space Grotesk), no dependencies.

**Visual Reference:** `_ref/portfolio_page-01.jpg` through `_ref/portfolio_page-36.jpg`. Always open the relevant page screenshot before implementing a section.

---

## File Map

| File | Role |
|------|------|
| `index.html` | Home: Hero + About + Clients + CV + Contact |
| `logofolio.html` | Work category page: Logofolio |
| `social-media.html` | Work category page: Social Media & Print |
| `motion.html` | Work category page: Motion Graphics |
| `illustration.html` | Work category page: Illustration |
| `clients/suntory.html` | Client detail: Suntory Global Spirits |
| `clients/amber.html` | Client detail: Amber Beverage Group |
| `clients/pernod-ricard.html` | Client detail: Pernod Ricard |
| `clients/sazerac.html` | Client detail: Sazerac |
| `clients/makmur-bahagia.html` | Client detail: Makmur Bahagia |
| `clients/rich-music.html` | Client detail: Rich Music Online |
| `clients/distorsi-keras.html` | Client detail: DistorsiKERAS |
| `works/yokocho-mural.html` | Work detail: Yashinoki Yokocho Mural |
| `works/smoked-house.html` | Work detail: Smoked House.ID branding |
| `works/rich-music-event.html` | Work detail: Rich Music event design |
| `works/fireball-buffalo.html` | Work detail: Fireball & Buffalo Trace |
| `works/suntory-social.html` | Work detail: Suntory social media |
| `works/amber-social.html` | Work detail: Amber social media |
| `works/makmur-social.html` | Work detail: Makmur Bahagia social |
| `works/distorsi-event.html` | Work detail: DistorsiKERAS event |
| `works/character-illustration.html` | Work detail: Character illustration |
| `works/nasi-cemek.html` | Work detail: Nasi Cemek brand identity |
| `assets/css/style.css` | All shared styles, design tokens, components |
| `assets/js/main.js` | Cursor, scroll reveal, nav color switch, shared JS |
| `DOCS.md` | Human-readable guide for future tinkering |

---

## Task 1: Restructure folders and move files

**Files:**
- Create: `_archive/` (move PDF + report here)
- Create: `_ref/` (move output/ screenshots here)
- Create: `_fonts/` (rename Fonts/)
- Create: `_source-assets/` (rename Links/)
- Create: `assets/css/`, `assets/js/`, `assets/images/clients/`, `assets/images/works/`
- Create: `clients/`, `works/`
- Delete: `drive-download-20260521T211829Z-3-001.zip`

- [ ] **Step 1: Create new folder structure**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
New-Item -ItemType Directory -Force "$root\_archive"
New-Item -ItemType Directory -Force "$root\_ref"
New-Item -ItemType Directory -Force "$root\_fonts"
New-Item -ItemType Directory -Force "$root\_source-assets"
New-Item -ItemType Directory -Force "$root\assets\css"
New-Item -ItemType Directory -Force "$root\assets\js"
New-Item -ItemType Directory -Force "$root\assets\images\clients"
New-Item -ItemType Directory -Force "$root\assets\images\works"
New-Item -ItemType Directory -Force "$root\clients"
New-Item -ItemType Directory -Force "$root\works"
```

- [ ] **Step 2: Move archive files**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
Move-Item "$root\Portfolio 2026 - Annisa Raihan Djatmiko.pdf" "$root\_archive\"
Move-Item "$root\Portfolio 2026 - Annisa Raihan Djatmiko Report.txt" "$root\_archive\"
```

- [ ] **Step 3: Move reference screenshots**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
Get-ChildItem "$root\output\*" | Move-Item -Destination "$root\_ref\"
Remove-Item "$root\output" -Recurse -Force
```

- [ ] **Step 4: Rename Fonts and Links folders**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
Get-ChildItem "$root\Fonts\*" | Move-Item -Destination "$root\_fonts\"
Remove-Item "$root\Fonts" -Recurse -Force
Get-ChildItem "$root\Links\*" | Move-Item -Destination "$root\_source-assets\"
Remove-Item "$root\Links" -Recurse -Force
```

- [ ] **Step 5: Delete zip file**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
Remove-Item "$root\drive-download-20260521T211829Z-3-001.zip" -Force
```

- [ ] **Step 6: Copy and rename profile image**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
Copy-Item "$root\_source-assets\1725875279491.jfif" "$root\assets\images\profile.jpg"
```

- [ ] **Step 7: Copy work images to assets/images/works/**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
$src = "$root\_source-assets"
$dst = "$root\assets\images\works"
Copy-Item "$src\R&W Yokocho Branding.png"            "$dst\yokocho-mural.png"
Copy-Item "$src\Yokocho-web.jpg"                     "$dst\yokocho-mural-web.jpg"
Copy-Item "$src\FILE JPG.jpg"                        "$dst\illustration-friends.jpg"
Copy-Item "$src\Untitled_Artwork-2.jpg"              "$dst\illustration-character-1.jpg"
Copy-Item "$src\Untitled_Artwork 4.jpg"              "$dst\illustration-character-2.jpg"
Copy-Item "$src\Mockup-Rich.png"                     "$dst\mockup-rich.png"
Copy-Item "$src\Mockup-Porto-Makmur.png"             "$dst\mockup-makmur-1.png"
Copy-Item "$src\Mockup-Porto-Makmur2.png"            "$dst\mockup-makmur-2.png"
Copy-Item "$src\Mockup-Porto-Amber.png"              "$dst\mockup-amber-1.png"
Copy-Item "$src\Mockup-Porto-Amber2.png"             "$dst\mockup-amber-2.png"
Copy-Item "$src\Mockup-Porto-Sazerac.png"            "$dst\mockup-sazerac.png"
Copy-Item "$src\Mockup-Porto-1.png"                  "$dst\mockup-suntory-1.png"
Copy-Item "$src\Mockup-Porto-2.png"                  "$dst\mockup-suntory-2.png"
Copy-Item "$src\Fireball - Wobbler Mockup.png"       "$dst\fireball-wobbler.png"
Copy-Item "$src\Boardgame-KAH.png"                   "$dst\boardgame-kah-1.png"
Copy-Item "$src\Boardgame-KAH2.png"                  "$dst\boardgame-kah-2.png"
Copy-Item "$src\LANYARD MOCKUP RICH.png"             "$dst\lanyard-rich.png"
Copy-Item "$src\Lanyard_Mockup_1.png"                "$dst\lanyard-distorsi-1.png"
Copy-Item "$src\Lanyard Mockup CTM.png"              "$dst\lanyard-ctm.png"
Copy-Item "$src\Mockup Lanyard Karockday.png"        "$dst\lanyard-karockday.png"
Copy-Item "$src\LANYARD OUTSOURCE MOCKUP.png"        "$dst\lanyard-outsource.png"
Copy-Item "$src\E-FLYER UTAMA JAKARTA FEED.png"      "$dst\eflyer-jakarta.png"
Copy-Item "$src\E-FLYER BANDUNG FULL FEED.png"       "$dst\eflyer-bandung-feed.png"
Copy-Item "$src\E-FLYER BANDUNG FULL STORY.png"      "$dst\eflyer-bandung-story.png"
Copy-Item "$src\E-Flyer Medan Full Story.png"        "$dst\eflyer-medan.png"
Copy-Item "$src\Feed_Full Line Up.png"               "$dst\rich-full-lineup.png"
Copy-Item "$src\Feed_E-Flyer Full Line Up Updated Font.png" "$dst\rich-lineup-updated.png"
Copy-Item "$src\Feed_E-Flyer Ticket Prices Update.png"      "$dst\rich-ticket-prices.png"
Copy-Item "$src\DISTORSIKERAS24-RNDR-03911.jpg"      "$dst\distorsi-photo-1.jpg"
Copy-Item "$src\DISTORSIKERAS24-RNDR-03987.jpg"      "$dst\distorsi-photo-2.jpg"
Copy-Item "$src\DISTORSIKERAS24-DHIT-00714.jpg"      "$dst\distorsi-photo-3.jpg"
Copy-Item "$src\IGF_Fireball Content - 23Jan26.png"  "$dst\fireball-igf-jan26.png"
Copy-Item "$src\IGF-FIREBALL CONTENT-30JAN26.png"    "$dst\fireball-igf-jan26b.png"
Copy-Item "$src\FA_Content Fireball 1 - 5Des25.png"  "$dst\fireball-content-1.png"
Copy-Item "$src\FA_Content Fireball 2 - 5Des25.png"  "$dst\fireball-content-2.png"
Copy-Item "$src\FA_Buffalo Trace_Mantra - A5.png"    "$dst\buffalo-trace-mantra.png"
Copy-Item "$src\FA_Fireball_Fox & Rabbit - A5.png"   "$dst\fireball-fox-rabbit.png"
Copy-Item "$src\FA_Fireball-Menu Insertion@300x.png" "$dst\fireball-menu.png"
Copy-Item "$src\Apron mockup.png"                    "$dst\smoked-house-apron.png"
Copy-Item "$src\Mockup 1.png"                        "$dst\smoked-house-mockup.png"
Copy-Item "$src\BG BBQ.png"                          "$dst\smoked-house-bg.png"
Copy-Item "$src\9869793.png"                         "$dst\nasi-cemek-1.png"
Copy-Item "$src\11668644.png"                        "$dst\nasi-cemek-2.png"
Copy-Item "$src\adobe-express-qr-code.png"           "$dst\qr-code.png"
Copy-Item "$src\WhatsApp Image 2026-05-06 at 15.34.13.jpeg" "$dst\yokocho-installation.jpg"
```

- [ ] **Step 8: Copy client logos to assets/images/clients/**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
$src = "$root\_source-assets"
$dst = "$root\assets\images\clients"
Copy-Item "$src\Rich Music (B) (1).png"       "$dst\rich-music.png"
Copy-Item "$src\DistorsiKERAS (black).png"    "$dst\distorsi-keras.png"
```

- [ ] **Step 9: Verify structure looks correct**

```powershell
$root = "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026"
Get-ChildItem $root -Directory | Select-Object Name
Get-ChildItem "$root\assets\images\works" | Measure-Object | Select-Object Count
```

Expected: directories include `_archive`, `_ref`, `_fonts`, `_source-assets`, `assets`, `clients`, `works`, `docs`. Works image count: 42+.

---

## Task 2: Build shared CSS (`assets/css/style.css`)

**Files:**
- Create: `assets/css/style.css`

- [ ] **Step 1: Write style.css with all shared tokens, reset, and components**

```css
/* ================================================================
   ECA PORTFOLIO 2026 — Shared Stylesheet
   
   HOW TO USE:
   - Link this file on EVERY page: <link rel="stylesheet" href="/assets/css/style.css">
   - (Adjust path for subdirectory pages: ../assets/css/style.css)
   - Design tokens are CSS custom properties in :root
   - Add page-specific styles in a <style> block in that page's <head>
   ================================================================ */

/* ── TOKENS ──────────────────────────────────────────────────── */
:root {
  --dark:  #1c1c1c;
  --dark2: #141414;
  --light: #f4f4f0;
  --white: #ffffff;
  --acid:  #ccff00;
  --acid2: #b8e800;
  --f: 'Space Grotesk', sans-serif;

  --pad-x: 3rem;        /* horizontal page padding */
  --pad-x-sm: 1.5rem;   /* horizontal page padding on mobile */
}

/* ── RESET ───────────────────────────────────────────────────── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--f);
  background: var(--dark);
  color: var(--white);
  overflow-x: hidden;
  cursor: none;
}
img { display: block; max-width: 100%; }
a   { color: inherit; text-decoration: none; }
button { font-family: var(--f); cursor: none; border: none; background: none; }

/* ── CUSTOM CURSOR ───────────────────────────────────────────── */
#cur-dot {
  position: fixed; top: 0; left: 0; width: 10px; height: 10px;
  background: var(--acid); border-radius: 50%; pointer-events: none;
  z-index: 9999; transform: translate(-50%,-50%);
  transition: width .2s, height .2s, background .2s;
}
#cur-ring {
  position: fixed; top: 0; left: 0; width: 38px; height: 38px;
  border: 1.5px solid var(--acid); border-radius: 50%; pointer-events: none;
  z-index: 9998; transform: translate(-50%,-50%);
  transition: width .3s, height .3s, border-color .2s;
}
body.hovering #cur-dot  { width: 16px; height: 16px; }
body.hovering #cur-ring { width: 56px; height: 56px; }

/* ── NAV ─────────────────────────────────────────────────────── */
#nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.5rem var(--pad-x);
  transition: color .4s, background .4s;
}
#nav.on-light { color: var(--dark); }
#nav.on-light .nav-links a { color: var(--dark); }
.nav-name {
  font-size: .78rem; font-weight: 600;
  letter-spacing: .06em; text-transform: uppercase;
}
.nav-name a { color: inherit; }
.nav-links { list-style: none; display: flex; gap: 2.5rem; }
.nav-links a {
  font-size: .78rem; font-weight: 500; opacity: .5;
  transition: opacity .2s; letter-spacing: .04em; text-transform: uppercase;
}
.nav-links a:hover,
.nav-links a[aria-current="page"] { opacity: 1; }

/* ── PAGE FADE-IN ────────────────────────────────────────────── */
main {
  animation: pageFade .5s ease both;
}
@keyframes pageFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity .75s cubic-bezier(.22,1,.36,1),
              transform .75s cubic-bezier(.22,1,.36,1);
}
.reveal.delay-1 { transition-delay: .1s; }
.reveal.delay-2 { transition-delay: .2s; }
.reveal.delay-3 { transition-delay: .3s; }
.reveal.in { opacity: 1; transform: none; }

/* ── SECTION LABEL (small caps above headings) ───────────────── */
.sec-label {
  font-size: .68rem; font-weight: 700; letter-spacing: .14em;
  text-transform: uppercase; opacity: .35; margin-bottom: 3.5rem;
}

/* ── GLITCH HEADING (work section dividers) ──────────────────── */
.glitch {
  display: inline-block; position: relative;
  font-size: clamp(3rem, 8vw, 8rem); font-weight: 700;
  line-height: 1; color: var(--white);
}
.glitch::after {
  content: attr(data-g);
  position: absolute; left: .28em; top: .1em;
  background: var(--acid); color: var(--dark);
  padding: .03em .14em; line-height: 1;
  z-index: -1; font-weight: 700; font-size: 1em;
}

/* ── WORK SECTION DIVIDER ────────────────────────────────────── */
.work-divider {
  background: var(--dark2); padding: 6rem var(--pad-x) 3rem;
  position: relative; overflow: hidden;
}
.wd-num {
  font-size: .7rem; font-weight: 700; letter-spacing: .14em;
  text-transform: uppercase; opacity: .3; margin-bottom: 1rem;
}

/* ── PROJECT GRID ────────────────────────────────────────────── */
.proj-grid {
  background: var(--dark); padding: 1.5rem var(--pad-x) 5rem;
  display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5px;
}
.proj-card {
  position: relative; overflow: hidden; background: #111;
  cursor: none; display: block; /* <a> tag */
  color: var(--white);
}
.proj-card img {
  width: 100%; aspect-ratio: 16/9; object-fit: cover;
  transition: transform .6s cubic-bezier(.22,1,.36,1), filter .3s;
  filter: saturate(.9);
}
.proj-card:hover img { transform: scale(1.055); filter: saturate(1.1); }
.proj-meta {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 2rem 1.4rem 1.2rem;
  background: linear-gradient(to top, rgba(0,0,0,.88) 0%, transparent 100%);
  transform: translateY(100%);
  transition: transform .35s cubic-bezier(.22,1,.36,1);
}
.proj-card:hover .proj-meta { transform: translateY(0); }
.proj-meta h4 { font-size: .95rem; font-weight: 700; line-height: 1.2; }
.proj-meta span { font-size: .72rem; color: var(--acid); display: block; margin-top: .3rem; }
.proj-tag {
  position: absolute; top: 1rem; left: 1rem;
  background: rgba(0,0,0,.6); backdrop-filter: blur(4px);
  font-size: .65rem; font-weight: 700; letter-spacing: .1em;
  text-transform: uppercase; padding: .3em .7em; color: var(--acid);
}

/* ── ACID BUTTON ─────────────────────────────────────────────── */
.acid-btn {
  display: inline-flex; align-items: center; gap: .6rem;
  background: var(--acid); color: var(--dark);
  padding: .7em 1.4em; font-size: .8rem; font-weight: 700;
  width: fit-content; transition: background .2s;
  letter-spacing: .04em; text-transform: uppercase;
}
.acid-btn:hover { background: var(--acid2); color: var(--dark); }

/* ── BACK LINK ───────────────────────────────────────────────── */
.back-link {
  display: inline-flex; align-items: center; gap: .5rem;
  font-size: .78rem; font-weight: 600; letter-spacing: .06em;
  text-transform: uppercase; opacity: .45;
  transition: opacity .2s;
}
.back-link:hover { opacity: 1; }
.back-link::before { content: '←'; }

/* ── SKILL PILL ──────────────────────────────────────────────── */
.skill-pill {
  display: inline-flex; align-items: center;
  padding: .35em .75em; background: var(--light);
  color: var(--dark); font-size: .75rem; font-weight: 600;
  margin: .25rem .2rem 0 0; border-radius: 2px;
}

/* ── FOOTER ──────────────────────────────────────────────────── */
footer {
  background: var(--dark2); padding: 2rem var(--pad-x);
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid rgba(255,255,255,.05);
  font-size: .72rem; opacity: .3;
}

/* ── DETAIL PAGE HERO ────────────────────────────────────────── */
.detail-hero {
  width: 100%; max-height: 80vh; object-fit: cover;
  display: block;
}
.detail-hero-wide {
  width: 100%; aspect-ratio: 21/9; object-fit: cover;
  display: block;
}

/* ── DETAIL METADATA ROW ─────────────────────────────────────── */
.meta-row {
  background: var(--white); color: var(--dark);
  display: flex; flex-wrap: wrap; gap: 3rem;
  padding: 3rem var(--pad-x);
  border-bottom: 1px solid rgba(0,0,0,.08);
}
.meta-item .mi-label {
  font-size: .65rem; font-weight: 700; letter-spacing: .12em;
  text-transform: uppercase; opacity: .4; margin-bottom: .4rem;
}
.meta-item .mi-value { font-size: .95rem; font-weight: 600; }

/* ── DETAIL DESCRIPTION ──────────────────────────────────────── */
.detail-body {
  background: var(--white); color: var(--dark);
  padding: 3rem var(--pad-x) 5rem;
  max-width: 720px;
  font-size: .95rem; line-height: 1.85; opacity: .75;
}

/* ── DETAIL IMAGE GRID ───────────────────────────────────────── */
.detail-grid {
  background: var(--dark); padding: 1.5rem var(--pad-x) 5rem;
  display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5px;
}
.detail-grid img {
  width: 100%; aspect-ratio: 16/9; object-fit: cover;
  display: block;
  transition: filter .3s;
  filter: saturate(.9);
}
.detail-grid img:hover { filter: saturate(1.1); }

/* ── PREV / NEXT NAV ─────────────────────────────────────────── */
.work-nav {
  background: var(--dark2); padding: 3rem var(--pad-x);
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid rgba(255,255,255,.06);
}
.work-nav a {
  font-size: .78rem; font-weight: 600; letter-spacing: .06em;
  text-transform: uppercase; opacity: .4; transition: opacity .2s;
}
.work-nav a:hover { opacity: 1; }
.work-nav .wn-prev::before { content: '← '; }
.work-nav .wn-next::after  { content: ' →'; }

/* ── CLIENT GRID (on index) ──────────────────────────────────── */
.clients-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1px; border: 1px solid rgba(255,255,255,.06);
}
.client-cell {
  padding: 2rem 1.5rem; border: 1px solid rgba(255,255,255,.06);
  display: flex; flex-direction: column; gap: .4rem;
  transition: background .25s;
  cursor: none;
}
.client-cell:hover { background: rgba(204,255,0,.06); }
.client-cell .c-name { font-size: .88rem; font-weight: 700; }
.client-cell .c-scope { font-size: .72rem; opacity: .38; }

/* ── CLIENT DETAIL PAGE ──────────────────────────────────────── */
.client-header {
  background: var(--white); color: var(--dark);
  padding: 10rem var(--pad-x) 4rem;
}
.client-logo {
  max-height: 80px; width: auto;
  margin-bottom: 2rem; filter: invert(0);
}
.client-name-text {
  font-size: clamp(2rem, 5vw, 5rem); font-weight: 700;
  line-height: 1; margin-bottom: 1.5rem;
}
.client-desc {
  font-size: .95rem; line-height: 1.85; opacity: .65;
  max-width: 640px;
}

/* ── MARQUEE ─────────────────────────────────────────────────── */
.marquee-strip {
  overflow: hidden; border-top: 1px solid rgba(255,255,255,.08);
  padding-top: 1.2rem;
}
.marquee-inner {
  display: flex; gap: 3rem; white-space: nowrap;
  animation: marquee 20s linear infinite;
}
@keyframes marquee { from { transform:translateX(0) } to { transform:translateX(-50%) } }
.marquee-inner span {
  font-size: .7rem; font-weight: 600; letter-spacing: .14em;
  text-transform: uppercase; opacity: .28; flex-shrink: 0;
}
.marquee-inner .dot { color: var(--acid); opacity: 1; font-size: .5rem; }

/* ── RESPONSIVE ──────────────────────────────────────────────── */
@media (max-width: 900px) {
  :root { --pad-x: var(--pad-x-sm); }
  .proj-grid { grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); }
  #nav { padding: 1.2rem var(--pad-x-sm); }
  .meta-row { gap: 1.5rem; }
  .work-nav { flex-direction: column; gap: 1rem; text-align: center; }
  .clients-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
}
```

- [ ] **Step 2: Verify file saved, no syntax issues — open in browser (no HTML needed, just confirm file exists)**

```powershell
Test-Path "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026\assets\css\style.css"
```

Expected: `True`

---

## Task 3: Build shared JS (`assets/js/main.js`)

**Files:**
- Create: `assets/js/main.js`

- [ ] **Step 1: Write main.js**

```javascript
/* ================================================================
   ECA PORTFOLIO 2026 — Shared JavaScript
   
   HOW TO USE:
   - Include on EVERY page just before </body>:
     <script src="/assets/js/main.js"></script>
   - Adjust path for subdirectory pages: ../../assets/js/main.js
   
   WHAT THIS DOES:
   - Custom cursor (acid dot + lagging ring)
   - Scroll reveal (elements with class "reveal" fade in on scroll)
   - Nav color switch (adds "on-light" when over light sections)
   - Hover state registration for cursor growth
   ================================================================ */

/* ── Custom Cursor ─────────────────────────────────────────── */
const dot  = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');
let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let rx = mx, ry = my;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left  = mx + 'px';
  dot.style.top   = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * .11;
  ry += (my - ry) * .11;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

/* Register hover targets — add new selectors here if needed */
const HOVER_SEL = 'a, button, .proj-card, .client-cell, .acid-btn, .work-nav a, .back-link';
function registerHover(root) {
  root.querySelectorAll(HOVER_SEL).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}
registerHover(document);

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

/* ── Nav color switch ───────────────────────────────────────── */
/* Switches nav text dark when scrolled over light-background sections.
   Light sections must have class "section-light" OR ids: #about, #cv */
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

/* ── Active nav link ─────────────────────────────────────────── */
/* Marks current page link with aria-current="page" based on URL */
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && (href === currentPath || href.endsWith(currentPath))) {
    link.setAttribute('aria-current', 'page');
  }
});
```

- [ ] **Step 2: Verify file saved**

```powershell
Test-Path "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026\assets\js\main.js"
```

Expected: `True`

---

## Task 4: Rewrite `index.html`

**Files:**
- Modify: `index.html` (full rewrite — fixes bugs, links shared CSS/JS, updates image paths)

**Bugs fixed:**
1. Phone format: `+62-813-7207-6434` with WhatsApp href
2. Profile image: `assets/images/profile.jpg`
3. About text z-index: blob behind text
4. Client cells: wrapped in `<a>` pointing to `clients/[slug].html`
5. Work cards: lightbox removed, replaced with `<a>` to `works/[slug].html`

- [ ] **Step 1: Write index.html**

Reference `_ref/portfolio_page-01.jpg` through `_ref/portfolio_page-04.jpg` for layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Annisa Raihan Djatmiko (ECA) — Graphic Designer & Illustrator based in Jakarta, Indonesia." />
  <title>ECA — Annisa Raihan Djatmiko · Graphic Designer / Illustrator</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <style>
    /* ── INDEX-SPECIFIC STYLES ─────────────────────────── */

    /* HERO */
    #hero {
      min-height: 100vh; background: var(--dark2);
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 3rem var(--pad-x); position: relative; overflow: hidden;
    }
    .hero-badge {
      position: absolute; top: 5.5rem; right: var(--pad-x); text-align: right;
      animation: badgeDrop .8s cubic-bezier(.22,1,.36,1) .4s both;
    }
    @keyframes badgeDrop { from { opacity:0; transform:translateY(-16px) } to { opacity:1; transform:none } }
    .hero-badge .line {
      display: inline-block; background: var(--acid); color: var(--dark);
      font-size: clamp(1.1rem,2.2vw,1.8rem); font-weight: 700;
      padding: .18em .4em; line-height: 1.1;
    }
    .hero-badge .line + .line { margin-top: 3px; }
    .hero-headline {
      font-size: clamp(3.5rem, 9.5vw, 10rem);
      font-weight: 700; line-height: .92; letter-spacing: -.025em; color: var(--white);
      animation: slideUp .9s cubic-bezier(.22,1,.36,1) .1s both;
    }
    @keyframes slideUp { from { opacity:0; transform:translateY(40px) } to { opacity:1; transform:none } }
    .hero-foot {
      margin-top: 3rem; display: flex; justify-content: space-between; align-items: flex-end;
      animation: slideUp .9s cubic-bezier(.22,1,.36,1) .3s both;
    }
    .hero-contact { font-size: .75rem; opacity: .45; line-height: 1.9; }
    .hero-role    { font-size: .78rem; opacity: .4; }

    /* ABOUT */
    #about {
      background: var(--light); color: var(--dark);
      padding: 9rem var(--pad-x) 8rem; position: relative; overflow: hidden;
      display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
    }
    .blob {
      position: absolute; border-radius: 50%; background: var(--acid);
      pointer-events: none; z-index: 0;
      animation: float 6s ease-in-out infinite alternate;
    }
    @keyframes float { from { transform:translateY(0) scale(1) } to { transform:translateY(-14px) scale(1.05) } }
    .about-text { position: relative; z-index: 1; } /* text above blobs */
    .about-label { font-size: .7rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; opacity: .4; margin-bottom: 1.5rem; }
    .about-name  { font-size: clamp(2.2rem,4vw,3.5rem); font-weight: 700; line-height: 1; margin-bottom: 2rem; }
    .about-body  { font-size: .9rem; line-height: 1.85; opacity: .65; }
    .about-body p + p { margin-top: 1rem; }
    .about-right { position: relative; z-index: 1; display: flex; justify-content: center; align-items: center; }
    .about-photo-blob {
      position: absolute; width: 88%; padding-bottom: 90%;
      background: var(--acid); border-radius: 60% 40% 55% 45% / 50% 60% 40% 55%;
      animation: morphBlob 8s ease-in-out infinite alternate; z-index: 0;
    }
    @keyframes morphBlob {
      from { border-radius: 60% 40% 55% 45% / 50% 60% 40% 55% }
      to   { border-radius: 40% 60% 45% 55% / 60% 45% 55% 40% }
    }
    .about-img {
      position: relative; z-index: 1; width: 75%; border-radius: 4px;
      box-shadow: 0 32px 64px rgba(0,0,0,.18);
      aspect-ratio: 3/4; object-fit: cover; object-position: top;
    }

    /* CLIENTS */
    #clients { background: var(--dark); padding: 6rem var(--pad-x); }

    /* CV */
    #cv {
      background: var(--white); color: var(--dark);
      padding: 8rem var(--pad-x); display: grid;
      grid-template-columns: 260px 1fr 220px; gap: 4rem;
    }
    .cv-title { font-size: clamp(2.5rem,4vw,4rem); font-weight: 700; line-height: 1; }
    .cv-sec-head {
      font-size: .66rem; font-weight: 700; letter-spacing: .14em;
      text-transform: uppercase; opacity: .4; margin-bottom: 1.8rem; margin-top: 2.5rem;
    }
    .cv-sec-head:first-child { margin-top: 0; }
    .cv-entry { padding: 1.2rem 0; border-bottom: 1px solid rgba(0,0,0,.08); }
    .cv-entry:last-child { border-bottom: none; }
    .ce-top { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
    .ce-company { font-weight: 700; font-size: .88rem; }
    .ce-period  { font-size: .72rem; opacity: .38; white-space: nowrap; }
    .ce-role    { font-size: .8rem; opacity: .55; margin-top: .2rem; }

    /* CONTACT */
    #contact {
      background: var(--dark2); padding: 9rem var(--pad-x) 6rem;
      border-top: 1px solid rgba(255,255,255,.06);
    }
    .contact-label { font-size: .7rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; opacity: .3; margin-bottom: 1.5rem; }
    .contact-head  {
      font-size: clamp(3rem, 7.5vw, 8rem); font-weight: 700; line-height: .95;
      letter-spacing: -.02em; margin-bottom: 4rem;
    }
    .contact-head span { color: var(--acid); }
    .contact-links { display: flex; gap: 4rem; flex-wrap: wrap; }
    .cl { display: flex; flex-direction: column; gap: .4rem; }
    .cl .lbl { font-size: .65rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; opacity: .35; }
    .cl a { font-size: .95rem; font-weight: 500; transition: color .2s; }
    .cl a:hover { color: var(--acid); }

    @media (max-width: 900px) {
      #about { grid-template-columns: 1fr; }
      #cv    { grid-template-columns: 1fr; }
      .contact-links { gap: 2rem; }
    }
  </style>
</head>
<body>

<div id="cur-dot"></div>
<div id="cur-ring"></div>

<nav id="nav">
  <span class="nav-name"><a href="index.html">Annisa Raihan Djatmiko</a></span>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#cv">CV</a></li>
    <li><a href="logofolio.html">Work</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<main>

<!-- ── HERO ───────────────────────────────────────────────────── -->
<section id="hero">
  <div class="hero-badge">
    <span class="line">2025–2026</span><br>
    <span class="line">Selected Works</span>
  </div>
  <h1 class="hero-headline">Curriculum<br>Vitae/<br>Curated<br>Works</h1>
  <div class="hero-foot">
    <div class="hero-contact">
      <a href="https://wa.me/6281372076434">+62-813-7207-6434</a><br>
      <a href="mailto:annisadjatmiko90@gmail.com">annisadjatmiko90@gmail.com</a>
    </div>
    <span class="hero-role">Graphic Designer / Illustrator</span>
  </div>
  <div class="marquee-strip" style="margin-top:4rem">
    <div class="marquee-inner">
      <span>Logofolio</span><span class="dot">◆</span>
      <span>Social Media</span><span class="dot">◆</span>
      <span>Print Design</span><span class="dot">◆</span>
      <span>Motion Graphics</span><span class="dot">◆</span>
      <span>Illustration</span><span class="dot">◆</span>
      <span>Brand Identity</span><span class="dot">◆</span>
      <span>Jakarta, Indonesia</span><span class="dot">◆</span>
      <span>Logofolio</span><span class="dot">◆</span>
      <span>Social Media</span><span class="dot">◆</span>
      <span>Print Design</span><span class="dot">◆</span>
      <span>Motion Graphics</span><span class="dot">◆</span>
      <span>Illustration</span><span class="dot">◆</span>
      <span>Brand Identity</span><span class="dot">◆</span>
      <span>Jakarta, Indonesia</span><span class="dot">◆</span>
    </div>
  </div>
</section>

<!-- ── ABOUT ──────────────────────────────────────────────────── -->
<section id="about" class="section-light">
  <!-- Decorative floating dots (z-index: 0, behind text) -->
  <div class="blob" style="width:90px;height:90px;top:12%;left:4%;opacity:.9;animation-delay:0s"></div>
  <div class="blob" style="width:55px;height:55px;top:45%;left:22%;opacity:.85;animation-delay:1.2s"></div>
  <div class="blob" style="width:130px;height:130px;bottom:8%;left:28%;opacity:.9;animation-delay:2.4s"></div>
  <div class="blob" style="width:70px;height:70px;top:18%;left:48%;opacity:.85;animation-delay:0.8s"></div>
  <div class="blob" style="width:45px;height:45px;bottom:20%;left:6%;opacity:.8;animation-delay:1.8s"></div>

  <div class="about-text">
    <p class="about-label reveal">Graphic Designer / Illustrator</p>
    <h2 class="about-name reveal delay-1">Hello,<br>it's ECA.</h2>
    <div class="about-body reveal delay-2">
      <p>I'm a Graphic Designer &amp; Illustrator based in Jakarta, Indonesia, with 3 years of experience in digital content and illustration — focused on creating visuals that connect with audiences and elevate ideas.</p>
      <p>I graduated from Telkom University in 2024 with a Bachelor's in Visual Communication Design, Graphic Design Major (GPA 3.71).</p>
      <p>I'm always open to learning new things and expanding my skill set, whether exploring new styles, tools, or creative approaches.</p>
    </div>
  </div>

  <div class="about-right reveal delay-3">
    <div class="about-photo-blob"></div>
    <img class="about-img" src="assets/images/profile.jpg" alt="Annisa Raihan Djatmiko — ECA" />
  </div>
</section>

<!-- ── CLIENTS ────────────────────────────────────────────────── -->
<section id="clients">
  <p class="sec-label reveal">Selected Clients &amp; Collaborations</p>
  <div class="clients-grid reveal delay-1">
    <a href="clients/suntory.html" class="client-cell">
      <span class="c-name">SUNTORY GLOBAL SPIRITS</span>
      <span class="c-scope">Social Media · Print Design</span>
    </a>
    <a href="clients/amber.html" class="client-cell">
      <span class="c-name">AMBER BEVERAGE GROUP</span>
      <span class="c-scope">Social Media · Print Design</span>
    </a>
    <a href="clients/pernod-ricard.html" class="client-cell">
      <span class="c-name">PERNOD RICARD</span>
      <span class="c-scope">Social Media · Print Design</span>
    </a>
    <a href="clients/sazerac.html" class="client-cell">
      <span class="c-name">SAZERAC</span>
      <span class="c-scope">Social Media · Print Design</span>
    </a>
    <a href="clients/makmur-bahagia.html" class="client-cell">
      <span class="c-name">MAKMUR BAHAGIA</span>
      <span class="c-scope">Brand Identity · Print Design</span>
    </a>
    <a href="clients/rich-music.html" class="client-cell">
      <span class="c-name">RICH MUSIC ONLINE</span>
      <span class="c-scope">Social Media · Layout Design</span>
    </a>
    <a href="clients/distorsi-keras.html" class="client-cell">
      <span class="c-name">DISTORSI KERAS</span>
      <span class="c-scope">Social Media · Event Design</span>
    </a>
  </div>
</section>

<!-- ── CV ────────────────────────────────────────────────────── -->
<section id="cv" class="section-light">
  <div class="reveal">
    <h2 class="cv-title">Curriculum<br>Vitae</h2>
  </div>
  <div class="reveal delay-1">
    <p class="cv-sec-head">Work Experience</p>
    <div class="cv-entry">
      <div class="ce-top"><span class="ce-company">PT Sumber Anggur Sejahtera</span><span class="ce-period">Nov '24 – Present</span></div>
      <div class="ce-role">Graphic Designer — Staff</div>
    </div>
    <div class="cv-entry">
      <div class="ce-top"><span class="ce-company">PRAVIA</span><span class="ce-period">Jan '26 – Present</span></div>
      <div class="ce-role">Graphic Designer — Freelance</div>
    </div>
    <div class="cv-entry">
      <div class="ce-top"><span class="ce-company">Makmur Bahagia Kemang</span><span class="ce-period">May '25 – Feb '26</span></div>
      <div class="ce-role">Graphic Designer — Staff</div>
    </div>
    <div class="cv-entry">
      <div class="ce-top"><span class="ce-company">Rich Music Online</span><span class="ce-period">Jul '22 – Oct '24</span></div>
      <div class="ce-role">Graphic Designer &amp; Social Media — Lead</div>
    </div>
    <div class="cv-entry">
      <div class="ce-top"><span class="ce-company">HAI Teman</span><span class="ce-period">Apr '22 – Jul '22</span></div>
      <div class="ce-role">Graphic Designer — Internship</div>
    </div>
    <p class="cv-sec-head">Education</p>
    <div class="cv-entry">
      <div class="ce-top"><span class="ce-company">Telkom University</span><span class="ce-period">2019 – 2024</span></div>
      <div class="ce-role">Visual Communication Design · Graphic Design Major · GPA 3.71</div>
    </div>
  </div>
  <div class="reveal delay-2">
    <p class="cv-sec-head">Software</p>
    <div>
      <span class="skill-pill">Photoshop</span>
      <span class="skill-pill">Illustrator</span>
      <span class="skill-pill">Premiere Pro</span>
      <span class="skill-pill">After Effects</span>
      <span class="skill-pill">Procreate</span>
      <span class="skill-pill">Figma</span>
    </div>
    <p class="cv-sec-head">Language</p>
    <div class="cv-entry">
      <span class="ce-company">Bahasa Indonesia</span>
      <div class="ce-role">Native</div>
    </div>
    <div class="cv-entry">
      <span class="ce-company">English</span>
      <div class="ce-role">Upper Intermediate</div>
    </div>
  </div>
</section>

<!-- ── CONTACT ────────────────────────────────────────────────── -->
<section id="contact">
  <p class="contact-label reveal">Get in touch</p>
  <h2 class="contact-head reveal delay-1">Let's work<br><span>together.</span></h2>
  <div class="contact-links reveal delay-2">
    <div class="cl">
      <span class="lbl">Email</span>
      <a href="mailto:annisadjatmiko90@gmail.com">annisadjatmiko90@gmail.com</a>
    </div>
    <div class="cl">
      <span class="lbl">WhatsApp</span>
      <a href="https://wa.me/6281372076434">+62-813-7207-6434</a>
    </div>
    <div class="cl">
      <span class="lbl">Based in</span>
      <span style="font-size:.95rem;font-weight:500">Jakarta, Indonesia</span>
    </div>
  </div>
</section>

</main>

<footer>
  <span>© 2025–2026 Annisa Raihan Djatmiko</span>
  <span>Graphic Designer / Illustrator</span>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open `index.html` in browser and verify**
  - Hero headline visible, marquee scrolling
  - About section: selfie photo shows (not portfolio screenshot), text not covered by blobs
  - Phone number shows `+62-813-7207-6434`, clicking opens WhatsApp
  - Client cells are clickable (hover shows cursor change)
  - Nav switches dark when over About and CV sections

---

## Task 5: Build work category pages

Each category page uses the same template. Reference `_ref/` screenshots for section header and grid layout.

**Files:**
- Create: `logofolio.html`
- Create: `social-media.html`
- Create: `motion.html`
- Create: `illustration.html`

- [ ] **Step 1: Write `logofolio.html`** (ref: `_ref/portfolio_page-06.jpg` through `_ref/portfolio_page-09.jpg`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Logofolio — Brand identity and logo design by ECA (Annisa Raihan Djatmiko)." />
  <title>Logofolio — ECA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>

<div id="cur-dot"></div>
<div id="cur-ring"></div>

<nav id="nav">
  <span class="nav-name"><a href="index.html">Annisa Raihan Djatmiko</a></span>
  <ul class="nav-links">
    <li><a href="index.html#about">About</a></li>
    <li><a href="index.html#cv">CV</a></li>
    <li><a href="logofolio.html" aria-current="page">Work</a></li>
    <li><a href="index.html#contact">Contact</a></li>
  </ul>
</nav>

<main>

  <!-- Category nav strip -->
  <div style="background:var(--dark2);padding:7rem var(--pad-x) 0;display:flex;gap:2rem;flex-wrap:wrap;padding-top:7rem">
    <a href="logofolio.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--acid)">01 Logofolio</a>
    <a href="social-media.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">02 Social Media &amp; Print</a>
    <a href="motion.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">03 Motion Graphics</a>
    <a href="illustration.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">04 Illustration</a>
  </div>

  <div class="work-divider" style="padding-top:2rem">
    <p class="wd-num reveal">01</p>
    <h2 class="glitch reveal delay-1" data-g="Logofolio">Logofolio</h2>
  </div>

  <div class="proj-grid">
    <a href="works/smoked-house.html" class="proj-card reveal">
      <span class="proj-tag">Brand Identity</span>
      <img src="assets/images/works/smoked-house-apron.png" alt="Smoked House.ID" loading="lazy" />
      <div class="proj-meta">
        <h4>SMOKED HOUSE.ID</h4>
        <span>Brand Identity · BBQ &amp; Smoking · 2025</span>
      </div>
    </a>
    <a href="works/nasi-cemek.html" class="proj-card reveal delay-1">
      <span class="proj-tag">Brand Identity · Mascot</span>
      <img src="assets/images/works/nasi-cemek-1.png" alt="Nasi Cemek" loading="lazy" />
      <div class="proj-meta">
        <h4>NASI CEMEK</h4>
        <span>Brand Identity · Mascot Logo · 2025</span>
      </div>
    </a>
  </div>

</main>

<footer>
  <span>© 2025–2026 Annisa Raihan Djatmiko</span>
  <span>Graphic Designer / Illustrator</span>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Write `social-media.html`** (ref: `_ref/portfolio_page-10.jpg` through `_ref/portfolio_page-29.jpg`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Social Media & Print Design — by ECA (Annisa Raihan Djatmiko)." />
  <title>Social Media &amp; Print — ECA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>

<div id="cur-dot"></div>
<div id="cur-ring"></div>

<nav id="nav">
  <span class="nav-name"><a href="index.html">Annisa Raihan Djatmiko</a></span>
  <ul class="nav-links">
    <li><a href="index.html#about">About</a></li>
    <li><a href="index.html#cv">CV</a></li>
    <li><a href="logofolio.html" aria-current="page">Work</a></li>
    <li><a href="index.html#contact">Contact</a></li>
  </ul>
</nav>

<main>

  <div style="background:var(--dark2);padding:7rem var(--pad-x) 0;display:flex;gap:2rem;flex-wrap:wrap">
    <a href="logofolio.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">01 Logofolio</a>
    <a href="social-media.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--acid)">02 Social Media &amp; Print</a>
    <a href="motion.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">03 Motion Graphics</a>
    <a href="illustration.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">04 Illustration</a>
  </div>

  <div class="work-divider" style="padding-top:2rem">
    <p class="wd-num reveal">02</p>
    <h2 class="glitch reveal delay-1" data-g="Social Media &amp; Print">Social Media &amp; Print</h2>
  </div>

  <div class="proj-grid">
    <a href="works/suntory-social.html" class="proj-card reveal">
      <span class="proj-tag">Social Media · Print</span>
      <img src="assets/images/works/mockup-suntory-1.png" alt="Suntory Global Spirits" loading="lazy" />
      <div class="proj-meta">
        <h4>SUNTORY GLOBAL SPIRITS</h4>
        <span>Social Media &amp; Print Design · Jim Beam, Roku Gin, Hibiki · 2024–2025</span>
      </div>
    </a>
    <a href="works/amber-social.html" class="proj-card reveal delay-1">
      <span class="proj-tag">Social Media · Print</span>
      <img src="assets/images/works/mockup-amber-1.png" alt="Amber Beverage Group" loading="lazy" />
      <div class="proj-meta">
        <h4>AMBER BEVERAGE GROUP</h4>
        <span>Social Media &amp; Print Design · Rooster Rojo, KAH Tequila · 2025</span>
      </div>
    </a>
    <a href="works/fireball-buffalo.html" class="proj-card reveal delay-2">
      <span class="proj-tag">Social Media · Print</span>
      <img src="assets/images/works/fireball-wobbler.png" alt="Fireball &amp; Buffalo Trace" loading="lazy" />
      <div class="proj-meta">
        <h4>FIREBALL &amp; BUFFALO TRACE</h4>
        <span>Social Media · Print · POS Display · 2025–2026</span>
      </div>
    </a>
    <a href="works/makmur-social.html" class="proj-card reveal">
      <span class="proj-tag">Social Media · Event</span>
      <img src="assets/images/works/mockup-makmur-1.png" alt="Makmur Bahagia" loading="lazy" />
      <div class="proj-meta">
        <h4>MAKMUR BAHAGIA</h4>
        <span>Social Media · Event Poster Design · 2025–2026</span>
      </div>
    </a>
    <a href="works/rich-music-event.html" class="proj-card reveal delay-1">
      <span class="proj-tag">Social Media · Print</span>
      <img src="assets/images/works/eflyer-jakarta.png" alt="Rich Music Online" loading="lazy" />
      <div class="proj-meta">
        <h4>RICH MUSIC ONLINE</h4>
        <span>Social Media · Event Flyers · Merchandise · 2022–2024</span>
      </div>
    </a>
    <a href="works/distorsi-event.html" class="proj-card reveal delay-2">
      <span class="proj-tag">Event · Photography</span>
      <img src="assets/images/works/distorsi-photo-3.jpg" alt="DistorsiKERAS" loading="lazy" />
      <div class="proj-meta">
        <h4>DISTORSI KERAS</h4>
        <span>Event Design · Photography · 2024</span>
      </div>
    </a>
  </div>

</main>

<footer>
  <span>© 2025–2026 Annisa Raihan Djatmiko</span>
  <span>Graphic Designer / Illustrator</span>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Write `motion.html`** (ref: `_ref/portfolio_page-30.jpg` through `_ref/portfolio_page-32.jpg`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Motion Graphics — by ECA (Annisa Raihan Djatmiko)." />
  <title>Motion Graphics — ECA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <style>
    .motion-note {
      background: var(--dark); padding: 3rem var(--pad-x) 5rem;
      display: flex; gap: 2rem; align-items: stretch;
    }
    .motion-card {
      flex: 1; background: #111; padding: 3rem;
      display: flex; flex-direction: column; justify-content: center; gap: 1.2rem;
    }
    .motion-card h4 { font-size: 1.3rem; font-weight: 700; }
    .motion-card p  { font-size: .85rem; opacity: .5; line-height: 1.7; max-width: 34ch; }
    .motion-qr { flex: 0 0 340px; background: #111; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 2rem; }
    .motion-qr img { width: 100%; max-width: 260px; }
    @media (max-width: 900px) {
      .motion-note { flex-direction: column; }
      .motion-qr { flex: none; }
    }
  </style>
</head>
<body>

<div id="cur-dot"></div>
<div id="cur-ring"></div>

<nav id="nav">
  <span class="nav-name"><a href="index.html">Annisa Raihan Djatmiko</a></span>
  <ul class="nav-links">
    <li><a href="index.html#about">About</a></li>
    <li><a href="index.html#cv">CV</a></li>
    <li><a href="logofolio.html" aria-current="page">Work</a></li>
    <li><a href="index.html#contact">Contact</a></li>
  </ul>
</nav>

<main>

  <div style="background:var(--dark2);padding:7rem var(--pad-x) 0;display:flex;gap:2rem;flex-wrap:wrap">
    <a href="logofolio.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">01 Logofolio</a>
    <a href="social-media.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">02 Social Media &amp; Print</a>
    <a href="motion.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--acid)">03 Motion Graphics</a>
    <a href="illustration.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">04 Illustration</a>
  </div>

  <div class="work-divider" style="padding-top:2rem">
    <p class="wd-num reveal">03</p>
    <h2 class="glitch reveal delay-1" data-g="Motion Graphics">Motion Graphics</h2>
  </div>

  <div class="motion-note">
    <div class="motion-card reveal">
      <h4>Motion work available on request</h4>
      <p>Video and motion graphics — brand animations, social media reels, and motion design — available to view via QR or on request.</p>
      <a class="acid-btn" href="mailto:annisadjatmiko90@gmail.com">Request Reel →</a>
    </div>
    <div class="motion-qr reveal delay-1">
      <img src="assets/images/works/qr-code.png" alt="Scan QR to view motion work" />
    </div>
  </div>

</main>

<footer>
  <span>© 2025–2026 Annisa Raihan Djatmiko</span>
  <span>Graphic Designer / Illustrator</span>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Write `illustration.html`** (ref: `_ref/portfolio_page-33.jpg` through `_ref/portfolio_page-36.jpg`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Illustration — Digital illustration work by ECA (Annisa Raihan Djatmiko)." />
  <title>Illustration — ECA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>

<div id="cur-dot"></div>
<div id="cur-ring"></div>

<nav id="nav">
  <span class="nav-name"><a href="index.html">Annisa Raihan Djatmiko</a></span>
  <ul class="nav-links">
    <li><a href="index.html#about">About</a></li>
    <li><a href="index.html#cv">CV</a></li>
    <li><a href="logofolio.html" aria-current="page">Work</a></li>
    <li><a href="index.html#contact">Contact</a></li>
  </ul>
</nav>

<main>

  <div style="background:var(--dark2);padding:7rem var(--pad-x) 0;display:flex;gap:2rem;flex-wrap:wrap">
    <a href="logofolio.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">01 Logofolio</a>
    <a href="social-media.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">02 Social Media &amp; Print</a>
    <a href="motion.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.35">03 Motion Graphics</a>
    <a href="illustration.html" style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--acid)">04 Illustration</a>
  </div>

  <div class="work-divider" style="padding-top:2rem">
    <p class="wd-num reveal">04</p>
    <h2 class="glitch reveal delay-1" data-g="Illustration">Illustration</h2>
  </div>

  <div class="proj-grid" style="grid-template-columns:1fr">
    <a href="works/yokocho-mural.html" class="proj-card reveal" style="grid-column:span 1">
      <span class="proj-tag">Commercial · Mural</span>
      <img src="assets/images/works/yokocho-mural-web.jpg" alt="Yashinoki Yokocho Mural"
           loading="lazy" style="aspect-ratio:21/9;object-position:center" />
      <div class="proj-meta">
        <h4>YASHINOKI YOKOCHO — Mural</h4>
        <span>Digital Illustration · Suntory &amp; Asahi · Plaza Senayan · 274.5 × 117.5 cm · 2025</span>
      </div>
    </a>
  </div>
  <div class="proj-grid">
    <a href="works/character-illustration.html" class="proj-card reveal">
      <span class="proj-tag">Personal Project</span>
      <img src="assets/images/works/illustration-character-1.jpg" alt="Character Illustration" loading="lazy" />
      <div class="proj-meta">
        <h4>CHARACTER ILLUSTRATION</h4>
        <span>Digital Art · Personal Projects</span>
      </div>
    </a>
    <a href="works/character-illustration.html" class="proj-card reveal delay-1">
      <span class="proj-tag">Personal Project</span>
      <img src="assets/images/works/illustration-friends.jpg" alt="Illustration — Friends" loading="lazy" />
      <div class="proj-meta">
        <h4>FIGURE ILLUSTRATION</h4>
        <span>Digital Art · Personal Projects</span>
      </div>
    </a>
  </div>

</main>

<footer>
  <span>© 2025–2026 Annisa Raihan Djatmiko</span>
  <span>Graphic Designer / Illustrator</span>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 5: Open each page in browser and verify**
  - Category nav strip shows correct active item
  - Grid loads images from `assets/images/works/`
  - Hover overlay slides up on each card
  - Cards link to correct `works/` page URL

---

## Task 6: Build work detail pages

One page per project. Each shows full image, metadata, description, prev/next nav. Reference PDF captions for descriptions.

**Files:** `works/yokocho-mural.html`, `works/smoked-house.html`, `works/rich-music-event.html`, `works/fireball-buffalo.html`, `works/suntory-social.html`, `works/amber-social.html`, `works/makmur-social.html`, `works/distorsi-event.html`, `works/character-illustration.html`, `works/nasi-cemek.html`

- [ ] **Step 1: Write `works/yokocho-mural.html`** (ref: `_ref/portfolio_page-33.jpg`, `_ref/portfolio_page-34.jpg`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Yashinoki Yokocho Mural — Digital illustration by ECA for Suntory & Asahi at Plaza Senayan, 2025." />
  <title>Yashinoki Yokocho Mural — ECA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>

<div id="cur-dot"></div>
<div id="cur-ring"></div>

<nav id="nav">
  <span class="nav-name"><a href="../index.html">Annisa Raihan Djatmiko</a></span>
  <ul class="nav-links">
    <li><a href="../index.html#about">About</a></li>
    <li><a href="../index.html#cv">CV</a></li>
    <li><a href="../illustration.html" aria-current="page">Work</a></li>
    <li><a href="../index.html#contact">Contact</a></li>
  </ul>
</nav>

<main>

  <div style="padding:7rem var(--pad-x) 2rem;background:var(--dark2)">
    <a href="../illustration.html" class="back-link">Illustration</a>
  </div>

  <img class="detail-hero-wide"
       src="../assets/images/works/yokocho-mural-web.jpg"
       alt="Yashinoki Yokocho Mural — full view" />

  <div class="meta-row section-light">
    <div class="meta-item">
      <div class="mi-label">Project</div>
      <div class="mi-value">Yashinoki Yokocho — Mural</div>
    </div>
    <div class="meta-item">
      <div class="mi-label">Associated with</div>
      <div class="mi-value">Plaza Senayan · Yashinoki Yokocho</div>
    </div>
    <div class="meta-item">
      <div class="mi-label">Client</div>
      <div class="mi-value">Suntory &amp; Asahi (via SAS)</div>
    </div>
    <div class="meta-item">
      <div class="mi-label">Year</div>
      <div class="mi-value">2025</div>
    </div>
    <div class="meta-item">
      <div class="mi-label">Size</div>
      <div class="mi-value">274.5 × 117.5 cm</div>
    </div>
    <div class="meta-item">
      <div class="mi-label">Medium</div>
      <div class="mi-value">Digital Illustration</div>
    </div>
  </div>

  <div class="detail-body section-light">
    SAS had a chance to provide branding for Suntory &amp; Asahi at Plaza Senayan's Yashinoki Yokocho. I created the illustration digitally to be printed and installed there. The mural depicts a lively Japanese bar scene featuring Suntory Whisky and Asahi branding, designed to immerse guests in an authentic izakaya atmosphere.
  </div>

  <div class="detail-grid">
    <img src="../assets/images/works/yokocho-mural.png" alt="Yashinoki Yokocho — full illustration" loading="lazy" style="aspect-ratio:21/9;object-fit:cover" />
    <img src="../assets/images/works/yokocho-installation.jpg" alt="Yashinoki Yokocho — installed mural" loading="lazy" style="aspect-ratio:16/9;object-fit:cover" />
  </div>

  <nav class="work-nav">
    <span></span>
    <a href="character-illustration.html" class="wn-next">Character Illustration</a>
  </nav>

</main>

<footer>
  <span>© 2025–2026 Annisa Raihan Djatmiko</span>
  <span>Graphic Designer / Illustrator</span>
</footer>

<script src="../assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Write `works/smoked-house.html`** (ref: `_ref/portfolio_page-07.jpg`, `_ref/portfolio_page-08.jpg`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Smoked House.ID — Brand identity by ECA, 2025." />
  <title>Smoked House.ID — ECA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>

<div id="cur-dot"></div>
<div id="cur-ring"></div>

<nav id="nav">
  <span class="nav-name"><a href="../index.html">Annisa Raihan Djatmiko</a></span>
  <ul class="nav-links">
    <li><a href="../index.html#about">About</a></li>
    <li><a href="../index.html#cv">CV</a></li>
    <li><a href="../logofolio.html" aria-current="page">Work</a></li>
    <li><a href="../index.html#contact">Contact</a></li>
  </ul>
</nav>

<main>

  <div style="padding:7rem var(--pad-x) 2rem;background:var(--dark2)">
    <a href="../logofolio.html" class="back-link">Logofolio</a>
  </div>

  <img class="detail-hero" src="../assets/images/works/smoked-house-apron.png" alt="Smoked House.ID — Apron Mockup" />

  <div class="meta-row section-light">
    <div class="meta-item">
      <div class="mi-label">Project</div>
      <div class="mi-value">Smoked House.ID</div>
    </div>
    <div class="meta-item">
      <div class="mi-label">Category</div>
      <div class="mi-value">Brand Identity</div>
    </div>
    <div class="meta-item">
      <div class="mi-label">Year</div>
      <div class="mi-value">2025</div>
    </div>
  </div>

  <div class="detail-body section-light">
    Brand identity design for Smoked House.ID, a BBQ and smoking-focused food brand. The visual system includes logo design, typography, color palette, and branded merchandise mockups — apron and packaging — designed to feel rugged and bold.
  </div>

  <div class="detail-grid">
    <img src="../assets/images/works/smoked-house-mockup.png" alt="Smoked House.ID mockup" loading="lazy" style="aspect-ratio:16/9;object-fit:cover" />
    <img src="../assets/images/works/smoked-house-bg.png" alt="Smoked House.ID background" loading="lazy" style="aspect-ratio:16/9;object-fit:cover" />
  </div>

  <nav class="work-nav">
    <span></span>
    <a href="nasi-cemek.html" class="wn-next">Nasi Cemek</a>
  </nav>

</main>

<footer>
  <span>© 2025–2026 Annisa Raihan Djatmiko</span>
  <span>Graphic Designer / Illustrator</span>
</footer>

<script src="../assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Write remaining work detail pages** — follow same template as above. Each needs: back link, hero image, meta-row, description, detail-grid, work-nav prev/next.

`works/nasi-cemek.html`:
- Back: `../logofolio.html`
- Hero: `../assets/images/works/nasi-cemek-1.png`
- Meta: Project=Nasi Cemek, Category=Brand Identity · Mascot Logo, Year=2025
- Description: Brand identity and mascot logo design for Nasi Cemek, a local Indonesian food brand. The mascot character was designed to be playful and memorable, reflecting the warmth of Indonesian street food culture.
- Grid: `nasi-cemek-1.png`, `nasi-cemek-2.png`
- Prev: `smoked-house.html`, Next: (none — last in logofolio)

`works/suntory-social.html`:
- Back: `../social-media.html`
- Hero: `../assets/images/works/mockup-suntory-1.png`
- Meta: Client=Suntory Global Spirits (via SAS), Category=Social Media & Print Design, Brands=Jim Beam · Roku Gin · Hibiki, Year=2024–2025
- Description: Social media content and print design for Suntory Global Spirits brands distributed through PT Sumber Anggur Sejahtera. Work spans Jim Beam, Roku Gin, and Hibiki, including bar mockups, activation materials, and digital content.
- Grid: `mockup-suntory-1.png`, `mockup-suntory-2.png`
- Next: `amber-social.html`

`works/amber-social.html`:
- Back: `../social-media.html`
- Hero: `../assets/images/works/mockup-amber-1.png`
- Meta: Client=Amber Beverage Group, Category=Social Media & Print Design, Brands=Rooster Rojo · KAH Tequila, Year=2025
- Description: Social media and print materials for Amber Beverage Group's portfolio of spirits brands including Rooster Rojo Tequila and KAH Tequila. Work includes bar activations, social content, and POS display design.
- Grid: `mockup-amber-1.png`, `mockup-amber-2.png`, `boardgame-kah-1.png`, `boardgame-kah-2.png`
- Prev: `suntory-social.html`, Next: `fireball-buffalo.html`

`works/fireball-buffalo.html`:
- Back: `../social-media.html`
- Hero: `../assets/images/works/fireball-wobbler.png`
- Meta: Client=Sazerac (via SAS), Category=Social Media · Print · POS Display, Brands=Fireball · Buffalo Trace, Year=2025–2026
- Description: Brand activation and print materials for Fireball Whisky and Buffalo Trace under the Sazerac portfolio. Work includes Instagram feed content, wobbler POS displays, menu inserts, A5 flyers, and event activations.
- Grid: `fireball-wobbler.png`, `fireball-igf-jan26.png`, `fireball-content-1.png`, `fireball-content-2.png`, `buffalo-trace-mantra.png`, `fireball-fox-rabbit.png`, `fireball-menu.png`
- Prev: `amber-social.html`, Next: `makmur-social.html`

`works/makmur-social.html`:
- Back: `../social-media.html`
- Hero: `../assets/images/works/mockup-makmur-1.png`
- Meta: Client=Makmur Bahagia Kemang, Category=Social Media · Event Poster Design, Year=2025–2026
- Description: Social media content and event poster design for Makmur Bahagia Kemang, a creative space and bar in Jakarta. Work includes bar mockups and promotional materials for in-venue events.
- Grid: `mockup-makmur-1.png`, `mockup-makmur-2.png`
- Prev: `fireball-buffalo.html`, Next: `rich-music-event.html`

`works/rich-music-event.html`:
- Back: `../social-media.html`
- Hero: `../assets/images/works/eflyer-jakarta.png`
- Meta: Client=Rich Music Online, Category=Social Media · Event Flyers · Merchandise, Year=2022–2024
- Description: Full social media design and event production materials for Rich Music Online — a digital music platform covering Indonesia's independent music scene. Work includes event e-flyers for DistorsiKERAS shows across Jakarta, Bandung, and Medan, lanyard merchandise design, and ongoing social media content.
- Grid: `eflyer-jakarta.png`, `eflyer-bandung-feed.png`, `eflyer-bandung-story.png`, `eflyer-medan.png`, `rich-full-lineup.png`, `rich-lineup-updated.png`, `rich-ticket-prices.png`, `lanyard-rich.png`, `lanyard-outsource.png`
- Prev: `makmur-social.html`, Next: `distorsi-event.html`

`works/distorsi-event.html`:
- Back: `../social-media.html`
- Hero: `../assets/images/works/distorsi-photo-3.jpg`
- Meta: Client=DistorsiKERAS, Category=Event Design · Photography, Year=2024
- Description: Event design and photography documentation for DistorsiKERAS 2024, an independent music festival. Work includes event collateral, lanyard design, and on-site photography coverage of the festival.
- Grid: `distorsi-photo-1.jpg`, `distorsi-photo-2.jpg`, `distorsi-photo-3.jpg`, `lanyard-distorsi-1.png`, `lanyard-ctm.png`, `lanyard-karockday.png`
- Prev: `rich-music-event.html`, Next: (none)

`works/character-illustration.html`:
- Back: `../illustration.html`
- Hero: `../assets/images/works/illustration-character-1.jpg`
- Meta: Category=Personal Project · Digital Illustration, Year=Ongoing
- Description: Personal digital illustration work exploring character design, portraiture, and figurative art. Created in Procreate and Adobe Illustrator.
- Grid: `illustration-character-1.jpg`, `illustration-character-2.jpg`, `illustration-friends.jpg`
- Prev: `yokocho-mural.html`, Next: (none)

- [ ] **Step 4: Open several work detail pages in browser and verify**
  - `works/yokocho-mural.html` — hero image spans full width, metadata row white background, description readable, grid shows both images
  - `works/fireball-buffalo.html` — grid shows all 7 images
  - Back link returns to correct category page
  - Prev/Next nav links are correct

---

## Task 7: Build client detail pages

**Files:** `clients/suntory.html`, `clients/amber.html`, `clients/pernod-ricard.html`, `clients/sazerac.html`, `clients/makmur-bahagia.html`, `clients/rich-music.html`, `clients/distorsi-keras.html`

All client pages use the same structure. Note path depth: CSS/JS at `../assets/`.

- [ ] **Step 1: Write `clients/rich-music.html`** (has logo file)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Rich Music Online — client work by ECA (Annisa Raihan Djatmiko)." />
  <title>Rich Music Online — ECA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>

<div id="cur-dot"></div>
<div id="cur-ring"></div>

<nav id="nav">
  <span class="nav-name"><a href="../index.html">Annisa Raihan Djatmiko</a></span>
  <ul class="nav-links">
    <li><a href="../index.html#about">About</a></li>
    <li><a href="../index.html#cv">CV</a></li>
    <li><a href="../logofolio.html">Work</a></li>
    <li><a href="../index.html#contact">Contact</a></li>
  </ul>
</nav>

<main>

  <div class="client-header section-light">
    <a href="../index.html#clients" class="back-link" style="color:var(--dark);margin-bottom:2rem;display:inline-flex">All Clients</a>
    <img class="client-logo" src="../assets/images/clients/rich-music.png" alt="Rich Music Online" />
    <h1 class="client-name-text">Rich Music Online</h1>
    <p class="client-desc">
      Rich Music Online is a Jakarta-based digital music platform covering Indonesia's independent music scene. As Graphic Designer &amp; Social Media Lead (Jul '22 – Oct '24), ECA led visual content production — social media design, event flyers, merchandise, and live event photography.
    </p>
  </div>

  <div style="background:var(--dark);padding:3rem var(--pad-x) 1rem">
    <p class="sec-label">Selected Work</p>
  </div>

  <div class="proj-grid" style="padding-top:0">
    <a href="../works/rich-music-event.html" class="proj-card reveal">
      <span class="proj-tag">Social Media · Event</span>
      <img src="../assets/images/works/eflyer-jakarta.png" alt="DistorsiKERAS Jakarta" loading="lazy" />
      <div class="proj-meta">
        <h4>DISTORSI KERAS JAKARTA</h4>
        <span>Event E-Flyer · 2023</span>
      </div>
    </a>
    <a href="../works/rich-music-event.html" class="proj-card reveal delay-1">
      <span class="proj-tag">Social Media · Event</span>
      <img src="../assets/images/works/eflyer-bandung-feed.png" alt="DistorsiKERAS Bandung" loading="lazy" />
      <div class="proj-meta">
        <h4>DISTORSI KERAS BANDUNG</h4>
        <span>Event E-Flyer · 2023</span>
      </div>
    </a>
    <a href="../works/rich-music-event.html" class="proj-card reveal delay-2">
      <span class="proj-tag">Merchandise</span>
      <img src="../assets/images/works/lanyard-rich.png" alt="Rich Music Lanyard" loading="lazy" />
      <div class="proj-meta">
        <h4>EVENT LANYARD</h4>
        <span>Merchandise Design · 2023–2024</span>
      </div>
    </a>
  </div>

</main>

<footer>
  <span>© 2025–2026 Annisa Raihan Djatmiko</span>
  <span>Graphic Designer / Illustrator</span>
</footer>

<script src="../assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Write `clients/distorsi-keras.html`** (has logo file)

Same structure as rich-music.html. Key differences:
- Logo: `../assets/images/clients/distorsi-keras.png`
- Name: DistorsiKERAS
- Desc: DistorsiKERAS is an independent music festival brand. ECA handled event visual design and on-site photography documentation for the 2024 festival.
- Work cards link to `../works/distorsi-event.html`
- Images: `distorsi-photo-3.jpg`, `distorsi-photo-1.jpg`, `distorsi-photo-2.jpg`

- [ ] **Step 3: Write remaining 5 client pages** (no logo files — use styled text name instead of `<img>`)

For `clients/suntory.html`, `clients/amber.html`, `clients/pernod-ricard.html`, `clients/sazerac.html`, `clients/makmur-bahagia.html` — use this structure but replace `<img class="client-logo">` with a styled heading:

```html
<!-- Replace logo img with styled text for clients without logo files -->
<h1 class="client-name-text" style="font-size:clamp(2.5rem,6vw,6rem)">SUNTORY<br>GLOBAL SPIRITS</h1>
```

Content per client:

`clients/suntory.html`:
- Name: Suntory Global Spirits
- Desc: Suntory Global Spirits is a premium spirits company with brands including Jim Beam, Roku Gin, and Hibiki Japanese Whisky. ECA designed social media content and print materials through PT Sumber Anggur Sejahtera (Nov '24 – Present).
- Work cards link to `../works/suntory-social.html`
- Images: `mockup-suntory-1.png`, `mockup-suntory-2.png`

`clients/amber.html`:
- Name: Amber Beverage Group
- Desc: Amber Beverage Group distributes spirits brands including Rooster Rojo Tequila and KAH Tequila in Indonesia. ECA designed bar activation materials and social media content (2025).
- Work cards link to `../works/amber-social.html`
- Images: `mockup-amber-1.png`, `boardgame-kah-1.png`

`clients/pernod-ricard.html`:
- Name: Pernod Ricard
- Desc: Pernod Ricard is a global wine and spirits group. ECA contributed social media and print design work through PT Sumber Anggur Sejahtera (2024–2025).
- Work cards: link to `../works/suntory-social.html` (shared context via SAS)
- Images: `mockup-suntory-1.png`

`clients/sazerac.html`:
- Name: Sazerac
- Desc: Sazerac is a spirits company with brands including Fireball Whisky and Buffalo Trace Bourbon. ECA designed digital and print materials including Instagram content, POS wobbler displays, menu inserts, and A5 flyers (2025–2026).
- Work cards link to `../works/fireball-buffalo.html`
- Images: `fireball-wobbler.png`, `buffalo-trace-mantra.png`, `fireball-fox-rabbit.png`

`clients/makmur-bahagia.html`:
- Name: Makmur Bahagia
- Desc: Makmur Bahagia Kemang is a creative space and bar in Jakarta. ECA served as Graphic Designer Staff (May '25 – Feb '26), creating social media content, event posters, and brand collateral.
- Work cards link to `../works/makmur-social.html`
- Images: `mockup-makmur-1.png`, `mockup-makmur-2.png`

- [ ] **Step 4: Open `clients/rich-music.html` in browser and verify**
  - Back link returns to `index.html#clients`
  - Logo image loads
  - Work cards grid shows images and hover overlay
  - Cards link to correct works page

---

## Task 8: Write `DOCS.md`

**Files:**
- Create: `DOCS.md`

- [ ] **Step 1: Write DOCS.md**

```markdown
# ECA Portfolio 2026 — Developer Docs

A reference guide for anyone tinkering with this project.

---

## Folder Map

| Folder / File | What it is |
|---------------|------------|
| `index.html` | Home page (Hero, About, Clients, CV, Contact) |
| `logofolio.html` | Work category: Logo design |
| `social-media.html` | Work category: Social media & print |
| `motion.html` | Work category: Motion graphics |
| `illustration.html` | Work category: Illustration |
| `clients/` | One HTML file per client (7 total) |
| `works/` | One HTML file per project (10 total) |
| `assets/css/style.css` | ALL shared styles — edit here, applies everywhere |
| `assets/js/main.js` | ALL shared JS — cursor, scroll reveal, nav |
| `assets/images/` | Web-ready images (copied + renamed from `_source-assets/`) |
| `assets/images/profile.jpg` | ECA's selfie photo (used in About section) |
| `assets/images/clients/` | Client logo files |
| `assets/images/works/` | Work/project images |
| `_archive/` | Original PDF portfolio + report — DO NOT EDIT |
| `_ref/` | PDF screenshots for visual reference — DO NOT USE in web |
| `_fonts/` | Font files (not currently loaded — Space Grotesk from Google Fonts) |
| `_source-assets/` | Original unedited client asset files |

---

## Design Tokens

All colors and the font are set in `assets/css/style.css` under `:root`:

```css
--dark:  #1c1c1c   /* main dark background */
--dark2: #141414   /* slightly darker (hero, dividers) */
--light: #f4f4f0   /* off-white (about, CV sections) */
--white: #ffffff   /* pure white */
--acid:  #ccff00   /* lime green accent */
--acid2: #b8e800   /* darker lime (button hover) */
```

To change the accent color site-wide, change `--acid` in style.css.

---

## How to Add a New Client Page

1. Copy any existing file from `clients/` (e.g. `clients/rich-music.html`)
2. Update: page title, meta description, client name, description text
3. Update work card images and links to point to relevant `works/` pages
4. If client has a logo PNG: save it to `assets/images/clients/[slug].png` and reference it
5. Add a new `<a href="clients/[slug].html" class="client-cell">` entry in `index.html` under `#clients`

---

## How to Add a New Work/Project Page

1. Copy any existing file from `works/` (e.g. `works/smoked-house.html`)
2. Update: page title, meta description, back link href, hero image src, meta-row values, description, detail-grid images
3. Update prev/next links in the new page AND in the pages it sits between
4. Copy the relevant images from `_source-assets/` to `assets/images/works/` with a clean name
5. Add a new `<a href="works/[slug].html" class="proj-card">` entry in the relevant category page

---

## How to Add a New Work Category

1. Create a new HTML file at root level (e.g. `branding.html`) — copy `logofolio.html` as template
2. Update the category nav strip in ALL category pages to include the new link
3. Update the "Work" link in ALL navs if needed
4. Add entries to `index.html` nav if appropriate

---

## How to Update the Profile Photo

Replace `assets/images/profile.jpg` with a new photo. Recommended: portrait crop, at least 800×1000px.

---

## How to Migrate to Astro (Future)

When ready to scale:

1. `npm create astro@latest` in a new folder
2. Each `.html` page → `src/pages/[name].astro`
3. `assets/css/style.css` → `src/styles/global.css`, imported in layout
4. `assets/js/main.js` → `src/scripts/main.js`, loaded in layout `<script>`
5. Nav + footer → `src/components/Nav.astro` + `src/components/Footer.astro`
6. Work/client data → `src/data/works.json` + `src/data/clients.json`
7. Images → `public/images/` OR use Astro's `<Image />` for optimization
8. All CSS tokens stay identical — no visual changes

---

## Troubleshooting

**Images not loading:** Check the path. Pages in `clients/` and `works/` subdirectories need `../assets/images/` (two dots). Root pages use `assets/images/`.

**Styles not applying:** Check the stylesheet link path. Root pages: `assets/css/style.css`. Subdirectory pages: `../assets/css/style.css`.

**Cursor not showing:** The custom cursor requires JS. If JS is disabled, the browser's default cursor is used. This is expected.

**Nav not switching color:** Sections that should trigger the nav to go dark need class `section-light` on them (e.g. `<section id="about" class="section-light">`).
```

- [ ] **Step 2: Verify DOCS.md saved**

```powershell
Test-Path "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026\DOCS.md"
```

Expected: `True`

---

## Task 9: Final QA pass

- [ ] **Step 1: Open `index.html` and check all 5 bugs from the prompt are fixed**
  - Phone: `+62-813-7207-6434` linking to WhatsApp ✓
  - Profile image: selfie (not portfolio screenshot) ✓
  - About text: not covered by blob ✓
  - Client cells: clickable links ✓
  - Work sections removed from index (now on separate pages) ✓

- [ ] **Step 2: Check all internal links resolve**

Navigate manually:
  - `index.html` → `clients/rich-music.html` → `works/rich-music-event.html` → back to `social-media.html`
  - `logofolio.html` → `works/smoked-house.html` → prev/next nav works
  - `illustration.html` → `works/yokocho-mural.html` → detail grid shows both images

- [ ] **Step 3: Check responsive layout at 375px width**

Open DevTools → set width to 375px. Verify:
  - `index.html` about section stacks vertically (photo below text)
  - `index.html` CV section stacks vertically
  - All grids reflow to single column
  - Nav padding shrinks correctly

- [ ] **Step 4: Check all image paths in works/ and clients/ pages**

All pages in subdirectories must use `../assets/` prefix, not `assets/`. Quick grep to catch any missing `../`:

```powershell
Select-String -Path "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026\works\*.html" -Pattern 'src="assets/' | Select-Object Filename, LineNumber, Line
Select-String -Path "c:\Users\Verrel\Development\Projects\eca's\eca-portfolio-2026\clients\*.html" -Pattern 'src="assets/' | Select-Object Filename, LineNumber, Line
```

Expected: no output (all paths in subdirectories should use `../assets/`, not `assets/`).

- [ ] **Step 5: Commit everything**

```bash
git init
git add .
git commit -m "feat: build ECA portfolio 2026 multi-page site

- Restructured folders: _archive, _ref, _fonts, _source-assets, assets
- Shared style.css + main.js
- Fixed: phone format, profile image, about text z-index, clickable clients/works
- 4 work category pages (logofolio, social-media, motion, illustration)
- 10 work detail pages with metadata, descriptions, prev/next nav
- 7 client detail pages
- DOCS.md for future tinkering
- Astro migration notes in spec and docs

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Self-Review

**Spec coverage check:**
- ✓ Multi-page structure with 4 category pages
- ✓ Client cells clickable → client detail pages (7 pages)
- ✓ Work cards clickable → work detail pages (10 pages)
- ✓ Phone fixed to `+62-813-7207-6434` with WhatsApp link
- ✓ Profile image = selfie `assets/images/profile.jpg`
- ✓ About text z-index fixed (blob at z-index 0, text at z-index 1)
- ✓ Logofolio, Social Media, Motion, Illustration all have detail content
- ✓ Prev/next navigation on all work detail pages
- ✓ DOCS.md with how-to guide
- ✓ Shared CSS/JS — no duplication
- ✓ Responsive at 900px breakpoint
- ✓ Folder restructure with _archive, _ref, _fonts, _source-assets
- ✓ Astro migration path documented

**Placeholder scan:** No TBDs or TODOs in any task. All code blocks complete. Descriptions for tasks 6 Step 3 expanded inline (no "similar to above").

**Type consistency:** `section-light` class used consistently for nav color switch trigger. `back-link`, `proj-card`, `meta-row`, `detail-body`, `work-nav` used consistently across all pages. Asset paths use `../assets/` for subdirectory pages throughout.

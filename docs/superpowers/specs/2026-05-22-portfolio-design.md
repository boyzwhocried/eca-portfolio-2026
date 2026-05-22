# ECA Portfolio 2026 — Design Spec

**Owner:** Annisa Raihan Djatmiko (ECA)  
**Role:** Graphic Designer / Illustrator  
**Date:** 2026-05-22  
**Stack:** Vanilla HTML + CSS + JS (Option A), Astro-ready for future migration

---

## 1. Project Goal

Build a multi-page portfolio website that mirrors and enhances the PDF portfolio (`Portfolio 2026 - Annisa Raihan Djatmiko.pdf`). The PDF screenshots in `_ref/` are the visual reference — match layout, content hierarchy, and tone. The web version adds interactivity, navigation, and clickable detail pages.

---

## 2. Folder Structure

```
eca-portfolio-2026/
├── index.html                  # Home: Hero + About + Clients + CV + Contact
├── logofolio.html              # Work category: Logofolio
├── social-media.html           # Work category: Social Media & Print Designs
├── motion.html                 # Work category: Motion Graphics
├── illustration.html           # Work category: Illustration
│
├── clients/                    # One page per client
│   ├── suntory.html
│   ├── amber.html
│   ├── pernod-ricard.html
│   ├── sazerac.html
│   ├── makmur-bahagia.html
│   ├── rich-music.html
│   └── distorsi-keras.html
│
├── works/                      # One page per work/project
│   └── [slug].html
│
├── assets/
│   ├── css/
│   │   └── style.css           # All shared styles, design tokens
│   ├── js/
│   │   └── main.js             # Cursor, nav scroll, shared interactions
│   └── images/
│       ├── profile.jpg         # Selfie photo (copied from _source-assets/)
│       ├── clients/            # Client logos (PNG, transparent bg preferred)
│       └── works/              # Work images (copied + renamed from _source-assets/)
│
├── _archive/                   # Original source docs — DO NOT EDIT
│   ├── Portfolio 2026 - Annisa Raihan Djatmiko.pdf
│   └── Portfolio 2026 - Annisa Raihan Djatmiko Report.txt
│
├── _ref/                       # PDF page screenshots for visual reference only
│   └── portfolio_page-01.jpg … portfolio_page-36.jpg
│
├── _fonts/                     # Font files (web use via @font-face if needed)
│   └── NHaasGroteskTXPro-55Rg.otf, BootzyTM.ttf, etc.
│
├── _source-assets/             # Original unedited asset files from client work
│   └── [all original files from Links/]
│
├── DOCS.md                     # How-to guide for future tinkering
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-05-22-portfolio-design.md  ← this file
```

---

## 3. Design Tokens

Defined in `assets/css/style.css` as CSS custom properties:

```css
:root {
  --dark:  #1c1c1c;
  --dark2: #141414;
  --light: #f4f4f0;
  --white: #ffffff;
  --acid:  #ccff00;
  --acid2: #b8e800;
  --f: 'Space Grotesk', sans-serif;
}
```

Font loaded from Google Fonts (Space Grotesk). Local fonts in `_fonts/` available for future use.

---

## 4. Shared Components

Every page includes the same nav and footer via copy (no build tool = no partials). Keep nav/footer HTML identical across all pages.

### Nav
- Fixed top, `z-index: 500`
- Left: "Annisa Raihan Djatmiko" name (links to `index.html`)
- Right: `Work`, `About`, `CV`, `Contact` links
- `Work` expands or links to `logofolio.html` (first category)
- Active page link gets full opacity
- Switches color on scroll when over light sections (`on-light` class via JS)

### Footer / Contact strip
- Email: `annisadjatmiko90@gmail.com`
- Phone (WhatsApp): `+62-813-7207-6434` → `<a href="https://wa.me/6281372076434">`
- Consistent bottom of every page

### Custom Cursor
- Acid green dot + ring
- Grows on hover over interactive elements
- Defined in `style.css`, initialized in `main.js`

---

## 5. Pages

### 5.1 `index.html` — Home

Sections in order, matching PDF pages 01–04:

**Hero** (ref: page 01)
- Full-height dark background
- Top-left: name + role
- Top-right: acid badge "2025–2026 / Selected Works"
- Bottom: large headline "Curriculum Vitae / Currated Works"
- Bottom-left: contact info
- Marquee strip at bottom

**About** (ref: page 01 — profile section)
- Light background (`--light`)
- Left: "Hello, it's ECA" label + bio text (3 paragraphs from PDF)
- Right: selfie photo (`assets/images/profile.jpg`) with acid morphing blob behind
- Fix: ensure bio text is not covered by blob (set blob `z-index` lower than text)
- Floating acid dots (decorative, matching PDF)

**Clients** (ref: page 02)
- Dark background
- Heading: "Selected Clients & Collaboration"
- 7 client cards in grid, each shows logo + name + scope
- Each card is clickable → `clients/[slug].html`
- Logos sourced from `_source-assets/` (DistorsiKERAS black.png, Rich Music B.png, etc.)
- For clients without logo files (Suntory, Amber, Pernod Ricard, Sazerac): use text-based card

**CV** (ref: page 03)
- White background
- 3-column: title | work experience | software + language
- Work experience entries:
  - PT Sumber Anggur Sejahtera — Graphic Designer Staff — Nov'24–Present
  - PRAVIA — Graphic Designer Freelance — Jan'26–Present
  - Makmur Bahagia Kemang — Graphic Designer Staff — May'25–Feb'26
  - Rich Music Online — Graphic Designer & Social Media Lead — Jul'22–Oct'24
  - HAI Teman — Graphic Designer Internship — Apr'22–Jul'22
- Education: Telkom University, Visual Communication Design, GPA 3.71, 2019–2024
- Software pills: Photoshop, Illustrator, Premiere Pro, After Effects, Procreate, Figma
- Languages: Bahasa Indonesia (Native), English (Upper Intermediate)

**Contact**
- Dark background
- Large "Let's Work Together" or similar heading
- Email + WhatsApp links
- Matching PDF page footer style

---

### 5.2 Work Category Pages

Each follows same template. Reference PDF section divider pages (06, 09, 30, 32-ish).

**Structure per page:**
1. Section header: number + category name with glitch/acid highlight effect
2. Work grid: masonry or uniform grid of work cards
3. Each card: image + hover overlay (title, client, year)
4. Click → `works/[slug].html`

**`logofolio.html`** (ref: PDF pages 05–08)
- Works: logos created for various clients
- Images from `_source-assets/`: DistorsiKERAS (black).png, Rich Music (B) (1).png, etc.

**`social-media.html`** (ref: PDF pages 09–28)
- Largest section — social media posts, e-flyers, lanyards, print mockups
- Images: feed posts, e-flyers, lanyard mockups, brand materials from `_source-assets/`

**`motion.html`** (ref: PDF pages 29–30)
- Motion graphics work — video content
- Cards show thumbnail + play icon
- Link to YouTube/external or show QR code (existing QR pattern from index.html)
- `adobe-express-qr-code.png` used as placeholder QR

**`illustration.html`** (ref: PDF pages 31–36)
- Digital illustration work
- Key pieces: Yokocho mural (R&W Yokocho Branding.png), FILE JPG.jpg illustration, Untitled_Artwork files
- Detail pages show: About, Associated with, Year, Size (from PDF captions)

---

### 5.3 `clients/[slug].html` — Client Detail Pages

7 pages, one per client:

| Slug | Client | Scope |
|------|--------|-------|
| `suntory` | Suntory Global Spirits | Brand materials via PT Sumber Anggur Sejahtera (SAS) |
| `amber` | Amber Beverage Group | Brand materials |
| `pernod-ricard` | Pernod Ricard | Brand materials |
| `sazerac` | Sazerac | Brand materials (Buffalo Trace, Fireball) |
| `makmur-bahagia` | Makmur Bahagia | Branding, print, social media |
| `rich-music` | Rich Music Online | Social media, event design, lanyards |
| `distorsi-keras` | DistorsiKERAS | Event design, photography |

**Page structure:**
- Back button → `index.html#clients`
- Client logo (large) + name + relationship description
- "Work done" grid — filtered images relevant to that client
- Each work card clickable → `works/[slug].html`

---

### 5.4 `works/[slug].html` — Work Detail Pages

**Structure:**
- Back button → parent category page
- Full-width hero image
- Metadata row: Title | Client | Year | Category | (Size if illustration)
- Description (from PDF captions where available)
- Prev / Next navigation within same category
- Related works strip (3 thumbnails, same client or category)

---

## 6. Asset Map

| Web path | Source file | Notes |
|----------|-------------|-------|
| `assets/images/profile.jpg` | `_source-assets/1725875279491.jfif` | Convert jfif→jpg |
| `assets/images/clients/rich-music.png` | `_source-assets/Rich Music (B) (1).png` | |
| `assets/images/clients/distorsi-keras.png` | `_source-assets/DistorsiKERAS (black).png` | |
| `assets/images/works/yokocho-mural.jpg` | `_source-assets/R&W Yokocho Branding.png` | |
| `assets/images/works/illustration-friends.jpg` | `_source-assets/FILE JPG.jpg` | |
| `assets/images/works/mockup-rich.png` | `_source-assets/Mockup-Rich.png` | |
| `assets/images/works/mockup-makmur.png` | `_source-assets/Mockup-Porto-Makmur.png` | |
| `assets/images/works/mockup-amber.png` | `_source-assets/Mockup-Porto-Amber.png` | |
| `assets/images/works/mockup-sazerac.png` | `_source-assets/Mockup-Porto-Sazerac.png` | |
| `assets/images/works/fireball-wobbler.png` | `_source-assets/Fireball - Wobbler Mockup.png` | |
| `assets/images/works/boardgame-kah.png` | `_source-assets/Boardgame-KAH.png` | |
| `assets/images/works/lanyard-rich.png` | `_source-assets/LANYARD MOCKUP RICH.png` | |
| `assets/images/works/eflyer-jakarta.png` | `_source-assets/E-FLYER UTAMA JAKARTA FEED.png` | |
| `assets/images/works/eflyer-bandung.png` | `_source-assets/E-FLYER BANDUNG FULL FEED.png` | |
| `assets/images/works/distorsi-photo-1.jpg` | `_source-assets/DISTORSIKERAS24-RNDR-03911.jpg` | |
| `assets/images/works/distorsi-photo-2.jpg` | `_source-assets/DISTORSIKERAS24-DHIT-00714.jpg` | |
| `assets/images/works/fireball-content-1.png` | `_source-assets/FA_Content Fireball 1 - 5Des25.png` | |
| `assets/images/works/fireball-content-2.png` | `_source-assets/FA_Content Fireball 2 - 5Des25.png` | |
| `assets/images/works/buffalo-trace-mantra.png` | `_source-assets/FA_Buffalo Trace_Mantra - A5.png` | |
| `assets/images/works/qr-code.png` | `_source-assets/adobe-express-qr-code.png` | |

---

## 7. Bugs Fixed (from original index.html)

1. **Phone format** — was `+628137207-6434`, fix to `+62-813-7207-6434`, wrapped in WhatsApp `href`
2. **Profile image** — was portfolio screenshot placeholder, replace with `assets/images/profile.jpg`
3. **About text covered** — blob element had higher z-index than text, fix stacking context
4. **Client cards not clickable** — wrap in `<a>` tags pointing to `clients/[slug].html`
5. **Work cards not clickable** — wrap in `<a>` tags pointing to `works/[slug].html`

---

## 8. Interactions & Animation

| Element | Behaviour |
|---------|-----------|
| Custom cursor | Acid dot + ring, grows on hover |
| Nav | Fixed, color-switches dark↔light based on section below |
| Hero headline | Slide-up on load |
| About blob | Morphs shape continuously |
| Floating dots | Float up/down loop |
| Section headers | Glitch effect (white text + acid highlight offset) |
| Work cards | Hover: image scale + metadata overlay slides up |
| Page load | CSS fade-in on `<main>` |
| Client/work cards | Cursor pointer, hover background tint |

---

## 9. Future Migration to Astro

When ready to migrate:
- Each `.html` page becomes an `.astro` page in `src/pages/`
- `style.css` → `src/styles/global.css`
- `main.js` → `src/scripts/main.js` or inline `<script>` in layout
- Nav/footer become `src/components/Nav.astro` and `src/components/Footer.astro`
- Work/client data moves to `src/data/works.json` and `src/data/clients.json`
- Images move to `public/images/` or use Astro `<Image />` for optimization
- All design tokens stay identical — no visual changes needed

---

## 10. Visual Reference Index

| PDF Page | Content | Web Location |
|----------|---------|--------------|
| 01 | Cover / Hero | `index.html` hero section |
| 02 | About / Profile | `index.html` about section |
| 03 | Clients | `index.html` clients section |
| 04 | CV | `index.html` cv section |
| 05 | Table of Contents | (nav replaces this) |
| 06 | Logofolio divider | `logofolio.html` header |
| 07–09 | Logofolio works | `logofolio.html` grid |
| 10 | Social Media divider | `social-media.html` header |
| 11–29 | Social Media works | `social-media.html` grid |
| 30 | Motion Graphics divider | `motion.html` header |
| 31–32 | Motion Graphics works | `motion.html` grid |
| 33 | Illustration divider | `illustration.html` header |
| 34–36 | Illustration works | `illustration.html` grid |

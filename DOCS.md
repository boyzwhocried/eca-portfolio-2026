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
| `assets/js/main.js` | ALL shared JS — cursor, scroll reveal, nav, lightbox |
| `assets/favicon.svg` | Site icon — acid green blob, transparent bg |
| `assets/images/profile.webp` | ECA's photo (used in About section) |
| `assets/images/clients/` | Client logo files (WebP) |
| `assets/images/products/` | Product/brand images (WebP) |
| `assets/images/works/` | Full-res work images (originals) |
| `assets/images/works/thumbs/` | WebP thumbnails — used in `<img src>` on all pages |
| `_archive/` | Original PDF portfolio + report — DO NOT EDIT |
| `_ref/` | PDF screenshots — `portfolio_page-22.jpg` used as fireball hero |
| `_fonts/` | Local font files (NHaasGroteskTX + DS, Chedros, Balivia, etc.) |
| `_source-assets/` | Original unedited client asset files |

---

## Design Tokens

All tokens in `assets/css/style.css` under `:root`:

```css
--dark:      #1c1c1c   /* main dark background */
--dark2:     #141414   /* slightly darker (hero, dividers) */
--light:     #f4f4f0   /* off-white (about, CV sections) */
--white:     #ffffff
--acid:      #ccff00   /* lime green accent */
--acid2:     #b8e800   /* lime hover */
--f:         'Plus Jakarta Sans', sans-serif   /* body / UI font */
--f-display: 'Plus Jakarta Sans', sans-serif  /* large headings (700 weight) */
```

To change accent color site-wide: edit `--acid` in style.css.

---

## Fonts

Loaded from Google Fonts — **Plus Jakarta Sans** (weights 300–700 + italic 400).

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" />
```

| Variable | Family | Used on |
|----------|--------|---------|
| `--f` | `'Plus Jakarta Sans'` | All body text, nav, labels |
| `--f-display` | `'Plus Jakarta Sans'` | Hero, section headings, glitch titles |

Both variables point to the same family. Display headings are distinguished by `font-weight: 700` and larger size, not a separate typeface.

To use `--f-display` on a new heading: `font-family: var(--f-display); font-weight: 700;`

> Note: `_fonts/` still contains the original NHaasGrotesk OTF files — kept for reference, not loaded.

---

## Image Workflow

All images use WebP thumbnails for page load, originals for lightbox full-view.

**Adding images for a new work page:**

1. Save full-res original to `assets/images/works/[name].png` or `.jpg`
2. Run the conversion script (or manually convert):
   ```python
   from PIL import Image
   img = Image.open('original.png').convert('RGBA')
   img = img.resize((1200, int(h * 1200 / w)), Image.LANCZOS)  # if w > 1200
   img.save('assets/images/works/thumbs/name.webp', 'WEBP', quality=82)
   ```
3. In HTML use: `src="[../]assets/images/works/thumbs/name.webp" data-src-full="[../]assets/images/works/name.png"`
4. Lightbox JS automatically uses `data-src-full` for full-res view

---

## How to Add a New Client Page

1. Copy any existing file from `clients/` (e.g. `clients/rich-music.html`)
2. Update: page title, meta description, client name, description text
3. Add client logo WebP to `assets/images/clients/[slug].webp`
4. Add a new `<a href="clients/[slug].html" class="client-logo-cell">` in `index.html` under `#clients`
5. The clients grid is `repeat(4, 1fr)` — 8 cells fills 2 rows evenly (last cell is the CTA)

---

## How to Add a New Work/Project Page

1. Copy any existing file from `works/` (e.g. `works/smoked-house.html`)
2. Update: page title, meta, `.page-header` back links, hero image, meta-row, description, detail-grid
3. Update prev/next `work-nav` links in the new page AND adjacent pages
4. Add WebP thumb + original to `assets/images/works/` and `thumbs/` (see Image Workflow above)
5. Add `<a href="works/[slug].html" class="proj-card">` to the relevant category page

---

## PDF Portfolio

The PDF (700MB) is hosted on Google Drive — too large to serve locally.
Button in `index.html` links to: `https://drive.google.com/file/d/1W74Sz7W2R5M_N06_PuA6Hgq8OUAG95_E/view`

The original PDF file is in `_archive/` — do not rename or delete it.

---

## Lightbox

Managed in `assets/js/main.js`. Supports:
- Click any `.detail-hero` or `.detail-grid img` to open
- Keyboard: `←` `→` to navigate, `Esc` to close
- Touch: swipe left/right to navigate (40px threshold)
- Uses `data-src-full` attribute for full-res image; falls back to `src` if absent

---

## How to Migrate to Astro (Future)

When ready to scale:

1. `npm create astro@latest` in a new folder
2. Each `.html` page → `src/pages/[name].astro`
3. `assets/css/style.css` → `src/styles/global.css`, imported in layout
4. `assets/js/main.js` → `src/scripts/main.js`, loaded in layout `<script>`
5. Nav + footer → `src/components/Nav.astro` + `src/components/Footer.astro`
6. Work/client data → `src/data/works.json` + `src/data/clients.json`
7. Images → keep WebP thumbs in `public/images/works/thumbs/`, originals in `public/images/works/`
8. Font `@font-face` → move to global CSS, paths update to `/fonts/`
9. All CSS tokens stay identical — no visual changes needed

---

## Troubleshooting

**Images not loading:** Check the path prefix. Pages in `clients/` and `works/` need `../assets/`. Root pages use `assets/`.

**Font not loading:** Fonts load from `../../_fonts/` relative to `assets/css/style.css`. The `_fonts/` folder must stay at repo root.

**Styles not applying:** Stylesheet link — root pages: `assets/css/style.css`. Subdirectory pages: `../assets/css/style.css`.

**Cursor not showing:** Custom cursor requires JS. Disabled on touch/mobile via `@media (max-width:600px)` — expected.

**Nav not switching color:** Sections that should trigger dark nav need `class="section-light"` (e.g. `<section id="about" class="section-light">`).

**Glitch heading wrapping:** `.glitch` uses `white-space: nowrap`. If text overflows on very small screens, reduce font-size via `clamp()` in the `@media (max-width:600px)` block in style.css.

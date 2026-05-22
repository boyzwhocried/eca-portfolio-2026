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

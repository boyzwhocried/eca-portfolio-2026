# ECA Portfolio 2026

Personal portfolio website for **Annisa Raihan Djatmiko (ECA)** — Graphic Designer & Illustrator based in Jakarta, Indonesia.

**Live:** https://penatcotta.vercel.app/

---

## About

Web version of ECA's 2026 PDF portfolio. 4 work categories, 7 client pages, 10 work detail pages — all built with vanilla HTML, CSS, and JS. No frameworks, no build tools.

---

## Stack

| | |
|---|---|
| **Languages** | HTML5, CSS3, vanilla JS (ES6+) |
| **Fonts** | Plus Jakarta Sans via Google Fonts |
| **Images** | WebP thumbnails for page load; originals for lightbox full-res |
| **Deployment** | Vercel (static) |

---

## Structure

```
eca-portfolio-2026/
├── index.html                    # Home: Hero, About, Clients, CV, Contact
├── logofolio.html                # Work category: Logofolio
├── social-media.html             # Work category: Social Media & Print
├── motion.html                   # Work category: Motion Graphics
├── illustration.html             # Work category: Illustration
│
├── clients/                      # 7 client detail pages
│   ├── suntory.html
│   ├── amber.html
│   ├── pernod-ricard.html
│   ├── sazerac.html
│   ├── makmur-bahagia.html
│   ├── rich-music.html
│   └── distorsi-keras.html
│
├── works/                        # 10 work detail pages
│   ├── smoked-house.html
│   ├── nasi-cemek.html
│   ├── suntory-social.html
│   ├── amber-social.html
│   ├── fireball-buffalo.html
│   ├── makmur-social.html
│   ├── rich-music-event.html
│   ├── distorsi-event.html
│   ├── yokocho-mural.html
│   └── character-illustration.html
│
├── assets/
│   ├── css/style.css             # All shared styles + design tokens
│   ├── js/main.js                # Cursor, scroll reveal, nav, lightbox
│   ├── favicon.svg               # Acid green blob SVG
│   ├── images/profile.webp       # ECA profile photo
│   ├── images/clients/           # Client logo files (PNG + WebP)
│   ├── images/products/          # Brand/product images (PNG + WebP)
│   └── images/works/
│       ├── *.png / *.jpg         # Full-res originals (lightbox)
│       └── thumbs/*.webp         # Thumbnails (used in <img src>)
│
├── _archive/                     # Original PDF portfolio — DO NOT EDIT
├── _ref/                         # PDF screenshot pages (visual reference)
├── _fonts/                       # Local font files (not loaded — kept for ref)
├── _source-assets/               # Original unedited client asset files
├── CLAUDE.md                     # AI session context
└── DOCS.md                       # Developer guide
```

---

## Design Tokens

```css
--dark:      #1c1c1c    /* main background */
--dark2:     #141414    /* hero / deep sections */
--light:     #f4f4f0    /* off-white (about, CV) */
--white:     #ffffff
--acid:      #ccff00    /* lime green accent */
--acid2:     #b8e800    /* lime hover */
--f:         'Plus Jakarta Sans', sans-serif
--f-display: 'Plus Jakarta Sans', sans-serif  /* 700 weight for headings */
```

All tokens live in `assets/css/style.css` under `:root`. Changing `--acid` updates the accent color site-wide.

---

## Features

- **Custom cursor** — acid green dot + lagging ring; grows on hover
- **Lightbox** — click any work image to enlarge; keyboard (`←` `→` `Esc`) and touch swipe
- **Scroll reveal** — elements fade in on scroll via IntersectionObserver
- **Nav color switch** — nav darkens/lightens when scrolling over light sections
- **Frosted nav** — backdrop-filter blur
- **Responsive** — breakpoints at 900px, 600px, 380px
- **WebP images** — 60–99% size reduction vs originals; thumbs served on page, originals loaded in lightbox
- **Vercel-ready** — `.vercelignore` strips ~1GB of source files; deploy size ~50MB

---

## Clients

| Client | Scope |
|--------|-------|
| Suntory Global Spirits | Print, layout, social media (via SAS) |
| Amber Beverage Group | Print, layout, social media (via SAS) |
| Pernod Ricard | Print, layout, social media (via SAS) |
| Sazerac (Fireball, Buffalo Trace) | Print, layout, social media (via SAS) |
| Makmur Bahagia Kemang | Layout, social media (direct) |
| Rich Music Online | Print, layout, social media, events (direct) |
| DistorsiKERAS | Events, photography (Rich Music sub-brand) |

---

## Development Notes

See **DOCS.md** for:
- How to add a new client or work page
- Image workflow (WebP conversion + thumbs)
- Astro migration path
- Troubleshooting (paths, fonts, nav, cursor)

### Path convention
- Root pages (`index.html`, `logofolio.html`, etc.): `assets/`
- Subdirectory pages (`clients/`, `works/`): `../assets/`

### Adding images
1. Save original to `assets/images/works/[name].webp` (or `.png`/`.jpg`)
2. Generate WebP thumb at `assets/images/works/thumbs/[name].webp`
3. In HTML: `src="assets/images/works/thumbs/[name].webp" data-src-full="assets/images/works/[name].webp"`

---

## Deployment

Deployed on Vercel. `.vercelignore` excludes:
- `_source-assets/` (747 MB of original client files)
- `_archive/`, `_fonts/`, `_ref/`
- Raw PNG/JPG originals in `assets/images/works/` (WebP equivalents are served instead)

---

## Future

- Custom domain
- Astro migration (when ECA wants to self-manage content)

---

## Contact

**ECA** — annisadjatmiko90@gmail.com · [WhatsApp](https://wa.me/6281372076434)

# ECA Portfolio 2026 — Project Context

Portfolio site for **Annisa Raihan Djatmiko (ECA)**, Graphic Designer / Illustrator, Jakarta.
Verrel is the developer. Site is live at https://penatcotta.vercel.app/

---

## Stack

Vanilla HTML + CSS + JS, no build tools. **Plus Jakarta Sans** (Google Fonts). Future target: **Astro**.

---

## Structure

```
index.html                        # Hero, About, Clients grid, CV, Contact
logofolio.html                    # Work category: logo design
social-media.html                 # Work category: social media & print
motion.html                       # Work category: motion graphics
illustration.html                 # Work category: illustration
clients/                          # 7 client detail pages
works/                            # 10 work detail pages
assets/css/style.css              # ALL shared styles + design tokens
assets/js/main.js                 # Cursor, scroll reveal, nav, lightbox, swipe
assets/favicon.svg                # Acid green blob SVG favicon
assets/images/profile.webp        # ECA profile photo (transparent cutout)
assets/images/clients/            # Client logos (all 7, PNG + WebP)
assets/images/products/           # Brand/product images (PNG + WebP)
assets/images/works/              # Full-res work images (for lightbox)
assets/images/works/thumbs/       # WebP thumbnails (used in <img src> on all pages)
_archive/                         # Original PDF + report — DO NOT RENAME OR DELETE
_source-assets/                   # Original client files
_ref/                             # 36 PDF screenshot pages (reference only)
_fonts/                           # Local font files (NHaasGrotesk etc — NOT loaded, kept for ref)
DOCS.md                           # Developer guide for future tinkering
docs/                             # Planning docs and specs
```

---

## Design Tokens

```css
--dark:      #1c1c1c
--dark2:     #141414
--light:     #f4f4f0
--white:     #ffffff
--acid:      #ccff00
--acid2:     #b8e800
--f:         'Plus Jakarta Sans', sans-serif
--f-display: 'Plus Jakarta Sans', sans-serif
```

---

## Image Convention

- All page images use **WebP thumbnails** (`assets/images/works/thumbs/`) as `<img src>`
- Lightbox full-res via `data-src-full` attribute pointing to original PNG/JPG/WebP
- New images: save original to `assets/images/works/`, generate WebP thumb to `thumbs/`

---

## Path Convention

- Root pages (`index.html`, `logofolio.html`, etc.): use `assets/`
- Subdirectory pages (`works/`, `clients/`): use `../assets/`
- Light sections need `class="section-light"` for nav dark-mode switch

---

## Contact

- Email: annisadjatmiko90@gmail.com
- WhatsApp: +62-813-7207-6434 → `https://wa.me/6281372076434`

---

## Hard Rules

- **Never rename or delete** `_archive/Portfolio 2026 - Annisa Raihan Djatmiko.pdf` or `_archive/Portfolio 2026 - Annisa Raihan Djatmiko Report.txt`
- New work/client items → dedicated `.html` files, not modals or accordions
- Stack upgrade → Astro (not Vite, not Next.js)
- Restructuring folders is fine — no need to ask permission


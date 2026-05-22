# ECA Portfolio 2026 — Project Context

Portfolio site for **Annisa Raihan Djatmiko (ECA)**, Graphic Designer / Illustrator, Jakarta.
Verrel is the developer building on ECA's behalf.

---

## Stack

Vanilla HTML + CSS + JS, no build tools. Google Fonts (Space Grotesk). Future target: **Astro**.

---

## Structure

```
index.html                  # Hero, About, Clients grid, CV, Contact
logofolio.html              # Work category: logo design
social-media.html           # Work category: social media & print
motion.html                 # Work category: motion graphics
illustration.html           # Work category: illustration
clients/                    # 7 client detail pages
works/                      # 10 work detail pages
assets/css/style.css        # ALL shared styles + design tokens
assets/js/main.js           # Cursor, scroll reveal, nav color switch
assets/images/profile.jpg   # ECA selfie
assets/images/clients/      # Client logos (rich-music.png, distorsi-keras.png)
assets/images/works/        # 45 work images
_archive/                   # Original PDF + report — DO NOT RENAME OR DELETE
_source-assets/             # Original client files (renamed from Links/)
_ref/                       # 36 PDF screenshot pages (reference only)
DOCS.md                     # How-to guide for future tinkering
```

---

## Design Tokens

```css
--dark:  #1c1c1c
--dark2: #141414
--light: #f4f4f0
--white: #ffffff
--acid:  #ccff00
--acid2: #b8e800
--f: 'Space Grotesk', sans-serif
```

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

# goallll Landing Page Variations

Static marketing site with **10 distinct landing page designs** for the **goallll** iOS app (World Cup live scores). Use the gallery to compare variations, then deploy your chosen design to production.

## Quick start

```bash
cd landing
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) for the variation gallery.

Build for production:

```bash
npm run build
npm run preview
```

Output is written to `dist/`. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Project structure

```
landing/
├── index.html              # Variation gallery / picker
├── src/
│   ├── css/                # tokens.css, gallery.css, shared.css
│   ├── js/                 # gallery.js, copy-loader.js
│   ├── img/                # App screenshots 1.png–6.png
│   └── shared/
│       ├── copy.json       # All marketing copy (single source of truth)
│       └── head-meta.html  # Reusable <head> partial reference
└── variations/
    ├── 01-classic-sports/
    ├── 02-minimal-editorial/
    … (10 total)
```

Each variation folder contains `index.html`, `styles.css`, and `script.js`. Copy is loaded at runtime from `src/shared/copy.json`.

## Replacing URLs and contact info

Edit **`src/shared/copy.json`**:

| What | Where in `copy.json` |
|------|----------------------|
| **App Store URL** | `footerLinks` → entry with `"label": "App Store"` → set `"href"` |
| **Privacy Policy URL** | `footerLinks` → entry with `"label": "Privacy Policy"` → set `"href"` |
| **Support email/URL** | `footerLinks` → entry with `"label": "Support"` → set `"href"` (e.g. `mailto:support@example.com`) |

All `.app-store-btn` and variation-specific CTA buttons read the App Store link from that file via `copy-loader.js`.

You can also paste meta tags from `src/shared/head-meta.html` into each variation’s `<head>` when customizing SEO.

## Image mapping

Put App Store screenshots in **`../src/img/`** at the repo root (recommended size ~1016×2062 or similar phone aspect):

| File | Caption / alt text |
|------|-------------------|
| `1.png` | Follow every match in real time with live score | `/src/img/1.png` |
| `2.png` | Browse the full tournament calendar day by day |
| `3.png` | Track group tables and qualification zones |
| `4.png` | Dive into lineup |
| `5.png` | Pick your nation to get personalized feed of fixtures |
| `6.png` | Dive into lineup and head-to-head stats for every match |

`npm run dev` and `npm run build` automatically copy `../src/img/*.png` into the landing site. You can also edit files directly in `landing/public/src/img/` for a quick test.

## Variations overview

| # | Folder | Style |
|---|--------|-------|
| 01 | `01-classic-sports` | Bold sports poster, strong contrast |
| 02 | `02-minimal-editorial` | Whitespace, serif/sans pairing |
| 03 | `03-glass-ios` | Frosted cards, soft gradients, iOS-like |
| 04 | `04-dark-premium` | Dark theme, neon accents |
| 05 | `05-split-hero` | Left copy, sticky phone mockup right |
| 06 | `06-timeline-story` | Vertical scroll narrative |
| 07 | `07-feature-grid` | 2×3 feature cards with screenshots |
| 08 | `08-world-cup-campaign` | Tournament / event campaign |
| 09 | `09-fan-emotional` | National-team fan tone |
| 10 | `10-conversion-cta` | CTA-heavy, pricing above fold |

## Selecting a variation for production

1. Run `npm run dev` and open the gallery at `/`.
2. Review all 10 designs (filter by Light / Dark / CTA-focused).
3. Pick a winner (or combine ideas from multiple).
4. **Option A — Single page deploy:** Copy the chosen `variations/XX-name/` folder plus `src/` to your web root. Ensure `copy.json` and images remain at `src/shared/` and `src/img/` relative to the page.
5. **Option B — Vite build:** Run `npm run build`. Vite emits all pages under `dist/`. Point your domain to `dist/variations/XX-name/index.html` or move that build output to your site root.
6. Update `copy.json` with real App Store, Privacy, and Support links before go-live.

## Brand colors

- Brand red: `#FF383C`
- Deep blue CTA: `#0052C7`
- Accent blue: `#3B7DD9`
- Backgrounds: `#FFFFFF`, `#F5F7FA`, `#0B1220`

## Compliance notes

- Does not claim official FIFA affiliation or “#1 app” status.
- Does not advertise push notifications.
- Pricing includes Apple-required auto-renew and cancellation language.

## License

Part of the [worldcuptrackerapp](https://github.com/mdo91/worldcuptrackerapp) repository.

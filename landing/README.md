# goallll Landing Page

Production marketing site for the **goallll** iOS app (World Cup live scores). Dark Premium theme — dark background, neon red/blue accents.

## Quick start

```bash
cd landing
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Project structure

```
landing/
├── index.html          # Production landing page
├── styles.css          # Dark Premium page styles
├── script.js           # Copy loader + CTA wiring
└── src/
    ├── css/            # tokens.css, shared.css
    ├── js/             # copy-loader.js
    ├── img/            # Synced from repo root on build
    └── shared/
        ├── copy.json   # All marketing copy
        └── head-meta.html
```

## Replacing URLs and contact info

Edit **`src/shared/copy.json`**:

| What | Where in `copy.json` |
|------|----------------------|
| **App Store URL** | `footerLinks` → `"App Store"` → `"href"` |
| **Privacy Policy URL** | `footerLinks` → `"Privacy Policy"` → `"href"` |
| **Support email/URL** | `footerLinks` → `"Support"` → `"href"` |

## Screenshots

Put App Store screenshots in **`../src/img/`** at the repo root (`1.png`–`6.png`). `npm run dev` and `npm run build` copy them into `public/src/img/` automatically.

| File | Caption / alt text |
|------|-------------------|
| `1.png` | Follow every match in real time with live score |
| `2.png` | Browse the full tournament calendar day by day |
| `3.png` | Track group tables and qualification zones |
| `4.png` | Dive into lineup |
| `5.png` | Pick your nation to get personalized feed of fixtures |
| `6.png` | Dive into lineup and head-to-head stats for every match |

## Brand colors

- Brand red: `#FF383C`
- Deep blue CTA: `#0052C7`
- Accent blue: `#3B7DD9`
- Background: `#0B1220`

## Compliance

- Does not claim official FIFA affiliation or “#1 app” status.
- Does not advertise push notifications.
- Pricing includes Apple-required auto-renew and cancellation language.

## License

Part of the [worldcuptrackerapp](https://github.com/mdo91/worldcuptrackerapp) repository.

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

Deploy the `dist/` folder to any static host, or use **GitHub Pages** (configured in this repo — see below).

## GitHub Pages + custom domain (`worldcuptrackerapp.com`)

This repo deploys automatically on every push to `main` via [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml).

### 1. Enable GitHub Pages (one-time)

1. Open **GitHub → repo → Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from branch”)
   - If set to **main / (root)**, the site will show the repo README instead of the landing page
3. Under **Custom domain**, enter: `worldcuptrackerapp.com`
4. Enable **Enforce HTTPS**

The domain is declared in [`public/CNAME`](public/CNAME) and copied into the build output.

### 2. DNS at your registrar

Point **worldcuptrackerapp.com** to GitHub Pages.

**Apex domain** (`worldcuptrackerapp.com`) — add **four A records**:

| Type | Name / Host | Value |
|------|-------------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Optional `www` subdomain** — add a **CNAME record**:

| Type | Name / Host | Value |
|------|-------------|-------|
| CNAME | `www` | `mdo91.github.io` |

Then in GitHub Pages settings, set the primary domain to `worldcuptrackerapp.com` (recommended) so `www` redirects to apex.

### 3. Verify

- Actions tab: workflow **Deploy landing to GitHub Pages** should be green
- Visit [https://worldcuptrackerapp.com](https://worldcuptrackerapp.com) after DNS propagates (often 15–60 minutes, up to 48 hours)

### Manual deploy (alternative)

```bash
cd landing
npm run build
# upload dist/ to any static host
```


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

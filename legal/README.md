# goallll Legal Pages

Static **Privacy Policy** and **Terms of Use** for the goallll iOS app. Deployed alongside the marketing site at:

| Page | URL |
|------|-----|
| Privacy Policy | https://worldcuptrackerapp.com/privacy/ |
| Terms of Use | https://worldcuptrackerapp.com/terms/ |
| Legal hub | https://worldcuptrackerapp.com/legal/ |

## Customize before App Store submission

Replace these placeholders in `privacy/index.html` and `terms/index.html`:

| Placeholder | Example |
|-------------|---------|
| `[COMPANY_NAME]` | Your legal entity name |
| `[CONTACT_EMAIL]` | `support@worldcuptrackerapp.com` |
| `[WEBSITE_DOMAIN]` | `worldcuptrackerapp.com` |
| `[COUNTRY/JURISDICTION]` | e.g. `Netherlands` or `State of Delaware, USA` |
| `[EFFECTIVE_DATE]` | Official effective date |

**Have a qualified attorney review** both documents before submission. Drafts include a visible disclaimer.

## Local preview

Legal pages are copied into `landing/public/` when you run the landing site:

```bash
cd landing
npm run dev
```

Then open:

- http://localhost:5173/privacy/
- http://localhost:5173/terms/

## Deployment

The landing GitHub Actions workflow (`/.github/workflows/deploy-pages.yml`) builds `landing/` and publishes `dist/`, which includes `/privacy/` and `/terms/` after `npm run predev` copies files from this folder.

## iOS app integration

After deploy, update these files in the **iOS project** (paths relative to Xcode project):

### 1. `football score/Views/Privacy/AnalyticsConsentConfiguration.swift`

```swift
static let privacyPolicyURL = URL(string: "https://worldcuptrackerapp.com/privacy/")!
```

### 2. `football score/Views/Tabs/SettingsView.swift`

Ensure Settings → Privacy section links to:

- Privacy Policy: `https://worldcuptrackerapp.com/privacy/`
- Terms of Use: `https://worldcuptrackerapp.com/terms/`

### 3. Paywall footer (`PaywallSupport.swift` / `PaywallFooter`)

Add or verify footer links:

- Terms of Use: `https://worldcuptrackerapp.com/terms/`
- Privacy Policy: `https://worldcuptrackerapp.com/privacy/`

### 4. App Store Connect

| Field | URL |
|-------|-----|
| Privacy Policy URL | `https://worldcuptrackerapp.com/privacy/` |
| Terms of Use (EULA) | `https://worldcuptrackerapp.com/terms/` *or* Apple Standard EULA if you prefer |

Ensure **App Privacy** questionnaire answers match the Privacy Policy (optional Firebase Analytics, on-device preferences, StoreKit entitlements, no tracking).

## Structure

```
legal/
├── index.html          # Hub linking to both documents
├── privacy/index.html  # Privacy Policy
├── terms/index.html    # Terms of Use (EULA)
├── src/css/legal.css
├── src/js/legal.js     # TOC smooth scroll + print (optional)
└── partials/           # Header/footer copy-paste reference
```

## Compliance notes (current app behavior)

Documented accurately in both pages:

- Optional analytics (Firebase) with in-app opt-in/opt-out
- No push notifications, accounts, location, or cross-app tracking
- $1.99/month subscription with 3-day trial (eligible users)
- Apple handles payments; full auto-renew disclosure in Terms
- Not affiliated with FIFA / official tournament organizers

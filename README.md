# Tayrona Catering — Web Foundation (Release 01)

Production web foundation for **Tayrona Catering** (Toronto & Greater Toronto Area), engineered with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## 1. Architecture & Content Separation

Business content is strictly decoupled from visual React components:

- `src/types/content.ts` — Core content interfaces (`MediaAsset`, `Category`, `Product`, `ServiceOffering`, `Special`, `Festival`, `FAQ`, `PageDefinition`, `SiteConfig`).
- `src/types/commerce.ts` — Order/Quote request contracts and prepared domain interfaces for Release 02+ (`Cart`, `CartItem`, `Order`, `Payment`, `PaymentAttempt` for Square, `DeliveryZone`, `TimeSlot`, `Availability`, `EventBooking`).
- `src/content/` — Structured data modules (`media.ts`, `products.ts`, `categories.ts`, `services.ts`, `festivals.ts`, `faqs.ts`, `site.ts`, and selector API in `index.ts`).
- `src/components/` — Reusable editorial UI system (`Header`, `MobileNavigation`, `Footer`, `HeroSection`, `SectionHeader`, `ProductCard`, `ProductGrid`, `ServiceFeature`, `CulinaryHighlightsSection`, `FestivalBanner`, `FAQAccordion`, `CTASection`, `QuoteForm`, `ContactBlock`, and `CuratedImage`).

## 2. Development & Technical Verification

```bash
npm run dev        # Start local development server
npm run lint       # Run ESLint verification
npm run typecheck  # Run TypeScript compiler check (tsc --noEmit)
npm run build      # Create optimized production build
```

## 3. Deployment (Hostinger Node.js Web App)

The site is a Next.js **server** application; static export (`out/`) is not supported, because upcoming Square payments, checkout and quote handling need server-side routes.

| Setting | Value |
|---|---|
| Repository / branch | `Jd1278/TayronaWeb` — `staging` (testing), `main` (production) |
| Node.js | 20.x or 22.x (minimum 20.9) |
| Root directory | repository root (the folder containing `package.json`) |
| Install | `npm install` |
| Build | `npm run build` |
| Start | `npm run start` (listens on the `PORT` provided by the host) |

Never commit `.env*` files; configure secrets (e.g. future Square keys) in the hosting panel.

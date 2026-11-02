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

## 3. Deployment Guide: Hostinger & Vercel

### Option A — Hostinger with Node.js Web App Support (or Vercel)
1. Connect the GitHub repository (`feature/tayrona-web-foundation` or `main`).
2. Build command: `npm run build`
3. Start command: `npm run start`
4. Node.js version: `20.x` or `22.x+`

### Option B — Hostinger Shared / Static Hosting (`out/` Directory)
If the target Hostinger plan does not run a persistent Node.js server, generate a full static export without changing application code:

```bash
# PowerShell
$env:NEXT_OUTPUT_MODE="export"; npm run build
```

This produces a self-contained static bundle inside `out/` ready to upload to Hostinger `public_html/`.

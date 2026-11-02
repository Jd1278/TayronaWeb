export interface HomeBrandMarqueeItem {
  id: string;
  label: string;
  logoSrc?: string;
  logoAlt?: string;
}

export interface HomeCircularCategoryItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  mediaId: string;
}

export interface HomeServiceCardItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  mediaId: string;
}

export const HOME_HERO_CONFIG = {
  mediaId: "hero-banner-index",
  headline: "It’s more than simply food it's an experience",
  ctaLabel: "ORDER ONLINE",
  ctaHref: "/graze-boxes",
} as const;

/**
 * Brand / Hospitality Marquee Configuration
 * Prepared for confirmed external client brands/logos (`CONFIRMED_CLIENT_BRANDS`)
 * without inventing unverified client names. While external client logos are pending
 * confirmation, the marquee renders Tayrona's verified Toronto/GTA hospitality pillars.
 */
export const CONFIRMED_CLIENT_BRANDS: HomeBrandMarqueeItem[] = [];

export const HOME_HOSPITALITY_MARQUEE_ITEMS: HomeBrandMarqueeItem[] = [
  {
    id: "marquee-1",
    label: "Tayrona Catering Toronto & GTA",
  },
  {
    id: "marquee-2",
    label: "Corporate Boardroom & Office Hospitality",
  },
  {
    id: "marquee-3",
    label: "Artisanal Graze Boxes",
  },
  {
    id: "marquee-4",
    label: "Bespoke Grazing Tables",
  },
  {
    id: "marquee-5",
    label: "Private Receptions & Milestones",
  },
  {
    id: "marquee-6",
    label: "Food Truck on Wheels Charter",
  },
  {
    id: "marquee-7",
    label: "Toronto & GTA Festivals",
  },
];

export const HOME_CIRCULAR_CATEGORIES: HomeCircularCategoryItem[] = [
  {
    id: "cat-circle-graze-boxes",
    title: "Graze Boxes",
    subtitle: "Fixed-Price Artisanal Boxes",
    href: "/graze-boxes",
    mediaId: "charcuterie-celebration",
  },
  {
    id: "cat-circle-catering",
    title: "Catering",
    subtitle: "Grazing Tables & Spreads",
    href: "/catering",
    mediaId: "catering-grazing-table-hd",
  },
  {
    id: "cat-circle-food-truck",
    title: "Food Truck",
    subtitle: "Mobile Kitchen Charter",
    href: "/food-truck",
    mediaId: "food-truck-banner-hero",
  },
  {
    id: "cat-circle-festivals",
    title: "Festivals",
    subtitle: "Pop-Ups & Where We'll Be",
    href: "/festivals",
    mediaId: "catering-empanadas-hd",
  },
  {
    id: "cat-circle-lunches",
    title: "Lunches",
    subtitle: "Executive Sandwiches & Bowls",
    href: "/catering#sub-corporate-lunches",
    mediaId: "catering-lunch-turkey-hd",
  },
  {
    id: "cat-circle-desserts",
    title: "Desserts",
    subtitle: "Sweet Finishes & Pastries",
    href: "/catering#sub-buffets",
    mediaId: "catering-dessert-poundcake-hd",
  },
];

export const HOME_MAIN_SERVICE_CARDS: HomeServiceCardItem[] = [
  {
    id: "home-card-catering",
    eyebrow: "01 · Bespoke Spreads & Grazing Tables",
    title: "Catering",
    description:
      "Multi-layered wooden grazing tables, executive corporate lunches, and warm buffet spreads styled for offices and gatherings across Toronto & the GTA.",
    ctaLabel: "Explore Catering",
    href: "/catering",
    mediaId: "",
  },
  {
    id: "home-card-food-truck",
    eyebrow: "02 · Mobile Culinary Kitchen",
    title: "Food Truck",
    description:
      "Charter the Tayrona Catering Food Truck on Wheels for private venues, company outdoor celebrations, and live on-site culinary service.",
    ctaLabel: "Explore Food Truck",
    href: "/food-truck",
    mediaId: "food-truck-banner-hero",
  },
  {
    id: "home-card-events",
    eyebrow: "03 · Receptions & Celebrations",
    title: "Events",
    description:
      "Handcrafted hors d'oeuvres, golden croquetas, empanadas, and curated reception tables tailored to private milestones and brand activations.",
    ctaLabel: "Explore Events",
    href: "/catering#sub-private-catering",
    mediaId: "catering-event-platters-hd",
  },
  {
    id: "home-card-graze-boxes",
    eyebrow: "04 · Ready-to-Serve Collection",
    title: "Graze Boxes",
    description:
      "Four signature charcuterie and artisanal cheese boxes crafted fresh to order for intimate evenings, gifts, and effortless hosting.",
    ctaLabel: "Order Graze Boxes",
    href: "/graze-boxes",
    mediaId: "banner-charcuteria-hd",
  },
];

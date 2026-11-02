export type MediaCategory =
  | "HERO"
  | "CHARCUTERIE"
  | "CATERING"
  | "CORPORATE"
  | "FOOD_TRUCK"
  | "EVENTS"
  | "DESSERTS"
  | "FESTIVALS"
  | "BRAND"
  | "GENERAL";

export type MediaOrientation = "portrait" | "landscape" | "square";

export interface MediaAsset {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  orientation: MediaOrientation;
  category: MediaCategory;
  /**
   * Intentional CSS object-position and scale treatment to ensure clean editorial framing
   * (e.g., hiding top clutter on signature-graze.jpeg or bottom-right AI watermarks on specific platillos).
   */
  objectPosition?: string;
  scaleClass?: string;
  maxRenderWidthPx?: number;
  notes?: string;
}

export type FulfillmentModel = "direct_order_future" | "custom_quote";

export interface Category {
  id: string;
  name: string;
  slug: string;
  eyebrow: string;
  description: string;
  heroMediaId: string;
  fulfillmentModel: FulfillmentModel;
  sortOrder: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  priceCAD: number;
  currency: "CAD";
  primaryMediaId: string;
  galleryMediaIds: string[];
  featured: boolean;
  available: boolean;
  fulfillmentModel: FulfillmentModel;
  ctaLabel: string;
  /**
   * Confirmed attributes only. Unconfirmed specs (exact headcount, full ingredient list, allergens)
   * remain explicitly optional / undefined until confirmed by the business owner.
   */
  confirmedHighlights: string[];
  pendingSpecificationsNote: string;
  sortOrder: number;
}

export interface ServiceOffering {
  id: string;
  name: string;
  slug: string;
  eyebrow: string;
  shortSummary: string;
  editorialDescription: string;
  subServices: {
    id: string;
    title: string;
    description: string;
    mediaId?: string;
  }[];
  primaryMediaId: string;
  secondaryMediaIds: string[];
  serviceArea: string;
  fulfillmentModel: "custom_quote";
  ctaLabel: string;
  inquiryServiceKey: string;
  sortOrder: number;
}

export interface Special {
  id: string;
  title: string;
  slug: string;
  occasion: string;
  description: string;
  mediaId: string;
  status: "upcoming" | "available_for_inquiry" | "archived";
  featured: boolean;
  ctaLabel: string;
}

export interface Festival {
  id: string;
  name: string;
  slug: string;
  dateLabel?: string;
  month?: string;
  year?: number;
  startDate?: string;
  endDate?: string;
  location: string;
  cityArea: string;
  status: "upcoming" | "active" | "past" | "schedule_pending";
  description: string;
  mediaId: string;
  featured: boolean;
  isPublished: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "graze-boxes" | "catering" | "food-truck" | "general";
  sortOrder: number;
}

export interface PageDefinition {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroMediaId?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  legalArea: string;
  tagline: string;
  editorialStatement: string;
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    instagramHandle: string;
    instagramUrl: string;
    serviceArea: string;
  };
  navigation: NavigationItem[];
  primaryCta: {
    label: string;
    href: string;
  };
}

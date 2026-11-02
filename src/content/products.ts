import type { Product } from "@/types/content";

/**
 * Confirmed Graze Box Products & Prices (Ordered by Price Ascending):
 * 1. Tayrona Grazing Cup — $18 CAD
 * 2. The Mini Feast — $39 CAD
 * 3. The Party Starter — $150 CAD
 * 4. The Gathering Spread — $170 CAD
 * 5. The Good Times Spread — $320 CAD
 * 6. Tayrona Board — $400 CAD
 */
export const PRODUCTS: Product[] = [
  {
    id: "prod-tayrona-grazing-cup",
    name: "Tayrona Grazing Cup",
    slug: "tayrona-grazing-cup",
    categoryId: "cat-graze-boxes",
    priceCAD: 18,
    currency: "CAD",
    primaryMediaId: "charcuterie-grazing-cup",
    galleryMediaIds: [
      "grazing-cup-1",
      "grazing-cup-2",
      "grazing-cup-3",
      "grazing-cup-4",
      "grazing-cup-5",
      "grazing-cup-6",
    ],
    featured: true,
    available: true,
    fulfillmentModel: "direct_order_future",
    ctaLabel: "Request This Box",
    confirmedHighlights: [
      "Individual handheld charcuterie presentation",
      "Cured meat & cheese skewers with fruit accompaniments",
      "Perfect for corporate receptions, mixers and activations",
    ],
    pendingSpecificationsNote:
      "Order quantities and minimum counts can be arranged upon order request.",
    sortOrder: 1,
  },
  {
    id: "prod-personal-graze-box",
    name: "The Mini Feast",
    slug: "personal-graze-box",
    categoryId: "cat-graze-boxes",
    priceCAD: 39,
    currency: "CAD",
    primaryMediaId: "charcuterie-personal",
    galleryMediaIds: ["charcuterie-personal", "charcuterie-date-night"],
    featured: true,
    available: true,
    fulfillmentModel: "direct_order_future",
    ctaLabel: "Request This Box",
    confirmedHighlights: [
      "Artisanal cured meats & sliced cheeses",
      "Fresh seasonal fruits, berries & figs",
      "Hand-styled presentation",
    ],
    pendingSpecificationsNote:
      "Specific dietary accommodations and order quantities can be noted during your order request.",
    sortOrder: 2,
  },
  {
    id: "prod-the-gathering-box",
    name: "The Party Starter",
    slug: "the-gathering-box",
    categoryId: "cat-graze-boxes",
    priceCAD: 150,
    currency: "CAD",
    primaryMediaId: "charcuterie-gathering",
    galleryMediaIds: ["charcuterie-gathering", "charcuterie-celebration", "charcuterie-signature"],
    featured: true,
    available: true,
    fulfillmentModel: "direct_order_future",
    ctaLabel: "Request This Box",
    confirmedHighlights: [
      "Generous wooden tray presentation",
      "Artisanal cured meats, cheeses & fruit preserve",
      "Fresh grapes, berries, figs & crackers",
    ],
    pendingSpecificationsNote:
      "Ideal for sharing at small gatherings or meetings; confirm availability and date via order request.",
    sortOrder: 3,
  },
  {
    id: "prod-date-night-graze-box",
    name: "The Gathering Spread",
    slug: "date-night-graze-box",
    categoryId: "cat-graze-boxes",
    priceCAD: 170,
    currency: "CAD",
    primaryMediaId: "charcuterie-date-night",
    galleryMediaIds: ["charcuterie-date-night", "charcuterie-personal"],
    featured: true,
    available: true,
    fulfillmentModel: "direct_order_future",
    ctaLabel: "Request This Box",
    confirmedHighlights: [
      "Curated selection of cured meats & cheeses",
      "Paired with crackers, fresh grapes & berries",
      "Includes signature dipping accompaniments",
    ],
    pendingSpecificationsNote:
      "Specific dietary accommodations and preferred date can be confirmed with our team upon request.",
    sortOrder: 4,
  },
  {
    id: "prod-the-celebration-box",
    name: "The Good Times Spread",
    slug: "the-celebration-box",
    categoryId: "cat-graze-boxes",
    priceCAD: 320,
    currency: "CAD",
    primaryMediaId: "charcuterie-celebration",
    galleryMediaIds: ["charcuterie-celebration", "charcuterie-signature", "charcuterie-gathering"],
    featured: true,
    available: true,
    fulfillmentModel: "direct_order_future",
    ctaLabel: "Request This Box",
    confirmedHighlights: [
      "Statement wooden tray for hosting & celebrations",
      "Expanded variety of cured meats & specialty cheeses",
      "Dual fruit preserves, fresh berries, grapes, figs & crackers",
    ],
    pendingSpecificationsNote:
      "Our largest signature graze box; custom event quantities or full grazing table upgrades available by quote.",
    sortOrder: 5,
  },
  {
    id: "prod-tayrona-board",
    name: "Tayrona Board",
    slug: "tayrona-board",
    categoryId: "cat-graze-boxes",
    priceCAD: 400,
    currency: "CAD",
    primaryMediaId: "charcuterie-tayrona-board",
    galleryMediaIds: ["charcuterie-tayrona-board", "charcuterie-celebration"],
    featured: true,
    available: true,
    fulfillmentModel: "direct_order_future",
    ctaLabel: "Request This Box",
    confirmedHighlights: [
      "Premium luxury live-edge wooden board centerpiece",
      "Master selection of imported cured meats & artisan cheeses",
      "Lush fresh berries, grapes, honeycomb, nuts, crackers & artisan preserves",
    ],
    pendingSpecificationsNote:
      "Our ultimate signature grazing centerpiece; tailored styling, dietary preferences, and event delivery are coordinated with our culinary team.",
    sortOrder: 6,
  },
];

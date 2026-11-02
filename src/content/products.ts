import type { Product } from "@/types/content";

/**
 * Confirmed Graze Box Products & Prices (Updated):
 * - The Mini Feast (formerly Personal Graze Box) — $39 CAD
 * - The Gathering Spread (formerly Date Night Graze Box) — $170 CAD
 * - The Party Starter (formerly The Gathering Box) — $150 CAD
 * - The Good Times Spread (formerly The Celebration Box) — $320 CAD
 * - Tayrona Grazing Cup (new) — $18 CAD
 */
export const PRODUCTS: Product[] = [
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
    sortOrder: 1,
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
    sortOrder: 4,
  },
  {
    id: "prod-tayrona-grazing-cup",
    name: "Tayrona Grazing Cup",
    slug: "tayrona-grazing-cup",
    categoryId: "cat-graze-boxes",
    priceCAD: 18,
    currency: "CAD",
    primaryMediaId: "charcuterie-grazing-cup",
    galleryMediaIds: ["charcuterie-grazing-cup"],
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
    sortOrder: 5,
  },
];

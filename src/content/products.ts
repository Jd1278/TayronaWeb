import type { Product } from "@/types/content";

/**
 * Confirmed Graze Box Products & Prices (Section 12):
 * - Personal Graze Box — $39 CAD
 * - Date Night Graze Box — $59 CAD
 * - The Gathering Box — $95 CAD
 * - The Celebration Box — $130 CAD
 *
 * Strict Rule: No invented headcounts, weight claims, or unverified dietary promises.
 */
export const PRODUCTS: Product[] = [
  {
    id: "prod-personal-graze-box",
    name: "Personal Graze Box",
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
    name: "Date Night Graze Box",
    slug: "date-night-graze-box",
    categoryId: "cat-graze-boxes",
    priceCAD: 59,
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
    name: "The Gathering Box",
    slug: "the-gathering-box",
    categoryId: "cat-graze-boxes",
    priceCAD: 95,
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
    name: "The Celebration Box",
    slug: "the-celebration-box",
    categoryId: "cat-graze-boxes",
    priceCAD: 130,
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
];

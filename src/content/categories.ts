import type { Category } from "@/types/content";

export const CATEGORIES: Category[] = [
  {
    id: "cat-graze-boxes",
    name: "Signature Graze Boxes",
    slug: "graze-boxes",
    eyebrow: "Fixed-Price Collection • CAD",
    description:
      "Artisanal charcuterie boxes and boards arranged with cured meats, cheeses, fresh fruits, and accompaniments—ready to request for personal enjoyment, gifting, or hosting.",
    heroMediaId: "charcuterie-celebration",
    fulfillmentModel: "direct_order_future",
    sortOrder: 1,
  },
  {
    id: "cat-catering-grazing",
    name: "Catering & Grazing Tables",
    slug: "catering",
    eyebrow: "Custom Proposal • Toronto / GTA",
    description:
      "Corporate catering, private event menus, multi-tiered grazing tables, executive sandwich platters, hors d'oeuvres, and warm buffets tailored to your guest count.",
    heroMediaId: "event-spread-1",
    fulfillmentModel: "custom_quote",
    sortOrder: 2,
  },
  {
    id: "cat-food-truck",
    name: "Food Truck on Wheels",
    slug: "food-truck",
    eyebrow: "Mobile Kitchen • Custom Booking",
    description:
      "On-site mobile catering for private celebrations, corporate activations, and regional festivals throughout Toronto and the Greater Toronto Area.",
    heroMediaId: "food-truck-exterior",
    fulfillmentModel: "custom_quote",
    sortOrder: 3,
  },
];

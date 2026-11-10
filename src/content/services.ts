import type { ServiceOffering } from "@/types/content";

export const SERVICES: ServiceOffering[] = [
  {
    id: "srv-catering",
    name: "Catering & Grazing Hospitality",
    slug: "catering",
    eyebrow: "Corporate • Private • Grazing Tables",
    shortSummary:
      "Bespoke menus and styled tables for office meetings, milestone celebrations, and private receptions across Toronto and the GTA.",
    editorialDescription:
      "Tayrona Catering approaches every gathering as a complete sensory table. From multi-foot artisanal grazing tables to executive sandwich platters, handcrafted hors d'oeuvres, and warm buffets, each menu is tailored to the scale and rhythm of your event.",
    subServices: [
      {
        id: "sub-corporate-catering",
        title: "Corporate Catering",
        description:
          "Tailored catering for boardroom meetings, team appreciations, brand activations, and office gatherings in Toronto and the GTA.",
        mediaId: "event-rice-bowls",
      },
      {
        id: "sub-private-catering",
        title: "Private Catering",
        description:
          "Personalized dining and styled reception spreads crafted for intimate milestones, family celebrations, and private parties.",
        mediaId: "event-spread-1",
      },
      {
        id: "sub-grazing-tables",
        title: "Grazing Tables",
        description:
          "Abundant, multi-layered charcuterie and cheese installations styled directly on-site as the visual centerpiece of your event.",
        mediaId: "event-grazing-table",
      },
      {
        id: "sub-corporate-lunches",
        title: "Corporate Lunches",
        description:
          "Artisanal sandwiches on focaccia, seeded, and multigrain breads—including turkey, cured meats, chicken, and plant-based selections.",
        mediaId: "catering-sandwich-salami",
      },
      {
        id: "sub-hors-doeuvres",
        title: "Hors d'oeuvres",
        description:
          "Handcrafted bite-sized selections including golden croquetas with aioli, beef empanadas, brioche sliders, and plated appetizers.",
        mediaId: "event-croquetas",
      },
      {
        id: "sub-buffets",
        title: "Buffets & Warm Entrées",
        description:
          "Complete hot buffet presentations, signature seasoned rice bowls, roasted meats in savory sauces, and individual dessert cups.",
        mediaId: "event-full-table",
      },
    ],
    primaryMediaId: "event-spread-1",
    secondaryMediaIds: [
      "event-grazing-table",
      "event-croquetas",
      "event-full-table",
      "event-olive-board",
    ],
    serviceArea: "Toronto / GTA",
    fulfillmentModel: "custom_quote",
    ctaLabel: "Request a Catering Quote",
    inquiryServiceKey: "corporate_catering",
    sortOrder: 1,
  },
  {
    id: "srv-food-truck",
    name: "Food Truck on Wheels & Festivals",
    slug: "food-truck",
    eyebrow: "Mobile Culinary Experience • Toronto / GTA",
    shortSummary:
      "Surprise your guests with the Tayrona Catering Food Truck—serving freshly prepared street-inspired gourmet dishes live at your venue.",
    editorialDescription:
      "Our black mobile kitchen brings the energy of a live culinary station directly to private parties, corporate outdoor gatherings, and regional food festivals across Toronto and the Greater Toronto Area. Every booking is customized to your event schedule and guest count.",
    subServices: [
      {
        id: "sub-private-truck-charter",
        title: "Private Event Bookings",
        description:
          "Bring our Food Truck on Wheels to outdoor celebrations, backyard milestones, and private venues across the GTA.",
        mediaId: "food-truck-exterior",
      },
      {
        id: "sub-corporate-truck",
        title: "Corporate & Team Events",
        description:
          "An engaging mobile dining experience for company picnics, client appreciation days, and on-site team celebrations.",
        mediaId: "food-truck-burger",
      },
      {
        id: "sub-festival-presence",
        title: "GTA Festivals & Pop-Ups",
        description:
          "Catch Tayrona Catering serving gourmet burgers and street-inspired favorites at regional festivals across Toronto and the GTA.",
        mediaId: "food-truck-exterior",
      },
    ],
    primaryMediaId: "food-truck-exterior",
    secondaryMediaIds: ["food-truck-burger"],
    serviceArea: "Toronto / GTA",
    fulfillmentModel: "custom_quote",
    ctaLabel: "Request Food Truck Quote",
    inquiryServiceKey: "food_truck_booking",
    sortOrder: 2,
  },
];

export const CULINARY_HIGHLIGHTS = [
  {
    id: "highlight-croquetas",
    eyebrow: "01 · Event Catering",
    title: "Handcrafted Croquetas & Hors d'oeuvres",
    category: "Event Catering",
    description:
      "Golden house-made croquetas, artisanal bruschetta, and bite-sized canapés styled on live-edge wooden boards for cocktail receptions and private milestones.",
    ctaLabel: "Request a Quote",
    href: "https://wa.link/vimg6x",
    mediaId: "catering-croquetas-hd",
  },
  {
    id: "highlight-grazing-table",
    eyebrow: "02 · Grazing Hospitality",
    title: "Styled Wooden Grazing Tables",
    category: "Grazing Hospitality",
    description:
      "Multi-foot grazing installations layered with imported cheeses, cured charcuterie, seasonal berries, honeycomb, nuts, and artisanal crackers.",
    ctaLabel: "Inquire About Grazing",
    href: "https://wa.link/vimg6x",
    mediaId: "catering-grazing-table-hd",
  },
  {
    id: "highlight-artisan-sandwiches",
    eyebrow: "03 · Corporate Lunches",
    title: "Artisanal Focaccia & Seeded Sandwiches",
    category: "Corporate Lunches",
    description:
      "Chef-prepared sandwich platters on seeded sourdough, multigrain, and Rosemary focaccia—labelled and boxed for executive boardrooms and team lunches.",
    ctaLabel: "Plan Office Catering",
    href: "https://wa.link/vimg6x",
    mediaId: "catering-lunch-chicken-hd",
  },
  {
    id: "highlight-vegan-sandwich",
    eyebrow: "04 · Plant-Based Selection",
    title: "Roasted Vegetable Plant-Based Selection",
    category: "Corporate Lunches",
    description:
      "Thoughtful vegan, vegetarian, and gluten-sensitive platters crafted with herb-roasted seasonal vegetables, house spreads, and vibrant greens.",
    ctaLabel: "Request Dietary Menu",
    href: "https://wa.link/vimg6x",
    mediaId: "catering-lunch-vegan-hd",
  },
  {
    id: "highlight-hot-entrees",
    eyebrow: "05 · Catering Buffets",
    title: "Warm Plated & Buffet Entrées",
    category: "Catering Buffets",
    description:
      "Complete hot catering buffets featuring pan-seared proteins, signature sauces, rosemary roasted potatoes, and seasonal market sides.",
    ctaLabel: "Plan a Buffet Menu",
    href: "https://wa.link/vimg6x",
    mediaId: "catering-chicken-mushroom-hd",
  },
  {
    id: "highlight-sweet-additions",
    eyebrow: "06 · Desserts & Pastries",
    title: "Sweet Finishes & Berry Accompaniments",
    category: "Desserts & Pastries",
    description:
      "Artisanal pound cakes, house caramel flan, and fresh berry platters designed to close office lunches and private celebrations on a warm note.",
    ctaLabel: "Add Dessert Platters",
    href: "https://wa.link/vimg6x",
    mediaId: "catering-dessert-poundcake-hd",
  },
] as const;

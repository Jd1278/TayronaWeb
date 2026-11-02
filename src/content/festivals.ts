import type { Festival, Special } from "@/types/content";

/**
 * Festivals & Seasonal Specials Data Layer (Section 14)
 * -----------------------------------------------------
 * Strict Rule: Do not invent unconfirmed public festival dates or fake events.
 * When no confirmed public schedule is active, `getPublishedFestivals()` returns an empty array
 * and the UI renders an intentional editorial "Where We'll Be — Schedule Updating" state,
 * while keeping the schema ready for instant content administration.
 */
export const FESTIVALS: Festival[] = [
  {
    id: "fest-template-gta-season",
    name: "Toronto & GTA Festival Circuit (Schedule Announcement Pending)",
    slug: "gta-festival-circuit",
    dateLabel: "POR DEFINIR",
    month: "POR DEFINIR",
    year: 2026,
    location: "Greater Toronto Area, ON",
    cityArea: "Toronto / GTA",
    status: "schedule_pending",
    description:
      "Our Food Truck participates in regional street food and community festivals across Toronto and the GTA. Official dates and locations are published here as each event is confirmed.",
    mediaId: "food-truck-exterior",
    featured: true,
    // Marked as not yet published with confirmed dates so we never display fabricated dates
    isPublished: false,
  },
];

export const SPECIALS: Special[] = [
  {
    id: "special-holiday-catering",
    title: "Seasonal & Holiday Catering Menus",
    slug: "holiday-specials",
    occasion: "Seasonal & Holiday Gatherings",
    description:
      "Tayrona Catering prepares dedicated seasonal and holiday menus for corporate celebrations and family gatherings across Toronto and the GTA. Contact our team to request current seasonal availability.",
    mediaId: "charcuterie-signature",
    status: "available_for_inquiry",
    featured: true,
    ctaLabel: "Inquire About Seasonal Menus",
  },
];

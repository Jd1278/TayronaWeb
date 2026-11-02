import type { FAQ } from "@/types/content";

/**
 * Confirmed FAQs Only (Section 11 & Section 20.8)
 * Strict Rule: No invented lead-time hours, delivery fee tables, or unconfirmed policies.
 */
export const FAQS: FAQ[] = [
  {
    id: "faq-service-area",
    question: "What areas do you serve?",
    answer:
      "Tayrona Catering serves clients across Toronto and the Greater Toronto Area (GTA) for Graze Boxes, corporate and private catering, grazing tables, and Food Truck bookings.",
    category: "general",
    sortOrder: 1,
  },
  {
    id: "faq-graze-box-sizes",
    question: "Which Graze Boxes are currently available and what are their prices?",
    answer:
      "We offer handcrafted artisanal Graze Boxes and individual grazing selections in Canadian Dollars (CAD): The Mini Feast ($39 CAD), The Gathering Spread ($170 CAD), The Party Starter ($150 CAD), The Good Times Spread ($320 CAD), and Tayrona Grazing Cups ($18 CAD).",
    category: "graze-boxes",
    sortOrder: 2,
  },
  {
    id: "faq-how-to-order",
    question: "How do I request a Graze Box or book catering for an event?",
    answer:
      "You can initiate a request directly through our online Order & Quote Request form by selecting your desired Graze Box or catering service, or reach us directly at +1 (647) 572-9388 or tayronacatering@gmail.com.",
    category: "general",
    sortOrder: 3,
  },
  {
    id: "faq-catering-types",
    question: "What types of catering services does Tayrona provide?",
    answer:
      "We provide Corporate Catering, Private Event Catering, custom Grazing Tables, Corporate Lunches, Hors d'oeuvres, warm Buffets, and seasonal/holiday menus tailored to your event.",
    category: "catering",
    sortOrder: 4,
  },
  {
    id: "faq-food-truck-booking",
    question: "How can I book the Tayrona Catering Food Truck for a private or corporate event?",
    answer:
      "Our Food Truck on Wheels is booked via custom quote. Share your preferred event date, location in Toronto or the GTA, and estimated guest count through our Quote Form, and our team will prepare a tailored proposal.",
    category: "food-truck",
    sortOrder: 5,
  },
];

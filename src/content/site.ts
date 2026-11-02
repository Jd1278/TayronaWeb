import type { PageDefinition, SiteConfig } from "@/types/content";

export const SITE_CONFIG: SiteConfig = {
  brandName: "Tayrona Catering",
  legalArea: "Toronto & Greater Toronto Area (GTA)",
  tagline: "Artisanal Grazing, Bespoke Catering & Culinary Experiences across Toronto & the GTA",
  editorialStatement:
    "Crafted for hosts, teams, and celebrations across Toronto and the Greater Toronto Area—where abundant charcuterie, tailored event menus, and our mobile culinary kitchen come together with warmth and precision.",
  contact: {
    phoneDisplay: "+1 (647) 572-9388",
    phoneHref: "tel:+16475729388",
    email: "tayronacatering@gmail.com",
    emailHref: "mailto:tayronacatering@gmail.com",
    instagramHandle: "@tayronacatering",
    instagramUrl: "https://www.instagram.com/tayronacatering/",
    serviceArea: "Toronto / GTA",
  },
  navigation: [
    { label: "Graze Boxes", href: "/graze-boxes" },
    { label: "Catering", href: "/catering" },
    { label: "Food Truck", href: "/food-truck" },
    { label: "Festivals", href: "/festivals" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: {
    label: "Request a Quote",
    href: "/quote",
  },
};

export const PAGE_DEFINITIONS: Record<string, PageDefinition> = {
  home: {
    id: "home",
    slug: "/",
    title: "Home",
    seoTitle: "Tayrona Catering | Artisanal Graze Boxes, Catering & Food Truck in Toronto / GTA",
    seoDescription:
      "Premium charcuterie graze boxes, corporate & private catering, grazing tables, and mobile food truck experiences serving Toronto and the Greater Toronto Area.",
    eyebrow: "Toronto & Greater Toronto Area",
    headline: "Artisanal Grazing & Bespoke Catering for Memorable Gatherings.",
    subheadline:
      "From handcrafted charcuterie boxes to full-scale corporate catering, grazing tables, and our mobile Food Truck across Toronto and the GTA.",
    heroMediaId: "charcuterie-celebration",
  },
  grazeBoxes: {
    id: "graze-boxes",
    slug: "/graze-boxes",
    title: "Graze Boxes",
    seoTitle: "Artisanal Graze Boxes | Tayrona Catering Toronto / GTA",
    seoDescription:
      "Explore Tayrona Catering's handcrafted charcuterie Graze Boxes in Toronto & the GTA: Personal Graze Box ($39 CAD), Date Night ($59 CAD), The Gathering ($95 CAD), and The Celebration ($130 CAD).",
    eyebrow: "Curated Charcuterie Collection",
    headline: "Handcrafted Graze Boxes, Styled to Share.",
    subheadline:
      "Four signature sizes thoughtfully composed with cured meats, artisanal cheeses, seasonal fruits, and accompaniments—prepared fresh for intimate evenings, gifting, and gatherings.",
    heroMediaId: "charcuterie-personal",
  },
  catering: {
    id: "catering",
    slug: "/catering",
    title: "Catering & Grazing Tables",
    seoTitle: "Corporate & Private Catering, Grazing Tables | Tayrona Catering Toronto",
    seoDescription:
      "Tailored corporate catering, private event dining, abundant grazing tables, corporate lunches, hors d'oeuvres, and buffets across Toronto and the GTA.",
    eyebrow: "Bespoke Culinary Hospitality",
    headline: "Catering & Grazing Tables Designed Around Your Event.",
    subheadline:
      "Whether hosting an executive luncheon, an intimate milestone, or a full-scale reception in Toronto or the GTA, our culinary team tailors every table to your gathering.",
    heroMediaId: "event-spread-1",
  },
  foodTruck: {
    id: "food-truck",
    slug: "/food-truck",
    title: "Food Truck on Wheels",
    seoTitle: "Food Truck Catering & Events in Toronto / GTA | Tayrona Catering",
    seoDescription:
      "Book the Tayrona Catering Food Truck for private celebrations, corporate activations, and community gatherings across Toronto and the Greater Toronto Area.",
    eyebrow: "Food Truck on Wheels • Toronto / GTA",
    headline: "Bring the Kitchen Live to Your Next Gathering.",
    subheadline:
      "Our mobile culinary unit serves freshly prepared dishes on-site for private parties, corporate functions, and regional festivals throughout Toronto and the Greater Toronto Area.",
    heroMediaId: "food-truck-exterior",
  },
  festivals: {
    id: "festivals",
    slug: "/festivals",
    title: "Festivals & Seasonal Specials",
    seoTitle: "Festivals & Where We'll Be | Tayrona Catering Toronto / GTA",
    seoDescription:
      "Follow Tayrona Catering's Food Truck festival appearances and seasonal culinary specials across Toronto and the Greater Toronto Area.",
    eyebrow: "On the Road & Seasonal Editions",
    headline: "Festivals, Pop-Ups & Seasonal Offerings.",
    subheadline:
      "Discover where the Tayrona Catering Food Truck will be serving next across Toronto and the GTA, or inquire about seasonal menus and event bookings.",
    heroMediaId: "food-truck-exterior",
  },
  quote: {
    id: "quote",
    slug: "/quote",
    title: "Request an Order or Catering Quote",
    seoTitle: "Request an Order or Quote | Tayrona Catering Toronto / GTA",
    seoDescription:
      "Start a Graze Box order request or inquire about custom catering, grazing tables, or Food Truck bookings in Toronto and the GTA.",
    eyebrow: "Order Request & Event Inquiry",
    headline: "Start Your Order or Custom Catering Inquiry.",
    subheadline:
      "Select a signature Graze Box or tell us about your upcoming corporate event, private celebration, or Food Truck booking in Toronto / GTA.",
  },
  contact: {
    id: "contact",
    slug: "/contact",
    title: "Contact Tayrona Catering",
    seoTitle: "Contact Us | Tayrona Catering Toronto / GTA",
    seoDescription:
      "Connect with Tayrona Catering in Toronto & the GTA by phone at +1 (647) 572-9388, email at tayronacatering@gmail.com, or Instagram @tayronacatering.",
    eyebrow: "Direct Hospitality Concierge",
    headline: "Get in Touch with Tayrona Catering.",
    subheadline:
      "Reach our team directly for Graze Box requests, corporate catering proposals, private celebrations, and Food Truck availability across Toronto and the GTA.",
  },
};

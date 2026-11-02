import { CATEGORIES } from "./categories";
import { FAQS } from "./faqs";
import { FESTIVALS, SPECIALS } from "./festivals";
import {
  CONFIRMED_CLIENT_BRANDS,
  HOME_CIRCULAR_CATEGORIES,
  HOME_HERO_CONFIG,
  HOME_HOSPITALITY_MARQUEE_ITEMS,
  HOME_MAIN_SERVICE_CARDS,
} from "./home";
import { EXCLUDED_ASSET_NOTES, MEDIA_ASSETS } from "./media";
import { PRODUCTS } from "./products";
import { CULINARY_HIGHLIGHTS, SERVICES } from "./services";
import { PAGE_DEFINITIONS, SITE_CONFIG } from "./site";
import type {
  Category,
  FAQ,
  Festival,
  MediaAsset,
  PageDefinition,
  Product,
  ServiceOffering,
  Special,
} from "@/types/content";

export function getSiteConfig() {
  return SITE_CONFIG;
}

export function getPageDefinition(key: keyof typeof PAGE_DEFINITIONS): PageDefinition {
  return PAGE_DEFINITIONS[key];
}

export function getMediaAsset(id: string): MediaAsset {
  const asset = MEDIA_ASSETS[id];
  if (!asset) {
    return MEDIA_ASSETS["charcuterie-celebration"];
  }
  return asset;
}

export function getAllCategories(): Category[] {
  return [...CATEGORIES].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAllProducts(): Product[] {
  return [...PRODUCTS].filter((p) => p.available).sort((a, b) => a.priceCAD - b.priceCAD);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllServices(): ServiceOffering[] {
  return [...SERVICES].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getServiceBySlug(slug: string): ServiceOffering | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCulinaryHighlights() {
  return CULINARY_HIGHLIGHTS;
}

export function getPublishedFestivals(): Festival[] {
  return FESTIVALS.filter((f) => f.isPublished);
}

export function getAllFestivalRecords(): Festival[] {
  return FESTIVALS;
}

export function getFeaturedSpecials(): Special[] {
  return SPECIALS.filter((s) => s.featured);
}

export function getFAQs(category?: FAQ["category"]): FAQ[] {
  const list = category ? FAQS.filter((f) => f.category === category) : FAQS;
  return [...list].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getHomeHeroConfig() {
  return HOME_HERO_CONFIG;
}

export function getHomeMarqueeItems() {
  return CONFIRMED_CLIENT_BRANDS.length > 0
    ? CONFIRMED_CLIENT_BRANDS
    : HOME_HOSPITALITY_MARQUEE_ITEMS;
}

export function getHomeCircularCategories() {
  return HOME_CIRCULAR_CATEGORIES;
}

export function getHomeMainServiceCards() {
  return HOME_MAIN_SERVICE_CARDS;
}

export { EXCLUDED_ASSET_NOTES };

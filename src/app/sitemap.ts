import type { MetadataRoute } from "next";
import { getAllProducts } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tayronacatering.ca";
  const products = getAllProducts();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/graze-boxes",
    "/catering",
    "/food-truck",
    "/festivals",
    "/quote",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}

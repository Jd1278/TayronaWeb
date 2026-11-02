import { getFAQs, getServiceBySlug } from "@/content";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeBrandCarousel } from "@/components/home/HomeBrandCarousel";
import { HomeCircularCategories } from "@/components/home/HomeCircularCategories";
import { HomeServiceCardsGrid } from "@/components/home/HomeServiceCardsGrid";
import { HomeEditorialTypography } from "@/components/home/HomeEditorialTypography";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  const cateringService = getServiceBySlug("catering");
  const faqs = getFAQs();

  return (
    <>
      {/* 1. HERO PRINCIPAL (banner-index.jpg + "It’s more than simply food it's an experience" + ORDER ONLINE) */}
      <HomeHero />

      {/* 2. CARRUSEL DE MARCAS (Horizontal Editorial Strip) */}
      <HomeBrandCarousel />

      {/* 3. CATEGORÍAS CIRCULARES (6 Círculos: Graze Boxes, Catering, Food Truck, Festivals, Lunches, Desserts) */}
      <HomeCircularCategories />

      {/* 4. SERVICIOS PRINCIPALES (2x2 Editorial Grid: Catering, Food Truck, Events, Graze Boxes) */}
      <HomeServiceCardsGrid />

      {/* 5. CONTENIDO EDITORIAL (Bloque tipográfico puro — imágenes eliminadas) */}
      {cateringService && (
        <HomeEditorialTypography service={cateringService} />
      )}

      {/* 6. FAQ (Estructura vertical reorganizada: Título -> Preguntas -> "Have another questions?" -> Botón de contacto) */}
      <HomeFAQSection faqs={faqs} />

      {/* 7. CONVERSION CTA */}
      <CTASection />
    </>
  );
}

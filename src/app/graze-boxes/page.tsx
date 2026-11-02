import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAllProducts,
  getFAQs,
  getMediaAsset,
  getPageDefinition,
} from "@/content";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";

const pageDef = getPageDefinition("grazeBoxes");

export const metadata: Metadata = {
  title: pageDef.title,
  description: pageDef.seoDescription,
};

export default function GrazeBoxesPage() {
  const products = getAllProducts();
  const bannerAsset = getMediaAsset("banner-charcuteria-hd");
  const faqs = getFAQs("graze-boxes");

  return (
    <>
      {/* Graze Boxes Hero Banner (banner-charcuteria.jpeg) */}
      <section
        role="banner"
        className="relative flex min-h-[72vh] w-full items-center justify-center overflow-hidden border-b border-[#1C1917]/10 bg-[#181512] py-20 text-center sm:min-h-[78vh] sm:py-24 lg:min-h-[82vh]"
      >
        <Image
          src={bannerAsset.src}
          alt={bannerAsset.alt}
          width={bannerAsset.width}
          height={bannerAsset.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Editorial Dark Vignette Overlay for Crisp Typography */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#181512]/70 via-[#181512]/55 to-[#181512]/80"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <p className="inline-block border-b border-[#C89D54]/60 pb-2 text-[11px] font-semibold tracking-[0.26em] text-[#FAF7F2]/90 uppercase">
            {pageDef.eyebrow}
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-[1.08] text-[#FAF7F2] sm:text-5xl lg:text-6xl">
            {pageDef.headline}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#FAF7F2]/85 sm:text-lg">
            {pageDef.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote?type=graze_box_order"
              className="rounded-md inline-flex items-center justify-center border border-[#FAF7F2] bg-[#5E1914] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:border-[#C89D54] hover:bg-[#181512]"
            >
              Start a Graze Box Request
            </Link>
            <Link
              href="/catering#grazing-tables"
              className="rounded-md inline-flex items-center justify-center border border-[#FAF7F2]/40 bg-[#181512]/50 px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase backdrop-blur-xs transition-colors hover:border-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#181512]"
            >
              Explore Large Grazing Tables
            </Link>
          </div>
        </div>
      </section>

      {/* Product Collection Grid */}
      <ProductGrid
        products={products}
        showSectionHeader={false}
      />

      {/* Focused FAQ */}
      <FAQAccordion
        faqs={faqs}
        eyebrow="Graze Box Inquiries"
        title="Ordering & Availability"
      />

      <CTASection />
    </>
  );
}

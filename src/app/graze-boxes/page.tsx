import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllProducts,
  getFAQs,
  getMediaAsset,
  getPageDefinition,
} from "@/content";
import { CuratedImage } from "@/components/ui/CuratedImage";
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
  const signatureAsset = getMediaAsset("charcuterie-signature");
  const faqs = getFAQs("graze-boxes");

  return (
    <>
      {/* Editorial Header */}
      <section className="border-b border-[#1C1917]/10 bg-[#F3EFE6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-[#5E1914] uppercase">
                {pageDef.eyebrow}
              </p>
              <h1 className="font-serif text-4xl leading-[1.08] text-[#1C1917] sm:text-5xl lg:text-6xl">
                {pageDef.headline}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#57534E] sm:text-lg">
                {pageDef.subheadline}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/quote?type=graze_box_order"
                  className="rounded-md inline-flex items-center justify-center bg-[#5E1914] px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#1C1917]"
                >
                  Start a Graze Box Request
                </Link>
                <Link
                  href="/catering#grazing-tables"
                  className="rounded-md inline-flex items-center justify-center border border-[#1C1917]/25 px-6 py-4 text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase transition-colors hover:border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF7F2]"
                >
                  Explore Large Grazing Tables
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg border border-[#1C1917]/12 bg-[#FAF7F2] p-3">
                {/* Uses signature-graze.jpeg with strict bottom crop from media.ts */}
                <CuratedImage
                  asset={signatureAsset}
                  priority
                  aspectClassName="aspect-[4/3]"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
                <p className="mt-2.5 flex items-center justify-between text-xs text-[#57534E]">
                  <span className="font-serif italic text-[#1C1917]">
                    Artisanal Cured Meats, Specialty Cheeses & Preserves
                  </span>
                  <span className="font-semibold tracking-wider text-[#5E1914] uppercase">
                    Toronto / GTA
                  </span>
                </p>
              </div>
            </div>
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

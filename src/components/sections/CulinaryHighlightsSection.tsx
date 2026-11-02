import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCulinaryHighlights, getMediaAsset } from "@/content";
import { SectionHeader } from "./SectionHeader";

export function CulinaryHighlightsSection() {
  const highlights = getCulinaryHighlights();

  return (
    <section className="border-b border-[#1C1917]/10 bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="From Our Kitchen & Grazing Studio"
          title="Culinary Highlights"
          description="A closer look at the dishes, sandwiches, hors d'oeuvres, and grazing spreads prepared by Tayrona Catering for corporate and private gatherings across Toronto and the GTA."
          actionLabel="Request a Custom Menu Quote"
          actionHref="/quote?type=corporate_catering"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {highlights.map((item) => {
            const asset = getMediaAsset(item.mediaId);
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-lg bg-[#181512] p-8 sm:min-h-[520px] sm:p-10 lg:min-h-[560px] lg:p-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5E1914]"
              >
                {/* Full-Bleed High-Impact Photography */}
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    asset.objectPosition ?? "object-center"
                  }`}
                />

                {/* Editorial Gradient Overlay for Crisp Typography */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#181512]/90 via-[#181512]/35 to-[#181512]/10 transition-opacity duration-500 group-hover:from-[#181512]/95"
                />

                {/* Overlay Content */}
                <div className="relative z-10 flex flex-col justify-end text-[#FAF7F2]">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C89D54] uppercase">
                    {item.eyebrow}
                  </span>

                  <h3 className="mt-2.5 font-serif text-3xl leading-[1.08] text-[#FAF7F2] sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#FAF7F2]/85 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2.5 self-start border-b border-[#FAF7F2]/40 pb-1.5 text-xs font-semibold tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors duration-300 group-hover:border-[#C89D54] group-hover:text-[#C89D54]">
                    <span>{item.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

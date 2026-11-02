import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceOffering } from "@/types/content";

interface HomeEditorialTypographyProps {
  service: ServiceOffering;
}

export function HomeEditorialTypography({ service }: HomeEditorialTypographyProps) {
  return (
    <section
      id={service.slug}
      className="border-y border-[#1C1917]/12 bg-[#F3EFE6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Editorial Typographic Header — Pure Type & Negative Space (No Images) */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.26em] text-[#5E1914] uppercase">
            {service.eyebrow}
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-[1.08] font-normal text-[#1C1917] sm:text-5xl lg:text-6xl">
            {service.name}
          </h2>
        </div>

        {/* Typographic Culinary Directory (3 Columns on Desktop, Pure Editorial Grid) */}
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 border-t border-[#1C1917]/15 pt-12 sm:mt-14 sm:grid-cols-2 sm:pt-14 lg:grid-cols-3">
          {service.subServices.map((sub, index) => (
            <article
              key={sub.id}
              id={sub.id === "sub-grazing-tables" ? "grazing-tables" : undefined}
              className="flex flex-col justify-between border-b border-[#1C1917]/10 pb-8"
            >
              <div>
                <span className="font-mono text-[11px] font-semibold tracking-[0.24em] text-[#5E1914] uppercase">
                  0{index + 1} · {service.serviceArea}
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-[#1C1917] sm:text-3xl">
                  {sub.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E] sm:text-[15px]">
                  {sub.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Centered Editorial Conversion Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#1C1917]/15 pt-10 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1C1917] uppercase">
              Service Coverage: {service.serviceArea}
            </p>
            <p className="mt-1 font-serif text-lg italic text-[#57534E]">
              Every catering proposal is customized around your guest count, dietary preferences, and venue.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/quote?type=${service.inquiryServiceKey}`}
              className="group inline-flex items-center gap-3 rounded-md bg-[#5E1914] px-8 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#1C1917]"
            >
              <span>{service.ctaLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={`/${service.slug}`}
              className="inline-flex items-center rounded-md border border-[#1C1917]/25 px-7 py-4 text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase transition-colors hover:border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF7F2]"
            >
              Explore {service.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

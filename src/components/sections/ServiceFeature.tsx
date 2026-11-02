import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import type { ServiceOffering } from "@/types/content";

interface ServiceFeatureProps {
  service: ServiceOffering;
  theme?: "light" | "warm" | "dark";
}

export function ServiceFeature({ service, theme = "warm" }: ServiceFeatureProps) {
  const isDark = theme === "dark";

  const bgClass =
    theme === "dark"
      ? "bg-[#181512] text-[#FAF7F2]"
      : theme === "warm"
      ? "bg-[#F3EFE6] text-[#1C1917]"
      : "bg-[#FAF7F2] text-[#1C1917]";

  return (
    <section
      id={service.slug}
      className={`border-y border-[#1C1917]/10 py-20 sm:py-24 lg:py-28 ${bgClass}`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow={service.eyebrow}
          title={service.name}
          description={service.editorialDescription}
          theme={isDark ? "dark" : "light"}
          actionLabel={service.ctaLabel}
          actionHref={`/quote?type=${service.inquiryServiceKey}`}
        />

        {/* Balanced Full-Width Sub-Services Editorial Grid (Images Removed) */}
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {service.subServices.map((sub, index) => (
            <div
              key={sub.id}
              id={sub.id === "sub-grazing-tables" ? "grazing-tables" : undefined}
              className={`flex flex-col justify-between border-t pt-6 ${
                isDark ? "border-[#FAF7F2]/15" : "border-[#1C1917]/15"
              }`}
            >
              <div className="space-y-2.5">
                <span
                  className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
                    isDark ? "text-[#C89D54]" : "text-[#5E1914]"
                  }`}
                >
                  0{index + 1}
                </span>
                <h3
                  className={`font-serif text-2xl ${
                    isDark ? "text-[#FAF7F2]" : "text-[#1C1917]"
                  }`}
                >
                  {sub.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-[#FAF7F2]/70" : "text-[#57534E]"
                  }`}
                >
                  {sub.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Conversion & Service Coverage Bar */}
        <div
          className={`mt-12 flex flex-col justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center ${
            isDark ? "border-[#FAF7F2]/15" : "border-[#1C1917]/15"
          }`}
        >
          <div
            className={`flex flex-wrap items-center gap-4 text-xs ${
              isDark ? "text-[#FAF7F2]/70" : "text-[#57534E]"
            }`}
          >
            <span>Service Coverage: {service.serviceArea}</span>
            <span aria-hidden="true">•</span>
            <span className="font-semibold tracking-wider uppercase">
              Custom Quote Service
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/quote?type=${service.inquiryServiceKey}`}
              className={`rounded-md group inline-flex items-center gap-3 px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
                isDark
                  ? "bg-[#C89D54] text-[#181512] hover:bg-[#FAF7F2]"
                  : "bg-[#5E1914] text-[#FAF7F2] hover:bg-[#1C1917]"
              }`}
            >
              <span>{service.ctaLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={`/${service.slug}`}
              className={`rounded-md inline-flex items-center border px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                isDark
                  ? "border-[#FAF7F2]/30 text-[#FAF7F2] hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10"
                  : "border-[#1C1917]/25 text-[#1C1917] hover:border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF7F2]"
              }`}
            >
              Explore {service.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

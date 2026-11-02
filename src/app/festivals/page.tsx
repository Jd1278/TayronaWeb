import type { Metadata } from "next";
import Link from "next/link";
import { getPageDefinition, getSiteConfig } from "@/content";
import { FestivalBanner } from "@/components/sections/FestivalBanner";
import { CTASection } from "@/components/sections/CTASection";

const pageDef = getPageDefinition("festivals");

export const metadata: Metadata = {
  title: pageDef.title,
  description: pageDef.seoDescription,
};

export default function FestivalsPage() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <section className="border-b border-[#1C1917]/10 bg-[#F3EFE6] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-[#5E1914] uppercase">
              {pageDef.eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] text-[#1C1917] sm:text-5xl lg:text-6xl">
              {pageDef.headline}
            </h1>
            <p className="text-base leading-relaxed text-[#57534E] sm:text-lg">
              {pageDef.subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/quote?type=food_truck_booking"
                className="rounded-md inline-flex items-center justify-center bg-[#5E1914] px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#1C1917]"
              >
                Invite Our Food Truck to Your Event
              </Link>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md inline-flex items-center justify-center border border-[#1C1917]/25 px-6 py-4 text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase transition-colors hover:border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF7F2]"
              >
                Follow {siteConfig.contact.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FestivalBanner />

      <CTASection />
    </>
  );
}

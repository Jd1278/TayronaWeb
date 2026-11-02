import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMediaAsset } from "@/content";
import { CuratedImage } from "@/components/ui/CuratedImage";

interface HeroSectionProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCtaLabel = "Explore Graze Boxes",
  primaryCtaHref = "/graze-boxes",
  secondaryCtaLabel = "Inquire for Catering & Events",
  secondaryCtaHref = "/quote?type=corporate_catering",
}: HeroSectionProps) {
  const primaryHeroAsset = getMediaAsset("charcuterie-celebration");
  const secondaryHeroAsset = getMediaAsset("charcuterie-personal");
  const tertiaryEventAsset = getMediaAsset("event-croquetas");

  return (
    <section className="relative overflow-hidden border-b border-[#1C1917]/10 bg-[#FAF7F2] pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Copy Column */}
          <div className="space-y-8 lg:col-span-6 xl:col-span-6">
            <div className="inline-flex items-center gap-3 border-b border-[#5E1914]/25 pb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5E1914]" />
              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#5E1914] uppercase">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl leading-[1.06] font-normal tracking-tight text-[#1C1917] sm:text-5xl lg:text-[56px] xl:text-[62px]">
              {headline}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#57534E] sm:text-lg">
              {subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Link
                href={primaryCtaHref}
                className="rounded-md group inline-flex items-center justify-center gap-3 bg-[#5E1914] px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors duration-300 hover:bg-[#1C1917] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
              >
                <span>{primaryCtaLabel}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={secondaryCtaHref}
                className="rounded-md inline-flex items-center justify-center border border-[#1C1917]/25 bg-transparent px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#1C1917] uppercase transition-colors duration-300 hover:border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF7F2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
              >
                {secondaryCtaLabel}
              </Link>
            </div>

            {/* Editorial Pillar Strip */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#1C1917]/10 pt-8 sm:gap-6">
              <div>
                <p className="font-serif text-lg text-[#1C1917] sm:text-xl">
                  Graze Boxes
                </p>
                <p className="mt-1 text-xs leading-snug text-[#57534E]">
                  Four signature boxes from $39 to $130 CAD
                </p>
              </div>
              <div className="border-l border-[#1C1917]/10 pl-4 sm:pl-6">
                <p className="font-serif text-lg text-[#1C1917] sm:text-xl">
                  Event Catering
                </p>
                <p className="mt-1 text-xs leading-snug text-[#57534E]">
                  Corporate, private & custom grazing tables
                </p>
              </div>
              <div className="border-l border-[#1C1917]/10 pl-4 sm:pl-6">
                <p className="font-serif text-lg text-[#1C1917] sm:text-xl">
                  Food Truck
                </p>
                <p className="mt-1 text-xs leading-snug text-[#57534E]">
                  Live mobile kitchen across Toronto / GTA
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Asymmetric Photography Composition */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="grid grid-cols-12 items-end gap-4 sm:gap-6">
              {/* Primary Large Vertical Frame */}
              <div className="col-span-7 sm:col-span-7">
                <div className="rounded-lg border border-[#1C1917]/10 bg-[#F3EFE6] p-2 sm:p-3">
                  <CuratedImage
                    asset={primaryHeroAsset}
                    priority
                    aspectClassName="aspect-[3/4]"
                    sizes="(max-width: 768px) 60vw, 420px"
                  />
                  <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] text-[#57534E]">
                    <span className="font-serif italic text-[#1C1917]">
                      The Celebration Box
                    </span>
                    <span className="font-semibold tracking-wider text-[#5E1914] uppercase">
                      $130 CAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Stacked Frames */}
              <div className="col-span-5 flex flex-col gap-4 sm:gap-6">
                <div className="rounded-lg border border-[#1C1917]/10 bg-[#F3EFE6] p-2">
                  <CuratedImage
                    asset={secondaryHeroAsset}
                    priority
                    aspectClassName="aspect-[3/4]"
                    sizes="(max-width: 768px) 40vw, 280px"
                  />
                  <p className="mt-2 px-1 font-serif text-xs italic text-[#1C1917]">
                    Personal Graze • $39 CAD
                  </p>
                </div>

                <div className="rounded-lg hidden border border-[#1C1917]/10 bg-[#F3EFE6] p-2 sm:block">
                  <CuratedImage
                    asset={tertiaryEventAsset}
                    aspectClassName="aspect-[4/3]"
                    sizes="260px"
                  />
                  <p className="mt-2 px-1 font-serif text-xs italic text-[#1C1917]">
                    Artisanal Hors d&apos;oeuvres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

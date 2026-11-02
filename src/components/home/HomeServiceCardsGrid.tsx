import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getHomeMainServiceCards, getMediaAsset } from "@/content";

export function HomeServiceCardsGrid() {
  const cards = getHomeMainServiceCards();

  return (
    <section className="border-b border-[#FAF7F2]/10 bg-[#181512] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Intro */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#FAF7F2]/15 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-[#C89D54] uppercase">
              Signature Pillars · Toronto &amp; the GTA
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] text-[#FAF7F2] sm:text-5xl">
              Four Ways to Host with Tayrona
            </h2>
          </div>
        </div>

        {/* 2x2 Large Photographic Service Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {cards.map((card) => {
            const hasMedia = Boolean(card.mediaId && card.mediaId.trim() !== "");
            const media = hasMedia ? getMediaAsset(card.mediaId) : null;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-lg border border-[#FAF7F2]/12 bg-[#1C1917] p-8 sm:min-h-[520px] sm:p-10 lg:min-h-[580px] lg:p-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89D54]"
              >
                {/* Full-Bleed High-Impact Photography (rendered only if media exists) */}
                {hasMedia && media ? (
                  <>
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        media.objectPosition ?? "object-center"
                      }`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#181512]/90 via-[#181512]/35 to-[#181512]/10 transition-opacity duration-500 group-hover:from-[#181512]/95"
                    />
                  </>
                ) : (
                  /* Elegant minimal editorial texture when card has no background image */
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-[#231F1B] via-[#1C1917] to-[#141210] border border-[#FAF7F2]/5"
                  />
                )}

                {/* Overlay Content */}
                <div className="relative z-10 flex flex-col justify-end text-[#FAF7F2]">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C89D54] uppercase">
                    {card.eyebrow}
                  </span>

                  <h3 className="mt-2.5 font-serif text-4xl leading-none text-[#FAF7F2] sm:text-5xl">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#FAF7F2]/85 sm:text-base">
                    {card.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2.5 border-b border-[#FAF7F2]/40 pb-1.5 text-xs font-semibold tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors duration-300 group-hover:border-[#C89D54] group-hover:text-[#C89D54] self-start">
                    <span>{card.ctaLabel}</span>
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

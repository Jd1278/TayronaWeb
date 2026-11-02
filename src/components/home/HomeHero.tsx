import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getHomeHeroConfig, getMediaAsset } from "@/content";

export function HomeHero() {
  const heroConfig = getHomeHeroConfig();
  const bannerAsset = getMediaAsset(heroConfig.mediaId);

  return (
    <section className="relative flex min-h-[82vh] w-full items-center justify-center overflow-hidden bg-[#181512] sm:min-h-[88vh] lg:min-h-[92vh]">
      {/* Full-Viewport Cinematic Background Image */}
      <Image
        src={bannerAsset.src}
        alt={bannerAsset.alt}
        width={bannerAsset.width}
        height={bannerAsset.height}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out"
      />

      {/* Subtle Editorial Vignette & Contrast Overlay (No white box behind text) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#181512]/60 via-[#181512]/45 to-[#181512]/75"
      />

      {/* Centered Editorial Message & Prominent CTA */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:px-8 lg:px-12">
        <span className="mb-6 inline-block border-b border-[#C89D54]/60 pb-2 text-[11px] font-semibold tracking-[0.28em] text-[#FAF7F2]/90 uppercase">
          Tayrona Catering · Toronto &amp; GTA
        </span>

        <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] font-normal tracking-tight text-[#FAF7F2] drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[82px]">
          &ldquo;{heroConfig.headline}&rdquo;
        </h1>

        <div className="mt-10 sm:mt-12">
          <Link
            href={heroConfig.ctaHref}
            className="group inline-flex items-center gap-3.5 rounded-md border border-[#FAF7F2] bg-[#5E1914] px-9 py-4.5 text-xs font-semibold tracking-[0.24em] text-[#FAF7F2] uppercase transition-all duration-300 hover:border-[#C89D54] hover:bg-[#181512] hover:text-[#FAF7F2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FAF7F2] sm:px-11 sm:py-5 sm:text-[13px]"
          >
            <span>{heroConfig.ctaLabel}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

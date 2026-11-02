import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Sparkles, ArrowUpRight } from "lucide-react";
import {
  getFeaturedSpecials,
  getMediaAsset,
  getPublishedFestivals,
  getSiteConfig,
} from "@/content";

export function HomeFoodTruckVertical() {
  const publishedFestivals = getPublishedFestivals();
  const specials = getFeaturedSpecials();
  const siteConfig = getSiteConfig();
  const truckAsset = getMediaAsset("home-food-truck-jpeg");

  return (
    <section className="bg-[#181512] py-14 text-[#FAF7F2] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Narrative & Festival Schedule Module */}
          <div className="space-y-5 lg:col-span-6">
            <div className="space-y-2.5">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-[#C89D54] uppercase">
                Food Truck on Wheels • Festivals & Where We&apos;ll Be
              </p>
              <h2 className="font-serif text-3xl leading-[1.12] text-[#FAF7F2] sm:text-4xl lg:text-[42px]">
                Live Culinary Energy Across Toronto & the GTA.
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-[#FAF7F2]/75 sm:text-base">
                Beyond private charters and corporate outdoor events, the Tayrona Catering Food Truck joins regional street food celebrations across the Greater Toronto Area.
              </p>
            </div>

            {/* Dynamic Festival Schedule Board */}
            <div className="rounded-lg border border-[#FAF7F2]/15 bg-[#221E1A] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#FAF7F2]/10 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <Calendar className="h-4 w-4 text-[#C89D54]" />
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-[#FAF7F2] uppercase">
                    Where We&apos;ll Be — Public Festival Schedule
                  </h3>
                </div>
                <span className="rounded-md border border-[#C89D54]/40 bg-[#C89D54]/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#C89D54] uppercase">
                  {publishedFestivals.length > 0
                    ? `${publishedFestivals.length} Confirmed`
                    : "Schedule Updating"}
                </span>
              </div>

              {publishedFestivals.length > 0 ? (
                <div className="mt-4 divide-y divide-[#FAF7F2]/10">
                  {publishedFestivals.map((fest) => (
                    <div
                      key={fest.id}
                      className="flex flex-col justify-between gap-3 py-3.5 sm:flex-row sm:items-center"
                    >
                      <div>
                        <p className="font-serif text-xl text-[#FAF7F2]">
                          {fest.name}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-[#FAF7F2]/70">
                          <MapPin className="h-3.5 w-3.5 text-[#C89D54]" />
                          <span>{fest.location}</span>
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-xs font-semibold tracking-[0.15em] text-[#C89D54] uppercase">
                          {fest.dateLabel ?? `${fest.month ?? ""} ${fest.year ?? ""}`}
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#FAF7F2]/60 uppercase">
                          Status: {fest.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 space-y-2.5">
                  <p className="font-serif text-lg italic text-[#FAF7F2] sm:text-xl">
                    Upcoming public festival dates and pop-up stops across Toronto & the GTA are currently being finalized (POR DEFINIR).
                  </p>
                  <p className="text-xs leading-relaxed text-[#FAF7F2]/70 sm:text-sm">
                    We update this board as official festival dates and locations are confirmed. Follow{" "}
                    <a
                      href={siteConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#C89D54] underline underline-offset-4 hover:text-[#FAF7F2]"
                    >
                      {siteConfig.contact.instagramHandle}
                    </a>{" "}
                    for live weekend announcements, or book the Food Truck privately for your own event.
                  </p>
                </div>
              )}
            </div>

            {/* Seasonal Specials Highlight */}
            {specials.map((special) => (
              <div
                key={special.id}
                className="rounded-lg flex flex-col justify-between gap-4 border border-[#FAF7F2]/10 bg-[#FAF7F2]/[0.03] p-5 sm:flex-row sm:items-center"
              >
                <div className="space-y-1">
                  <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#C89D54] uppercase">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{special.occasion}</span>
                  </p>
                  <h3 className="font-serif text-xl text-[#FAF7F2]">
                    {special.title}
                  </h3>
                  <p className="max-w-xl text-xs leading-relaxed text-[#FAF7F2]/70">
                    {special.description}
                  </p>
                </div>
                <Link
                  href="/quote?type=private_catering"
                  className="rounded-md shrink-0 border border-[#C89D54] px-4 py-2.5 text-center text-[11px] font-semibold tracking-[0.16em] text-[#C89D54] uppercase transition-colors hover:bg-[#C89D54] hover:text-[#181512]"
                >
                  {special.ctaLabel}
                </Link>
              </div>
            ))}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="https://w.app/qxemtu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md inline-flex items-center gap-2 bg-[#C89D54] px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-[#181512] uppercase transition-colors hover:bg-[#FAF7F2]"
              >
                <span>Request Food Truck Quote</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/festivals"
                className="rounded-md inline-flex items-center border border-[#FAF7F2]/25 px-5 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#FAF7F2] uppercase transition-colors hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10"
              >
                Festivals & Specials Page
              </Link>
            </div>
          </div>

          {/* Right Column: High-Resolution Food Truck Photography (foodstruck.jpeg) */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border border-[#FAF7F2]/15 bg-[#221E1A] p-3 sm:p-4">
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#181512]">
                <Image
                  src={truckAsset.src}
                  alt={truckAsset.alt}
                  width={truckAsset.width}
                  height={truckAsset.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover object-[50%_36%] transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#FAF7F2]/75">
                <span className="font-serif italic">
                  Tayrona Catering Mobile Kitchen
                </span>
                <span className="text-[10px] tracking-widest text-[#C89D54] uppercase">
                  Toronto / GTA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

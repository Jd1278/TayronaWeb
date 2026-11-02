import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getFAQs,
  getMediaAsset,
  getPageDefinition,
  getServiceBySlug,
} from "@/content";
import { ServiceFeature } from "@/components/sections/ServiceFeature";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";

const pageDef = getPageDefinition("foodTruck");

export const metadata: Metadata = {
  title: pageDef.title,
  description: pageDef.seoDescription,
};

export default function FoodTruckPage() {
  const truckService = getServiceBySlug("food-truck");
  const bannerAsset = getMediaAsset("food-truck-banner-highres");
  const faqs = getFAQs("food-truck");

  return (
    <>
      {/* Food Truck Hero Banner (food-truck-baner.jpg) */}
      <section
        role="banner"
        className="relative flex min-h-[78vh] w-full items-end overflow-hidden border-b border-[#FAF7F2]/10 bg-[#181512] text-[#FAF7F2] sm:min-h-[82vh] lg:min-h-[88vh]"
      >
        <Image
          src={bannerAsset.src}
          alt={bannerAsset.alt}
          width={bannerAsset.width}
          height={bannerAsset.height}
          priority
          sizes="100vw"
          className={`absolute inset-0 h-full w-full object-cover ${
            bannerAsset.objectPosition ?? "object-center"
          }`}
        />

        {/* Subtle contrast overlay: stronger where the copy sits */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#181512]/90 via-[#181512]/45 to-[#181512]/10 lg:bg-gradient-to-r lg:from-[#181512]/85 lg:via-[#181512]/40 lg:to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-40 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div className="max-w-2xl space-y-6">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-[#C89D54] uppercase">
              {pageDef.eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] text-[#FAF7F2] sm:text-5xl lg:text-6xl">
              {pageDef.headline}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#FAF7F2]/85 sm:text-lg">
              {pageDef.subheadline}
            </p>
            <div className="border-l-2 border-[#C89D54] pl-4 text-xs leading-relaxed text-[#FAF7F2]/80">
              Food Truck bookings across Toronto and the Greater Toronto Area are arranged via custom quote based on your event date, venue access, and guest count.
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://w.app/qxemtu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#C89D54] px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#181512] uppercase transition-colors hover:bg-[#FAF7F2]"
              >
                Request a Food Truck Quote
              </a>
              <Link
                href="/festivals"
                className="inline-flex items-center justify-center rounded-md border border-[#FAF7F2]/40 bg-[#181512]/40 px-6 py-4 text-xs font-semibold tracking-[0.16em] text-[#FAF7F2] uppercase transition-colors hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10"
              >
                Festivals &amp; Where We&apos;ll Be
              </Link>
            </div>
          </div>
        </div>
      </section>

      {truckService && (
        <ServiceFeature service={truckService} theme="warm" />
      )}

      <FAQAccordion
        faqs={faqs}
        eyebrow="Mobile Kitchen Inquiries"
        title="Booking the Tayrona Food Truck"
      />

      <CTASection />
    </>
  );
}

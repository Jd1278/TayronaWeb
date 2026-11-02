import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { getMediaAsset, getPageDefinition } from "@/content";
import { QuoteForm } from "@/components/sections/QuoteForm";

const pageDef = getPageDefinition("contact");

export const metadata: Metadata = {
  title: pageDef.title,
  description: pageDef.seoDescription,
};

export default function ContactPage() {
  const backgroundAsset = getMediaAsset("contact-bg-hero");

  return (
    <section className="relative isolate overflow-hidden bg-[#181512] py-16 sm:py-20 lg:py-24">
      {/* Page-wide photographic background (fondo-contact.jpg) */}
      <Image
        src={backgroundAsset.src}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Subtle dark overlay: separates the content from the photograph without hiding it */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#181512]/80 via-[#181512]/65 to-[#181512]/85"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Centered Editorial Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-[#C89D54] uppercase">
            {pageDef.eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-[1.08] text-[#FAF7F2] sm:text-5xl">
            {pageDef.headline}
          </h1>
          <p className="text-base leading-relaxed text-[#FAF7F2]/85 sm:text-lg">
            {pageDef.subheadline}
          </p>
        </div>

        {/* Centered Form Container without empty columns or sidebars */}
        <div className="mx-auto max-w-3xl transition-opacity duration-500 ease-out motion-reduce:transition-none">
          <div className="rounded-lg shadow-2xl shadow-black/40 overflow-hidden">
            <Suspense
              fallback={
                <div className="rounded-lg border border-[#1C1917]/12 bg-[#FAF7F2] p-10 text-sm text-[#57534E]">
                  Loading inquiry form...
                </div>
              }
            >
              <QuoteForm defaultInquiryType="general_inquiry" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

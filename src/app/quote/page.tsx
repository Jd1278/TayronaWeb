import type { Metadata } from "next";
import { Suspense } from "react";
import { getPageDefinition } from "@/content";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { ContactBlock } from "@/components/sections/ContactBlock";

const pageDef = getPageDefinition("quote");

export const metadata: Metadata = {
  title: pageDef.title,
  description: pageDef.seoDescription,
};

export default function QuotePage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-[#5E1914] uppercase">
            {pageDef.eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-[1.08] text-[#1C1917] sm:text-5xl">
            {pageDef.headline}
          </h1>
          <p className="text-base leading-relaxed text-[#57534E] sm:text-lg">
            {pageDef.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="rounded-lg border border-[#1C1917]/12 bg-[#FAF7F2] p-10 text-sm text-[#57534E]">
                  Loading request form...
                </div>
              }
            >
              <QuoteForm />
            </Suspense>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <ContactBlock />

            <div className="rounded-lg border border-[#1C1917]/12 bg-[#FAF7F2] p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#5E1914] uppercase">
                How Requests Work
              </p>
              <ol className="mt-4 space-y-3 text-xs leading-relaxed text-[#57534E]">
                <li>
                  <strong className="text-[#1C1917]">1. Select Product or Service:</strong>{" "}
                  Choose one of our four fixed-price Graze Boxes ($39–$130 CAD) or select custom event catering / Food Truck charter.
                </li>
                <li>
                  <strong className="text-[#1C1917]">2. Share Event Context:</strong>{" "}
                  Provide your preferred date, location in Toronto or the GTA, and estimated quantity or guest count.
                </li>
                <li>
                  <strong className="text-[#1C1917]">3. Direct Concierge Confirmation:</strong>{" "}
                  Our team reviews availability and replies directly to finalize your order or custom proposal.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

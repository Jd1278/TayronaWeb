"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import type { FAQ } from "@/types/content";

interface FAQAccordionProps {
  faqs: FAQ[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FAQAccordion({
  faqs,
  eyebrow = "Essential Information",
  title = "Frequently Asked Questions",
  description = "Clear answers regarding our signature Graze Boxes, custom catering inquiries, and Food Truck bookings across Toronto and the GTA.",
}: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="border-t border-[#1C1917]/10 bg-[#F3EFE6] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Header + Relocated "Have Another Question?" Directly Below Paragraph */}
          <div className="flex flex-col items-start space-y-4 lg:col-span-5">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#5E1914] uppercase">
              {eyebrow}
            </p>
            <h2 className="font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#1C1917] sm:text-4xl lg:text-[42px]">
              {title}
            </h2>
            {description && (
              <p className="pt-1 text-base leading-relaxed text-[#57534E] sm:text-[17px]">
                {description}
              </p>
            )}

            <div className="pt-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border-b border-[#5E1914] pb-1.5 text-xs font-semibold tracking-[0.18em] text-[#1C1917] uppercase transition-colors hover:border-[#1C1917] hover:text-[#5E1914]"
              >
                <span>Have Another Question?</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Accordion List */}
          <div className="divide-y divide-[#1C1917]/12 border-y border-[#1C1917]/12 lg:col-span-7">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5 sm:py-6">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      className="flex w-full items-start justify-between gap-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5E1914]"
                    >
                      <span className="font-serif text-xl leading-snug text-[#1C1917] sm:text-2xl">
                        {faq.question}
                      </span>
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#1C1917]/20 text-[#5E1914]">
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      className="mt-3 pr-10 text-sm leading-relaxed text-[#57534E] sm:text-base"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

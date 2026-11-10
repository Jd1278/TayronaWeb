"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import type { FAQ } from "@/types/content";

interface HomeFAQSectionProps {
  faqs: FAQ[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function HomeFAQSection({
  faqs,
  eyebrow = "Essential Information",
  title = "Frequently Asked Questions",
  description = "Clear answers regarding our signature Graze Boxes, custom catering inquiries, and Food Truck bookings across Toronto and the GTA.",
}: HomeFAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="border-t border-[#FAF7F2]/10 bg-[#1C1917] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        {/* 1. Título / Encabezado de FAQ */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-[#C89D54] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#FAF7F2]/75 sm:text-base">
            {description}
          </p>
        </div>

        {/* 2. Preguntas Frecuentes (Lista vertical limpia sin interferencia lateral) */}
        <div className="mt-14 divide-y divide-[#FAF7F2]/12 border-y border-[#FAF7F2]/15">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 sm:py-7">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-panel-${faq.id}`}
                    className="flex w-full items-start justify-between gap-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89D54]"
                  >
                    <span className="font-serif text-xl leading-snug text-[#FAF7F2] sm:text-2xl">
                      {faq.question}
                    </span>
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#FAF7F2]/25 text-[#C89D54] transition-colors hover:border-[#C89D54]">
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
                    id={`home-faq-panel-${faq.id}`}
                    role="region"
                    className="mt-4 pr-10 text-sm leading-relaxed text-[#FAF7F2]/75 sm:text-base"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3. Texto "Have another questions" debajo de las preguntas + 4. Botón o enlace de contacto debajo */}
        <div className="mt-14 flex flex-col items-center rounded-lg border border-[#FAF7F2]/15 bg-[#181512] px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="font-serif text-2xl text-[#FAF7F2] sm:text-3xl">
            Have another questions?
          </p>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#FAF7F2]/75">
            Our culinary team is happy to guide you through custom grazing tables, corporate menus, dietary accommodations, and Food Truck availability.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.link/vimg6x"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-md bg-[#5E1914] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#C89D54] hover:text-[#181512]"
            >
              <span>Contact Tayrona Catering</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://wa.link/vimg6x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-[#FAF7F2]/30 px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:border-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#181512]"
            >
              Request a Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { getSiteConfig } from "@/content";

export function CTASection() {
  const siteConfig = getSiteConfig();

  return (
    <section className="border-t border-[#1C1917]/10 bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-lg border border-[#1C1917]/15 bg-[#F3EFE6] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[#5E1914] uppercase">
                Tayrona Catering • Toronto & GTA
              </p>
              <h2 className="font-serif text-3xl leading-[1.12] text-[#1C1917] sm:text-4xl lg:text-5xl">
                Ready to Order a Graze Box or Plan Your Next Event?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-[#57534E]">
                Initiate an order request for our signature charcuterie boxes, or request a tailored proposal for Corporate Catering, Private Celebrations, Grazing Tables, or our Food Truck on Wheels.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 lg:col-span-5">
              <Link
                href="/quote?type=graze_box_order"
                className="group flex items-center justify-between rounded-md bg-[#5E1914] px-6 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#1C1917]"
              >
                <span>Request a Graze Box</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://w.app/qxemtu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-md bg-[#1C1917] px-6 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#5E1914]"
              >
                <span>Request Catering or Grazing Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://w.app/qxemtu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-md border border-[#1C1917] bg-transparent px-6 py-4 text-xs font-semibold tracking-[0.18em] text-[#1C1917] uppercase transition-colors hover:bg-[#1C1917] hover:text-[#FAF7F2]"
              >
                <span>Inquire About the Food Truck</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#1C1917]/10 pt-4 text-xs text-[#57534E]">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-1.5 font-medium text-[#1C1917] hover:text-[#5E1914]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#5E1914]" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={siteConfig.contact.emailHref}
                  className="inline-flex items-center gap-1.5 font-medium text-[#1C1917] hover:text-[#5E1914]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#5E1914]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

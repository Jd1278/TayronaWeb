"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import type { SiteConfig } from "@/types/content";

interface MobileNavigationProps {
  siteConfig: SiteConfig;
}

export function MobileNavigation({ siteConfig }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="tayrona-mobile-drawer"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="rounded-md inline-flex h-11 w-11 items-center justify-center border border-[#1C1917]/15 bg-[#FAF7F2] text-[#1C1917] transition-colors hover:border-[#5E1914] hover:text-[#5E1914] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div
          id="tayrona-mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-[73px] bottom-0 z-50 flex flex-col justify-between overflow-y-auto border-t border-[#1C1917]/10 bg-[#FAF7F2] px-6 py-8 shadow-2xl"
        >
          <div className="space-y-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#5E1914] uppercase">
              Tayrona Catering • Toronto / GTA
            </p>
            <nav aria-label="Mobile primary navigation" className="flex flex-col divide-y divide-[#1C1917]/10">
              <Link
                href="/"
                className={`py-4 font-serif text-2xl transition-colors ${
                  pathname === "/" ? "text-[#5E1914]" : "text-[#1C1917] hover:text-[#5E1914]"
                }`}
              >
                Home
              </Link>
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-4 font-serif text-2xl transition-colors ${
                      isActive ? "text-[#5E1914]" : "text-[#1C1917] hover:text-[#5E1914]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-8 space-y-5 border-t border-[#1C1917]/10 pt-6">
            <Link
              href={siteConfig.primaryCta.href}
              className="rounded-md flex w-full items-center justify-center gap-2 bg-[#5E1914] px-6 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#1C1917]"
            >
              <span>{siteConfig.primaryCta.label}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="flex flex-col gap-2 text-sm text-[#57534E]">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 font-medium text-[#1C1917] hover:text-[#5E1914]"
              >
                <Phone className="h-4 w-4 text-[#5E1914]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.contact.emailHref}
                className="text-xs text-[#57534E] underline-offset-4 hover:text-[#1C1917] hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

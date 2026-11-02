"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronRight, Phone, Mail, ArrowUpRight } from "lucide-react";
import type { SiteConfig } from "@/types/content";

interface MobileNavigationProps {
  siteConfig: SiteConfig;
}

const MOBILE_NAV_ITEMS = [
  { label: "Graze Boxes", href: "/graze-boxes" },
  { label: "Catering", href: "/catering" },
  { label: "Food Truck", href: "/food-truck" },
  { label: "Festivals", href: "/festivals" },
  { label: "Lunches", href: "/catering#sub-corporate-lunches" },
  { label: "Desserts", href: "/catering#sub-buffets" },
] as const;

export function MobileNavigation({ siteConfig }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Lock body scroll and listen for Escape key when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeMenu();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, closeMenu]);

  return (
    <>
      {/* Mobile Hamburger Trigger Button (Morphs into X on toggle) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="tayrona-mobile-drawer"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="group relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-[#1C1917]/15 bg-[#FAF7F2] p-2.5 text-[#1C1917] transition-all duration-300 hover:border-[#5E1914] hover:text-[#5E1914] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
      >
        <span
          className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
            isOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Backdrop Scrim Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#181512]/60 backdrop-blur-xs transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Off-Canvas Navigation Drawer Panel */}
      <div
        id="tayrona-mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-[380px] sm:max-w-[420px] flex-col justify-between overflow-y-auto bg-[#FAF7F2] text-[#1C1917] shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header: Brand Emblem + Explicit Close Button */}
        <div className="flex h-[72px] items-center justify-between border-b border-[#1C1917]/10 px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
          >
            <div className="relative h-9 w-10 shrink-0">
              <Image
                src="/images/logos/Logo tayrona catering.png"
                alt="Tayrona Catering logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-medium tracking-tight text-[#1C1917]">
                Tayrona
              </span>
              <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C89D54] uppercase">
                Artisanal Hospitality
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="rounded-md inline-flex h-10 w-10 items-center justify-center border border-[#1C1917]/15 bg-[#FAF7F2] text-[#1C1917] transition-colors hover:border-[#5E1914] hover:text-[#5E1914] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Primary Navigation Menu: Starts Directly With the 6 Options */}
        <nav
          aria-label="Mobile primary navigation"
          className="flex-1 overflow-y-auto py-2"
        >
          <ul className="divide-y divide-[#1C1917]/10">
            {MOBILE_NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (!item.href.includes("#") && pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between px-6 py-4.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914] ${
                      isActive
                        ? "bg-[#5E1914]/[0.05] text-[#5E1914] font-semibold"
                        : "text-[#1C1917] hover:bg-[#5E1914]/[0.03] hover:text-[#5E1914]"
                    }`}
                  >
                    <span className="font-serif text-2xl tracking-tight sm:text-[26px]">
                      {item.label}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${
                        isActive ? "text-[#5E1914]" : "text-[#C89D54]"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Action & Contact Footer */}
        <div className="border-t border-[#1C1917]/10 bg-[#FAF7F2] px-6 pt-6 pb-8 space-y-5">
          {/* Main Action CTA Button (WhatsApp Direct Quote) */}
          <a
            href="https://w.app/qxemtu"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md flex w-full items-center justify-center gap-2.5 bg-[#5E1914] px-6 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase shadow-sm transition-colors duration-300 hover:bg-[#1C1917] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
          >
            <span>{siteConfig.primaryCta.label}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Contact Details & Service Area */}
          <div className="space-y-2.5 pt-1 text-xs text-[#57534E]">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-2.5 font-medium text-[#1C1917] transition-colors hover:text-[#5E1914]"
            >
              <Phone className="h-3.5 w-3.5 text-[#5E1914]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.contact.emailHref}
              className="flex items-center gap-2.5 text-[#57534E] transition-colors hover:text-[#5E1914]"
            >
              <Mail className="h-3.5 w-3.5 text-[#5E1914]" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <p className="pt-2 text-[10px] font-semibold tracking-[0.2em] text-[#C89D54] uppercase">
              {siteConfig.contact.serviceArea}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

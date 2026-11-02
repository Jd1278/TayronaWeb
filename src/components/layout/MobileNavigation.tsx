"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronRight } from "lucide-react";
import type { SiteConfig } from "@/types/content";

interface MobileNavigationProps {
  siteConfig: SiteConfig;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "graze-boxes",
    label: "Graze Boxes",
    href: "/graze-boxes",
  },
  {
    id: "catering",
    label: "Catering",
    href: "/catering",
    subItems: [
      { label: "Corporate Catering", href: "/catering#sub-corporate-catering" },
      { label: "Private Catering", href: "/catering#sub-private-catering" },
      { label: "Grazing Tables", href: "/catering#grazing-tables" },
      { label: "All Catering Offerings", href: "/catering" },
    ],
  },
  {
    id: "food-truck",
    label: "Food Truck",
    href: "/food-truck",
    subItems: [
      { label: "Private Event Bookings", href: "/food-truck#sub-private-truck-charter" },
      { label: "Corporate & Team Events", href: "/food-truck#sub-corporate-truck" },
      { label: "All Food Truck Charters", href: "/food-truck" },
    ],
  },
  {
    id: "festivals",
    label: "Festivals",
    href: "/festivals",
  },
  {
    id: "lunches",
    label: "Lunches",
    href: "/catering#sub-corporate-lunches",
  },
  {
    id: "desserts",
    label: "Desserts",
    href: "/catering#sub-buffets",
  },
];

export function MobileNavigation({ siteConfig }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setExpandedId(null);
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

  const toggleSubmenu = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* 1. Mobile Header Hamburger Button (Closed State) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="tayrona-mobile-menu"
        aria-label="Open navigation menu"
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-[#1C1917]/15 bg-[#FAF7F2] p-2.5 text-[#1C1917] transition-colors hover:border-[#5E1914] hover:text-[#5E1914] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
      >
        <span className="h-[2px] w-5 rounded-full bg-current transition-all" />
        <span className="h-[2px] w-5 rounded-full bg-current transition-all" />
        <span className="h-[2px] w-5 rounded-full bg-current transition-all" />
      </button>

      {/* 2. Full-Screen Minimalist White Navigation Panel (Open State - Reference Pattern) */}
      <div
        id="tayrona-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-50 flex h-[100dvh] w-full flex-col justify-between overflow-y-auto bg-white text-[#1C1917] transition-all duration-300 ease-out motion-reduce:transition-none ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {/* Panel Header: Brand Identity Left + Clean Minimalist X Close Right */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 sm:px-10 sm:pt-8">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
          >
            <div className="relative h-11 w-12 shrink-0">
              <Image
                src="/images/logos/Logo tayrona catering.png"
                alt="Tayrona Catering"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-medium leading-none tracking-tight text-[#1C1917]">
                Tayrona
              </span>
              <span className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-[#C89D54] uppercase">
                Catering
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#1C1917] transition-colors hover:bg-black/5 hover:text-[#5E1914] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
          >
            <X className="h-7 w-7" strokeWidth={1.5} />
          </button>
        </div>

        {/* Panel Body: Editorial Typography with Ample Vertical Spacing */}
        <nav
          aria-label="Mobile primary navigation"
          className="flex flex-1 flex-col justify-center px-8 py-8 sm:px-12 sm:py-12"
        >
          <ul className="space-y-7 sm:space-y-9">
            {NAVIGATION_ITEMS.map((item) => {
              const hasSub = Boolean(item.subItems && item.subItems.length > 0);
              const isExpanded = expandedId === item.id;
              const isActive =
                pathname === item.href ||
                (!item.href.includes("#") && pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.id} className="group">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`font-serif text-[32px] sm:text-4xl tracking-tight leading-tight transition-colors ${
                        isActive
                          ? "text-[#5E1914] font-medium"
                          : "text-[#1C1917] hover:text-[#5E1914]"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {/* Arrow chevron displayed ONLY for items with secondary submenus (Catering, Food Truck) */}
                    {hasSub && (
                      <button
                        type="button"
                        onClick={() => toggleSubmenu(item.id)}
                        aria-expanded={isExpanded}
                        aria-label={`Toggle ${item.label} subcategories`}
                        className="p-2 text-[#1C1917]/70 transition-colors hover:text-[#5E1914]"
                      >
                        <ChevronRight
                          className={`h-7 w-7 transition-transform duration-300 ${
                            isExpanded ? "rotate-90 text-[#5E1914]" : ""
                          }`}
                          strokeWidth={1.5}
                        />
                      </button>
                    )}
                  </div>

                  {/* Secondary Submenu Accordion */}
                  {hasSub && isExpanded && item.subItems && (
                    <ul className="mt-3.5 space-y-3 border-l-2 border-[#5E1914]/25 pl-4 py-1 animate-in fade-in duration-300">
                      {item.subItems.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={closeMenu}
                            className="block font-sans text-base sm:text-lg text-[#57534E] transition-colors hover:text-[#5E1914]"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Panel Footer: Big Black MENUS Button (Kiss the Cook Pattern) */}
        <div className="px-8 pb-10 sm:px-12 sm:pb-12 pt-4 space-y-4">
          <Link
            href="/catering"
            onClick={closeMenu}
            className="block w-full bg-black py-4.5 sm:py-5 text-center text-xs sm:text-sm font-semibold tracking-[0.24em] text-white uppercase transition-colors hover:bg-[#5E1914] active:bg-[#1C1917] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Menus
          </Link>

          <div className="flex items-center justify-between text-[11px] text-[#57534E]">
            <a
              href={siteConfig.contact.phoneHref}
              className="hover:text-[#5E1914] transition-colors"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href="https://w.app/qxemtu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#5E1914] hover:underline uppercase tracking-wider"
            >
              WhatsApp Quote →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

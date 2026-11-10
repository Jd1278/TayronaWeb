import Image from "next/image";
import Link from "next/link";
import { getMediaAsset, getSiteConfig } from "@/content";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const siteConfig = getSiteConfig();
  const logoAsset = getMediaAsset("brand-logo-png");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1C1917]/10 bg-[#FAF7F2]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-12">
        {/* Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5E1914]"
        >
          <div className="relative h-10 w-11 shrink-0 overflow-hidden sm:h-11 sm:w-12">
            <Image
              src={logoAsset.src}
              alt={logoAsset.alt}
              fill
              sizes="48px"
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl leading-none font-medium tracking-tight text-[#1C1917] sm:text-2xl">
              Tayrona
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-[#5E1914] uppercase">
              Catering • Toronto
            </span>
          </div>
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex xl:gap-10"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 text-xs font-medium tracking-[0.16em] text-[#1C1917]/85 uppercase transition-colors hover:text-[#5E1914] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5E1914]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="text-xs font-medium tracking-[0.1em] text-[#57534E] transition-colors hover:text-[#1C1917] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5E1914]"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href="https://wa.link/vimg6x"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md inline-flex items-center justify-center bg-[#5E1914] px-5 py-3 text-[11px] font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors duration-300 hover:bg-[#1C1917] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
          >
            {siteConfig.primaryCta.label}
          </a>
        </div>

        {/* Mobile Header Actions & Drawer Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 lg:hidden">
          <a
            href="https://wa.link/vimg6x"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[#5E1914] bg-[#5E1914] px-3.5 py-2 text-[10px] font-semibold tracking-[0.14em] text-[#FAF7F2] uppercase shadow-xs transition-colors hover:bg-[#1C1917] hover:border-[#1C1917] sm:px-4 sm:py-2.5 sm:text-[11px]"
          >
            Quote
          </a>
          <MobileNavigation siteConfig={siteConfig} />
        </div>
      </div>
    </header>
  );
}

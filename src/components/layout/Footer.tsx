import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getMediaAsset, getSiteConfig } from "@/content";

export function Footer() {
  const siteConfig = getSiteConfig();
  const products = getAllProducts();
  const logoAsset = getMediaAsset("brand-logo-png");

  return (
    <footer className="border-t border-[#FAF7F2]/10 bg-[#181512] text-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Statement */}
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3.5">
              <div className="relative h-12 w-14 shrink-0">
                <Image
                  src={logoAsset.src}
                  alt={logoAsset.alt}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-serif text-2xl tracking-tight text-[#FAF7F2]">
                  Tayrona Catering
                </p>
                <p className="text-[10px] font-semibold tracking-[0.22em] text-[#C89D54] uppercase">
                  {siteConfig.contact.serviceArea}
                </p>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#FAF7F2]/75">
              {siteConfig.editorialStatement}
            </p>
            <div className="pt-2">
              <a
                href="https://wa.link/vimg6x"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md inline-flex items-center justify-center border border-[#C89D54]/50 bg-[#5E1914] px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:border-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#181512]"
              >
                Start an Order or Quote
              </a>
            </div>
          </div>

          {/* Column 2: Signature Graze Boxes */}
          <div className="space-y-4 lg:col-span-3">
            <h2 className="text-[11px] font-semibold tracking-[0.22em] text-[#C89D54] uppercase">
              Signature Graze Boxes
            </h2>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/80">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.slug}`}
                    className="group flex items-baseline justify-between gap-2 transition-colors hover:text-[#FAF7F2]"
                  >
                    <span className="underline-offset-4 group-hover:underline">
                      {product.name}
                    </span>
                    <span className="text-xs font-medium text-[#C89D54]">
                      ${product.priceCAD} CAD
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/graze-boxes"
                  className="text-xs font-semibold tracking-[0.14em] text-[#FAF7F2] uppercase underline-offset-4 hover:underline"
                >
                  View All Graze Boxes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Navigation */}
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-[11px] font-semibold tracking-[0.22em] text-[#C89D54] uppercase">
              Hospitality
            </h2>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/80">
              <li>
                <Link href="/catering" className="transition-colors hover:text-[#FAF7F2]">
                  Corporate & Private Catering
                </Link>
              </li>
              <li>
                <Link href="/catering#grazing-tables" className="transition-colors hover:text-[#FAF7F2]">
                  Grazing Tables
                </Link>
              </li>
              <li>
                <Link href="/food-truck" className="transition-colors hover:text-[#FAF7F2]">
                  Food Truck on Wheels
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="transition-colors hover:text-[#FAF7F2]">
                  Festivals & Specials
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.link/vimg6x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FAF7F2]"
                >
                  Request a Quote
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#FAF7F2]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Confirmed Contact */}
          <div className="space-y-4 lg:col-span-3">
            <h2 className="text-[11px] font-semibold tracking-[0.22em] text-[#C89D54] uppercase">
              Direct Contact
            </h2>
            <dl className="space-y-3 text-sm text-[#FAF7F2]/80">
              <div>
                <dt className="text-xs text-[#FAF7F2]/50">Service Area</dt>
                <dd className="mt-0.5 font-medium text-[#FAF7F2]">
                  {siteConfig.legalArea}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#FAF7F2]/50">Telephone</dt>
                <dd className="mt-0.5">
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="font-medium text-[#FAF7F2] transition-colors hover:text-[#C89D54]"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#FAF7F2]/50">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href={siteConfig.contact.emailHref}
                    className="break-all text-[#FAF7F2] underline-offset-4 transition-colors hover:text-[#C89D54] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#FAF7F2]/50">Instagram</dt>
                <dd className="mt-0.5">
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#C89D54] underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#FAF7F2]/10 pt-8 text-xs text-[#FAF7F2]/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Tayrona Catering. Serving Toronto & the Greater Toronto Area.</p>
          <p className="tracking-wide">
            All Graze Box prices displayed in Canadian Dollars (CAD).
          </p>
        </div>
      </div>
    </footer>
  );
}

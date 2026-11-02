import Image from "next/image";
import { getHomeMarqueeItems } from "@/content";

export function HomeBrandCarousel() {
  const items = getHomeMarqueeItems();
  const loopItems = [...items, ...items];

  return (
    <section
      aria-label="Tayrona Catering Hospitality & Partners"
      className="relative overflow-hidden border-b border-[#FAF7F2]/12 bg-[#5E1914] py-5 sm:py-6"
    >
      <div className="animate-tayrona-marquee flex items-center">
        {loopItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex shrink-0 items-center"
          >
            {item.logoSrc ? (
              <div className="px-8 sm:px-12">
                <Image
                  src={item.logoSrc}
                  alt={item.logoAlt ?? item.label}
                  width={140}
                  height={48}
                  className="h-8 w-auto object-contain opacity-85 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ) : (
              <span className="px-6 font-serif text-base tracking-[0.08em] text-[#FAF7F2]/90 italic sm:px-9 sm:text-lg">
                {item.label}
              </span>
            )}
            <span
              aria-hidden="true"
              className="text-sm font-semibold text-[#C89D54] select-none"
            >
              ·
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

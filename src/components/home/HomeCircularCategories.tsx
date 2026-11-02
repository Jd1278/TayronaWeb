import Image from "next/image";
import Link from "next/link";
import { getHomeCircularCategories, getMediaAsset } from "@/content";

export function HomeCircularCategories() {
  const categories = getHomeCircularCategories();

  return (
    <section className="border-b border-[#1C1917]/10 bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-[#5E1914] uppercase">
            Curated Culinary Experiences
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-[#1C1917] sm:text-4xl lg:text-5xl">
            Explore by Culinary Category
          </h2>
        </div>

        {/* 6 Large Circular Category Links */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-6 lg:gap-x-6">
          {categories.map((cat) => {
            const media = getMediaAsset(cat.mediaId);
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group flex flex-col items-center text-center focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#5E1914]"
              >
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-[#1C1917]/15 bg-[#F3EFE6] p-1.5 shadow-sm transition-all duration-500 group-hover:border-[#5E1914] group-hover:shadow-md sm:h-44 sm:w-44 lg:h-40 lg:w-40 xl:h-44 xl:w-44">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 220px"
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                        media.objectPosition ?? "object-center"
                      }`}
                    />
                  </div>
                </div>

                <h3 className="mt-5 font-serif text-2xl text-[#1C1917] transition-colors duration-300 group-hover:text-[#5E1914] sm:text-[26px]">
                  {cat.title}
                </h3>
                <span className="mt-1 text-[11px] font-medium tracking-[0.14em] text-[#57534E] uppercase">
                  {cat.subtitle}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

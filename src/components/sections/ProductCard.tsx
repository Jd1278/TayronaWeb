import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getMediaAsset } from "@/content";
import { CuratedImage } from "@/components/ui/CuratedImage";
import type { Product } from "@/types/content";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const media = getMediaAsset(product.primaryMediaId);

  return (
    <article className="group flex flex-col justify-between border-b border-[#1C1917]/15 pb-8 transition-colors">
      <div>
        {/* Editorial Number & Price Tag */}
        <div className="mb-3 flex items-baseline justify-between text-xs">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#57534E] uppercase">
            No. 0{index + 1}
          </span>
          <span className="font-semibold tracking-[0.12em] text-[#5E1914] uppercase">
            ${product.priceCAD} {product.currency}
          </span>
        </div>

        {/* Framed Vertical Product Photography */}
        <Link
          href={`/product/${product.slug}`}
          className="rounded-lg block overflow-hidden border border-[#1C1917]/10 bg-[#F3EFE6] p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5E1914]"
        >
          <CuratedImage
            asset={media}
            aspectClassName="aspect-[3/4]"
            imageClassName="group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 280px"
          />
        </Link>

        {/* Product Title & Confirmed Composition */}
        <div className="mt-5 space-y-2.5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-2xl leading-snug text-[#1C1917] transition-colors group-hover:text-[#5E1914]">
              <Link href={`/product/${product.slug}`}>{product.name}</Link>
            </h3>
          </div>

          <ul className="space-y-1 pt-1 text-xs leading-relaxed text-[#57534E]">
            {product.confirmedHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#5E1914]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Editorial Actions */}
      <div className="mt-6 flex items-center gap-3 pt-2">
        <Link
          href={`/quote?type=graze_box_order&product=${product.slug}`}
          className="rounded-md inline-flex flex-1 items-center justify-center bg-[#1C1917] px-4 py-3 text-[11px] font-semibold tracking-[0.16em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#5E1914] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914]"
        >
          {product.ctaLabel}
        </Link>
        <Link
          href={`/product/${product.slug}`}
          aria-label={`View details for ${product.name}`}
          className="rounded-md inline-flex items-center justify-center border border-[#1C1917]/20 px-3.5 py-3 text-[11px] font-semibold tracking-[0.14em] text-[#1C1917] uppercase transition-colors hover:border-[#1C1917] hover:bg-[#F3EFE6]"
        >
          <span>Details</span>
          <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

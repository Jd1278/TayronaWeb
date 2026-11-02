import type { Product } from "@/types/content";
import { ProductCard } from "./ProductCard";
import { SectionHeader } from "./SectionHeader";

interface ProductGridProps {
  products: Product[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showSectionHeader?: boolean;
  actionLabel?: string;
  actionHref?: string;
}

export function ProductGrid({
  products,
  eyebrow = "Artisanal Charcuterie • Fixed-Price CAD",
  title = "Signature Graze Boxes",
  description = "Four curated sizes handcrafted with cured meats, artisanal cheeses, seasonal fruits, and accompaniments. Select a box below to initiate an order request or view presentation details.",
  showSectionHeader = true,
  actionLabel,
  actionHref,
}: ProductGridProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {showSectionHeader && (
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              actionLabel={actionLabel}
              actionHref={actionHref}
            />
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* Architectural Note on Direct Order vs Custom Grazing Quote */}
        <div className="rounded-lg mt-12 flex flex-col justify-between gap-4 border border-[#1C1917]/10 bg-[#F3EFE6] px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#5E1914] uppercase">
              Planning for a Larger Group or Corporate Office?
            </p>
            <p className="text-sm text-[#57534E]">
              Combine multiple Graze Boxes or inquire about a custom multi-foot Grazing Table styled on-site across Toronto and the GTA.
            </p>
          </div>
          <a
            href="/quote?type=grazing_table"
            className="rounded-md shrink-0 border border-[#1C1917] px-5 py-2.5 text-center text-[11px] font-semibold tracking-[0.16em] text-[#1C1917] uppercase transition-colors hover:bg-[#1C1917] hover:text-[#FAF7F2]"
          >
            Inquire About Grazing Tables
          </a>
        </div>
      </div>
    </section>
  );
}

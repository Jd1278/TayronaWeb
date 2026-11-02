import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  getAllProducts,
  getMediaAsset,
  getProductBySlug,
  getSiteConfig,
} from "@/content";
import { CuratedImage } from "@/components/ui/CuratedImage";
import { ProductCard } from "@/components/sections/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} ($${product.priceCAD} ${product.currency})`,
    description: `${product.name} by Tayrona Catering in Toronto & the GTA — $${product.priceCAD} ${product.currency}. ${product.confirmedHighlights.join(", ")}.`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const primaryMedia = getMediaAsset(product.primaryMediaId);
  const secondaryMediaList = product.galleryMediaIds
    .filter((id) => id !== product.primaryMediaId)
    .map((id) => getMediaAsset(id));
  const otherProducts = getAllProducts().filter((p) => p.slug !== product.slug);
  const siteConfig = getSiteConfig();

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/graze-boxes"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#57534E] uppercase transition-colors hover:text-[#5E1914]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Graze Boxes</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Product Photography */}
            <div className="space-y-4 lg:col-span-6">
              <div className="rounded-lg border border-[#1C1917]/12 bg-[#F3EFE6] p-3 sm:p-4">
                <CuratedImage
                  asset={primaryMedia}
                  priority
                  aspectClassName="aspect-[3/4]"
                  sizes="(max-width: 1024px) 92vw, 560px"
                />
              </div>

              {secondaryMediaList.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {secondaryMediaList.slice(0, 2).map((secAsset) => (
                    <div
                      key={secAsset.id}
                      className="rounded-lg border border-[#1C1917]/10 bg-[#F3EFE6] p-2"
                    >
                      <CuratedImage
                        asset={secAsset}
                        aspectClassName="aspect-[4/3]"
                        sizes="(max-width: 1024px) 45vw, 260px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Confirmed Product Details & Order Flow Initiation */}
            <div className="space-y-8 lg:col-span-6 lg:sticky lg:top-28">
              <div className="space-y-3 border-b border-[#1C1917]/12 pb-6">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-[#5E1914] uppercase">
                  Tayrona Signature Charcuterie • {siteConfig.contact.serviceArea}
                </p>
                <h1 className="font-serif text-4xl leading-tight text-[#1C1917] sm:text-5xl">
                  {product.name}
                </h1>
                <p className="pt-1 font-sans text-2xl font-semibold tracking-wide text-[#5E1914]">
                  ${product.priceCAD} {product.currency}
                </p>
              </div>

              {/* Confirmed Presentation Highlights */}
              <div className="space-y-3.5">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-[#1C1917] uppercase">
                  Confirmed Presentation Highlights
                </h2>
                <ul className="space-y-2.5 text-sm text-[#57534E]">
                  {product.confirmedHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5E1914]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Honest Specification & Ordering Flow Box */}
              <div className="rounded-lg space-y-3 border border-[#1C1917]/12 bg-[#F3EFE6] p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase">
                  Order Request & Customization Notes
                </p>
                <p className="text-sm leading-relaxed text-[#57534E]">
                  {product.pendingSpecificationsNote}
                </p>
                <p className="text-xs text-[#57534E]">
                  Exact portion guidance, dietary preferences, and delivery/pickup scheduling in Toronto & the GTA are confirmed directly with our team when you submit your order request.
                </p>
              </div>

              {/* Primary CTA to Initiate Request with Preselected Product */}
              <div className="space-y-3 pt-2">
                <Link
                  href={`/quote?type=graze_box_order&product=${product.slug}`}
                  className="group flex w-full items-center justify-center gap-3 bg-[#5E1914] px-8 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#1C1917]"
                >
                  <span>Request {product.name} — ${product.priceCAD} CAD</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <p className="text-center text-xs text-[#57534E]">
                  Need multiple boxes or a custom event spread?{" "}
                  <Link
                    href="/quote?type=corporate_catering"
                    className="font-medium text-[#1C1917] underline underline-offset-4 hover:text-[#5E1914]"
                  >
                    Request a custom catering quote
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Signature Graze Boxes */}
      <section className="border-t border-[#1C1917]/10 bg-[#F3EFE6]/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-10 font-serif text-3xl text-[#1C1917]">
            Explore Other Graze Box Sizes
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {otherProducts.map((item, idx) => (
              <ProductCard key={item.id} product={item} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

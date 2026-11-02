import Image from "next/image";
import type { MediaAsset } from "@/types/content";

interface CuratedImageProps {
  asset: MediaAsset;
  priority?: boolean;
  aspectClassName?: string;
  containerClassName?: string;
  imageClassName?: string;
  sizes?: string;
  enforceBoundedResolution?: boolean;
}

/**
 * CuratedImage enforces the visual audit rules across the entire site:
 * 1. Applies asset-specific `objectPosition` and `scaleClass` so unwanted edge artifacts
 *    (such as top-of-frame tabletop items in signature-graze.jpeg) are cleanly cropped out.
 * 2. Prevents low-resolution 375px AVIF assets from being stretched across full-bleed viewports.
 * 3. Preserves intentional editorial aspect ratios and subtle hover transitions.
 */
export function CuratedImage({
  asset,
  priority = false,
  aspectClassName = "aspect-[4/5]",
  containerClassName = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  enforceBoundedResolution = false,
}: CuratedImageProps) {
  const objectPos = asset.objectPosition ?? "object-center";
  const scale = asset.scaleClass ?? "";
  const isCompactAsset = asset.width <= 400;

  return (
    <div
      className={`relative overflow-hidden bg-[#EFECE6] ${aspectClassName} ${
        enforceBoundedResolution && isCompactAsset ? "mx-auto w-full max-w-[380px]" : "w-full"
      } ${containerClassName}`}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority}
        sizes={isCompactAsset ? "(max-width: 768px) 90vw, 380px" : sizes}
        className={`object-cover transition-transform duration-700 ease-out ${objectPos} ${scale} ${imageClassName}`}
      />
    </div>
  );
}

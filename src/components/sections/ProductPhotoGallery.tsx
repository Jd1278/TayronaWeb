"use client";

import { useState } from "react";
import Image from "next/image";
import type { MediaAsset } from "@/types/content";

interface ProductPhotoGalleryProps {
  primaryMedia: MediaAsset;
  galleryMedia: MediaAsset[];
  productName: string;
}

export function ProductPhotoGallery({
  primaryMedia,
  galleryMedia,
  productName,
}: ProductPhotoGalleryProps) {
  const allImages = galleryMedia.length > 0 ? galleryMedia : [primaryMedia];
  const [activeMedia, setActiveMedia] = useState<MediaAsset>(primaryMedia);

  return (
    <div className="space-y-4">
      {/* Active Featured Image */}
      <div className="rounded-lg border border-[#1C1917]/12 bg-[#F3EFE6] p-3 sm:p-4">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-[#EFECE6]">
          <Image
            src={activeMedia.src}
            alt={activeMedia.alt || productName}
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 560px"
            className={`object-cover transition-all duration-500 ease-out ${
              activeMedia.objectPosition ?? "object-center"
            } ${activeMedia.scaleClass ?? ""}`}
          />
        </div>
      </div>

      {/* Gallery Thumbnails Grid (All Angles / Views) */}
      {allImages.length > 1 && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#5E1914] uppercase">
              Presentation Gallery ({allImages.length} Angles)
            </span>
            <span className="text-[10px] tracking-wider text-[#57534E] uppercase">
              Select to preview
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6 sm:gap-3">
            {allImages.map((asset, index) => {
              const isSelected = asset.src === activeMedia.src;
              return (
                <button
                  type="button"
                  key={asset.id}
                  onClick={() => setActiveMedia(asset)}
                  aria-label={`View photo ${index + 1} of ${allImages.length} for ${productName}`}
                  aria-current={isSelected ? "true" : undefined}
                  className={`group relative aspect-[3/4] overflow-hidden rounded-md border p-1 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E1914] ${
                    isSelected
                      ? "border-[#5E1914] ring-2 ring-[#5E1914]/30 bg-[#FAF7F2]"
                      : "border-[#1C1917]/15 bg-[#F3EFE6] hover:border-[#5E1914]/50 opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[3px]">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      sizes="(max-width: 640px) 30vw, 120px"
                      className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                        asset.objectPosition ?? "object-center"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

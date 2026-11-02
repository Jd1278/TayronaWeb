import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  actionLabel?: string;
  actionHref?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  actionLabel,
  actionHref,
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const isCentered = align === "center";

  return (
    <div
      className={`flex flex-col gap-6 ${
        isCentered
          ? "mx-auto max-w-3xl items-center text-center"
          : " md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={`space-y-3.5 ${isCentered ? "max-w-2xl" : "max-w-2xl"}`}>
        <p
          className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${
            isDark ? "text-[#C89D54]" : "text-[#5E1914]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-serif text-3xl leading-[1.12] font-normal tracking-tight sm:text-4xl lg:text-[42px] ${
            isDark ? "text-[#FAF7F2]" : "text-[#1C1917]"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`pt-1 text-base leading-relaxed sm:text-[17px] ${
              isDark ? "text-[#FAF7F2]/75" : "text-[#57534E]"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {actionLabel && actionHref && (
        <div className={isCentered ? "pt-2" : "shrink-0"}>
          <Link
            href={actionHref}
            className={`group inline-flex items-center gap-2 border-b pb-1.5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
              isDark
                ? "border-[#C89D54] text-[#FAF7F2] hover:border-[#FAF7F2] hover:text-[#C89D54]"
                : "border-[#5E1914] text-[#1C1917] hover:border-[#1C1917] hover:text-[#5E1914]"
            }`}
          >
            <span>{actionLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center justify-center px-6 py-24">
      <div className="max-w-lg space-y-6 text-center">
        <p className="text-[11px] font-semibold tracking-[0.24em] text-[#5E1914] uppercase">
          404 — Page Not Found
        </p>
        <h1 className="font-serif text-4xl text-[#1C1917] sm:text-5xl">
          This Table Has Moved.
        </h1>
        <p className="text-sm leading-relaxed text-[#57534E] sm:text-base">
          The page you are looking for is not available. Explore our signature Graze Boxes, catering services, or return to the homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="rounded-md bg-[#5E1914] px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#1C1917]"
          >
            Return Home
          </Link>
          <Link
            href="/graze-boxes"
            className="rounded-md border border-[#1C1917]/25 px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-[#1C1917] uppercase transition-colors hover:border-[#1C1917]"
          >
            Explore Graze Boxes
          </Link>
        </div>
      </div>
    </section>
  );
}

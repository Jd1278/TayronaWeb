import type { NextConfig } from "next";

/**
 * Tayrona Catering runs as a Node.js server application (`next build` + `next start`).
 *
 * Static export (`output: "export"`) is intentionally NOT supported: the roadmap
 * (Square payments, checkout, quotes, delivery, content administration) requires
 * server-side route handlers, which a static `out/` bundle cannot provide.
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

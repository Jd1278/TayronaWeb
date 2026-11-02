import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPageDefinition, getSiteConfig } from "@/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const homeMeta = getPageDefinition("home");
const siteConfig = getSiteConfig();

export const metadata: Metadata = {
  metadataBase: new URL("https://tayronacatering.ca"),
  title: {
    default: homeMeta.seoTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: homeMeta.seoDescription,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: homeMeta.seoTitle,
    description: homeMeta.seoDescription,
    url: "https://tayronacatering.ca",
    siteName: siteConfig.brandName,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/charcutery/party-graze.jpeg",
        width: 1200,
        height: 1600,
        alt: "Tayrona Catering Artisanal Graze Box",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#1C1917]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#5E1914] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:tracking-widest focus:text-[#FAF7F2] focus:uppercase"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

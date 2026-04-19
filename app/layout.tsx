import "./globals.css";
import type { Metadata } from "next";
import { Cairo, Geist_Mono, Noto_Sans, Noto_Sans_Arabic } from "next/font/google";
import HydrationSafeMegaMenu from "@/components/HydrationSafeMegaMenu";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

/** Headings (h1–h6) — applied in globals.css */
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

/** Body: Arabic first, then Latin */
const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "الأكاديمية الوطنية لمكافحة الفساد",
  description: "الذراع التدريبي والتثقيفي لهيئة الرقابة الإدارية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${cairo.variable} ${notoSansArabic.variable} ${notoSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <HydrationSafeMegaMenu />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

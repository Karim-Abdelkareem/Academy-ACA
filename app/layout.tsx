import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HydrationSafeMegaMenu from "@/components/HydrationSafeMegaMenu";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HydrationSafeMegaMenu />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

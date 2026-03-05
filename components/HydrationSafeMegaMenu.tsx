"use client";

import MegaMenu from "@/components/MegaMenu";

export default function HydrationSafeMegaMenu() {
  return (
    <div suppressHydrationWarning>
      <MegaMenu />
    </div>
  );
}


import { Suspense } from "react";
import AboutAcademyClient from "./about-academy-client";

export default function AboutAcademyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf9f7]" aria-hidden="true" />
      }
    >
      <AboutAcademyClient />
    </Suspense>
  );
}

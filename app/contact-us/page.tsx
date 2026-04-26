import { Suspense } from "react";
import ContactUsClient from "./contact-us-client";

export default function ContactUsPage() {
  return (
    <Suspense
      fallback={
        <main
          className="min-h-[50vh] bg-stone-50 py-14 lg:py-20"
          dir="rtl"
          aria-hidden="true"
        />
      }
    >
      <ContactUsClient />
    </Suspense>
  );
}

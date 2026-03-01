"use client";
import projMenu from "@/data/projects.json";
import Grad from "@/public/grad2.jpeg";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function masters() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const diploma = projMenu.sections.find((section) => section.id === "master");

  if (!diploma)
    return <p className="text-center py-20">لا توجد بيانات للدبلوم</p>;

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

      cards.forEach((card, index) => {
        const textElements = card.querySelectorAll(
          "h2, p, li, h4, span:not(.no-split)",
        );

        const split = new SplitText(textElements, {
          type: "lines, words",
          linesClass: "overflow-hidden",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "30% 80%",
            toggleActions: "play none restart reverse",
          },
        });

        tl.from(card, {
          x: index % 2 === 0 ? 100 : -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });

        tl.from(
          split.words,
          {
            x: 50,
            y: 50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.01,
            ease: "power2.inOut",
          },
          "<40%",
        );
      });
    },
    { scope: cardsContainerRef },
  );
  return (
    <div className="mx-auto px-6 lg:px-14  " dir="rtl">
      {/* هيدر البرنامج */}
      <div className="py-2 mx-auto text-center ">
        <div className="relative group w-full h-96 lg:h-120 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>

          <div className="info absolute bottom-8 right-8 z-20 space-y-4 max-w-2xl transition-all duration-1000 group-hover:translate-y-150 group-hover:translate-x-50">
            <h3 className="text-4xl w-fit font-bold text-white bg-[#d4af37] rounded-xl px-6 py-3 shadow-2xl">
              {diploma.name}
            </h3>
            <p className="text-lg font-medium text-stone-200 leading-relaxed bg-black/30 backdrop-blur-md p-4 rounded-xl border-r-4 border-[#d4af37]">
              {diploma.description}
            </p>
          </div>

          <Image
            src={Grad}
            alt={diploma.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
        </div>
      </div>

      <div
        ref={cardsContainerRef}
        className="flex flex-col items-center overflow-hidden p-5 mx-auto"
      >
        {diploma.programSections.map((section, idx) => (
          <div
            key={idx}
            className="stack-card w-full bg-white border border-stone-100 p-8 lg:p-12 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] mb-[6vh] will-change-transform transform-gpu relative group"
            style={{ zIndex: idx }}
          >
            <div className="absolute top-10 left-10 text-stone-100 text-7xl font-black group-hover:text-[#d4af37]/10 transition-colors select-none">
              {String(idx + 1).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-2 h-10 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-3xl font-bold text-stone-800 tracking-tight">
                {section.titleAr}
              </h2>
            </div>

            <div className="text-stone-700 text-lg leading-relaxed relative z-10">
              {typeof section.content === "string" && (
                <p className="text-xl text-stone-600 leading-loose font-medium bg-stone-50/50 p-6 rounded-2xl border-r-4 border-stone-200">
                  {section.content}
                </p>
              )}

              {Array.isArray(section.content) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:border-[#d4af37]/30 transition-all group/item"
                    >
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-stone-50 text-[#d4af37] group-hover/item:bg-[#d4af37] group-hover/item:text-white transition-colors font-bold">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-stone-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {typeof section.content === "object" &&
                !Array.isArray(section.content) &&
                section.content !== null && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    {section.content.duration && (
                      <div className="bg-stone-900 text-white p-8 rounded-[2rem] shadow-xl transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-4 mb-4">
                          <h4 className="text-stone-400 font-bold uppercase tracking-wider text-sm">
                            مدة الدراسة
                          </h4>
                        </div>
                        <p className="text-2xl font-bold text-[#d4af37]">
                          {section.content.duration}
                        </p>
                      </div>
                    )}

                    {section.content.credits && (
                      <div className="bg-[#d4af37] text-white p-8 rounded-[2rem] shadow-xl transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-4 mb-4">
                          <h4 className="text-white/70 font-bold uppercase tracking-wider text-sm">
                            الساعات المعتمدة
                          </h4>
                        </div>
                        <p className="text-4xl font-black">
                          {section.content.credits}{" "}
                          <span className="text-xl font-normal">ساعة</span>
                        </p>
                      </div>
                    )}
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default masters;

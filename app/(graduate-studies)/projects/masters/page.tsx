"use client";
import projMenu from "@/data/projects.json";
import Grad from "@/public/grad2.jpeg";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, Clock } from "lucide-react";

function masters() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const diploma = projMenu.sections.find((section) => section.id === "master");

  if (!diploma)
    return <p className="text-center py-20">لا توجد بيانات للدبلوم</p>;

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (infoRef.current) {
        gsap.from(infoRef.current.children, {
          y: 14,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power1.out",
        });
      }

      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 20,
          autoAlpha: 0,
          duration: 0.55,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });
    },
    { scope: cardsContainerRef },
  );
  return (
    <div className="mx-auto px-6 lg:px-10  " dir="rtl">
      {/* هيدر البرنامج */}
      <div className=" py-2 mx-auto text-center ">
        <div className="relative group w-full h-[60vh] sm:h-96 lg:h-[30rem] mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 "></div>

          <div
            ref={infoRef}
            className="info absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20 space-y-3 lg:space-y-4 w-[calc(100%-2rem)] sm:w-auto max-w-2xl transition-all duration-1000 text-right"
          >
            <h3 className="text-2xl sm:text-xl lg:text-2xl w-fit font-bold text-white bg-[#d4af37] rounded-xl px-4 py-2 lg:px-6 lg:py-3 shadow-2xl">
              {diploma.name}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg font-medium text-stone-200 leading-relaxed bg-black/30 backdrop-blur-md p-3 lg:p-4 rounded-xl border-r-4 border-[#d4af37]">
              {diploma.description}
            </p>
          </div>

          <Image
            src={Grad}
            alt={diploma.name}
            fill
            className="object-cover"
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
              <div className="w-0.5 h-10 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-3xl font-bold text-stone-800 tracking-tight">
                {section.titleAr}
              </h2>
            </div>

            <div className="text-stone-700 text-lg leading-relaxed relative z-10">
              {typeof section.content === "string" && (
                <p className="text-xl text-stone-600 leading-loose font-medium bg-stone-50/50 p-6 rounded-2xl ">
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
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-stone-100 text-[#d4af37] group-hover/item:bg-[#d4af37] group-hover/item:text-white transition-colors font-bold">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {section.content.duration && (
                      <div className="group/stat relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-[#d4af37]/60 ">
                        <span
                          aria-hidden
                          className="absolute inset-y-0 right-0 w-1 bg-linear-to-b from-[#d4af37] to-[#c9a227]"
                        />
                        <div className="flex items-center gap-4">
                          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15 text-[#c9a227] transition-transform duration-300 group-hover/stat:scale-110">
                            <CalendarDays
                              className="size-6"
                              strokeWidth={2}
                              aria-hidden
                            />
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold tracking-wider text-stone-400 uppercase">
                              مدة الدراسة
                            </p>
                            <p className="text-xl font-bold text-stone-900 leading-tight mt-0.5">
                              {section.content.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {section.content.credits && (
                      <div className="group/stat relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 text-white p-6 transition-all duration-300 ">
                        <span
                          aria-hidden
                          className="absolute inset-y-0 right-0 w-1 bg-linear-to-b from-[#d4af37] to-[#c9a227]"
                        />
                        <div className="flex items-center gap-4">
                          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d4af37] transition-transform duration-300 group-hover/stat:scale-110">
                            <Clock
                              className="size-6"
                              strokeWidth={2}
                              aria-hidden
                            />
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold tracking-wider text-stone-400 uppercase">
                              الساعات المعتمدة
                            </p>
                            <p className="text-xl lg:text-2xl font-black text-[#d4af37] leading-tight mt-0.5">
                              {section.content.credits}{" "}
                              <span className="text-base font-bold text-white/80">
                                ساعة
                              </span>
                            </p>
                          </div>
                        </div>
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

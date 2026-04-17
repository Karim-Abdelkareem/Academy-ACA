"use client";
import projMenu from "@/data/projects.json";
import Grad from "@/public/doct.jpg";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Dot, GraduationCap, Lightbulb } from "lucide-react";
function doctorate() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const diploma = projMenu.sections.find(
    (section) => section.id === "doctorate",
  );

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
            className="info absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20 space-y-3 lg:space-y-4 w-[calc(100%-2rem)] sm:w-auto max-w-2xl transition-all duration-1000  text-right"
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
        className="flex flex-col items-center overflow-hidden p-5 mx-auto w-full"
      >
        {diploma.programSections.map((section, idx) => (
          <div
            key={idx}
            className="stack-card w-full bg-white p-8 lg:p-12 rounded-[2.5rem]  mb-[6vh] will-change-transform transform-gpu relative group"
            style={{ zIndex: idx }}
          >
            <div className="absolute top-10 left-10 text-stone-100 text-7xl font-black group-hover:text-[#d4af37]/10 transition-colors select-none">
              {String(idx + 1).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-0.5 h-10 bg-[#d4af37] rounded-full"></div>
              <div>
                <h2 className="text-3xl font-bold text-stone-800 tracking-tight">
                  {section.titleAr}
                </h2>
              </div>
            </div>

            {section.warning && (
              <div className="bg-amber-50 border-r-4 border-amber-500 p-6 rounded-xl mb-10 flex items-start gap-5 shadow-sm">
                <Lightbulb
                  className="mt-1 size-8 shrink-0 text-amber-600"
                  strokeWidth={2}
                  aria-hidden
                />
                <p className="text-amber-900 font-medium text-lg leading-relaxed">
                  {section.warning}
                </p>
              </div>
            )}

            <div className="text-stone-700 text-lg leading-relaxed relative z-10">
              {typeof section.content === "string" && (
                <p className="text-xl text-stone-700 font-medium leading-loose relative z-10">
                  {section.content}
                </p>
              )}

              {Array.isArray(section.content) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {section.content.map((item, i) => (
                    <div
                      key={i}
                      className="flex  gap-4 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:border-[#d4af37] hover:bg-stone-50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-[#d4af37] mt-2 shrink-0"></div>
                      <span className="font-bold text-stone-700 text-[1.05rem]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {typeof section.content === "object" &&
                !Array.isArray(section.content) &&
                section.content !== null && (
                  <div className="space-y-12">
                    {/* تفاصيل الساعات والمدة كـ Stats بارزة */}
                    <div className="flex flex-wrap gap-6 mb-10">
                      <div className="flex-1 min-w-[200px] border border-stone-200 text-white hover:border-[#d4af37] transition-all duration-300 p-6 rounded-[2rem] flex items-center justify-between ">
                        <div>
                          <p className="text-stone-400 text-sm font-bold mb-1">
                            مدة الدراسة
                          </p>
                          <p className="text-2xl font-black text-[#d4af37]">
                            {section.content.duration}
                          </p>
                        </div>
                        <GraduationCap
                          className="size-10 shrink-0 text-[#d4af37]"
                          strokeWidth={2}
                          aria-hidden
                        />
                      </div>
                      <div className="flex-1 min-w-[200px] border border-stone-200 bg-[#d4af37] text-white p-6 rounded-[2rem] flex items-center justify-between ">
                        <div>
                          <p className="text-white/80 text-sm font-bold mb-1">
                            الساعات المعتمدة
                          </p>
                          <p className="text-3xl font-black">
                            {section.content.credits} ساعة
                          </p>
                        </div>
                        <Clock
                          className="size-10 shrink-0 opacity-95"
                          strokeWidth={2}
                          aria-hidden
                        />
                      </div>
                    </div>

                    {/* المقررات الأساسية */}
                    {section.content.courses?.coreCourses && (
                      <div className="space-y-6">
                        <h4 className="text-2xl font-black text-stone-800 flex items-center gap-3">
                          <span className="w-1 h-8 bg-stone-900 rounded-full"></span>
                          المقررات الإجبارية
                        </h4>
                        <div className="grid grid-cols-1  gap-6">
                          {Object.entries(
                            section.content.courses.coreCourses,
                          ).map(([key, courses]: [string, any]) => (
                            <div
                              key={key}
                              className="bg-stone-50 p-6 rounded-3xl border border-stone-200"
                            >
                              <ul className="space-y-4">
                                {courses.map((course: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-4 bg-white p-4 rounded-xl border border-stone-100 font-bold text-stone-700 shadow-sm"
                                  >
                                    <Dot
                                      className="size-4 shrink-0 text-[#d4af37]"
                                      strokeWidth={0}
                                      aria-hidden
                                    />{" "}
                                    {course}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* المقررات الاختيارية بتصميم Grid حديث */}
                    {section.content.courses?.electiveCourses && (
                      <div className="space-y-6">
                        <h4 className="text-2xl font-black text-stone-800 flex items-center gap-3">
                          <span className="w-2 h-8 bg-[#d4af37] rounded-full"></span>
                          المقررات الاختيارية
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {section.content.courses.electiveCourses.map(
                            (course: string, i: number) => (
                              <div
                                key={i}
                                className="p-4 rounded-xl border border-stone-100 bg-white hover:shadow-md hover:border-[#d4af37] transition-all flex items-center gap-3 group/opt"
                              >
                                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-stone-50 text-[#d4af37] font-bold group-hover/opt:bg-[#d4af37] group-hover/opt:text-white transition-colors">
                                  {i + 1}
                                </span>
                                <span className="text-sm font-bold text-stone-600 leading-tight">
                                  {course}
                                </span>
                              </div>
                            ),
                          )}
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

export default doctorate;

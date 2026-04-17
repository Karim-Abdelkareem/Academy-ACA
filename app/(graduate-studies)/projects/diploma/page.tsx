"use client";
import projMenu from "@/data/projects.json";
import Grad from "@/public/Graduate.jpg";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function DiplomaPage() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const diploma = projMenu.sections.find((section) => section.id === "diploma");
  const infoRef = useRef<HTMLDivElement | null>(null);

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
            className="info absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20 space-y-3 lg:space-y-4 w-[calc(100%-2rem)] sm:w-auto max-w-2xl transition-all duration-1000   text-right"
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
            className=" object-cover "
            priority
          />
        </div>
      </div>

      {/* قائمة الكروت المتراكمة */}
      <div
        ref={cardsContainerRef}
        className="flex flex-col items-center  overflow-hidden p-5  mx-auto"
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

            {/* عنوان القسم */}
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-2 h-10 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-3xl font-bold text-stone-800 tracking-tight">
                {section.titleAr}
              </h2>
            </div>

            {section.warning && (
              <div className="bg-red-50 border-r-4 border-red-500 p-5 rounded-xl mb-8 flex items-center gap-4">
                <span className="text-2xl">⚠️</span>
                <p className="text-red-800 font-bold leading-7">
                  {section.warning}
                </p>
              </div>
            )}

            <div className="text-stone-700 text-lg leading-relaxed relative z-10">
              {/* عرض النصوص */}
              {typeof section.content === "string" && (
                <p className="text-xl">{section.content}</p>
              )}

              {/* عرض المصفوفات (أهداف/شروط) */}
              {Array.isArray(section.content) && (
                <ul className="grid grid-cols-1 gap-4">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-100 transition-all hover:shadow-md hover:bg-white"
                    >
                      <div className="flex items-baseline align-middles">
                        <span className="text-[#d4af37] inline-block ml-2 w-2 h-2 bg-[#d4af37] p-1"></span>
                        <span className="font-medium text-stone-800">
                          {item}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* عرض الكائنات المعقدة (المقررات) */}
              {typeof section.content === "object" &&
                !Array.isArray(section.content) &&
                section.content !== null && (
                  <div className="space-y-8">
                    {section.content.courses?.coreCourses && (
                      <div className="grid grid-cols-1  gap-8">
                        {Object.entries(
                          section.content.courses.coreCourses,
                        ).map(([semester, courses]: [string, any]) => (
                          <div
                            key={semester}
                            className="bg-stone-50/50 p-6 rounded-3xl border relative  border-stone-200"
                          >
                            <h4 className="font-bold text-[#d4af37] mb-6 text-2xl flex items-center gap-2">
                              <span className="w-8 h-1 bg-[#d4af37] rounded-full"></span>
                              {semester === "semester1"
                                ? "الفصل الدراسي الأول"
                                : "الفصل الدراسي الثاني"}
                            </h4>
                            <ul className="space-y-4">
                              {courses.map((course: string, i: number) => (
                                <li
                                  key={i}
                                  className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3"
                                >
                                  <span className="w-2.5 h-2.5 bg-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]"></span>
                                  <span className="font-semibold text-stone-700">
                                    {course}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.content.courses?.electiveCourses && (
                      <div className="mt-10">
                        <h4 className="font-bold text-stone-900 mb-6 text-2xl pr-4 border-r-4 border-stone-300">
                          المقررات الاختيارية
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {section.content.courses.electiveCourses.map(
                            (course: string, i: number) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-200 hover:border-[#d4af37] hover:shadow-lg transition-all cursor-default group"
                              >
                                <span className="text-[#d4af37] group-hover:scale-125 transition-transform font-bold">
                                  ✓
                                </span>
                                <span className="text-md font-medium text-stone-600">
                                  {course}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    {(section.content.duration || section.content.credits) && (
                      <div className="flex flex-wrap gap-4 pt-6">
                        <div className="flex items-center gap-3 bg-[#d4af37] text-white px-8 py-3 rounded-2xl shadow-lg">
                          <span className="font-bold">📅 مدة الدراسة:</span>
                          <span>{section.content.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-stone-900 text-white px-8 py-3 rounded-2xl shadow-lg">
                          <span className="font-bold">
                            ⏱️ الساعات المعتمدة:
                          </span>
                          <span>{section.content.credits} ساعة</span>
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

export default DiplomaPage;

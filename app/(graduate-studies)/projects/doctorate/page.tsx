"use client";
import projMenu from "@/data/projects.json";
import Grad from "@/public/doct.jpg";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
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

        // 4. Animate the Card Body
        tl.from(card, {
          x: index % 2 === 0 ? 500 : -500,
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
            let imgheader = document.querySelector(".imgheader");



      const headertl = gsap.timeline({
       defaults:{
       duration: 1,
        ease: "none",
        }
      })

      var infoText = SplitText.create(infoRef.current.children,{
        type: "lines, words",
        linesClass: "overflow-hidden",
      })
      headertl.from(imgheader, {
        y:20,
        clipPath: "inset(25% 25% 25% 25%)",
        delay:1,
      }).from(infoRef.current?.children,{
        y:20,
        autoAlpha:0,
        stagger:0.5,
        ease: "elastic",
      },"<50%") 
      .from(infoText.words,{
        x:20,
        autoAlpha:0,
        stagger:0.02,
        ease: "power2.inOut",
      },"<20%")
    },
    { scope: cardsContainerRef },
  );

  return (
    <div className="mx-auto px-6 lg:px-14  " dir="rtl">
      {/* هيدر البرنامج */}
      <div className="imgheader py-2 mx-auto text-center ">
        <div className="relative group w-full h-[60vh] sm:h-96 lg:h-[30rem] mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>

          <div ref={infoRef} className="info absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20 space-y-3 lg:space-y-4 w-[calc(100%-2rem)] sm:w-auto max-w-2xl transition-all duration-1000 group-hover:translate-y-3 group-hover:translate-x-3 lg:group-hover:translate-y-5 lg:group-hover:translate-x-5 text-right">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl w-fit font-bold text-white bg-[#d4af37] rounded-xl px-4 py-2 lg:px-6 lg:py-3 shadow-2xl">
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
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
        </div>
      </div>

      <div
        ref={cardsContainerRef}
        className="flex flex-col items-center overflow-hidden p-5 mx-auto max-w-6xl"
      >
        {diploma.programSections.map((section, idx) => (
          <div
            key={idx}
            className="stack-card w-full bg-white border border-stone-100 p-8 lg:p-14 rounded-[3rem] shadow-[0_15px_50px_rgba(0,0,0,0.05)] mb-[8vh] will-change-transform transform-gpu relative overflow-hidden group"
            style={{ zIndex: idx }}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-stone-50 rounded-br-full -z-10 opacity-50 group-hover:bg-[#d4af37]/5 transition-colors duration-500"></div>

            <div className="flex items-center gap-6 mb-12">
              <div className="relative">
                <span className="flex items-center justify-center w-15 h-15 rounded-2xl bg-stone-900 text-[#d4af37] font-black text-2xl shadow-xl transform group-hover:rotate-6 transition-transform">
                  {idx + 1}
                </span>
                <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#d4af37] rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-stone-800 ">
                  {section.titleAr}
                </h2>
                <div className="h-1.5 w-20 bg-[#d4af37] mt-2 rounded-full"></div>
              </div>
            </div>

            {section.warning && (
              <div className="bg-amber-50 border-r-8 border-amber-500 p-6 rounded-2xl mb-10 flex items-start gap-5 shadow-sm">
                <span className="text-3xl mt-1">💡</span>
                <p className="text-amber-900 font-bold text-lg leading-relaxed">
                  {section.warning}
                </p>
              </div>
            )}

            <div className="text-stone-700 text-lg leading-relaxed">
              {typeof section.content === "string" && (
                <div className="relative p-8 bg-stone-50 rounded-[2rem] border-r-8 border-stone-200">
                  <span className="absolute top-4 left-6 text-6xl text-stone-200 font-serif leading-none">
                    “
                  </span>
                  <p className="text-xl text-stone-700 font-bold leading-loose relative z-10 italic">
                    {section.content}
                  </p>
                </div>
              )}

              {Array.isArray(section.content) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {section.content.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:border-[#d4af37] hover:bg-stone-50 transition-all duration-300"
                    >
                      <div className="min-w-[12px] h-[12px] rounded-full bg-[#d4af37] mt-2.5 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                      <span className="font-bold text-stone-700 text-[1.05rem] leading-snug">
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
                      <div className="flex-1 min-w-[200px] bg-stone-900 text-white p-6 rounded-[2rem] flex items-center justify-between shadow-xl">
                        <div>
                          <p className="text-stone-400 text-sm font-bold mb-1">
                            مدة الدراسة
                          </p>
                          <p className="text-2xl font-black text-[#d4af37]">
                            {section.content.duration}
                          </p>
                        </div>
                        <span className="text-4xl">🎓</span>
                      </div>
                      <div className="flex-1 min-w-[200px] bg-[#d4af37] text-white p-6 rounded-[2rem] flex items-center justify-between shadow-xl">
                        <div>
                          <p className="text-white/80 text-sm font-bold mb-1">
                            الساعات المعتمدة
                          </p>
                          <p className="text-3xl font-black">
                            {section.content.credits} ساعة
                          </p>
                        </div>
                        <span className="text-4xl">⏱️</span>
                      </div>
                    </div>

                    {/* المقررات الأساسية */}
                    {section.content.courses?.coreCourses && (
                      <div className="space-y-6">
                        <h4 className="text-2xl font-black text-stone-800 flex items-center gap-3">
                          <span className="w-2 h-8 bg-stone-900 rounded-full"></span>
                          المقررات الإجبارية
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                                    <span className="text-[#d4af37]">●</span>{" "}
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

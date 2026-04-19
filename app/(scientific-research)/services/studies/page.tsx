"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/work3.jpg";
import Logo2 from "@/public/work1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TbArrowBigDownLinesFilled,
  TbArrowBigLeftLinesFilled,
} from "react-icons/tb";

import studiesData from "@/data/studies.json";

const { DATA_CARD_ONE, DATA_CARD_TWO } = studiesData;

export default function ServicesStudies() {
  const containerRef = useRef<HTMLElement>(null);
  const [card1Open, setCard1Open] = useState(false);
  const [card2OpenIdx, setCard2OpenIdx] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const cards = gsap.utils.toArray(".studyCard") as HTMLElement[];

      cards.forEach((card) => {
        gsap.from(card, {
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const el = document.querySelector("#card1-list") as HTMLElement;
    if (!el) return;
    const items = Array.from(el.children);
    if (card1Open) {
      gsap.fromTo(
        items,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: { amount: 1 },
          duration: 1,
          ease: "power2.out",
        },
      );
    }
  }, [card1Open]);

  return (
    <section ref={containerRef} className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 space-y-8">
        <div className="studyCard w-full flex items-stretch bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 w-full"
            dir="rtl"
          >
            <div className="p-10 lg:p-12 space-y-6 flex flex-col">
              {/* <span className="text-red-700 font-bold tracking-widest uppercase">
                Scientific Studies
              </span> */}
              <h2 className="text-4xl lg:text-5xl font-black text-stone-900 leading-tight">
                دراسات مركز البحوث والدراسات
              </h2>
              <p className="text-stone-600 text-lg leading-loose">
                يمثل إعداد البحوث والدراسات المتخصصة في مجالات مكافحة الفساد
                والشفافية والمحاسبة هدفاً أساسياً للمركز.
              </p>

              <div className="pt-6 border-t border-stone-200">
                <button
                  onClick={() => setCard1Open(!card1Open)}
                  className="flex items-center gap-3  text-[#d92636] font-bold text-xl hover:translate-x-[-5px] transition-transform"
                >
                  <span
                    className={`transition-transform duration-300 ${
                      card1Open ? "rotate-90" : ""
                    }`}
                  >
                    <TbArrowBigLeftLinesFilled />
                  </span>
                  <span className="text-stone-500">بيان تلك الدراسات</span>
                </button>
                <div
                  id="card1-list"
                  className={`mt-4 overflow-hidden transition-all duration-500 ${
                    card1Open ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-3">
                    {DATA_CARD_ONE.map((item, i) => (
                      <li
                        key={i}
                        className="bg-white p-4 rounded-lg shadow-sm border-r-4 border-red-700 text-stone-700 will-change-transform"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="studyImg relative h-full w-full hidden lg:block overflow-hidden">
              <Image
                src={Logo2}
                alt="Studies Center"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-l from-black/10 to-transparent" />
            </div>
          </div>
        </div>

        <div className="studyCard w-full flex items-stretch bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 w-full"
            dir="rtl"
          >
            <div className="p-10 lg:p-12 space-y-6">
              {/* <span className="text-red-700 font-bold tracking-widest uppercase">
                Categorized Research
              </span> */}
              <h2 className="text-4xl font-black text-stone-900">دراسات اخري</h2>

              <div className="space-y-3 pt-4">
                {DATA_CARD_TWO.map((cat, idx) => (
                  <div key={idx} className="border-b border-stone-200 pb-2">
                    <button
                      onClick={() =>
                        setCard2OpenIdx(card2OpenIdx === idx ? null : idx)
                      }
                      className="w-full flex justify-between items-center py-4 text-right font-bold text-lg text-stone-800 hover:text-red-700 transition-colors"
                    >
                      <span>{cat.category}</span>
                      <span
                        className={`text-sm transition-transform duration-300 ${
                          card2OpenIdx === idx ? "rotate-180" : ""
                        }`}
                      >
                        <TbArrowBigDownLinesFilled />
                      </span>
                    </button>
                    <div
                      id={`card2-list-${idx}`}
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        card2OpenIdx === idx ? "max-h-[600px]" : "max-h-0"
                      }`}
                    >
                      <ul className="p-4 space-y-3 bg-stone-100 rounded-xl mb-4">
                        {cat.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-stone-600 border-r-2 border-red-300 pr-3 leading-relaxed will-change-transform"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="studyImg relative h-full w-full hidden lg:block overflow-hidden">
              <Image
                src={Logo}
                alt="Research Fields"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-l from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

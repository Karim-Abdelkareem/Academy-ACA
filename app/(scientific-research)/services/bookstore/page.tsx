"use client";
import React, { useState } from "react";
import Image from "next/image";
import cart from "@/public/gradCartone.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { library } from "@/data/library.json";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";

const BOOKSTORE_DATA = library.map((item, i) => ({
  id: item["paper id"] || i,
  title: item.header,
  description: item.description,
  image: item.image,
  options: item.dropdowncontent,
  date: item.date,
}));

export default function ServicesBookstore() {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".cards") as HTMLElement[];

    gsap.set(cards, {
      y: (i) => (i === 0 ? 0 : window.innerHeight),
      scale: 1,
      opacity: 1,
      ease: "power2.inOut",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-wrapper",
        start: "-7% top",
        end: () => `+=${window.innerHeight * cards.length}`,
        pin: true,
        scrub: 1,
        markers: true,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, i) => {
      if (i > 0) {
        tl.to(
          cards.slice(0, i),
          {
            y: (index) => -(i - index) * 40,
            scale: (index) => 1 - (i - index) * 0.04,
            opacity: (index) => 1 - (i - index) * 0.05,
            duration: 1,
            rotate: 5,
          },
          `card${i}`,
        ).to(
          card,
          {
            y: 0,
            duration: 1,
          },
          `card${i}`,
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="bg-stone-50 overflow-hidden">
      <div className="pin-wrapper h-screen w-full relative">
        <div className="container mx-auto max-w-7xl h-full flex items-center justify-center relative">
          {BOOKSTORE_DATA.map((card, index) => (
            <div
              key={card.id}
              className="cards w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-200 transition-shadow duration-300 hover:shadow-2xl"
              style={{ zIndex: index }}
              dir="rtl"
            >
              <div className="relative w-full md:w-2/5 shrink-0 h-72 md:h-auto md:min-h-[500px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent mix-blend-multiply" />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center w-full md:w-3/5 space-y-6 relative bg-white">
                <div className="flex-1">
                  {card.date && (
                    <span className="inline-block px-4 py-1.5 mb-5 text-sm font-bold text-red-800 bg-red-50/80 rounded-full border border-red-100 shadow-sm backdrop-blur-sm">
                      {card.date}
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-stone-900 mb-5 leading-snug">
                    {card.title}
                  </h2>
                  <p className="text-lg text-stone-600 leading-relaxed max-w-2xl line-clamp-4 md:line-clamp-6 text-justify">
                    {card.description}
                  </p>
                </div>

                {card.options && card.options.length > 0 && (
                  <div className="relative mt-8 pt-6 border-t border-stone-100 flex justify-start">
                    <button
                      onClick={() => toggleDropdown(card.id)}
                      className="flex items-center gap-3 px-8 py-3.5 bg-red-700 text-white font-bold rounded-xl hover:bg-red-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full md:w-auto justify-center md:justify-start"
                    >
                      <span>المزيد من التفاصيل</span>
                      <span
                        className={`transition-transform duration-300 ${
                          openDropdownId === card.id ? "rotate-180" : ""
                        }`}
                      >
                        <TbArrowBigDownLinesFilled />
                      </span>
                    </button>

                    <div
                      className={`absolute bottom-[115%] right-0 mb-4 w-full md:w-[450px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-stone-100 overflow-hidden transition-all duration-300 origin-bottom-right z-50 flex flex-col max-h-[60vh] overflow-y-auto ${
                        openDropdownId === card.id
                          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-95 pointer-events-none translate-y-4"
                      }`}
                    >
                      <ul className="py-3 px-1 divide-y divide-stone-50">
                        {card.options.map((opt, idx) => (
                          <li key={idx} className="p-2">
                            {opt.url && opt.url !== "#" ? (
                              <a
                                href={opt.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-right px-4 py-3 text-red-700 hover:bg-red-50 font-bold transition-all rounded-xl"
                                onClick={() => setOpenDropdownId(null)}
                              >
                                {opt.label}
                              </a>
                            ) : (
                              <div className="w-full text-right px-4 py-3 text-stone-700 font-medium text-sm leading-loose">
                                {opt.label}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

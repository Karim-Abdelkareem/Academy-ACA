"use client";
import React, { useState } from "react";
import Image from "next/image";
import { library } from "@/data/library.json";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { Grid, List } from "lucide-react";

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
  const [viewMode, setViewMode] = useState<"stack" | "grid">("stack");

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <section className="bg-stone-50 py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-14">
        <div className="flex items-center justify-end gap-2 mb-8">
          <button
            onClick={() => setViewMode("stack")}
            className={`px-4 py-2 rounded-md border text-sm font-bold transition-all flex items-center gap-2 ${
              viewMode === "stack"
                ? "bg-red-700 text-white border-red-700 shadow-sm"
                : "bg-white text-stone-600 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
            }`}
          >
            <List className="w-6 h-6" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 rounded-md border text-sm font-bold transition-all flex items-center gap-2 ${
              viewMode === "grid"
                ? "bg-red-700 text-white border-red-700 shadow-sm"
                : "bg-white text-stone-600 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
            }`}
          >
            <Grid className="w-6 h-6" />
          </button>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr"
              : "space-y-8"
          }
        >
          {BOOKSTORE_DATA.map((card, index) => (
            <div
              key={card.id}
              className={`relative ${viewMode === "grid" ? "h-full" : ""}`}
            >
              {card.options && card.options.length > 0 && (
                <div
                  className={`absolute bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-stone-100 overflow-hidden transition-all duration-300 z-50 flex flex-col max-h-[60vh] overflow-y-auto ${
                    viewMode === "grid"
                      ? "top-[calc(100%+0.75rem)] left-0 right-0 origin-top"
                      : "top-4 left-4 right-4 md:left-0 md:right-auto md:top-auto md:bottom-[calc(100%+0.75rem)] md:w-[450px] origin-bottom-right"
                  } ${
                    openDropdownId === card.id
                      ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                      : "opacity-0 scale-95 pointer-events-none translate-y-2"
                  }`}
                  dir="rtl"
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
              )}

              <div
                className={`w-full bg-white rounded-2xl overflow-hidden border border-stone-200 transition-all duration-300 ${
                  viewMode === "grid"
                    ? "flex flex-col h-full rounded-3xl border-stone-200/80 bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]"
                    : "flex flex-col md:flex-row shadow-xl hover:shadow-2xl"
                }`}
                style={{ zIndex: index }}
                dir="rtl"
              >
                <div
                  className={`relative w-full shrink-0 ${
                    viewMode === "grid"
                      ? "h-48"
                      : "md:w-2/5 h-72 md:h-auto md:min-h-[500px]"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent mix-blend-multiply" />
                </div>

                <div
                  className={`p-8 flex flex-col w-full space-y-6 relative bg-white ${
                    viewMode === "grid" ? "p-5 md:p-6" : "md:p-12 md:w-3/5"
                  }`}
                >
                  <div className="flex-1">
                    {card.date && (
                      <span className="inline-block px-4 py-1.5 mb-5 text-sm font-bold text-red-800 bg-red-50/80 rounded-full border border-red-100 shadow-sm backdrop-blur-sm">
                        {card.date}
                      </span>
                    )}
                    <h2
                      className={`font-extrabold text-stone-900 mb-5 leading-snug ${
                        viewMode === "grid"
                          ? "text-lg md:text-xl line-clamp-1"
                          : "text-2xl md:text-3xl lg:text-4xl"
                      }`}
                      style={
                        viewMode === "grid"
                          ? {
                              display: "-webkit-box",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }
                          : undefined
                      }
                    >
                      {card.title}
                    </h2>
                    <p
                      className={`text-stone-600 leading-relaxed max-w-2xl text-justify ${
                        viewMode === "grid"
                          ? "text-sm line-clamp-3"
                          : "text-lg line-clamp-4 md:line-clamp-6"
                      }`}
                      style={
                        viewMode === "grid"
                          ? {
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }
                          : undefined
                      }
                    >
                      {card.description}
                    </p>
                  </div>

                  {card.options && card.options.length > 0 && (
                    <div
                      className={`relative border-t border-stone-100 flex justify-start ${
                        viewMode === "grid" ? "mt-auto pt-4" : "mt-8 pt-6"
                      }`}
                    >
                      <button
                        onClick={() => toggleDropdown(card.id)}
                        className={`flex items-center gap-3 bg-red-700 text-white font-bold rounded-xl hover:bg-red-800 transition-colors shadow-sm w-full justify-center ${
                          viewMode === "grid"
                            ? "px-4 py-2.5 text-sm"
                            : "px-8 py-3.5 md:w-auto md:justify-start"
                        }`}
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

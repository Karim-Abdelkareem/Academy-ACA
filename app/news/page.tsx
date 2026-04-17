"use client";

import { useMemo, useState } from "react";
import newsData from "@/data/news.json";

type NewsItem = {
  id: number;
  name: string;
  date1String: string | null;
  image: string | null;
  isActive: boolean;
  isPublish: boolean;
  tapFileURL: string | null;
  tapVideoURL: string | null;
};

const ITEMS_PER_PAGE = 12;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const items = useMemo(() => {
    const data = (newsData.data as NewsItem[]).filter(
      (item) => item.isActive && item.isPublish,
    );
    return data;
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(start, start + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-stone-100 min-h-screen py-10" dir="rtl">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-red-800">
            الأخبار الهامة
          </h1>
          <span className="text-sm text-stone-500">
            إجمالي الأخبار: {items.length}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {currentItems.map((item, index) => (
            <article
              key={`${item.id}-${item.date1String ?? "no-date"}-${start + index}`}
              className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-44 bg-stone-200 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full grid place-items-center text-stone-500 text-sm">
                    لا توجد صورة
                  </div>
                )}
              </div>

              <div className="p-4 min-h-[205px] flex flex-col">
                <h2 className="font-bold text-stone-800 text-base leading-7 line-clamp-3">
                  {item.name}
                </h2>

                <div className="mt-3 text-xs text-stone-500">
                  {item.date1String ?? "بدون تاريخ"}
                </div>

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {item.tapFileURL && (
                    <a
                      href={item.tapFileURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold rounded-md bg-red-700 text-white hover:bg-red-800 transition-colors"
                    >
                      ملف
                    </a>
                  )}
                  {item.tapVideoURL && (
                    <a
                      href={item.tapVideoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold rounded-md bg-stone-800 text-white hover:bg-stone-900 transition-colors"
                    >
                      فيديو
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className="px-3 py-1.5 text-sm rounded border border-stone-300 bg-white disabled:opacity-40"
          >
            السابق
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-8 h-8 text-sm rounded border ${
                page === safePage
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-stone-300 text-stone-700"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className="px-3 py-1.5 text-sm rounded border border-stone-300 bg-white disabled:opacity-40"
          >
            التالي
          </button>
        </div>
      </div>
    </main>
  );
}

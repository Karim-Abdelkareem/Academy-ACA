"use client";

import { useMemo, useState } from "react";
import { Calendar, FileText, ImageOff, PlayCircle } from "lucide-react";
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
    <main
      className="min-h-screen bg-linear-to-b from-stone-50 via-stone-100/90 to-stone-100 py-10 md:py-14"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <header className="mb-10 flex flex-col gap-4 border-b border-stone-200/80 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8922a]">
              الأكاديمية
            </p>
            <h1 className="font-heading text-3xl font-black tracking-tight text-stone-900 md:text-4xl">
              الأخبار{" "}
              <span className="text-red-700">الهامة</span>
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-l from-[#d4af37] to-red-600" />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-sm font-medium text-stone-600 shadow-sm backdrop-blur-sm">
            <span className="tabular-nums font-bold text-stone-900">
              {items.length}
            </span>
            خبراً منشوراً
          </span>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentItems.map((item, index) => (
            <article
              key={`${item.id}-${item.date1String ?? "no-date"}-${start + index}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-[0_2px_20px_-6px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/35 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-stone-900/55 via-stone-900/5 to-transparent"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-linear-to-l from-transparent via-[#d4af37]/70 to-transparent"
                      aria-hidden
                    />
                  </>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 bg-linear-to-br from-stone-100 via-stone-50 to-amber-50/30 p-6 text-center">
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-stone-200/80 bg-white/80 text-stone-400 shadow-inner">
                      <ImageOff className="size-7 stroke-[1.5]" aria-hidden />
                    </span>
                    <span className="text-xs font-medium text-stone-500">
                      لا توجد صورة
                    </span>
                  </div>
                )}
              </div>

              <div className="flex min-h-[11rem] flex-1 flex-col p-5 md:p-6">
                <div className="mb-3 inline-flex max-w-full items-center gap-2 self-start rounded-full border border-[#d4af37]/20 bg-linear-to-l from-amber-50/90 to-white px-3 py-1.5 text-[11px] font-semibold text-[#7a6220]">
                  <Calendar className="size-3.5 shrink-0 text-[#c9a227]" aria-hidden />
                  <span className="truncate">
                    {item.date1String ?? "بدون تاريخ"}
                  </span>
                </div>

                <h2 className="font-heading text-base font-bold leading-snug text-stone-900 line-clamp-3 transition-colors group-hover:text-red-800 md:text-[1.05rem]">
                  {item.name}
                </h2>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {item.tapFileURL && (
                    <a
                      href={item.tapFileURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50/80 px-3.5 py-2 text-xs font-bold text-red-800 transition-all hover:border-red-300 hover:bg-red-100"
                    >
                      <FileText className="size-3.5 shrink-0" aria-hidden />
                      ملف
                    </a>
                  )}
                  {item.tapVideoURL && (
                    <a
                      href={item.tapVideoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-900 px-3.5 py-2 text-xs font-bold text-white transition-all hover:bg-stone-800"
                    >
                      <PlayCircle className="size-3.5 shrink-0" aria-hidden />
                      فيديو
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav
          className="mt-10 flex flex-col items-center gap-4"
          aria-label="ترقيم الصفحات"
        >
          <div className="inline-flex items-center gap-1.5 flex-wrap justify-center rounded-2xl border border-stone-200/80 bg-white/90 px-3 py-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <button
              type="button"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 1}
              className="min-w-[5.5rem] rounded-xl px-3 py-2 text-sm font-semibold text-stone-700 transition-all border border-transparent bg-stone-50/80 hover:border-[#d4af37]/40 hover:bg-amber-50/60 hover:text-[#9a7b1a] disabled:pointer-events-none disabled:opacity-35 disabled:hover:border-transparent disabled:hover:bg-stone-50/80"
            >
              السابق
            </button>

            <span
              aria-hidden
              className="hidden sm:block h-6 w-px bg-gradient-to-b from-transparent via-[#d4af37]/35 to-transparent"
            />

            <div className="flex items-center gap-1 flex-wrap justify-center px-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => goToPage(page)}
                    aria-current={page === safePage ? "page" : undefined}
                    className={`min-w-[2.25rem] h-9 px-2 text-sm font-bold rounded-xl transition-all duration-200 ${
                      page === safePage
                        ? "bg-linear-to-l from-[#d4af37] to-[#c9a227] text-white shadow-md shadow-[#d4af37]/25 border border-[#b8922a]/90"
                        : "border border-transparent text-stone-600 hover:border-[#d4af37]/35 hover:bg-amber-50/50 hover:text-[#8a6d16]"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <span
              aria-hidden
              className="hidden sm:block h-6 w-px bg-gradient-to-b from-transparent via-[#d4af37]/35 to-transparent"
            />

            <button
              type="button"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === totalPages}
              className="min-w-[5.5rem] rounded-xl px-3 py-2 text-sm font-semibold text-stone-700 transition-all border border-transparent bg-stone-50/80 hover:border-[#d4af37]/40 hover:bg-amber-50/60 hover:text-[#9a7b1a] disabled:pointer-events-none disabled:opacity-35 disabled:hover:border-transparent disabled:hover:bg-stone-50/80"
            >
              التالي
            </button>
          </div>

          <p className="text-xs text-stone-500 font-medium tabular-nums">
            صفحة {safePage} من {totalPages}
          </p>
        </nav>
      </div>
    </main>
  );
}

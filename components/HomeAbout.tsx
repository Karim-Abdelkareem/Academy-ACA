"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, ClipboardList, Telescope } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Pillar = {
  id: string;
  no: string;
  label: string;
  Icon: typeof Building2;
  title: string;
  content: string;
  stat: { value: string; label: string };
  accent: string;
};

const PILLARS: Pillar[] = [
  {
    id: "origin",
    no: "01",
    label: "نشأة الأكاديمية",
    Icon: Building2,
    title: "نشأة الأكاديمية",
    content:
      "في إطار سعى الدولة لتعزيز مبدأ الشفافية، ومكافحة الفساد المالي والإداري بشتى صوره ومظاهره وأساليبه، وتحقيق النزاهة داخل جميع الجهات والأجهزة العامة في الدولة تم تأسيس الأكاديمية الوطنية لمكافحة الفساد بموجب القانون رقم 207 لسنة 2017 ككيان تابع لهيئة الرقابة الإدارية للمعاونة في تحقيق الأهداف القومية في هذا المجال.",
    stat: { value: "2017", label: "سنة التأسيس" },
    accent: "from-[#d4af37] to-[#c9a227]",
  },
  {
    id: "vision",
    no: "02",
    label: "الرؤية",
    Icon: Telescope,
    title: "رؤيتنا",
    content:
      "أن تصبح الأكاديمية الوطنية لمكافحة الفساد هي المرجعية الأساسية للتعليم والتدريب والتطوير في العلوم والمعارف والمهارات المتعلقة بمكافحة الفساد والوقاية منه، وفي المجالات الأخرى ذات الصلة على المستوى المحلي والإقليمي والدولي.",
    stat: { value: "3", label: "محلي · إقليمي · دولي" },
    accent: "from-red-500 to-red-600",
  },
  {
    id: "mission",
    no: "03",
    label: "الرسالة",
    Icon: ClipboardList,
    title: "رسالتنا",
    content:
      "تقديم الخدمات المعرفية والعلمية والتدريبية والبحثية المتميزة للمجتمع المصري والإقليمي والدولي في مجال مكافحة الفساد والوقاية منه وفي باقي المجالات ذات الصلة بأعلى درجات الجودة والحداثة، وذلك باستخدام أحدث وسائل التعليم والتدريب والتطوير وبالاستعانة بالتقنيات العلمية الحديثة من خلال منظومة تدريبية متكاملة ومتطورة.",
    stat: { value: "4", label: "معرفية · علمية · تدريبية · بحثية" },
    accent: "from-neutral-800 to-neutral-900",
  },
];

const STATS = [
  { value: 207, suffix: "", label: "قانون التأسيس" },
  { value: 2017, suffix: "", label: "سنة التأسيس" },
  { value: 3, suffix: "+", label: "مستويات عمل" },
  { value: 4, suffix: "+", label: "مجالات خدمية" },
];

export default function HomeAbout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PILLARS[activeIndex];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header entrance (once) ──
      if (headerRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            once: true,
          },
        });

        tl.from(headerRef.current.querySelector(".about-subtitle"), {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power3.out",
        })
          .from(
            headerRef.current.querySelector(".about-title"),
            {
              opacity: 0,
              y: 30,
              scale: 0.95,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.25",
          )
          .from(
            headerRef.current.querySelector(".about-decor"),
            { scaleX: 0, duration: 0.45, ease: "power2.out" },
            "-=0.3",
          );
      }

      // ── Main magazine spread entrance (once) ──
      if (mainRef.current) {
        gsap.from(mainRef.current.querySelector(".about-feature"), {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%",
            once: true,
          },
        });

        const previews = mainRef.current.querySelectorAll(".about-preview");
        if (previews.length) {
          gsap.from(previews, {
            opacity: 0,
            x: -40,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mainRef.current,
              start: "top 80%",
              once: true,
            },
          });
        }
      }

      // ── Stats bar entrance + counters (once) ──
      if (statsRef.current) {
        const items = statsRef.current.querySelectorAll(".stat-item");
        gsap.from(items, {
          opacity: 0,
          y: 24,
          scale: 0.92,
          stagger: 0.08,
          duration: 0.5,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 88%",
            once: true,
          },
        });

        const counters = statsRef.current.querySelectorAll(".stat-counter");
        counters.forEach((el, i) => {
          const target = STATS[i].value;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              (el as HTMLElement).textContent = Math.round(obj.val).toString();
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-8 bg-linear-to-b from-white via-neutral-50/80 to-white"
      dir="rtl"
    >
      {/* ═══ Decorative background ═══ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 -left-32 w-[420px] h-[420px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Dotted grid */}
        <div
          className="absolute top-20 left-12 w-40 h-40 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div
          className="absolute bottom-24 right-16 w-44 h-44 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="relative z-10 w-[92%] max-w-6xl mx-auto">
        {/* ═══ Header ═══ */}
        <div
          ref={headerRef}
          className="mb-16 flex flex-col items-center gap-3 text-center"
        >
          <span className="about-subtitle text-red-500 text-xs font-mono tracking-[0.4em] uppercase">
            تعرف علينا
          </span>
          <h2 className="about-title text-neutral-900 text-4xl md:text-5xl font-black leading-none mt-2">
            عن الأكاديمية
          </h2>
          <div className="about-decor w-20 h-1 bg-linear-to-l from-[#d4af37] to-red-500 rounded-full mt-3 origin-center" />
          <p className="text-neutral-500 text-sm md:text-base max-w-xl leading-relaxed mt-2">
            ثلاث ركائز تُعرّفك بمسيرة الأكاديمية ومستقبلها ودورها في ترسيخ قيم
            النزاهة.
          </p>
        </div>

        {/* ═══ Magazine spread: Feature + Previews ═══ */}
        <div
          ref={mainRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
        >
          {/* ─── Featured pillar (large) ─── */}
          <div className="about-feature lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full rounded-3xl border border-neutral-200/80 bg-white shadow-xl shadow-neutral-100/60 overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-linear-to-l ${active.accent}`}
                />

                {/* Giant number watermark */}
                <div className="absolute -top-4 left-4 text-[140px] md:text-[180px] font-black text-neutral-100/70 leading-none select-none pointer-events-none">
                  {active.no}
                </div>

                <div className="relative z-10 p-8 md:p-12 flex flex-col gap-7">
                  {/* Label row */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-baseline gap-2 text-[11px] font-mono tracking-[0.3em] uppercase px-3 py-1.5 rounded-full bg-linear-to-l ${active.accent} text-white shadow-sm`}
                    >
                      <active.Icon
                        className="size-4 shrink-0 opacity-95"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {active.label}
                    </span>
                    <div className="flex-1 h-px bg-linear-to-l from-neutral-200 to-transparent" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight">
                      {active.title}
                      <span className="text-red-600">.</span>
                    </h3>
                  </div>

                  {/* Body */}
                  <p className="text-neutral-600 leading-loose text-base md:text-lg">
                    {active.content}
                  </p>

                  {/* Footer row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                    {/* Stat badge */}
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center gap-0.5 bg-linear-to-b from-neutral-50 to-white border border-neutral-200 rounded-2xl px-5 py-3 shadow-sm">
                        <span className="text-[#c9a227] font-black text-2xl leading-none font-mono">
                          {active.stat.value}
                        </span>
                      </div>
                      <span className="text-neutral-500 text-xs md:text-sm max-w-[220px] leading-snug">
                        {active.stat.label}
                      </span>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex items-center gap-2">
                      {PILLARS.map((p, i) => (
                        <button
                          key={p.id}
                          onClick={() => setActiveIndex(i)}
                          aria-label={p.label}
                          className={`rounded-full transition-all duration-300 cursor-pointer ${
                            activeIndex === i
                              ? "bg-linear-to-l from-red-600 to-red-500 w-8 h-2.5 shadow-sm shadow-red-200"
                              : "bg-neutral-200 hover:bg-neutral-300 w-2.5 h-2.5"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* ─── Preview column ─── */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {PILLARS.map((p, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(i)}
                  className={`about-preview group relative text-right overflow-hidden rounded-2xl border p-5 transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-neutral-900 border-neutral-900 text-white shadow-xl shadow-neutral-900/10 scale-[1.01]"
                        : "bg-white border-neutral-200/80 text-neutral-700 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="aboutActiveBar"
                      className={`absolute top-0 bottom-0 right-0 w-1 bg-linear-to-b ${p.accent}`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span
                      className={`shrink-0 text-2xl font-black font-mono leading-none ${
                        isActive ? "text-[#d4af37]" : "text-neutral-300"
                      }`}
                    >
                      {p.no}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <p.Icon
                          className={`size-5 shrink-0 ${
                            isActive ? "text-[#d4af37]" : "text-neutral-400"
                          }`}
                          strokeWidth={2}
                          aria-hidden
                        />
                        <span
                          className={`font-bold text-sm md:text-base ${
                            isActive ? "text-white" : "text-neutral-900"
                          }`}
                        >
                          {p.label}
                        </span>
                      </div>
                      <p
                        className={`text-xs md:text-[13px] leading-relaxed line-clamp-2 ${
                          isActive ? "text-white/70" : "text-neutral-500"
                        }`}
                      >
                        {p.content}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg
                      className={`shrink-0 w-4 h-4 mt-1 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-0 text-[#d4af37]"
                          : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-neutral-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ═══ Stats bar ═══ */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="stat-item group relative bg-white rounded-2xl border border-neutral-200/80 p-6 text-center
                hover:shadow-xl hover:shadow-neutral-100/50 hover:border-neutral-300 hover:-translate-y-1
                transition-all duration-400 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-amber-50/0 to-amber-50/0 group-hover:from-amber-50/50 group-hover:to-transparent transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span className="stat-counter text-3xl md:text-4xl font-black text-[#c9a227] font-mono">
                    0
                  </span>
                  {stat.suffix && (
                    <span className="text-red-500 text-xl font-bold">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span className="text-neutral-500 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  {
    id: "origin",
    label: "نشأة الأكاديمية",
    icon: "🏛",
    title: "نشأة الأكاديمية",
    content:
      "في إطار سعى الدولة لتعزيز مبدأ الشفافية، ومكافحة الفساد المالي والإداري بشتى صوره ومظاهره وأساليبه، وتحقيق النزاهة داخل جميع الجهات والأجهزة العامة في الدولة تم تأسيس الأكاديمية الوطنية لمكافحة الفساد بموجب القانون رقم 207 لسنة 2017 ككيان تابع لهيئة الرقابة الإدارية للمعاونة في تحقيق الأهداف القومية في هذا المجال.",
    stat: { value: "2017", label: "سنة التأسيس" },
  },
  {
    id: "vision",
    label: "الرؤية",
    icon: "🔭",
    title: "الرؤية",
    content:
      "أن تصبح الأكاديمية الوطنية لمكافحة الفساد هي المرجعية الأساسية للتعليم والتدريب والتطوير في العلوم والمعارف والمهارات المتعلقة بمكافحة الفساد والوقاية منه، وفي المجالات الأخرى ذات الصلة على المستوى المحلي والإقليمي والدولي.",
    stat: { value: "٣", label: "مستويات: محلي · إقليمي · دولي" },
  },
  {
    id: "mission",
    label: "الرسالة",
    icon: "📋",
    title: "الرسالة",
    content:
      "تقديم الخدمات المعرفية والعلمية والتدريبية والبحثية المتميزة للمجتمع المصري والإقليمي والدولي في مجال مكافحة الفساد والوقاية منه وفي باقي المجالات ذات الصلة بأعلى درجات الجودة والحداثة، وذلك باستخدام أحدث وسائل التعليم والتدريب والتطوير وبالاستعانة بالتقنيات العلمية الحديثة من خلال منظومة تدريبية متكاملة ومتطورة.",
    stat: { value: "٤", label: "خدمات: معرفية · علمية · تدريبية · بحثية" },
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
  const activeTab = TABS[activeIndex];

  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);
  const tabsColRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgShape1Ref = useRef<HTMLDivElement>(null);
  const bgShape2Ref = useRef<HTMLDivElement>(null);
  const bgShape3Ref = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Stable callback ref for the scroll-triggered tab change
  const activeIndexRef = useRef(0);
  const setActiveTab = useCallback((index: number) => {
    if (activeIndexRef.current !== index) {
      activeIndexRef.current = index;
      setActiveIndex(index);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Background shapes parallax ──
      gsap.to(bgShape1Ref.current, {
        y: -80,
        rotation: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(bgShape2Ref.current, {
        y: -60,
        x: 40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(bgShape3Ref.current, {
        y: -100,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // ── Header entrance ──
      const headerTL = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          end: "top 55%",
          toggleActions: "play none none reverse",
        },
      });

      headerTL
        .from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          letterSpacing: "0em",
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
            scale: 0.92,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          decorLineRef.current,
          {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        );

      // ── Tab buttons stagger ──
      if (tabsColRef.current) {
        const buttons = tabsColRef.current.querySelectorAll(".about-tab-btn");
        gsap.from(buttons, {
          opacity: 0,
          x: 50,
          stagger: 0.12,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: tabsColRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── Content panel slide-up ──
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // ═══ SCROLL-DRIVEN TAB SWITCHING ═══
      // Pin the content area and switch tabs as user scrolls
      ScrollTrigger.create({
        trigger: pinContainerRef.current,
        start: "top 15%",
        end: `+=${window.innerHeight * 2}`, // scroll distance = 2x viewport
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1
          const segment = 1 / TABS.length;
          const newIndex = Math.min(
            Math.floor(progress / segment),
            TABS.length - 1,
          );
          setActiveTab(newIndex);

          // Update progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress * 100}%`;
          }
        },
      });

      // ── Stats counter animation ──
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll(".stat-item");

        gsap.from(statItems, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate the numbers
        const counterEls = statsRef.current.querySelectorAll(".stat-counter");
        counterEls.forEach((el, i) => {
          const target = STATS[i].value;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            onUpdate: () => {
              (el as HTMLElement).textContent = Math.round(obj.val).toString();
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [setActiveTab]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-neutral-50/80 to-white"
      dir="rtl"
      style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif" }}
    >
      {/* ═══ Animated background shapes ═══ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={bgShape1Ref}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-red-100/40"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          ref={bgShape2Ref}
          className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          ref={bgShape3Ref}
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Decorative grid dots */}
        <div
          className="absolute top-16 left-10 w-32 h-32 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        {/* ═══ Header ═══ */}
        <div
          ref={headerRef}
          className="mb-16 flex flex-col items-center gap-3 text-center"
        >
          <span
            ref={subtitleRef}
            className="text-red-500 text-xs font-mono tracking-[0.4em] uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100"
          >
            تعرف علينا
          </span>
          <h2
            ref={titleRef}
            className="text-neutral-900 text-4xl md:text-5xl lg:text-6xl font-black leading-none mt-2"
          >
            عن الأكاديمية
            <span className="text-red-600">.</span>
          </h2>
          <div
            ref={decorLineRef}
            className="w-20 h-1 bg-gradient-to-l from-[#d4af37] to-red-500 rounded-full mt-3 origin-center"
          />
        </div>

        {/* ═══ PINNED AREA — scrolls through tabs ═══ */}
        <div ref={pinContainerRef}>
          {/* Scroll progress bar */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-1 h-1 bg-neutral-100 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-l from-[#d4af37] via-red-500 to-[#d4af37] rounded-full transition-none"
                style={{ width: "0%" }}
              />
            </div>
            <span className="text-xs text-neutral-400 font-mono tabular-nums min-w-[3ch] text-center">
              {activeIndex + 1}/{TABS.length}
            </span>
          </div>

          {/* ═══ Layout: tabs + content ═══ */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* --- Tab buttons column --- */}
            <div
              ref={tabsColRef}
              className="flex flex-row md:flex-col gap-3 md:w-56 shrink-0"
            >
              {TABS.map((tab, i) => {
                const isActive = activeIndex === i;
                const isPast = i < activeIndex;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    className={`about-tab-btn group relative flex items-center gap-3 px-5 py-4 rounded-2xl text-right
                      font-semibold text-sm transition-all duration-300 overflow-hidden
                      border focus:outline-none cursor-pointer
                      ${
                        isActive
                          ? "bg-gradient-to-l from-[#d4af37] to-[#c9a227] border-[#b8922a] text-neutral-900 shadow-lg shadow-amber-200/30 scale-[1.02]"
                          : isPast
                            ? "bg-green-50 border-green-200 text-green-700"
                            : "bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md hover:translate-x-[-4px]"
                      }`}
                  >
                    {/* Active side indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBar"
                        className="absolute right-0 top-2 bottom-2 w-1 bg-red-600 rounded-l-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {/* Past check mark */}
                    {isPast && (
                      <div className="absolute right-0 top-2 bottom-2 w-1 bg-green-400 rounded-l-full" />
                    )}
                    <span
                      className={`text-xl transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                    >
                      {isPast ? "✓" : tab.icon}
                    </span>
                    <span className="flex-1">{tab.label}</span>
                    {/* Arrow indicator */}
                    <svg
                      className={`w-4 h-4 transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}
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
                  </button>
                );
              })}

              {/* Scroll hint */}
              <motion.div
                className="hidden md:flex flex-col items-center gap-2 mt-4"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-[10px] text-neutral-400 font-mono tracking-wider">
                  SCROLL
                </span>
                <svg
                  className="w-4 h-4 text-neutral-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </div>

            {/* --- Content panel --- */}
            <div ref={contentRef} className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full rounded-3xl border border-neutral-200/80 bg-white shadow-xl shadow-neutral-100/50 overflow-hidden"
                >
                  {/* Top accent strip with gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-[#d4af37] via-red-500 to-[#d4af37]" />

                  {/* Subtle corner decoration */}
                  <div className="absolute top-0 left-0 w-24 h-24 opacity-[0.03]">
                    <svg viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="0" cy="0" r="80" />
                    </svg>
                  </div>

                  {/* Step number watermark */}
                  <div className="absolute top-4 left-6 text-[72px] md:text-[96px] font-black text-neutral-100/60 leading-none select-none pointer-events-none">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </div>

                  <div className="p-8 md:p-10 flex flex-col gap-6 relative z-10">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-1">
                          {activeTab.title}
                          <span className="text-red-600">.</span>
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-[2px] bg-gradient-to-l from-[#d4af37] to-transparent rounded-full" />
                          <span className="text-neutral-400 text-xs">
                            الأكاديمية الوطنية لمكافحة الفساد
                          </span>
                        </div>
                      </div>
                      {/* Stat badge */}
                      <div className="shrink-0 flex flex-col items-center gap-1 bg-gradient-to-b from-neutral-50 to-white border border-neutral-200 rounded-2xl px-5 py-4 text-center shadow-sm">
                        <span className="text-[#c9a227] font-black text-2xl leading-none font-mono">
                          {activeTab.stat.value}
                        </span>
                        <span className="text-neutral-400 text-[10px] leading-tight max-w-[90px]">
                          {activeTab.stat.label}
                        </span>
                      </div>
                    </div>

                    {/* Divider with icon */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gradient-to-l from-neutral-200 to-transparent" />
                      <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-xs">
                        ✦
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-neutral-200 to-transparent" />
                    </div>

                    {/* Body text */}
                    <p className="text-neutral-600 leading-[2] text-lg flex-1">
                      {activeTab.content}
                    </p>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                      {/* Step indicators */}
                      <div className="flex gap-2 items-center">
                        {TABS.map((t, i) => (
                          <button
                            key={t.id}
                            onClick={() => setActiveTab(i)}
                            className={`rounded-full transition-all duration-400 cursor-pointer ${
                              activeIndex === i
                                ? "bg-gradient-to-l from-red-600 to-red-500 w-8 h-2.5 shadow-sm shadow-red-200"
                                : i < activeIndex
                                  ? "bg-green-400 w-2.5 h-2.5"
                                  : "bg-neutral-200 hover:bg-neutral-300 w-2.5 h-2.5"
                            }`}
                          />
                        ))}
                      </div>
                      <a
                        href="#"
                        className="group text-xs text-neutral-400 hover:text-red-600 font-mono tracking-wide transition-colors flex items-center gap-2"
                      >
                        اقرأ المزيد
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                          ←
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
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
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-50/0 to-amber-50/0 group-hover:from-amber-50/50 group-hover:to-transparent transition-all duration-500" />
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
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

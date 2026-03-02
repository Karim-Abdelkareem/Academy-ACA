"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import presedent from "@/public/presedent.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PREVIEW_PARAGRAPHS = [
  "أرحب بحضراتكم في الأكاديمية الوطنية لمكافحة الفساد، الذراع التدريبي والتثقيفي لهيئة الرقابة الإدارية.",
  "تُعني الأكاديمية بالأساس بتقديم الخدمات العلمية والتدريبية والمعرفية بهدف تنمية قدرات وخبرات القائمين والمنوط بهم مكافحة الفساد وكذلك مواكبة التطورات التكنولوجية في هذا المجال. كما أن الأكاديمية تعني بنشر قيم ومبادئ النزاهة، والشفافية، ومعايير مكافحة الفساد، في المجتمع دون تمييز في سبيل تحقيق التنمية.",
];

const EXTRA_PARAGRAPHS = [
  "وتسعى الأكاديمية إلى تحقيق الريادة في هذا المجال من خلال تعزيز البحث العلمي والتعاون المستمر وتبادل الخبرات مع أجهزة إنفاذ القانون، والمؤسسات التعليمية المحلية والدولية.",
  "وعلى المستوى الإقليمي والدولي، تسعى الأكاديمية إلى الإسهام في نشر أسس ومبادئ الحوكمة ومكافحة الفساد وتعتمد الأكاديمية في ذلك على نظم تدريب حديثة قائمة على التحول الرقمي.",
  "وتقدم الأكاديمية للدارسين برامج تدريبية متخصصة في مجالات مكافحة الفساد، والقانون، والإدارة، والاقتصاد، بعدة لغات. كما أن الأكاديمية تمنح درجة الدبلوم في الحوكمة ومكافحة الفساد بالتعاون مع كلية الاقتصاد والعلوم السياسية بجامعة القاهرة.",
  "يسعدنا أن تكونوا جزءاً من قصص النجاح في مجال مكافحة الفساد من خلال التحاقكم بالأكاديمية ومساعدتنا في تنمية وتطوير ونشر علوم مكافحة الفساد والحوكمة.",
  "وأدعو الله عز وجل أن يُكلل جهودنا بالتوفيق والسداد.",
];

const STATS = [
  { value: "٢٠١٧", label: "سنة التأسيس", icon: "📅" },
  { value: "+٥٠", label: "برنامج تدريبي", icon: "📚" },
  { value: "دولي", label: "نطاق الأكاديمية", icon: "🌍" },
];

export default function Speach() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const quoteLineRef = useRef<HTMLDivElement>(null);
  const statsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header entrance ──
      const headerTL = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      headerTL
        .from(headerRef.current!.querySelector(".speech-subtitle")!, {
          opacity: 0,
          y: 15,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          headerRef.current!.querySelector(".speech-title")!,
          { opacity: 0, y: 30, scale: 0.94, duration: 0.6, ease: "power3.out" },
          "-=0.25",
        )
        .from(
          headerRef.current!.querySelector(".speech-decor-line")!,
          { scaleX: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2",
        );

      // ── Image column ──
      const imgTL = gsap.timeline({
        scrollTrigger: {
          trigger: imageColRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      imgTL
        .from(imageColRef.current!.querySelector(".speech-frame-border")!, {
          opacity: 0,
          scale: 0.9,
          x: 30,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          imageColRef.current!.querySelector(".speech-image-wrap")!,
          { opacity: 0, x: 40, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        )
        .from(
          imageColRef.current!.querySelector(".speech-nameplate")!,
          { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );

      // ── Quote accent line grow ──
      if (quoteLineRef.current) {
        gsap.from(quoteLineRef.current, {
          scaleY: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteLineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── Text column ──
      if (textColRef.current) {
        const textEls =
          textColRef.current.querySelectorAll(".speech-text-anim");
        gsap.from(textEls, {
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textColRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── Stats ──
      if (statsRowRef.current) {
        const statEls = statsRowRef.current.querySelectorAll(".speech-stat");
        gsap.from(statEls, {
          opacity: 0,
          y: 20,
          scale: 0.9,
          stagger: 0.08,
          duration: 0.5,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: statsRowRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 overflow-hidden bg-gradient-to-b from-white via-neutral-50/80 to-white"
      dir="rtl"
      style={{
        fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif",
      }}
    >
      {/* ═══ Background decorations ═══ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Radial gold glow behind the image */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Red glow behind text */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="sg2"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#000"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sg2)" />
        </svg>
        {/* Corner accent lines */}
        <div className="absolute top-0 right-0 w-40 h-40">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#d4af37]/30 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#d4af37]/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4af37]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-[#d4af37]/20 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        {/* ═══ Section header ═══ */}
        <div
          ref={headerRef}
          className="flex flex-col items-center gap-3 text-center mb-20"
        >
          <span className="speech-subtitle text-red-500 text-xs font-mono tracking-[0.4em] uppercase bg-red-50 px-5 py-2 rounded-full border border-red-100">
            قيادة الأكاديمية
          </span>
          <h2 className="speech-title text-neutral-900 text-4xl md:text-5xl lg:text-6xl font-black leading-none mt-2">
            كلمة الرئيس<span className="text-red-600">.</span>
          </h2>
          <div className="speech-decor-line w-16 h-1 bg-gradient-to-l from-[#d4af37] to-red-500 rounded-full mt-2 origin-center" />
        </div>

        {/* ═══ Main Grid ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ─── Image Column ─── */}
          <div ref={imageColRef} className="md:col-span-5 lg:col-span-4">
            <div className="relative group">
              {/* Decorative frame border */}
              <div className="speech-frame-border absolute -inset-3 rounded-[2rem] border border-[#d4af37]/20 pointer-events-none" />
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-b from-[#d4af37]/5 to-transparent pointer-events-none" />

              {/* Image container */}
              <div className="speech-image-wrap relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200">
                <Image
                  src={presedent}
                  alt="رئيس الأكاديمية - لواء/ عمرو عادل"
                  width={500}
                  height={620}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Nameplate */}
                <div className="speech-nameplate absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white font-black text-xl leading-snug">
                        لواء/ عمرو عادل
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="w-6 h-[2px] bg-[#d4af37] rounded-full" />
                        <p className="text-white/70 text-xs leading-relaxed">
                          رئيس هيئة الرقابة الإدارية
                          <br />
                          ورئيس مجلس إدارة الأكاديمية
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c9a227] flex items-center justify-center shadow-xl shadow-[#d4af37]/20 shrink-0
                      group-hover:scale-110 transition-transform duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Mini stats below image ─── */}
            <div ref={statsRowRef} className="flex gap-3 mt-6">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="speech-stat flex-1 group flex flex-col items-center gap-1
                    bg-white border border-neutral-200 rounded-2xl py-4 px-2 text-center shadow-sm
                    hover:border-[#d4af37]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-lg mb-1 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </span>
                  <span className="text-[#c9a227] font-black text-lg leading-none font-mono">
                    {s.value}
                  </span>
                  <span className="text-neutral-400 text-[10px] leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Text Column ─── */}
          <div
            ref={textColRef}
            className="md:col-span-7 lg:col-span-8 flex flex-col gap-6"
          >
            {/* Quote card */}
            <div className="relative">
              {/* Vertical accent line */}
              <div
                ref={quoteLineRef}
                className="absolute right-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#d4af37] via-red-500 to-[#d4af37]/30 origin-top"
              />

              <div className="pr-8">
                {/* The big quote mark */}
                <div className="speech-text-anim mb-4">
                  <svg
                    className="w-16 h-16 text-[#d4af37]/20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5c0-1.379 1.121-2.5 2.5-2.5V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.379 1.121-2.5 2.5-2.5V8z" />
                  </svg>
                </div>

                {/* Preview text */}
                <div className="space-y-5">
                  <p className="speech-text-anim font-bold text-xl md:text-2xl text-neutral-900 leading-relaxed">
                    {PREVIEW_PARAGRAPHS[0]}
                  </p>
                  <p className="speech-text-anim text-neutral-600 text-base md:text-lg leading-loose">
                    {PREVIEW_PARAGRAPHS[1]}
                  </p>
                </div>

                {/* Expandable extra content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="extra"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 pt-5">
                        {EXTRA_PARAGRAPHS.map((p, i) => (
                          <motion.p
                            key={i}
                            className="text-neutral-600 text-base md:text-lg leading-loose"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.45 }}
                          >
                            {p}
                          </motion.p>
                        ))}

                        {/* Signature block */}
                        <motion.div
                          className="pt-6 mt-3 border-t border-neutral-200 flex items-center gap-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.45 }}
                        >
                          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#d4af37]/40 ring-offset-2 ring-offset-white shrink-0">
                            <Image
                              src={presedent}
                              alt="signature"
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <p className="text-black text-base">
                              لواء/ عمرو عادل
                            </p>
                            <p className="text-black text-xs mt-0.5">
                              رئيس هيئة الرقابة الإدارية ورئيس مجلس إدارة
                              الأكاديمية الوطنية لمكافحة الفساد
                            </p>
                          </div>
                          {/* Decorative signature line */}
                          <div className="hidden md:block mr-auto">
                            <svg
                              className="w-24 h-8 text-[#d4af37]/20"
                              viewBox="0 0 100 30"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path
                                d="M5 25 C 15 5, 30 5, 40 15 S 60 25, 70 15 S 85 5, 95 15"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divider */}
                <div className="h-px bg-gradient-to-l from-neutral-200 via-neutral-100 to-transparent mt-6" />

                {/* Read more button */}
                <div className="mt-6 speech-text-anim">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group relative flex items-center gap-3 px-7 py-3.5 rounded-full cursor-pointer
                      bg-white border border-neutral-200
                      hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5 hover:shadow-md
                      text-neutral-700 hover:text-[#c9a227] text-sm font-semibold
                      transition-all duration-300 overflow-hidden"
                  >
                    {/* Shine effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(212,175,55,0.06), transparent)",
                      }}
                    />
                    <span className="relative z-10">
                      {isExpanded ? "اقرأ أقل" : "اقرأ المزيد"}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

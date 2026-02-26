"use client";

import React, { useState } from "react";
import Image from "next/image";
import presedent from "@/public/presedent.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  { value: "٢٠١٧", label: "سنة التأسيس" },
  { value: "+٥٠", label: "برنامج تدريبي" },
  { value: "دولي", label: "نطاق الأكاديمية" },
];

export default function Speach() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="relative w-full py-24 overflow-hidden bg-white"
      dir="rtl"
      style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif" }}
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-amber-100/40 blur-[120px]" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[350px] rounded-full bg-red-50/60 blur-[110px]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="sg"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#111"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sg)" />
        </svg>
      </div>

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center gap-2 text-center mb-16"
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-red-500 text-xs font-mono tracking-[0.3em] uppercase">
            قيادة الأكاديمية
          </span>
          <h2 className="text-neutral-900 text-4xl md:text-5xl font-black leading-none">
            كلمة الرئيس<span className="text-red-600">.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Image column */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              {/* dashed offset border */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-dashed border-[#d4af37]/35 pointer-events-none z-0" />

              <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={presedent}
                  alt="رئيس الأكاديمية"
                  width={500}
                  height={620}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* nameplate */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <p className="text-white font-black text-lg leading-snug">
                      لواء/ عمرو عادل
                    </p>
                    <p className="text-white/65 text-xs mt-1 leading-relaxed">
                      رئيس هيئة الرقابة الإدارية
                      <br />
                      ورئيس مجلس إدارة الأكاديمية
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center shadow-lg shrink-0">
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

            {/* stat pills */}
            <div className="flex gap-3 mt-5">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex-1 flex flex-col items-center gap-0.5 bg-neutral-50 border border-neutral-200 rounded-xl py-3 px-2 text-center hover:border-[#d4af37]/50 transition-colors duration-200"
                >
                  <span className="text-[#c9a227] font-black text-lg leading-none font-mono">
                    {s.value}
                  </span>
                  <span className="text-neutral-400 text-[10px] leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="md:col-span-3 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          >
            {/* decorative quote mark */}
            <svg
              className="w-14 h-14 text-[#d4af37]/25 -mb-2"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5c0-1.379 1.121-2.5 2.5-2.5V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.379 1.121-2.5 2.5-2.5V8z" />
            </svg>

            {/* preview text */}
            <div className="space-y-4">
              <p className="font-black text-xl text-neutral-900 leading-relaxed">
                {PREVIEW_PARAGRAPHS[0]}
              </p>
              <p className="text-neutral-600 text-base leading-loose">
                {PREVIEW_PARAGRAPHS[1]}
              </p>
            </div>

            {/* expandable */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="extra"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-1">
                    {EXTRA_PARAGRAPHS.map((p, i) => (
                      <motion.p
                        key={i}
                        className="text-neutral-600 text-base leading-loose"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.4 }}
                      >
                        {p}
                      </motion.p>
                    ))}

                    {/* signature */}
                    <motion.div
                      className="pt-5 mt-2 border-t border-neutral-100 flex items-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#d4af37]/40 shrink-0">
                        <Image
                          src={presedent}
                          alt="signature"
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <p className="font-black text-neutral-900 text-sm">
                          لواء/ عمرو عادل
                        </p>
                        <p className="text-neutral-400 text-xs mt-0.5">
                          رئيس هيئة الرقابة الإدارية ورئيس مجلس إدارة الأكاديمية
                          الوطنية لمكافحة الفساد
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="h-px bg-gradient-to-l from-neutral-200 via-neutral-100 to-transparent" />

            {/* read more button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="self-start flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 hover:border-[#d4af37] hover:bg-[#d4af37]/5 text-neutral-700 hover:text-[#c9a227] text-sm font-semibold transition-all duration-200"
            >
              <span>{isExpanded ? "اقرأ أقل" : "اقرأ المزيد"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

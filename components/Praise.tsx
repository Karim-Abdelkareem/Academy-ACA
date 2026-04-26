"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineFormatQuote } from "react-icons/md";
import p1 from "@/public/T/T_1.jpeg";
import p2 from "@/public/T/T_2.jpeg";
import p3 from "@/public/T/T_3.jpeg";
import p4 from "@/public/T/T_4.jpeg";
import p5 from "@/public/T/T_5.jpeg";

const PRAISE_ITEMS = [
  {
    id: 1,
    image: p1,
    name: "د.رانيا يحيى",
    role: "عضو سابق بالمجلس القومي للمرأة",
    text: "دورة مكافحة الفساد والنزاهة والشفافية التي تقدمها الأكاديمية الوطنية لمكافحة الفساد واحدة من أجمل وأمتع الدورات التي يمكن أن يتلقاها المتدربين داخل هذه الأكاديمية المحترمة.",
  },
  {
    id: 2,
    image: p5,
    name: "د.غادة علي",
    role: "عضو سابق بمجلس النواب",
    text: "الأكاديمية الوطنية لمكافحة الفساد هذا القطاع العظيم من الصرح العظيم أصبح له دور فعال ومؤثر في تأهيل كافة القيادات الشابة.",
  },
  {
    id: 3,
    image: p4,
    name: "د.طارق الرفاعي",
    role: "مدير منظومة الشكاوي الحكومية الموحدة",
    text: "تكامل جهود سلطات الدولة يكون مؤثر وله نتائج إيجابية في الحد من كافة مظاهر الفساد، كل هذا موجود في البرنامج المتميز للدراسات العليا الخاص بالحوكمة ومكافحة الفساد.",
  },
  {
    id: 4,
    image: p3,
    name: "أ. عادل العسومي",
    role: "الرئيس السابق للبرلمان العربي",
    text: "أنا سعيد بوجودي الآن في الأكاديمية الوطنية وسعيد جداً أن أشهد هذا المستوى من التطور والحداثة. أنتم الآن تمثلون المرحلة الجديدة لمصر.",
  },
  {
    id: 5,
    image: p2,
    name: "أ. كريستين ألبرتين",
    role: "الممثلة الإقليمية لمكتب الأمم المتحدة المعني بالمخدرات والجريمة",
    text: "يسعى مكتب الأمم المتحدة لدعم المشاركة البناءة مع هيئة الرقابة الإدارية والأكاديمية الوطنية لمكافحة الفساد، تلك المشاركة الممتدة عبر السنوات الماضية.",
  },
];

// Two copies — with LTR layout and -50% shift this is perfectly seamless
const DOUBLED = [...PRAISE_ITEMS, ...PRAISE_ITEMS];

function PraiseCard({ item }: { item: (typeof PRAISE_ITEMS)[0] }) {
  return (
    <div
      dir="rtl"
      className="relative flex flex-col gap-4 w-[340px] shrink-0 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 cursor-default"
    >
      {/* quote icon watermark */}
      <MdOutlineFormatQuote
        size={72}
        className="absolute top-2 left-3 text-neutral-200 pointer-events-none select-none"
      />

      {/* top accent */}
      {/* <div className="absolute top-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-l from-red-500/60 to-transparent" /> */}

      {/* person */}
      <div className="flex gap-3 relative z-10">
        <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden ring-2 ring-red-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <p className="font-bold text-neutral-900 text-base leading-tight">
            {item.name}
          </p>
          <p className="text-neutral-400 text-xs leading-snug mt-0.5 max-w-[200px]">
            {item.role}
          </p>
        </div>
      </div>

      {/* divider */}
      <div className="h-px bg-neutral-100" />

      {/* quote */}
      <p className="text-neutral-600 text-sm leading-relaxed relative z-10 line-clamp-4">
        {item.text}
      </p>

      {/* stars */}
      <div className="flex gap-0.5 mt-auto">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-3.5 h-3.5 text-amber-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function Praise() {
  return (
    <section
      className="relative w-full py-20 overflow-hidden bg-white"
      dir="rtl"
      style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif" }}
    >
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-50/60 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[250px] bg-amber-50/50 blur-[90px] rounded-full" />
      </div>

      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />

      <div className="relative z-0 max-w-6xl mx-auto px-4 mb-14">
        <motion.div
          className="text-center flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-red-500 text-xs font-mono tracking-[0.3em] uppercase">
            ماذا قالوا عنا
          </span>
          <h2 className="text-neutral-900 text-4xl md:text-5xl font-black leading-none">
            إشادات
          </h2>
        </motion.div>
      </div>

      {/* Single continuous marquee row — forced LTR so translateX is predictable */}
      <div className="relative overflow-hidden" dir="ltr">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee-infinite 40s linear infinite" }}
        >
          {DOUBLED.map((item, i) => (
            <PraiseCard key={`row-${i}`} item={item} />
          ))}
        </div>
      </div>

      <style>{`
                @keyframes marquee-infinite {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                div[style*="marquee-infinite"]:hover {
                    animation-play-state: paused;
                }
            `}</style>
    </section>
  );
}

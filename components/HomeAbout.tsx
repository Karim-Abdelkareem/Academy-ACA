'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
    {
        id: 'origin',
        label: 'نشأة الأكاديمية',
        icon: '🏛',
        title: 'نشأة الأكاديمية',
        content:
            'في إطار سعى الدولة لتعزيز مبدأ الشفافية، ومكافحة الفساد المالي والإداري بشتى صوره ومظاهره وأساليبه، وتحقيق النزاهة داخل جميع الجهات والأجهزة العامة في الدولة تم تأسيس الأكاديمية الوطنية لمكافحة الفساد بموجب القانون رقم 207 لسنة 2017 ككيان تابع لهيئة الرقابة الإدارية للمعاونة في تحقيق الأهداف القومية في هذا المجال.',
        stat: { value: '2017', label: 'سنة التأسيس' },
    },
    {
        id: 'vision',
        label: 'الرؤية',
        icon: '🔭',
        title: 'الرؤية',
        content:
            'أن تصبح الأكاديمية الوطنية لمكافحة الفساد هي المرجعية الأساسية للتعليم والتدريب والتطوير في العلوم والمعارف والمهارات المتعلقة بمكافحة الفساد والوقاية منه، وفي المجالات الأخرى ذات الصلة على المستوى المحلي والإقليمي والدولي.',
        stat: { value: '٣', label: 'مستويات: محلي · إقليمي · دولي' },
    },
    {
        id: 'mission',
        label: 'الرسالة',
        icon: '📋',
        title: 'الرسالة',
        content:
            'تقديم الخدمات المعرفية والعلمية والتدريبية والبحثية المتميزة للمجتمع المصري والإقليمي والدولي في مجال مكافحة الفساد والوقاية منه وفي باقي المجالات ذات الصلة بأعلى درجات الجودة والحداثة، وذلك باستخدام أحدث وسائل التعليم والتدريب والتطوير وبالاستعانة بالتقنيات العلمية الحديثة من خلال منظومة تدريبية متكاملة ومتطورة.',
        stat: { value: '٤', label: 'خدمات: معرفية · علمية · تدريبية · بحثية' },
    },
];

export default function HomeAbout() {
    const [active, setActive] = useState(TABS[0].id);
    const activeTab = TABS.find((t) => t.id === active)!;

    return (
        <section
            className="relative w-full py-20 overflow-hidden bg-white"
            dir="rtl"
            style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif" }}
        >
            {/* Soft background blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-amber-100/50 blur-[110px]" />
                <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-red-50/70 blur-[100px]" />
            </div>

            <div className="relative z-10 w-[90%] max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    className="mb-14 flex flex-col items-center gap-2 text-center"
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-red-500 text-xs font-mono tracking-[0.3em] uppercase">تعرف علينا</span>
                    <h2 className="text-neutral-900 text-4xl md:text-5xl font-black leading-none">
                        عن الأكاديمية
                        <span className="text-red-600">.</span>
                    </h2>
                </motion.div>

                {/* Layout: tab buttons (right) + content (left) */}
                <div className="flex flex-col md:flex-row gap-6 items-stretch">

                    {/* --- Tab buttons column --- */}
                    <motion.div
                        className="flex flex-row md:flex-col gap-3 md:w-52 shrink-0"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {TABS.map((tab, i) => {
                            const isActive = active === tab.id;
                            return (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => setActive(tab.id)}
                                    className={`
                                        relative flex items-center gap-3 px-5 py-4 rounded-xl text-right
                                        font-semibold text-sm transition-colors duration-200 overflow-hidden
                                        border focus:outline-none
                                        ${isActive
                                            ? 'bg-[#d4af37] border-[#c9a227] text-neutral-900 shadow-md'
                                            : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50'
                                        }
                                    `}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                                >
                                    {/* active left border indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeBar"
                                            className="absolute right-0 top-0 bottom-0 w-1 bg-red-600 rounded-l-full"
                                        />
                                    )}
                                    <span className="text-lg">{tab.icon}</span>
                                    <span className="flex-1">{tab.label}</span>
                                </motion.button>
                            );
                        })}

                        {/* decorative vertical line on desktop */}
                        <div className="hidden md:block mt-auto h-px bg-gradient-to-l from-red-300 to-transparent" />
                    </motion.div>

                    {/* --- Content panel --- */}
                    <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="relative h-full rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden p-8 flex flex-col gap-6"
                            >
                                {/* top accent strip */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-[#d4af37] via-red-500 to-transparent" />

                                {/* title row */}
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl md:text-3xl font-black text-neutral-900">
                                        {activeTab.title}
                                        <span className="text-red-600">.</span>
                                    </h3>
                                    {/* stat badge */}
                                    <div className="shrink-0 flex flex-col items-center gap-0.5 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-center">
                                        <span className="text-[#c9a227] font-black text-xl leading-none font-mono">{activeTab.stat.value}</span>
                                        <span className="text-neutral-400 text-[10px] leading-tight max-w-[90px]">{activeTab.stat.label}</span>
                                    </div>
                                </div>

                                {/* divider */}
                                <div className="h-px bg-gradient-to-l from-neutral-200 to-transparent" />

                                {/* body text */}
                                <p className="text-neutral-600 leading-loose text-lg flex-1">
                                    {activeTab.content}
                                </p>

                                {/* bottom row */}
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex gap-1.5">
                                        {TABS.map((t) => (
                                            <button
                                                key={t.id}
                                                onClick={() => setActive(t.id)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                    active === t.id ? 'bg-red-600 w-6' : 'bg-neutral-300 hover:bg-neutral-400'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <a
                                        href="#"
                                        className="text-xs text-neutral-400 hover:text-red-600 font-mono tracking-wide transition-colors flex items-center gap-1"
                                    >
                                        اقرأ المزيد ←
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
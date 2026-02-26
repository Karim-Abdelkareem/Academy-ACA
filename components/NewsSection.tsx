"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { BlurFade } from './ui/blur-fade';

export type NewsItem = {
    id: number;
    name: string;
    year: string;
    date1String: string;
    image: string;
    richContent: string | null;
    isActive: boolean;
    isPublish: boolean;
};

const NEWS_DATA: NewsItem[] = [
    {
        id: 21011,
        name: 'ندوة بعنوان : الشمول المالي ( عدالة - تمكين - مساواة)',
        year: '2026',
        date1String: '29/01/2026 12:00 AM',
        image: 'https://academy.aca.gov.eg:8989/Media/GENWiki/Images/21011/N_W_639057998157055499.jpg',
        richContent: null,
        isActive: true,
        isPublish: true,
    },
    {
        id: 21010,
        name: 'ندوة بعنوان : الشمول المالي ( عدالة - تمكين - مساواة)',
        year: '2026',
        date1String: '28/01/2026 12:56 PM',
        image: 'https://academy.aca.gov.eg:8989/Media/GENWiki/Images/21010/N_W_639052013668531485.jpg',
        richContent: '<p>ندوة بعنوان : الشمول المالي ( عدالة - تمكين - مساواة)</p>',
        isActive: true,
        isPublish: true,
    },
    {
        id: 21008,
        name: 'الأكاديمية الوطنية لمكافحة الفساد تنظم اجتماعًا مشتركاً للتباحث حول سبل توطين الحقيبة التدريبية للتحقيقات المالية الموازية بالدول العربية',
        year: '2026',
        date1String: '22/01/2026 04:25 PM',
        image: 'https://academy.aca.gov.eg:8989/Media/GENWiki/Images/21008/N_W_639046955130094781.jpg',
        richContent: '<p>في إطار الجهود الإقليمية...</p>',
        isActive: true,
        isPublish: true,
    },
    {
        id: 21007,
        name: 'ندوة بعنوان " دور هيئة الرقابة الإدارية في استحداث أدوات لمنع ومكافحة الفساد"',
        year: '2026',
        date1String: '22/01/2026 01:06 PM',
        image: 'https://academy.aca.gov.eg:8989/Media/GENWiki/Images/21007/N_W_639046835778703301.jpg',
        richContent: 'ندوة بعنوان " دور هيئة الرقابة الإدارية في استحداث أدوات لمنع ومكافحة الفساد"',
        isActive: true,
        isPublish: true,
    },
];

function formatDate(dateStr: string) {
    const [datePart] = dateStr.split(' ');
    const [d, m, y] = datePart.split('/');
    const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
    return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
}

// ----- FEATURED CARD -----
function FeaturedCard({ item }: { item: NewsItem }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

    return (
        <motion.a
            ref={ref}
            href={`#news-${item.id}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-2xl h-full min-h-[520px] bg-neutral-100 focus:outline-none shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ textDecoration: 'none' }}
        >
            <div className="absolute inset-0 overflow-hidden">
                <motion.div className="absolute inset-[-8%]" style={{ y: imageY }}>
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            </div>

            <div className="relative z-10 p-6 flex items-start justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-white text-red-600 shadow-sm">
                    أحدث الأخبار
                </span>
                <span className="text-white/70 text-xs font-mono bg-black/20 backdrop-blur-sm px-2 py-1 rounded-md">{item.year}</span>
            </div>

            <div className="relative z-10 mt-auto p-6 pb-8">
                <p className="text-red-400 text-xs font-mono mb-3 tracking-wider">
                    {formatDate(item.date1String)}
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-5 line-clamp-3">
                    {item.name}
                </h3>
                <div className="flex items-center gap-3">
                    <span className="text-white/90 text-sm font-medium">اقرأ المزيد</span>
                    <motion.div
                        className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white"
                        whileHover={{ scale: 1.15, backgroundColor: 'rgba(220,38,38,0.9)', borderColor: 'transparent' }}
                        transition={{ duration: 0.2 }}
                    >
                        ←
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute right-0 top-0 w-1 bg-red-600 origin-top"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{ height: '100%' }}
            />
        </motion.a>
    );
}

// ----- STACK CARD -----
function StackCard({ item, index }: { item: NewsItem; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={`#news-${item.id}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="group relative flex items-stretch overflow-hidden rounded-xl bg-white border border-neutral-200 hover:border-red-300 hover:shadow-md transition-all duration-300 focus:outline-none"
            style={{ minHeight: 130, textDecoration: 'none' }}
        >
            <div className="relative w-36 shrink-0 overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="144px"
                />
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            className="absolute inset-0 bg-red-600/15"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    )}
                </AnimatePresence>
            </div>

            <div className="flex flex-col justify-center gap-2 p-4 min-w-0">
                <span className="text-red-500 text-[11px] font-mono tracking-wider">
                    {formatDate(item.date1String)}
                </span>
                <p className="text-neutral-800 text-sm font-semibold leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
                    {item.name}
                </p>
                <motion.span
                    className="text-neutral-400 text-xs flex items-center gap-1"
                    animate={{ x: hovered ? -4 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    اقرأ المزيد ←
                </motion.span>
            </div>

            <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-600 origin-bottom"
                animate={{ scaleY: hovered ? 1 : 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
            />
        </motion.a>
    );
}

// ----- WIDE BOTTOM CARD -----
function WideCard({ item }: { item: NewsItem }) {
    return (
        <motion.a
            href={`#news-${item.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="group relative flex overflow-hidden rounded-2xl bg-white border border-neutral-200 hover:border-red-300 hover:shadow-md transition-all duration-300 focus:outline-none"
            style={{ minHeight: 160, textDecoration: 'none' }}
        >
            <div className="absolute inset-0">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover opacity-10 transition-opacity duration-500 group-hover:opacity-15"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/80 to-white/50" />
            </div>

            <div className="relative z-10 flex items-center gap-6 p-6 w-full">
                <div className="hidden md:flex flex-col items-center gap-1 shrink-0">
                    <span className="text-red-600 text-3xl font-black font-mono leading-none">
                        {item.date1String.split('/')[0]}
                    </span>
                    <span className="text-neutral-400 text-xs font-mono">
                        {item.date1String.split('/')[1]}/{item.date1String.split('/')[2].split(' ')[0]}
                    </span>
                </div>
                <div className="w-px h-12 bg-red-200 hidden md:block shrink-0" />
                <div className="flex-1 min-w-0">
                    <p className="text-red-500 text-xs font-mono tracking-wider mb-2 md:hidden">{formatDate(item.date1String)}</p>
                    <h3 className="text-neutral-800 font-bold text-lg md:text-xl leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
                        {item.name}
                    </h3>
                </div>
                <motion.div
                    className="shrink-0 w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(220,38,38,0.6)', color: 'rgb(220,38,38)' }}
                >
                    ←
                </motion.div>
            </div>
        </motion.a>
    );
}

// ----- MAIN SECTION -----
export default function NewsSection() {
    const [featured, ...rest] = NEWS_DATA;
    const stackItems = rest.slice(0, 2);
    const wideItem = rest[2];

    return (
        <section
            className="relative py-20 overflow-hidden bg-white"
            dir="rtl"
            style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif" }}
        >
            {/* background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-red-100/60 blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-red-50 blur-[100px]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#111" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 w-[90%] max-w-7xl mx-auto">

                {/* Section header */}
                <motion.div
                    className="flex items-end justify-between mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col gap-2">
                        <span className="text-red-500 text-xs font-mono tracking-[0.3em] uppercase">أحدث المستجدات</span>
                        <h2 className="text-neutral-900 text-4xl md:text-5xl font-black leading-none">
                            الأخبار
                            <span className="text-red-600">.</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-3 pb-2">
                        <div className="h-px w-24 bg-gradient-to-l from-red-500 to-transparent" />
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                </motion.div>

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:row-span-2">
                        <FeaturedCard item={featured} />
                    </div>
                    <div className="flex flex-col gap-4">
                        {stackItems.map((item, i) => (
                            <StackCard key={item.id} item={item} index={i} />
                        ))}
                    </div>
                    {wideItem && (
                        <div className="md:col-span-1">
                            <WideCard item={wideItem} />
                        </div>
                    )}
                </div>

                {/* CTA */}
                <motion.div
                    className="flex justify-center mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <BlurFade duration={0.6} delay={0.2} offset={10} direction='left'>
                        <div className="w-full flex justify-center my-20">
                            <InteractiveHoverButton dir='ltr'>
                                <Link href="/news">
                                    المزيد من الأخبار
                                </Link>
                            </InteractiveHoverButton>
                        </div>
                    </BlurFade>
                </motion.div>
            </div>
        </section>
    );
}
'use client';

import React from 'react';
import { BlurFade } from './ui/blur-fade';
import Image from 'next/image';
import { CalendarIcon, ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

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
    return `${y}/${m}/${d}`;
}

function NewsBentoCard({
    item,
    className,
    size = 'default',
}: {
    item: NewsItem;
    className?: string;
    size?: 'default' | 'large' | 'wide';
}) {
    return (
        <a
            href={`#news-${item.id}`}
            className={cn(
                'group relative flex min-w-0 flex-col overflow-hidden rounded-xl',
                'bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
                'dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]',
                'transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                className
            )}
        >
            <div
                className={cn(
                    'relative w-full min-w-0 flex-1 bg-neutral-200',
                    size === 'large' && 'min-h-[320px]',
                    size === 'default' && 'min-h-[200px]',
                    size === 'wide' && 'min-h-[220px]'
                )}
            >
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes={
                        size === 'large'
                            ? '(max-width: 768px) 100vw, 50vw'
                            : size === 'wide'
                                ? '100vw'
                                : '(max-width: 768px) 100vw, 33vw'
                    }
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden p-4 text-white">
                    <div className="translate-y-96 transition-transform duration-300 ease-out group-hover:translate-y-0">
                        <div className="flex items-center gap-2 text-sm text-white/90">
                            <CalendarIcon className="h-4 w-4 shrink-0" />
                            <time dateTime={item.date1String}>{formatDate(item.date1String)}</time>
                        </div>
                        <h3
                            className={cn(
                                'font-semibold leading-tight text-white break-words',
                                size === 'large' && 'text-xl md:text-2xl line-clamp-3',
                                size === 'wide' && 'text-lg md:text-xl line-clamp-2',
                                size === 'default' && 'text-base md:text-lg line-clamp-2'
                            )}
                        >
                            {item.name}
                        </h3>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm text-white/90 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                            اقرأ المزيد
                            <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default function NewsSection() {
    const [first, second, third, fourth] = NEWS_DATA;

    return (
        <div className="w-[90%] max-w-full mx-auto my-12 overflow-x-hidden" dir="rtl">
            <BlurFade>
                <h2 className="text-4xl font-bold text-center mb-12 text-red-600">الاخبار</h2>
            </BlurFade>
            <BlurFade duration={0.6} delay={0.2} offset={10} direction='left'>

                <div
                    className={cn(
                        'grid w-full max-w-full gap-4',
                        'grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]',
                        'auto-rows-[minmax(200px,auto)]'
                    )}
                >
                    {/* Large: first news (left, spans 2 rows) */}
                    <div className="min-w-0 md:row-span-2 min-h-[280px] md:min-h-[420px]">
                        <NewsBentoCard item={first} size="large" className="h-full min-h-[280px] md:min-h-[420px]" />
                    </div>
                    {/* Top right */}
                    <div className="min-w-0 min-h-[200px]">
                        <NewsBentoCard item={second} size="default" className="h-full min-h-[200px]" />
                    </div>
                    {/* Bottom right */}
                    <div className="min-w-0 min-h-[200px]">
                        <NewsBentoCard item={third} size="default" className="h-full min-h-[200px]" />
                    </div>
                    {/* Wide: fourth news (full width on second row on md) */}
                    <div className="min-w-0 md:col-span-2 min-h-[220px]">
                        <NewsBentoCard item={fourth} size="wide" className="h-full min-h-[220px]" />
                    </div>
                </div>
            </BlurFade>
            <BlurFade duration={0.6} delay={0.2} offset={10} direction='left'>
                <div className="w-full flex justify-center my-20">
                    <InteractiveHoverButton dir='ltr'>
                        <Link href="/news">
                            المزيد من الاخبار
                        </Link>
                    </InteractiveHoverButton>
                </div>
            </BlurFade>
        </div>
    );
}

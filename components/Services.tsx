'use client';

import React from 'react';
import { BlurFade } from './ui/blur-fade';
import Image from 'next/image';
import { ArrowRightIcon, TagIcon, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BorderBeam } from './ui/border-beam';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import Link from 'next/link';

export type ServiceItem = {
    id: number;
    name: string;
    description: string | null;
    image: string;
    priceString: string;
    isFree: boolean;
};

const SERVICES_DATA: ServiceItem[] = [
    {
        id: 37,
        name: 'الاساسى في مجال الحوكمة و مكافحة الفساد',
        description: null,
        image: 'https://academy.aca.gov.eg:8989/Media/GENType/Images/37/T_T_638064316592642486.jpg',
        priceString: '3,000 EGP',
        isFree: false,
    },
    {
        id: 176,
        name: 'البرنامج التدريبى " تميز " فى مجال بناء القدرات لقادة المستقبل',
        description: null,
        image: 'https://academy.aca.gov.eg:8989/Media/GENType/Images/176/T_T_638097344640345165.jpg',
        priceString: '5,100 EGP',
        isFree: false,
    },
    {
        id: 38,
        name: 'المتقدم فى مجال الحوكمة و مكافحة الفساد',
        description: null,
        image: 'https://academy.aca.gov.eg:8989/Media/GENType/Images/38/T_T_638064320486901887.jpg',
        priceString: '3,000 EGP',
        isFree: false,
    },
    {
        id: 155,
        name: 'أسس الأمن السيبرانى',
        description: null,
        image: 'https://academy.aca.gov.eg:8989/Media/GENType/Images/155/T_T_638064400336658136.jpg',
        priceString: '600 EGP',
        isFree: false,
    },
    {
        id: 48,
        name: 'الحوكمة والمراجعة الداخلية فى المؤسسات',
        description: null,
        image: 'https://academy.aca.gov.eg:8989/Media/GENType/Images/48/T_T_638064326199994491.jpg',
        priceString: '3,000 EGP',
        isFree: false,
    },
    {
        id: 175,
        name: 'الأساسي في مجال الحوكمة و مكافحة الفساد خارج محافظة القاهرة',
        description: null,
        image: 'https://academy.aca.gov.eg:8989/Media/GENType/Images/175/T_T_638091182874640817.jpg',
        priceString: '3,600 EGP',
        isFree: false,
    },
];

function ServiceBentoCard({
    item,
    className,
    size = 'default',
    badgePosition = 'top-left',
}: {
    item: ServiceItem;
    className?: string;
    size?: 'default' | 'large' | 'wide';
    badgePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center';
}) {
    const badgePositions = {
        'top-left': {
            container: 'top-4 left-4',
            translate: 'translate-x-[-100px] translate-y-[-100px]',
        },
        'top-right': {
            container: 'top-4 right-4',
            translate: 'translate-x-[100px] translate-y-[-100px]',
        },
        'bottom-left': {
            container: 'bottom-4 left-4',
            translate: 'translate-x-[-100px] translate-y-[100px]',
        },
        'bottom-right': {
            container: 'bottom-4 right-4',
            translate: 'translate-x-[100px] translate-y-[100px]',
        },
        'top-center': {
            container: 'top-4 left-1/2 -translate-x-1/2',
            translate: 'translate-y-[-100px]',
        },
        'bottom-center': {
            container: 'bottom-4 left-1/2 -translate-x-1/2',
            translate: 'translate-y-[100px]',
        },
        'left-center': {
            container: 'top-1/2 left-4 -translate-y-1/2',
            translate: 'translate-x-[-100px]',
        },
        'right-center': {
            container: 'top-1/2 right-4 -translate-y-1/2',
            translate: 'translate-x-[100px]',
        },
    };

    const position = badgePositions[badgePosition];
    return (
        <a
            href={`#service-${item.id}`}
            className={cn(
                'group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-300',
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Apply Now Badge */}
                <div className={cn('absolute z-20', position.container)}>
                    <div className={cn(
                        'opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out',
                        position.translate
                    )}>
                        <div className="bg-[#d4af37] text-neutral-900 px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-lg whitespace-nowrap">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>سجل الآن</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 overflow-hidden p-4 text-white">
                    <div className="translate-y-[200px] transition-transform duration-300 ease-out group-hover:translate-y-0">
                        <div className="mb-2 flex items-center gap-2 text-sm text-white/90">
                            <TagIcon className="h-4 w-4 shrink-0" />
                            <span className="font-semibold">{item.priceString}</span>
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
                        <span className="mt-2 inline-flex items-center gap-1 text-sm text-white/90 transition-all duration-300 hover:text-red-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                            عرض التفاصيل
                            <ArrowRightIcon className="h-4 w-4 rtl:rotate-180 transition-colors duration-300 hover:text-red-400" />
                        </span>
                    </div>
                </div>
            </div>
            <BorderBeam
                size={200}
                colorFrom="transparent"
                className="from-transparent via-red-700 to-transparent"
                duration={6}
                borderWidth={2}
            />
        </a>
    );
}

export default function Services() {
    const [first, second, third, fourth, fifth, sixth] = SERVICES_DATA;

    return (
        <div className="w-[90%] max-w-full mx-auto my-24 overflow-x-hidden" dir="rtl">
            <BlurFade>
                <h2 className="text-4xl font-bold text-center mb-12 text-red-600">الدورات التدريبية</h2>
            </BlurFade>
            <BlurFade duration={0.6} delay={0.2} offset={10} direction="left">
                <div
                    className={cn(
                        'grid w-full max-w-full gap-4',
                        'grid-cols-1 md:grid-cols-3',
                        'auto-rows-[minmax(200px,auto)]'
                    )}
                >
                    {/* Large: first service (spans 2 cols and 2 rows) */}
                    <div className="min-w-0 md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[400px]">
                        <ServiceBentoCard item={first} size="large" badgePosition="top-center" className="h-full min-h-[280px] md:min-h-[400px]" />
                    </div>
                    {/* Second service */}
                    <div className="min-w-0 min-h-[200px]">
                        <ServiceBentoCard item={second} size="default" badgePosition="top-left" className="h-full min-h-[200px]" />
                    </div>
                    {/* Third service */}
                    <div className="min-w-0 min-h-[200px]">
                        <ServiceBentoCard item={third} size="default" badgePosition="top-right" className="h-full min-h-[200px]" />
                    </div>
                    {/* Fourth service */}
                    <div className="min-w-0 min-h-[200px]">
                        <ServiceBentoCard item={fourth} size="default" badgePosition="top-left" className="h-full min-h-[200px]" />
                    </div>
                    {/* Fifth service */}
                    <div className="min-w-0 min-h-[200px]">
                        <ServiceBentoCard item={fifth} size="default" badgePosition="bottom-left" className="h-full min-h-[200px]" />
                    </div>
                    {/* Sixth service */}
                    <div className="min-w-0 min-h-[200px]">
                        <ServiceBentoCard item={sixth} size="default" badgePosition="top-right" className="h-full min-h-[200px]" />
                    </div>
                </div>
            </BlurFade>
            <BlurFade duration={0.6} delay={0.2} offset={10} direction='left'>
                <div className="w-full flex justify-center my-20">
                    <InteractiveHoverButton dir='ltr'>
                        <Link href="/services">
                            المزيد من الخدمات
                        </Link>
                    </InteractiveHoverButton>
                </div>
            </BlurFade>
        </div>
    );
}

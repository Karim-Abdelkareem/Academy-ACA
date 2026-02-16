"use client"
import React from 'react'
import { BlurFade } from './ui/blur-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import p1 from '@/public/T/T_1.jpeg'
import p2 from '@/public/T/T_2.jpeg'
import p3 from '@/public/T/T_3.jpeg'
import p4 from '@/public/T/T_4.jpeg'
import p5 from '@/public/T/T_5.jpeg'
import { BorderBeam } from './ui/border-beam'
import { MdOutlineFormatQuote } from 'react-icons/md'

export default function Praise() {
    return (
        <div className='w-full my-12 mx-auto max-w-6xl' dir="rtl">
            <BlurFade>
                <h2 className='text-4xl font-bold text-center mb-12 text-red-700'>إشادات</h2>
            </BlurFade>
            <BlurFade duration={0.6} delay={0.2} offset={10} direction='left'>
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1.5}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop
                        navigation={{
                            nextEl: '.praise-swiper-next',
                            prevEl: '.praise-swiper-prev',
                        }}
                        className="[&_.swiper-wrapper]:items-stretch"
                    >
                        <SwiperSlide className="h-auto flex items-stretch">
                            <div className="relative w-full h-full min-h-[280px] rounded-xl border p-4 overflow-hidden group cursor-pointer flex flex-col flex-1">
                                <div className='absolute top-1 left-4'>
                                    <MdOutlineFormatQuote size={80} className='text-2xl text-gray-500 opacity-10' />
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='space-y-2'>
                                        <Image src={p1} alt="p1" className="object-cover w-30 h-30 rounded-full" />
                                    </div>
                                    <div className='flex-1/2 space-y-4'>
                                        <div className='space-y-2'>
                                            <h3 className="text-xl font-bold">د.رانيا يحيى</h3>
                                            <h4 className="text-sm text-gray-500">
                                                عضو سابق بالمجلس القومي للمرأة
                                            </h4>
                                        </div>
                                        <p>دورة مكافحة الفساد والنزاهة والشفافية التي تقدمها الأكاديمية الوطنية لمكافحة الفساد واحدة من أجمل وأمتع الدورات التي يمكن أن يتلقاها المتدربين داخل هذه الأكاديمية المحترمة لما تقدمه من كشف أنواع الفساد المختلفة وكيفية محاربة الفساد بشتى صوره وأنواعه.
                                        </p>
                                    </div>
                                </div>
                                <BorderBeam size={100} colorFrom="transparent" colorTo="red" duration={5} borderWidth={1} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-auto flex items-stretch">
                            <div className="relative w-full h-full min-h-[280px] rounded-xl border p-4 overflow-hidden group cursor-pointer flex flex-col flex-1">
                                <div className='absolute top-1 left-4'>
                                    <MdOutlineFormatQuote size={80} className='text-2xl text-gray-500 opacity-10' />
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='space-y-2'>
                                        <Image src={p5} alt="p5" className="object-cover w-30 h-30 rounded-full" />
                                    </div>
                                    <div className='flex-1/2 space-y-4'>
                                        <div className='space-y-2'>
                                            <h3 className="text-xl font-bold">د.غادة علي</h3>
                                            <h4 className="text-sm text-gray-500">
                                                عضو سابق بمجلس النواب
                                            </h4>
                                        </div>
                                        <p>
                                            الأكاديمية الوطنية لمكافحة الفساد هذا القطاع العظيم من الصرح العظيم وهو هيئة الرقابة الإدارية أصبح له دور فعال ومؤثر في تأهيل كافة القيادات الشابة
                                        </p>
                                    </div>
                                </div>
                                <BorderBeam size={100} colorFrom="transparent" colorTo="red" duration={5} borderWidth={1} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-auto flex items-stretch">
                            <div className="relative w-full h-full min-h-[280px] rounded-xl border p-4 overflow-hidden group cursor-pointer flex flex-col flex-1">
                                <div className='absolute top-1 left-4'>
                                    <MdOutlineFormatQuote size={80} className='text-2xl text-gray-500 opacity-10' />
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='space-y-2'>
                                        <Image src={p4} alt="p4" className="object-cover w-30 h-30 rounded-full" />
                                    </div>
                                    <div className='flex-1/2 space-y-4'>
                                        <div className='space-y-2'>
                                            <h3 className="text-xl font-bold">د.طارق الرفاعي</h3>
                                            <h4 className="text-sm text-gray-500">
                                                مدير منظومة الشكاوي الحكومية الموحدة
                                            </h4>
                                        </div>
                                        <p>
                                            تكامل جهود سلطات الدولة يكون مؤثر و له نتائج إيجابية في الحد من كافة مظاهر الفساد ده كله بنلاقيه موجود في البرنامج المتميز للدراسات العليا الخاص بالحوكمة ومكافحة الفساد اللي بتنظمه الأكاديمية الوطنية لمكافحة الفساد بهيئة الرقابة الإدارية.
                                        </p>
                                    </div>
                                </div>
                                <BorderBeam size={100} colorFrom="transparent" colorTo="red" duration={5} borderWidth={1} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-auto flex items-stretch">
                            <div className="relative w-full h-full min-h-[280px] rounded-xl border p-4 overflow-hidden group cursor-pointer flex flex-col flex-1">
                                <div className='absolute top-1 left-4'>
                                    <MdOutlineFormatQuote size={80} className='text-2xl text-gray-500 opacity-10' />
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='space-y-2'>
                                        <Image src={p3} alt="p3" className="object-cover w-30 h-30 rounded-full" />
                                    </div>
                                    <div className='flex-1/2 space-y-4'>
                                        <div className='space-y-2'>
                                            <h3 className="text-xl font-bold">
                                                أ. عادل العسومي
                                            </h3>
                                            <h4 className="text-sm text-gray-500">
                                                الرئيس السابق للبرلمان العربي
                                            </h4>
                                        </div>
                                        <p>
                                            &quot;أنا سعيد بوجودي الأن في الأكاديمية الوطنية وسعيد جدا أن أشهد هذا المستوى من التطور والحداثة, كلمتي لكم هي &quot; أنتم الأن تمثلوا المرحلة الجديدة لمصر&quot;
                                        </p>
                                    </div>
                                </div>
                                <BorderBeam size={100} colorFrom="transparent" colorTo="red" duration={5} borderWidth={1} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-auto flex items-stretch">
                            <div className="relative w-full h-full min-h-[280px] rounded-xl border p-4 overflow-hidden group cursor-pointer flex flex-col flex-1">
                                <div className='absolute top-1 left-4'>
                                    <MdOutlineFormatQuote size={80} className='text-2xl text-gray-500 opacity-10' />
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='space-y-2'>
                                        <Image src={p2} alt="p2" className="object-cover w-30 h-30 rounded-full" />
                                    </div>
                                    <div className='flex-1/2 space-y-4'>
                                        <div className='space-y-2'>
                                            <h3 className="text-xl font-bold">
                                                أ. كريستين ألبرتين
                                            </h3>
                                            <h4 className="text-sm text-gray-500 max-w-sm">
                                                الممثلة الإقليمية لمكتب الأمم المتحدة المعني بالمخدرات والجريمة للشرق الأوسط و شمال أفريقيا
                                            </h4>
                                        </div>
                                        <p>
                                            يسعى مكتب الأمم المتحدة المعني بمكافحة المخدرات والجريمة لدعم المشاركة البناءة مع هيئة الرقابة الإدارية والأكاديمية الوطنية لمكافحة الفساد تلك المشاركة الممتدة عبر السنوات الماضية والتي ساعدت على تحقيق العديد من الإنجازات المتميزة التي تشمل تدريب الممارسين من القطاعين العام والخاص على منع ومكافحة الفساد.
                                        </p>
                                    </div>
                                </div>
                                <BorderBeam size={100} colorFrom="transparent" colorTo="red" duration={5} borderWidth={1} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button
                        type="button"
                        className="praise-swiper-next absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-neutral-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors -left-4 md:-left-6"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="praise-swiper-prev absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-neutral-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors -right-4 md:-right-6"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </BlurFade>
        </div>
    )
}

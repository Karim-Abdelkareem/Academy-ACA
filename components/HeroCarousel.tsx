'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import c1 from '@/public/carousel/c1.jpeg';
import c2 from '@/public/carousel/c2.jpeg';
import c3 from '@/public/carousel/c3.jpeg';
import c4 from '@/public/carousel/c4.jpeg';
import c5 from '@/public/carousel/c5.jpeg';
import c6 from '@/public/carousel/c6.jpeg';
import c7 from '@/public/carousel/c7.jpeg';
import c8 from '@/public/carousel/c8.jpeg';
import c9 from '@/public/carousel/c9.jpeg';

const slides = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

export default function HeroCarousel() {
    return (
        <div className="w-[90%] mx-auto my-24 relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                navigation={{
                    nextEl: '.hero-swiper-next',
                    prevEl: '.hero-swiper-prev',
                }}
                loop
                className="hero-swiper overflow-hidden! rounded-xl"
            >
                {slides.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative aspect-21/9 w-full min-h-[200px] md:min-h-[320px] bg-neutral-200">
                            <Image
                                src={img}
                                alt={`Slide ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority={i === 0}
                            />
                            <div className="absolute bottom-6 left-6 bg-red-500/90 w-fit p-2 rounded-sm text-white animate-pulse">
                                <h1 className="text-sm font-bold">
                                    الالتزام بالتميز
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button type="button" className="hero-swiper-prev absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 text-neutral-800 shadow-md flex items-center justify-center hover:bg-white transition-colors -left-4 md:-left-6" aria-label="Previous slide">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button type="button" className="hero-swiper-next absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 text-neutral-800 shadow-md flex items-center justify-center hover:bg-white transition-colors -right-4 md:-right-6" aria-label="Next slide">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );
}

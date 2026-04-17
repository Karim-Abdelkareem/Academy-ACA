"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Thumbs,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

import c1 from "@/public/carousel/c1.jpeg";
import c2 from "@/public/carousel/c2.jpeg";
import c3 from "@/public/carousel/c3.jpeg";
import c4 from "@/public/carousel/c4.jpeg";
import c5 from "@/public/carousel/c5.jpeg";
import c6 from "@/public/carousel/c6.jpeg";
import c7 from "@/public/carousel/c7.jpeg";
import c8 from "@/public/carousel/c8.jpeg";
import c9 from "@/public/carousel/c9.jpeg";

const slides = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

const slideLabels = [
  "الالتزام بالتميز",
  "بيئة تعليمية متطورة",
  "مسيرة النجاح",
  "رؤية مستقبلية",
  "قيادة الإبداع",
  "التفوق الأكاديمي",
  "شراكات عالمية",
  "تمكين الطلاب",
  "مجتمع أكاديمي",
];

export default function HeroCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative group">
      {/* ───── Animated counter badge ───── */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-2">
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-white font-bold text-sm tabular-nums"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <span className="text-white/40 text-xs">/</span>
          <span className="text-white/60 text-xs font-medium">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ───── Autoplay progress bar ───── */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[3px] bg-white/10">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-red-500 transition-none"
          style={{ width: "0%" }}
        />
      </div>

      {/* ───── Main Carousel ───── */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Thumbs]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        navigation={{
          nextEl: ".hero-swiper-next",
          prevEl: ".hero-swiper-prev",
        }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onAutoplayTimeLeft={(_swiper, _timeLeft, percentage) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${(1 - percentage) * 100}%`;
          }
        }}
        className="hero-swiper overflow-hidden!"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative aspect-21/9 w-full min-h-[200px] md:min-h-[400px] lg:min-h-[480px] bg-neutral-900 overflow-hidden">
              {/* Background image with Ken Burns effect */}
              <motion.div
                key={`slide-${i}-${activeIndex}`}
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={img}
                  alt={slideLabels[i] || `Slide ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
              </motion.div>

              {/* Gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

              {/* Slide label */}
              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 40, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-8 left-6 md:bottom-28 md:left-10 z-10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-[2px] bg-gradient-to-r from-red-500 to-amber-400 rounded-full" />
                      <span className="text-amber-400/90 text-xs font-semibold tracking-widest uppercase">
                        Academy ACA
                      </span>
                    </div>
                    <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-xl leading-snug">
                      {slideLabels[i]}
                    </h2>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mt-3 h-1 w-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full origin-right"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ───── Navigation Arrows ───── */}
      <button
        type="button"
        className="hero-swiper-prev absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full
          backdrop-blur-md bg-white/10 border border-white/20 text-white
          shadow-2xl flex items-center justify-center
          hover:bg-white/25 hover:border-white/40 hover:scale-110
          active:scale-95
          transition-all duration-300 left-3 md:left-5
          opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5"
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
      <button
        type="button"
        className="hero-swiper-next absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full
          backdrop-blur-md bg-white/10 border border-white/20 text-white
          shadow-2xl flex items-center justify-center
          hover:bg-white/25 hover:border-white/40 hover:scale-110
          active:scale-95
          transition-all duration-300 right-3 md:right-5
          opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* ───── Thumbs Gallery ───── */}
      <div className="absolute bottom-0 right-0 mt-[-60px] md:mt-[-100px] max-w-4xl z-20 px-4 md:px-8 pb-2">
        <div className="backdrop-blur-xl bg-black/30 rounded-xl md:rounded-2xl p-2 md:p-3 border border-white/10 shadow-2xl">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={4}
            breakpoints={{
              480: { slidesPerView: 5, spaceBetween: 8 },
              640: { slidesPerView: 6, spaceBetween: 10 },
              768: { slidesPerView: 7, spaceBetween: 10 },
              1024: { slidesPerView: 8, spaceBetween: 12 },
              1280: { slidesPerView: 9, spaceBetween: 12 },
            }}
            watchSlidesProgress
            className="thumbs-swiper"
          >
            {slides.map((img, i) => (
              <SwiperSlide key={i} className="cursor-pointer">
                <div
                  className={`
                    relative aspect-[16/10] rounded-lg md:rounded-xl overflow-hidden
                    transition-all duration-400 ease-out
                    ${
                      activeIndex === i
                        ? "ring-2 ring-red-500 ring-offset-1 ring-offset-black/50 shadow-lg shadow-red-500/30 scale-105"
                        : "opacity-50 hover:opacity-80 grayscale hover:grayscale-0"
                    }
                  `}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                  {/* Active thumb glow overlay */}
                  {activeIndex === i && (
                    <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent" />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

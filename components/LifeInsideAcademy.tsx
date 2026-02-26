"use client";

import React from "react";
import { BlurFade } from "./ui/blur-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Using the same carousel images - you can replace these with specific "Life Inside Academy" photos
import i1 from "@/public/LIA/LIA_1.jpeg";
import i2 from "@/public/LIA/LIA_2.jpeg";
import i3 from "@/public/LIA/LIA_3.jpeg";
import i4 from "@/public/LIA/LIA_4.jpeg";
import i5 from "@/public/LIA/LIA_5.jpeg";
import i6 from "@/public/LIA/LIA_6.jpeg";
import i7 from "@/public/LIA/LIA_7.jpeg";
import i8 from "@/public/LIA/LIA_8.jpeg";
import i9 from "@/public/LIA/LIA_9.jpeg";
import i10 from "@/public/LIA/LIA_10.jpeg";
import i11 from "@/public/LIA/LIA_11.jpeg";
import i12 from "@/public/LIA/LIA_12.jpeg";

const photos = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12];

const lifeItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.05,
    },
  }),
};

export default function LifeInsideAcademy() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute  -top-24 -left-24 w-[350px] h-[350px] rounded-full bg-red-50/70 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-amber-100/50 blur-[110px]" />
      </div>
      <section className="relative w-full my-12 mx-auto max-w-6xl" dir="rtl">
        <BlurFade>
          <div className="relative z-0 max-w-6xl mx-auto px-4 mb-14">
            <motion.div
              className="text-center flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-neutral-900 text-4xl md:text-5xl font-black leading-none">
                الحياة داخل الأكاديمية<span className="text-red-600">.</span>
              </h2>
            </motion.div>
          </div>
        </BlurFade>
        <BlurFade duration={0.6} delay={0.2} offset={10} direction="left">
          <div className="w-full relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".life-swiper-next",
                prevEl: ".life-swiper-prev",
              }}
              loop
              className="life-swiper"
            >
              {photos.map((img, i) => (
                <SwiperSlide key={i} className="h-[300px]">
                  <motion.div
                    className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer"
                    variants={lifeItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={i}
                  >
                    <Image
                      src={img}
                      alt={`Life Inside Academy ${i + 1}`}
                      className="object-fill transition-transform duration-300 group-hover:scale-110 h-[280px]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              type="button"
              className="life-swiper-prev absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-neutral-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors -left-4 md:-left-6"
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
              className="life-swiper-next absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-neutral-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors -right-4 md:-right-6"
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
          </div>
        </BlurFade>
      </section>
    </div>
  );
}

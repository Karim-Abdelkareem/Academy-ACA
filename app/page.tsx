"use client";

import HeroCarousel from "@/components/HeroCarousel";
import NewsSection from "@/components/NewsSection";
import HomeAbout from "@/components/HomeAbout";
import Speach from "@/components/Speach";
import Services from "@/components/Services";
import LifeInsideAcademy from "@/components/LifeInsideAcademy";
import Praise from "@/components/Praise";

import { motion, Variants } from "framer-motion";

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const newsVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const aboutVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const speechVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const servicesVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const lifeVariants: Variants = {
  hidden: { opacity: 0, y: 60, rotate: -1 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const praiseVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <motion.section
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <HeroCarousel />
      </motion.section>
      <hr />

      <motion.section
        variants={newsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <NewsSection />
      </motion.section>
      <hr />

      <motion.section
        variants={aboutVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <HomeAbout />
      </motion.section>
      <hr />

      <motion.section
        variants={speechVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Speach />
      </motion.section>
      <hr />

      <motion.section
        variants={servicesVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Services />
      </motion.section>
      <hr />

      <motion.section
        variants={lifeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <LifeInsideAcademy />
      </motion.section>
      <hr />

      <motion.section
        variants={praiseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Praise />
      </motion.section>
    </div>
  );
}

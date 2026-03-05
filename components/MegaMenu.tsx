"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineLogin } from "react-icons/ai";
import { MdPersonAddAlt } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Book, BriefcaseBusiness, University } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── Mega-menu data ────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    id: "about",
    label: "عن الأكاديمية",
    href: "/about-academy",
    mega: {
      featured: {
        title: "مرحباً بكم",
        desc: "الأكاديمية الوطنية لمكافحة الفساد — الذراع التدريبي لهيئة الرقابة الإدارية.",
        href: "/about-academy",
        color: "from-[#d4af37]/10 to-red-50",
      },
      groups: [
        {
          heading: "التعريف",
          links: [
            { label: "نشأة الأكاديمية", href: "/about/origin", icon: "🏛" },
            { label: "الرؤية والرسالة", href: "/about/vision", icon: "🔭" },
            { label: "الهيكل التنظيمي", href: "/about/structure", icon: "🗂" },
          ],
        },
        {
          heading: "القيادة",
          links: [
            { label: "كلمة الرئيس", href: "/about/speech", icon: "🎙" },
            { label: "مجلس الإدارة", href: "/about/board", icon: "👥" },
          ],
        },
      ],
    },
  },
  {
    id: "studies",
    label: "الدراسات",
    href: "/projects",
    mega: {
      featured: {
        title: "البرامج الأكاديمية",
        desc: "برامج تدريب وتعليم متخصصة في مكافحة الفساد والحوكمة.",
        href: "/projects",
        color: "from-blue-50 to-indigo-50",
      },
      groups: [
        {
          heading: "الدرجات العلمية",
          links: [
            // { label: "دبلوم الحوكمة", href: "/studies/diploma", icon: "🎓" },
            { label: "الدراسات العليا", href: "/projects/diploma", icon: "📘" , nested: [
              {label: "الدبلومة ", href: "/projects/diploma", icon: <Book />},
              {label: "الماجستير", href: "/projects/master", icon: <University />},
              {label: "الدكتوراه", href: "/projects/doctorate", icon: <BriefcaseBusiness />},
            ]},
          ],
        },
        {
          heading: "التدريب",
          links: [
            {
              label: "البرامج التدريبية",
              href: "/studies/training",
              icon: "📋",
            },
            {
              label: "التدريب الإلكتروني",
              href: "/studies/elearning",
              icon: "💻",
            },
            { label: "الشهادات المهنية", href: "/studies/certs", icon: "🏅" },
          ],
        },
      ],
    },
  },
  {
    id: "services",
    label: "الخدمات",
    href: "/services",
    mega: {
      featured: {
        title: "خدماتنا",
        desc: "خدمات علمية ومعرفية وبحثية بأعلى درجات الجودة.",
        href: "/services",
        color: "from-amber-50 to-orange-50",
      },
      groups: [
        {
          heading: "الخدمات الرئيسية",
          links: [
            // { label: "الاستشارات", href: "/services/about", icon: "💡" },
            { label: "البحث العلمي", href: "/services/about", icon: "🔬" },
            {
              label: "النشر والإصدارات",
              href: "/services/publishing",
              icon: "📰",
            },
          ],
        },
        {
          heading: "الشراكات",
          links: [
            {
              label: "الشراكات الدولية",
              href: "/services/international",
              icon: "🌍",
            },
            { label: "الاتفاقيات", href: "/services/agreements", icon: "🤝" },
          ],
        },
      ],
    },
  },
  {
    id: "news",
    label: "الأخبار",
    href: "/news",
    mega: null, // Simple link, no mega
  },
  {
    id: "contact",
    label: "اتصل بنا",
    href: "/contact",
    mega: {
      featured: {
        title: "تواصل معنا",
        desc: "يسعدنا التواصل معكم والإجابة على جميع استفساراتكم.",
        href: "/contact",
        color: "from-green-50 to-emerald-50",
      },
      groups: [
        {
          heading: "وسائل التواصل",
          links: [
            { label: "البريد الإلكتروني", href: "/contact/email", icon: "📧" },
            { label: "الهاتف", href: "/contact/phone", icon: "📞" },
            { label: "العنوان", href: "/contact/address", icon: "📍" },
          ],
        },
        {
          heading: "التواصل الاجتماعي",
          links: [
            { label: "تويتر / X", href: "https://twitter.com", icon: "𝕏" },
            { label: "لينكدإن", href: "https://linkedin.com", icon: "in" },
          ],
        },
      ],
    },
  },
];

// ─── Types ─────────────────────────────────────────────────────────────────────
type Language = "ar" | "en" | "fr";

// ─── Component ─────────────────────────────────────────────────────────────────
export default function MegaMenu() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>("ar");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll-shrink logic ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate wrapper width/style on scroll
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (scrolled) {
      gsap.to(wrapper, {
        width: "90%",
        maxWidth: 1200,
        borderRadius: "1rem",
        duration: 0.45,
        ease: "power3.out",
      });
    } else {
      gsap.to(wrapper, {
        width: "100%",
        maxWidth: "100%",
        borderRadius: "0px",
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [scrolled]);

  // ── Mega menu hover handlers ─────────────────────────────────────────────────
  const handleMouseEnter = useCallback((id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveId(null), 150);
  }, []);

  const activeMega = NAV_ITEMS.find((n) => n.id === activeId)?.mega ?? null;

  return (
    <>
      {/* ── Outer positioning shell ─────────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center"
        style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif" }}
      >
        {/* ── The actual nav bar ──────────────────────────────────────────────── */}
        <div
          ref={wrapperRef}
          className="w-full overflow-visible"
          style={{ willChange: "width, border-radius" }}
        >
          <nav
            ref={navRef}
            dir="rtl"
            className={`w-full transition-all duration-500 ${
              scrolled
                ? "bg-white/20 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/[0.12] mt-3 ring-0.5 ring-inset ring-white/80"
                : "bg-transparent border-b border-white/10 shadow-none"
            }`}
            style={{
              borderRadius: "inherit",
              ...(scrolled && {
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
              }),
            }}
          >
            <div className="flex items-center justify-between h-[64px] px-4 md:px-6 gap-4">
              {/* ── Logo ──────────────────────────────────────────────────────── */}
              <Link href="/" className="shrink-0 flex items-center">
                <Image
                  src={logo}
                  alt="أكاديمية مكافحة الفساد"
                  width={120}
                  height={120}
                  className="h-20 w-auto object-contain p-1"
                />
              </Link>

              {/* ── Desktop nav links ─────────────────────────────────────────── */}
              <ul
                className="hidden md:flex items-center gap-1 list-none m-0 p-0"
                onMouseLeave={handleMouseLeave}
              >
                {NAV_ITEMS.map((item) => (
                  <li key={item.id} className="relative">
                    {item.mega ? (
                      <button
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        className={`group flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer
                          ${
                            activeId === item.id
                              ? scrolled
                                ? "bg-white/30 text-neutral-900"
                                : "bg-white/20 text-black"
                              : scrolled
                                ? "text-black hover:bg-black/60 hover:text-black"
                                : "text-black"
                          }`}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeId === item.id ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                          ${
                            scrolled
                              ? "text-black hover:bg-black/60 hover:text-black"
                              : "text-black"
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* ── Right action buttons ──────────────────────────────────────── */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Login + Register pill */}
                <div className="hidden md:flex items-center gap-1 bg-neutral-900 rounded-full p-1">
                  <Link href="/login">
                    <button
                      title="تسجيل الدخول"
                      className="group bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-neutral-900 transition-all duration-300"
                    >
                      <AiOutlineLogin
                        size={18}
                        className="group-hover:text-white transition-colors duration-300"
                      />
                    </button>
                  </Link>
                  <Link href="/register">
                    <button
                      title="إنشاء حساب"
                      className="group bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-neutral-900 transition-all duration-300"
                    >
                      <MdPersonAddAlt
                        size={18}
                        className="group-hover:text-white transition-colors duration-300"
                      />
                    </button>
                  </Link>
                </div>

                {/* Language switcher */}
                <div className="hidden md:block">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="group bg-neutral-900 hover:bg-white border border-neutral-900 rounded-full p-1 flex items-center transition-all duration-300 cursor-pointer">
                        <span className="bg-white group-hover:bg-neutral-900 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300">
                          <BsGlobe
                            size={16}
                            className="group-hover:text-white transition-colors duration-300"
                          />
                        </span>
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>اختر اللغة</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-2 py-2">
                        {(
                          [
                            {
                              code: "ar" as Language,
                              label: "العربية",
                              flag: "🇪🇬",
                            },
                            {
                              code: "en" as Language,
                              label: "English",
                              flag: "🇬🇧",
                            },
                            {
                              code: "fr" as Language,
                              label: "Français",
                              flag: "🇫🇷",
                            },
                          ] as { code: Language; label: string; flag: string }[]
                        ).map(({ code, label, flag }) => (
                          <DialogClose asChild key={code}>
                            <button
                              type="button"
                              onClick={() => setLanguage(code)}
                              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors hover:bg-neutral-50 ${language === code ? "border-[#d4af37] bg-amber-50" : "border-neutral-200"}`}
                            >
                              <span className="text-xl">{flag}</span>
                              {label}
                              {language === code && (
                                <span className="mr-auto text-[#d4af37] text-xs font-mono">
                                  ✓
                                </span>
                              )}
                            </button>
                          </DialogClose>
                        ))}
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">إغلاق</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Mobile hamburger */}
                <button
                  className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
                >
                  <span
                    className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${scrolled ? "bg-neutral-800" : "bg-white"} ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
                  />
                  <span
                    className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${scrolled ? "bg-neutral-800" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${scrolled ? "bg-neutral-800" : "bg-white"} ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                  />
                </button>
              </div>
            </div>
          </nav>

          {/* ── Mega-menu dropdown ──────────────────────────────────────────────── */}
          <AnimatePresence>
            {activeId && activeMega && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute left-0 right-0 top-full mt-1 z-[99] rounded-2xl overflow-hidden
                  bg-white border border-neutral-200/80 shadow-2xl shadow-black/[0.10]
                  ${scrolled ? "mx-0" : "mx-0"}`}
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                }}
                onMouseLeave={handleMouseLeave}
                dir="rtl"
              >
                <div className="grid grid-cols-12 gap-0 min-h-[220px]">
                  {/* Featured card */}
                  <div
                    className={`col-span-4 p-8 bg-gradient-to-br ${activeMega.featured.color} flex flex-col justify-end gap-3 border-l border-neutral-100`}
                  >
                    <div className="mt-auto">
                      <h3 className="text-neutral-900 text-xl font-black mb-2">
                        {activeMega.featured.title}
                        <span className="text-red-600">.</span>
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                        {activeMega.featured.desc}
                      </p>
                      <Link
                        href={activeMega.featured.href}
                        onClick={() => setActiveId(null)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-[#c9a227] transition-colors group"
                      >
                        اعرف أكثر
                        <GoArrowUpRight className="w-4 h-4 group-hover:translate-x-[-2px] group-hover:-translate-y-[2px] transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Link groups */}
                  <div className="col-span-8 p-8 grid grid-cols-2 gap-8">
                    {activeMega.groups.map((group) => (
                      <div key={group.heading}>
                        <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 mb-4">
                          {group.heading}
                        </p>
                        <ul className="space-y-1">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={() => setActiveId(null)}
                                className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors"
                              >
                                <span className="w-8 h-8 rounded-lg bg-neutral-100  group-hover:bg-white group-hover:shadow-sm flex items-center  justify-center text-sm transition-all duration-200 shrink-0">
                                  {link.icon}
                                </span>
                                <span className="text-sm text-neutral-700 group-hover:text-neutral-900 font-medium transition-colors">
                                  {link.label}
                                </span>
                                <GoArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#d4af37] mr-auto transition-colors opacity-0 group-hover:opacity-100" />
                              </Link>
                              {link.nested && (
                                <ul className="space-y-1">
                                  {link.nested.map((nestedLink) => (
                                    <li key={nestedLink.href}>
                                      <Link
                                        href={nestedLink.href}
                                        onClick={() => setActiveId(null)}
                                        className="group flex items-center gap-3 px-6 py-1 rounded-xl hover:bg-neutral-50 opacity-60 hover:opacity-100 transition-colors"
                                      >
                                        <span className="w-5 h-5 rounded-lg bg-neutral-100 group-hover:scale-110 group-hover:text-red-600 group-hover:bg-white group-hover:shadow-sm flex items-center justify-center text-sm transition-all duration-200 shrink-0">
                                          {nestedLink.icon}
                                        </span>
                                        <span className="text-sm text-neutral-700 group-hover:text-neutral-900 font-medium transition-colors">
                                          {nestedLink.label}
                                        </span>
                                        <GoArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#d4af37] mr-auto transition-colors opacity-0 group-hover:opacity-100" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Mobile drawer ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[98] bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              dir="rtl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[99] w-[80vw] max-w-sm bg-white shadow-2xl md:hidden overflow-y-auto"
              style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif" }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                <Image
                  src={logo}
                  alt="Logo"
                  width={70}
                  height={70}
                  className="h-10 w-auto object-contain p-1"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="p-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-neutral-800 font-semibold hover:bg-neutral-50 transition-colors text-base"
                    >
                      {item.label}
                      <GoArrowUpRight className="w-4 h-4 text-neutral-400" />
                    </Link>
                    {/* Sub links */}
                    {item.mega && (
                      <div className="pr-4 mt-1 space-y-0.5">
                        {item.mega.groups.flatMap((g) =>
                          g.links.map((lnk) => (
                            <Link
                              key={lnk.href}
                              href={lnk.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                            >
                              <span>{lnk.icon}</span>
                              {lnk.label}
                            </Link>
                          )),
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Action buttons */}
              <div className="p-4 border-t border-neutral-100 flex flex-col gap-3 mt-4">
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer">
                  <AiOutlineLogin size={18} />
                  تسجيل الدخول
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-neutral-200 text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors cursor-pointer">
                  <MdPersonAddAlt size={18} />
                  إنشاء حساب
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      <div className="h-[64px]" />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";

function MainServices() {
  const path = usePathname();
  const [activeTab, setActiveTab] = useState("about");
  const [selectedItemId, setSelectedItemId] = useState<string | null>("about");
  const Tabs = [
    { key: "about", label: "عن المركز", href: "/services/about" },
    { key: "studies", label: "الدراسات والبحوث", href: "/services/studies" },
    { key: "bookstore", label: "المكتبة", href: "/services/bookstore" },
  ];

  function handleItemClick(item: string) {
    const part = path.split("/")[1] + "/" + item;
    setSelectedItemId(part);
  }

  useEffect(() => {
    const part = path.split("/")[2];
    setActiveTab(part);
  }, [path]);

  return (
    <div className="ap-header-band" dir="rtl">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">
        {/* Breadcrumb */}
        <motion.nav
          className="flex items-center gap-2 pt-6 text-[11px] tracking-widest text-stone-400 uppercase"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="hover:text-red-700 transition-colors">
            الرئيسية
          </Link>
          <span className="text-stone-300 text-[8px]">
            <ChevronRightIcon className="w-4 h-4" />
          </span>
          <span className="text-stone-500">البحوث العلمية</span>
        </motion.nav>

        <motion.div
          className="py-10"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* <p className="text-[11px] font-semibold tracking-[0.28em] text-red-700 uppercase mb-3">
            Scientific Research
          </p> */}
          <h1 className="ap-display text-4xl lg:text-5xl font-bold text-stone-900 leading-[0.95] tracking-tight">
            البحوث العلمية
          </h1>
          {/* <div className="mt-5 flex items-center gap-3">
            <div className="w-14 h-0.5 bg-red-700 rounded-full" />
            <div className="w-1.5 h-1.5 rotate-45 bg-red-700" />
            <div className="w-6 h-px bg-red-200" />
          </div> */}
        </motion.div>

        {/* Tab bar */}
        <nav className="flex overflow-x-auto gap-0 scrollbar-none">
          {Tabs.map(({ key, label, href }, idx) => (
            <Link key={key} href={href} className="relative">
              <motion.button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  handleItemClick(key);
                }}
                className={`relative px-5 lg:px-7 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200
                    ${activeTab === key ? "text-stone-900" : "text-stone-400 hover:text-stone-600"}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + idx * 0.07 }}
              >
                {label}
                {activeTab === key && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-1 bg-red-700 rounded-full"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </Link>
          ))}
        </nav>
      </div>
      <hr />
    </div>
  );
}

export default MainServices;

'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import menuJson from '@/data/menu.json';

type MenuItem = {
  id: number;
  name: string;
  description: string | null;
  richContent: string | null;
  videoURL: string | null;
  image: string | null;
  displayOrdering: number | null;
  isActive: boolean;
  isPublish: boolean;
};

type MenuSection = {
  label: string;
  visable: boolean;
  items: MenuItem[];
};

type MenuData = Record<string, MenuSection>;

const ABOUT_SECTION_KEYS = [
  'foundation',
  'administrativeStructure',
  'socialAwareness',
  'lifeinAcademy',
] as const;

/**
 * Strips problematic inline CSS properties from richContent HTML.
 * The CMS injects hardcoded widths (e.g. width:2095px) that break layouts.
 */
function sanitizeRichContent(html: string): string {
  return html
    // Remove width / max-width / flex-basis / min-width from inline styles
    .replace(/\bwidth\s*:\s*[^;"]+(;|(?="))/gi, '')
    .replace(/\bmax-width\s*:\s*[^;"]+(;|(?="))/gi, '')
    .replace(/\bmin-width\s*:\s*[^;"]+(;|(?="))/gi, '')
    .replace(/\bflex-basis\s*:\s*[^;"]+(;|(?="))/gi, '')
    // Remove overflow:hidden that may clip content
    .replace(/\boverflow\s*:\s*hidden\s*(;|(?="))/gi, '');
}

function getAboutSections(data: MenuData) {
  return ABOUT_SECTION_KEYS.map((key) => {
    const section = data[key];
    if (!section || !Array.isArray(section.items))
      return {
        key,
        label: (section as { label?: string })?.label ?? key,
        items: [] as MenuItem[],
      };
    const items = (section.items as MenuItem[])
      .filter((i) => i?.isActive && i?.isPublish !== false)
      .sort((a, b) => (a.displayOrdering ?? 0) - (b.displayOrdering ?? 0));
    return { key, label: section.label, items };
  }).filter((s) => s.items.length > 0);
}

export default function AboutAcademyPage() {
  const data = menuJson.data as unknown as MenuData;
  const sections = useMemo(() => getAboutSections(data), [data]);
  const [activeTab, setActiveTab] = useState(sections[0]?.key ?? 'foundation');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const currentSection = sections.find((s) => s.key === activeTab);
  const currentItems = currentSection?.items ?? [];
  const selectedItem = selectedItemId
    ? currentItems.find((i) => i.id === selectedItemId) ?? currentItems[0]
    : currentItems[0];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Tajawal:wght@300;400;500;700&display=swap');

        .ap-root {
          font-family: 'Tajawal', sans-serif;
          direction: rtl;
          min-height: 100vh;
          background-color: #faf9f7;
          background-image:
            radial-gradient(ellipse 65% 45% at 4% 0%, rgba(185,28,28,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 45% 35% at 96% 100%, rgba(161,98,20,0.04) 0%, transparent 50%);
        }

        /* Header band */
        .ap-header-band {
          background: linear-gradient(180deg, #ffffff 0%, #faf9f7 100%);
          border-bottom: 1px solid #e7e5e4;
        }

        /* Cormorant for display headings */
        .ap-display { font-family: 'Cormorant Garamond', serif; }

        /* Animated tab underline */
        .ap-tab-line {
          position: absolute;
          inset-x: 0;
          bottom: -1px;
          height: 2px;
          background: #b91c1c;
          border-radius: 2px;
        }

        /* Sidebar active left border */
        .ap-nav-btn::before {
          content: '';
          position: absolute;
          inset-y: 0;
          left: 0;
          width: 2px;
          background: #b91c1c;
          border-radius: 2px;
          transform: scaleY(0);
          transition: transform 0.22s ease;
        }
        .ap-nav-btn.ap-active::before { transform: scaleY(1); }

        /* ── Rich content: reset ALL hardcoded widths from CMS ── */
        .ap-rich,
        .ap-rich * {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }

        /* Fix Bootstrap-like row/col that the CMS injects */
        .ap-rich .row {
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 1rem !important;
          margin: 1.5rem 0 !important;
          width: 100% !important;
        }
        .ap-rich .col-4,
        .ap-rich [class*="col-"] {
          flex: 1 1 200px !important;
          max-width: 100% !important;
          margin: 0 !important;
        }

        /* Images responsive */
        .ap-rich img {
          display: block !important;
          width: 100% !important;
          height: auto !important;
          border-radius: 10px;
          object-fit: cover;
          aspect-ratio: 4/3;
        }

        /* Typography */
        .ap-rich h1, .ap-rich h2, .ap-rich h3, .ap-rich h4 {
          font-family: 'Cormorant Garamond', serif;
          color: #1c1917;
          font-weight: 700;
          line-height: 1.2;
          margin: 2rem 0 0.8rem;
        }
        .ap-rich h1 { font-size: 2rem; }
        .ap-rich h2 { font-size: 1.5rem; }
        .ap-rich h3, .ap-rich h4 { font-size: 1.15rem; }
        .ap-rich p  { margin-bottom: 1.1rem; color: #57534e; line-height: 1.9; }
        .ap-rich a  { color: #b91c1c; text-underline-offset: 3px; }
        .ap-rich ul, .ap-rich ol { padding-right: 1.5rem; margin-bottom: 1rem; }
        .ap-rich li { color: #57534e; margin-bottom: 0.35rem; line-height: 1.7; }

        /* Colored headings from CMS keep their color but stay contained */
        .ap-rich span[style*="color"] { max-width: 100% !important; display: inline; }

        /* Remove o:p Word artifacts */
        .ap-rich o\\:p { display: none !important; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d6d3d1; border-radius: 2px; }

        @media (max-width: 900px) {
          .ap-layout { grid-template-columns: 1fr !important; }
          .ap-sidebar {
            border-left: none !important;
            border-bottom: 1px solid #e7e5e4;
            padding-left: 0 !important;
            padding-bottom: 1.5rem;
          }
          .ap-main { padding-right: 0 !important; }
        }
      `}</style>

      <div className="ap-root">

        {/* ──────────── HEADER ──────────── */}
        <div className="ap-header-band pt-28">
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
              <span className="text-stone-300 text-[8px]">◆</span>
              <span className="text-stone-500">عن الأكاديمية</span>
            </motion.nav>

            {/* Page title */}
            <motion.div
              className="py-10"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] font-semibold tracking-[0.28em] text-red-700 uppercase mb-3">
                About the Academy
              </p>
              <h1 className="ap-display text-5xl lg:text-[4.5rem] font-bold text-stone-900 leading-[0.95] tracking-tight">
                عن الأكاديمية
              </h1>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-14 h-0.5 bg-red-700 rounded-full" />
                <div className="w-1.5 h-1.5 rotate-45 bg-red-700" />
                <div className="w-6 h-px bg-red-200" />
              </div>
            </motion.div>

            {/* Tab bar */}
            <nav className="flex overflow-x-auto gap-0 scrollbar-none">
              {sections.map(({ key, label }, idx) => (
                <motion.button
                  key={key}
                  onClick={() => { setActiveTab(key); setSelectedItemId(null); }}
                  className={`relative px-5 lg:px-7 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200
                    ${activeTab === key ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + idx * 0.07 }}
                >
                  {label}
                  {activeTab === key && (
                    <motion.div
                      className="ap-tab-line"
                      layoutId="ap-tab"
                      transition={{ type: 'spring', stiffness: 500, damping: 42 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

          </div>
        </div>

        {/* ──────────── BODY ──────────── */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-14 py-12 lg:py-16">
          <div
            className="ap-layout"
            style={{ display: 'grid', gridTemplateColumns: '256px 1fr' }}
          >

            {/* ── Sidebar ── */}
            <aside
              className="ap-sidebar"
              style={{ borderLeft: '1px solid #e7e5e4', paddingLeft: '2.5rem' }}
            >
              {/* Section label */}
              <p className="text-[10px] font-bold tracking-[0.22em] text-stone-300 uppercase mb-4 pb-3 border-b border-stone-100">
                {currentSection?.label ?? 'المحتويات'}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentItems.map((item, i) => {
                    const isActive = selectedItem?.id === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedItemId(item.id)}
                        className={`ap-nav-btn ${isActive ? 'ap-active' : ''} relative w-full text-right flex items-center justify-between gap-3 py-3 pl-4 pr-0 border-b border-stone-100 last:border-none group transition-colors duration-200`}
                      >
                        <span
                          className={`text-sm leading-snug transition-colors duration-200 ${
                            isActive
                              ? 'text-stone-900 font-semibold'
                              : 'text-stone-400 group-hover:text-stone-700'
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`font-mono text-[10px] tabular-nums flex-shrink-0 transition-colors duration-200 ${
                            isActive ? 'text-red-600' : 'text-stone-300'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </aside>

            {/* ── Main Content ── */}
            <main
              className="ap-main"
              style={{ paddingRight: '3.5rem' }}
            >
              <AnimatePresence mode="wait">
                {selectedItem ? (
                  <motion.article
                    key={selectedItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Section label */}
                    <p className="text-[10px] font-semibold tracking-[0.25em] text-red-700 uppercase mb-2">
                      {currentSection?.label}
                    </p>

                    {/* Article title */}
                    <h2 className="ap-display text-4xl lg:text-[3.25rem] font-bold text-stone-900 leading-tight tracking-tight mb-6">
                      {selectedItem.name}
                    </h2>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-2 h-2 rotate-45 bg-red-700 flex-shrink-0" />
                      <div className="flex-1 h-px bg-stone-200" />
                      <div className="w-2 h-px bg-red-200" />
                    </div>

                    {/* Video */}
                    {selectedItem.videoURL && (
                      <div className="relative w-full mb-9 rounded-2xl overflow-hidden border border-stone-200 shadow-sm shadow-stone-100">
                        <video
                          src={selectedItem.videoURL}
                          controls
                          playsInline
                          className="w-full aspect-video object-cover"
                        >
                          متصفحك لا يدعم تشغيل الفيديو.
                        </video>
                        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-l from-red-700 via-red-300 to-transparent" />
                      </div>
                    )}

                    {/* Description — styled as a pull-quote */}
                    {selectedItem.description && (
                      <p className="text-base lg:text-[1.1rem] text-stone-500 font-light leading-[1.95] mb-8 border-r-[3px] border-red-200 pr-5 italic">
                        {selectedItem.description}
                      </p>
                    )}

                    {/* Rich content — sanitized to strip CMS hardcoded widths */}
                    {selectedItem.richContent && (
                      <div
                        className="ap-rich overflow-hidden"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeRichContent(selectedItem.richContent),
                        }}
                      />
                    )}
                  </motion.article>
                ) : (
                  <motion.div
                    key="empty"
                    className="flex items-center justify-center h-72 text-stone-300 text-sm tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    اختر عنصراً من القائمة
                  </motion.div>
                )}
              </AnimatePresence>
            </main>

          </div>
        </div>
      </div>
    </>
  );
}
"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { BadgeInfo, ChevronDown } from "lucide-react";

const goals = [
  "تشجيع البحث العلمي و إعداد البحوث و الدراسات المتخصصة في مجالات مكافحة الفساد و المرتبطة بإعداد الأدلة الخاصة بحوكمة الإجراءات داخل المنظومات الإدارية",
  "البحوث المرتبطة بإعداد الأدلة الخاصة بحوكمة الإجراءات داخل المنظومات الإدارية",
  "البحوث المرتبطة بالتحول الرقمي و إنشاء قواعد البيانات الموحدة , وتحديد أسلوب تدقيقها و تحديثها و إستخدامها في سبيل تطبيق الحوكمة الإلكترونية",
  "البحوث المرتبطة بالعمليات المالية الرقمية و العلوم ذات الصلة و العملات الرقمية",
  "التشجيع على إصدار البحوث العلمية في مجال الحوكمة ومكافحة الفساد و توثيقها من خلال اللجان العلمية المعدة لذلك و نشرها بشكل دوري",
  "متابعة الأبحاث العلمية المحلية و الإقليمية و الدولية المنشورة في مجال الحوكمة ومنع ومكافحة الفساد",
  "متابعة و دراسة المؤشرات المحلية و الدولية المرتبطة بالحوكمة و مكافحة الفساد",
  "عقد الدورات وورش العمل و نشر المجلات و الدوريات المرتبطة بمكافحة الفساد والتي تسهم في تثقيف المجتمع و تنمية دوره في هذا الصدد",
  "تقديم الإستشارات العلمية في مجال الحوكمة و مكافحة الفساد",
  "القيام بالدراسات الميدانية من خلال المركز بالتعاون مع جهات متخصصة أخرى لتحديد متطلبات و إحتياجات المواطنين ومدى رضاهم عن الأداء الحكومي في تقديم الخدمات بهدف تطويرها أو لقياس الظواهر الإقتصادية و الإجتماعية المختلفة و تأثيراتها المختلفة",
];

function servicesAbout() {
  const containerRef = useRef(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const about = document.querySelector(".aboutCard");
      const aboutImg = document.querySelector(".aboutImg");
      const aboutInfo = document.querySelector(".aboutInfo");
      const aboutTitle = document.querySelector(".aboutTitle");
      const aboutDesc = document.querySelector(".aboutDesc");
      const aboutNumbers = document.querySelector(".aboutNumbers");
      const aboutDropdown = document.querySelector(".aboutDropdown");

      const aboutchars = SplitText.create([aboutTitle, aboutDesc], {
        type: "lines,words",
        mask: "words",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: about,
            start: "top 85%",
            end: "top 15%",
            scrub: 1,
          },
        })
        .from(
          aboutImg,
          {
            clipPath: "inset(0 100% 0 0)",
          },
          0,
        )
        .from(
          aboutInfo,
          {
            clipPath: "inset(0 0 0 100%)",
            x: 40,
          },
          0,
        );

      gsap.from(aboutchars.words, {
        autoAlpha: 0.2,
        stagger: {
          amount: 1,
          from: "random",
        },
        xPercent: 100,
        ease: "power2.out",
        scrollTrigger: {
          trigger: about,
          start: "center 90%",
          end: "+=300px",

          scrub: 1,
        },
      });
      gsap.from([aboutDropdown, aboutNumbers], {
        autoAlpha: 0,
        y: 50,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: about,
          start: "center 70%",
          end: "+=300px",

          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      const items = document.querySelectorAll(".dropdown-item");
      const dropParagraph = document.querySelectorAll(".dropParagraph");

      const dropParagraphChars = SplitText.create(dropParagraph, {
        type: "lines,words",
        mask: "words",
      });
      if (isDropdownOpen) {
        const tl = gsap.timeline();
        tl.to(dropdownRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        })
          .to(
            items,
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2",
          )
          .from(
            dropParagraphChars.words,
            {
              xPercent: 100,
              opacity: 0,
              stagger: 0.02,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.2",
          );
      } else {
        const tl = gsap.timeline();
        tl.to(items, {
          y: 10,
          opacity: 0,
          stagger: 0.02,
          duration: 0.2,
          ease: "power2.in",
        }).to(
          dropdownRef.current,
          {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "+=0.1",
        );
      }
    },
    { dependencies: [isDropdownOpen] },
  );

  return (
    <section
      ref={containerRef}
      className="sec py-15 lg:py-25 bg-stone-50 overflow-hidden"
    >
      <div className="aboutCard max-w-screen-xl mx-auto px-6 lg:px-14">
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <div
            className="aboutInfo order-2 md:order-1 space-y-6 col-span-2 lg:col-span-2"
            dir="rtl"
          >
            <div className="text-sm font-semibold tracking-[0.28em] text-red-700 uppercase">
              About the Center
              <div className="mt-5 flex items-center gap-3">
                <div className="w-14 h-0.5 bg-red-700 rounded-full" />
                <div className="w-1.5 h-1.5 rotate-45 bg-red-700" />
                <div className="w-6 h-px bg-red-200" />
              </div>
            </div>
            <h2 className="aboutTitle ap-display text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              مركز الدراسات والبحوث
            </h2>
            <p className="aboutDesc text-stone-600 text-lg leading-relaxed">
              تقوم الأكاديمية الوطنية لمكافحة الفساد بإجراء البحوث والدراسات حول
              أسباب الفساد وآثاره وسبل مواجهته والوقاية منه على المستوى المحلي
              وبالتعاون مع الاكاديميات والمنظمات الدولية العاملة في مجال مكافحة
              الفساد حيث تم انشاء مركز متخصص للبحوث والدراسات بهدف تحقيق التميز
              والريادة والجمع بين تقديم البرامج العلمية والبحوث المتخصصة وكذلك
              تطوير سبل مكافحة الفساد وتنمية الإصلاح الإداري داخل أجهزة الدولة.
              وتتمثل أهداف المركز فيما يلي:
            </p>

            <div className="aboutDropdown w-full relative z-10">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-5 py-4 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-expanded={isDropdownOpen}
              >
                <span className="font-semibold text-stone-800 text-xl">
                  أهداف المركز
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-red-700 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div ref={dropdownRef} className="overflow-hidden h-0 opacity-0">
                <ul className="bg-white border border-t-0 border-stone-200 rounded-b-xl p-6 space-y-4 -mt-2 pt-6 shadow-inner">
                  {goals.map((goal, idx) => (
                    <li
                      key={idx}
                      className="dropdown-item flex gap-4 items-center text-stone-700 group opacity-0 translate-y-2"
                    >
                      <span className="text-red-700 text-xl  transition-transform group-hover:-translate-x-1 group-hover:scale-150">
                        <BadgeInfo />
                      </span>
                      <p className="dropParagraph text-base font-medium leading-relaxed">
                        {goal}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="aboutNumbers grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-stone-100">
                <h3 className=" text-2xl font-bold text-red-700">15+</h3>
                <p className="text-sm text-stone-500 mt-1">برنامج أكاديمي</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-stone-100">
                <h3 className=" text-2xl font-bold text-red-700">500+</h3>
                <p className="text-sm text-stone-500 mt-1">باحث وخبير</p>
              </div>
            </div>
          </div>

          <div className="aboutImg order-1 md:order-2 col-span-2 lg:col-span-1 relative flex justify-center items-center">
            <div className="rounded-2xl overflow-hidden ">
              <Image
                src={Logo}
                alt="Research Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default servicesAbout;

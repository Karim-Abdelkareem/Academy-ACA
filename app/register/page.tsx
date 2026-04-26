"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import AuthToggle from "@/components/AuthToggle";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function RegisterPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".auth-card", {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".auth-image", {
          opacity: 0,
          x: 40,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
        });

        gsap.from(".auth-form-element", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.25,
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef },
  );

  return (
    <main className="min-h-screen bg-white w-full">
      <div
        ref={containerRef}
        className="flex min-h-screen  flex-col overflow-hidden  bg-white lg:flex-row-reverse"
      >
        <div className="auth-card my-20 flex lg:w-[50%] w-full sm:p-0 p-2  flex-1 flex-col items-center justify-between px-6 py-6  lg:px-10">
          <div className="w-full max-w-md space-y-8 text-right">
            {/* <Image
              className="mx-auto"
              src="/logo.png"
              alt="شعار الأكاديمية الوطنية لمكافحة الفساد"
              width={100}
              height={100}
            /> */}
            <div className="space-y-3">
              <p className="text-md my-8 font-medium text-black text-center">
                إنشاء حساب جديد في الأكاديمية الوطنية لمكافحة الفساد
              </p>
              <div className="bg-[#D2170B] rounded-full p-2">
                <AuthToggle />
              </div>
            </div>

            <form className="space-y-6  bg-white/80 p-6  backdrop-blur">
              <div className="auth-form-element space-y-1">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  الاسم رباعي
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="أدخل الاسم الرباعي"
                  className="block w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="auth-form-element space-y-1">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    البلد
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="أدخل اسم البلد"
                    className="block w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                  />
                </div>
                <div className="auth-form-element space-y-1">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    التاريخ
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="block w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              <div className="auth-form-element space-y-1">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  النوع
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="block w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    اختر النوع
                  </option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div className="auth-form-element space-y-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@domain.com"
                  className="block w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div className="auth-form-element space-y-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  رقم الهاتف
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="أدخل رقم الهاتف"
                  className="block w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div className="auth-form-element space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="أدخل كلمة المرور"
                    className="block w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 left-4 flex items-center text-gray-400 hover:text-gray-700"
                    aria-label={
                      showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" strokeWidth={2} aria-hidden />
                    ) : (
                      <Eye className="size-5" strokeWidth={2} aria-hidden />
                    )}
                  </button>
                </div>
              </div>

              <div className="auth-form-element flex items-start gap-2 text-xs text-gray-600">
                <label htmlFor="terms" className="leading-relaxed">
                  أوافق على تخزين بياناتي الشخصية ومعالجتها واستخدامها لأغراض
                  الاتصال والأغراض الإدارية بالأكاديمية.
                </label>
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                className="auth-submit mt-4 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-700"
              >
                إنشاء الحساب
              </button>
            </form>
          </div>
        </div>
        <div className="auth-image hidden lg:block relative h-64 lg:w-[50%] w-full bg-black lg:h-auto ">
          <Image
            src="/carousel/c1.jpeg"
            alt="مبنى الأكاديمية الوطنية لمكافحة الفساد"
            fill
            priority
            className="object-cover"
          />{" "}
        </div>
      </div>
    </main>
  );
}

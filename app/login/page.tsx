"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import AuthToggle from "@/components/AuthToggle";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LoginPage() {
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
    <main className="min-h-screen bg-white mx-10">
      <div
        ref={containerRef}
        className="mx-auto my-10 flex min-h-screen max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-xl lg:flex-row-reverse"
      >
        <div className="auth-card flex w-full flex-1 flex-col items-center justify-between px-6 py-6 lg:w-1/2 lg:px-10">
          <div className="w-full max-w-md space-y-8 text-right">
            <Image
              className="mx-auto"
              src="/logo.png"
              alt="شعار الأكاديمية الوطنية لمكافحة الفساد"
              width={100}
              height={100}
            />
            <div className="space-y-3">
              <p className="text-md my-8 font-medium text-black text-center">
                أهلاً بك في الأكاديمية الوطنية لمكافحة الفساد
              </p>
              <div className="bg-[#D2170B] rounded-full p-2">
                <AuthToggle />
              </div>
            </div>

            <form className="space-y-10 rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="auth-form-element space-y-1">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  اسم المستخدم
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="أدخل اسم المستخدم"
                  className="block w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
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
                    className="block w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-right shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 left-4 flex items-center text-gray-400 hover:text-gray-700"
                    aria-label={
                      showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                    }
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <div className="auth-form-element flex items-center justify-between gap-4 text-xs text-gray-600">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span>تذكرني</span>
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-red-600 hover:text-red-700"
                >
                  هل نسيت كلمة المرور؟
                </button>
              </div>

              <button
                type="submit"
                className="auth-submit mt-4 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-700"
              >
                تسجيل الدخول
              </button>
            </form>
          </div>
        </div>
        <div className="auth-image hidden lg:block relative h-64 w-full bg-black lg:h-auto lg:w-1/2">
          <Image
            src="/carousel/c1.jpeg"
            alt="مبنى الأكاديمية الوطنية لمكافحة الفساد"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full  px-4 py-2 ">
            <Image
              src="/logo.png"
              alt="شعار الأكاديمية الوطنية لمكافحة الفساد"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

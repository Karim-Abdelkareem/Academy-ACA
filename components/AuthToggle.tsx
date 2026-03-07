"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function AuthToggle() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".auth-toggle-btn",
      { opacity: 0, y: 10, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.05,
      },
    );

    gsap.to(".auth-bg", {
      backgroundColor: isLogin ? "#ffffff" : "#fff4f4",
      duration: 0.6,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, [isLogin]);

  return (
    <div className="flex items-center justify-between gap-3">
      <Link
        href="/register"
        className={`auth-toggle-btn inline-flex flex-1 items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
          isLogin
            ? "text-white border-none hover:bg-white/80 hover:text-black"
            : "border-transparent bg-white text-black shadow-md shadow-red-500/30 "
        }`}
      >
        إنشاء حساب
      </Link>
      <Link
        href="/login"
        className={`auth-toggle-btn inline-flex flex-1 items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
          isLogin
            ? "border-none bg-white text-black "
            : "text-white border-none hover:bg-white/80 hover:text-black"
        }`}
      >
        تسجيل دخول
      </Link>
    </div>
  );
}

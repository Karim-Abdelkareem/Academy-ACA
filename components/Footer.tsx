'use client';

import React from 'react';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { BlurFade } from './ui/blur-fade';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-900 text-white mt-24" dir="rtl">
            <div className="w-[90%] max-w-7xl mx-auto py-12">
                <BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Logo and Description */}
                        <div className="space-y-4">
                            <Image src={logo} alt="Academy ACA Logo" width={120} height={60} className="h-auto" />
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                الأكاديمية الوطنية لمكافحة الفساد - الذراع التدريبي والتثقيفي لهيئة الرقابة الإدارية
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">روابط سريعة</h3>
                            <ul className="space-y-2 text-neutral-400">
                                <li>
                                    <a href="#about" className="hover:text-white transition-colors">عن الأكاديمية</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-white transition-colors">الخدمات والبرامج</a>
                                </li>
                                <li>
                                    <a href="#news" className="hover:text-white transition-colors">الأخبار</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">معلومات الاتصال</h3>
                            <ul className="space-y-3 text-neutral-400">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                                    <span className="text-sm">القاهرة، مصر</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 shrink-0" />
                                    <span className="text-sm">+20 XXX XXX XXXX</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 shrink-0" />
                                    <span className="text-sm">info@academy.aca.gov.eg</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800 pt-8 mt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-neutral-500 text-sm text-center md:text-right">
                                © {new Date().getFullYear()} الأكاديمية الوطنية لمكافحة الفساد. جميع الحقوق محفوظة.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">سياسة الخصوصية</a>
                                <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">شروط الاستخدام</a>
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </footer>
    );
}

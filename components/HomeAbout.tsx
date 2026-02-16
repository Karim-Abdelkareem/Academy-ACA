'use client';

import React from 'react';
import { Tabs } from "@heroui/react";
import { BlurFade } from './ui/blur-fade';

export default function HomeAbout() {
    return (
        <section className="w-full my-12" dir="rtl">
            <div className="w-full px-4 md:px-8 lg:px-16">
                <BlurFade>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-red-600">عن الأكاديمية</h2>
                </BlurFade>

                <div className="w-full">
                    <BlurFade duration={0.6} delay={0.2} offset={10} direction="left">
                        <Tabs
                            className="flex flex-col gap-6 w-full max-w-6xl mx-auto"
                            orientation="horizontal"
                            variant="primary"
                        >
                            <Tabs.ListContainer className="w-full rounded-sm">
                                <Tabs.List aria-label="عن الأكاديمية" className="flex rounded-sm flex-row gap-2 justify-center md:justify-start">
                                    <Tabs.Tab
                                        id="account"
                                        className="text-right justify-center rounded-lg px-6 py-4 transition-all duration-200 text-black border hover:text-black [&[aria-selected=true]]:bg-[#d4af37] [&[aria-selected=true]]:text-neutral-900 [&[aria-selected=true]]:border-[#d4af37] [&[aria-selected=true]]:font-semibold [&[aria-selected=true]]:rounded-sm [&[aria-selected=true]]:shadow-lg"
                                    >
                                        نشأة الأكاديمية
                                        <Tabs.Indicator className='rounded-sm' />
                                    </Tabs.Tab>
                                    <Tabs.Tab
                                        id="security"
                                        className="text-right justify-center rounded-lg px-6 py-4 transition-all duration-200 text-black border hover:text-black [&[aria-selected=true]]:bg-[#d4af37] [&[aria-selected=true]]:text-neutral-900 [&[aria-selected=true]]:border-[#d4af37] [&[aria-selected=true]]:font-semibold [&[aria-selected=true]]:rounded-sm [&[aria-selected=true]]:shadow-lg"
                                    >
                                        الرؤية
                                        <Tabs.Indicator className='rounded-sm' />
                                    </Tabs.Tab>
                                    <Tabs.Tab
                                        id="notifications"
                                        className="text-right justify-center rounded-lg px-6 py-4 transition-all duration-200 text-black border hover:text-black [&[aria-selected=true]]:bg-[#d4af37] [&[aria-selected=true]]:text-neutral-900 [&[aria-selected=true]]:border-[#d4af37] [&[aria-selected=true]]:font-semibold [&[aria-selected=true]]:rounded-sm [&[aria-selected=true]]:shadow-lg"
                                    >
                                        الرسالة
                                        <Tabs.Indicator className='rounded-sm' />
                                    </Tabs.Tab>
                                </Tabs.List>
                            </Tabs.ListContainer>
                            <Tabs.Panel className="tab-panel-transition w-full text-right p-6 rounded-xl border border-border bg-card backdrop-blur-sm shadow-sm" id="account">
                                <h3 className="mb-6 font-bold text-4xl text-red-600">نشأة الأكاديمية</h3>
                                <p className="text-muted-foreground leading-relaxed text-xl">
                                    في إطار سعى الدولة لتعزيز مبدأ الشفافية، ومكافحة الفساد المالي والإداري بشتى صوره ومظاهره وأساليبه، وتحقيق النزاهة داخل جميع الجهات والأجهزة العامة في الدولة تم تأسيس الأكاديمية الوطنية لمكافحة الفساد بموجب القانون رقم 207 لسنة 2017 ككيان تابع لهيئة الرقابة الإدارية للمعاونة في تحقيق الأهداف القومية في هذا المجال.
                                </p>
                            </Tabs.Panel>
                            <Tabs.Panel className="tab-panel-transition w-full text-right p-6 rounded-xl border border-border bg-card backdrop-blur-sm shadow-sm" id="security">
                                <h3 className="mb-6 font-bold text-4xl text-red-600">الرؤية</h3>
                                <p className="text-muted-foreground leading-relaxed text-xl">
                                    أن تصبح الأكاديمية الوطنية لمكافحة الفساد هي المرجعية الأساسية للتعليم والتدريب والتطوير في العلوم والمعارف والمهارات المتعلقة بمكافحة الفساد والوقاية منه، وفي المجالات الأخرى ذات الصلة على المستوى المحلي والإقليمي والدولي.
                                </p>
                            </Tabs.Panel>
                            <Tabs.Panel className="tab-panel-transition w-full text-right p-6 rounded-xl border border-border bg-card backdrop-blur-sm shadow-sm" id="notifications">
                                <h3 className="mb-6 font-bold text-4xl text-red-600">الرسالة</h3>
                                <p className="text-muted-foreground leading-relaxed text-xl">
                                    تقديم الخدمات المعرفية والعلمية والتدريبية والبحثية المتميزة للمجتمع المصري والإقليمي والدولي في مجال مكافحة الفساد والوقاية منه وفي باقي المجالات ذات الصلة بأعلى درجات الجودة والحداثة، وذلك باستخدام أحدث وسائل التعليم والتدريب والتطوير وبالاستعانة بالتقنيات العلمية الحديثة من خلال منظومة تدريبية متكاملة ومتطورة.
                                </p>
                            </Tabs.Panel>
                        </Tabs>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}

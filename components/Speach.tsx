'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import presedent from '@/public/presedent.jpeg';
import { LucidePencilLine, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Speach() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className='w-full my-12 mx-auto max-w-6xl' dir="rtl">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='col-span-1 md:mt-4'>
                    <h3 className='text-2xl font-bold'>كلمة السيد / رئيس هيئة الرقابة الإدارية ورئيس مجلس إدارة الأكاديمية الوطنية لمكافحة الفساد</h3>
                    <div className='border-b border-gray-300 my-6 border-dashed' />
                    <div className='my-6 relative'>
                        <div className='absolute inset-0 translate-x-5 translate-y-5 rounded-xl border-2 border-dashed z-0'></div>
                        <div className='relative rounded-xl overflow-hidden z-10'>
                            <Image src={presedent} alt='presedent' width={500} height={500} className='w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out' />
                        </div>
                    </div>
                </div>
                <div className='col-span-1 md:mt-56 space-y-6'>
                    <div className='border border-gray-300 p-2 w-fit rounded-md animate-pulse'>
                        <LucidePencilLine className='w-6 h-6 text-[#d4af37]' />
                    </div>
                    <div className='space-y-4 text-lg'>
                        <p className='font-bold text-xl'>أرحب بحضراتكم في الأكاديمية الوطنية لمكافحة الفساد، الذراع التدريبي والتثقيفي لهيئة الرقابة الإدارية،،،</p>
                        <p>تُعني الأكاديمية بالأساس بتقديم الخدمات العلمية والتدريبية والمعرفية بهدف تنمية قدرات وخبرات القائمين والمنوط بهم مكافحة الفساد وكذلك مواكبة التطورات التكنولوجية في هذا المجال. كما أن الأكاديمية تعني بنشر قيم ومبادئ النزاهة، والشفافية، ومعايير مكافحة الفساد، في المجتمع دون تمييز في سبيل تحقيق التنمية.</p>
                        
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className='space-y-4 overflow-hidden'
                                >
                                    <motion.div
                                        initial={{ y: -20 }}
                                        animate={{ y: 0 }}
                                        exit={{ y: -20 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className='space-y-4'
                                    >
                                        <p>وتسعى الأكاديمية إلى تحقيق الريادة في هذا المجال من خلال تعزيز البحث العلمي والتعاون المستمر وتبادل الخبرات مع أجهزة إنفاذ القانون، والمؤسسات التعليمية المحلية والدولية. كما ان الأكاديمية تعني بتناول القضايا والمشاكل المعاصرة المرتبطة بمكافحة الفساد التي تواجه الدولة، وتقوم بإعداد البحوث والدراسات العلمية بالتعاون مع خبراء متخصصين في كافة المجالات لحلها.</p>
                                        <p>وعلى المستوى الإقليمي والدولي، تسعى الأكاديمية إلى الإسهام في نشر أسس ومبادئ الحوكمة ومكافحة الفساد وتعتمد الأكاديمية في ذلك على نظم تدريب حديثة قائمة على التحول الرقمي والتي تساعد الأكاديمية على نشر علوم مكافحة الفساد بسهولة على كافة المستويات المحلية والإقليمية والدولية وفي هذا الصدد قامت الأكاديمية بتدريب الأشقاء من الدول الافريقية في إطار المبادرة التي أطلقها السيد رئيس جمهورية مصر العربية السيد الرئيس/ عبد الفتاح السيسي.</p>
                                        <p>وتقدم الأكاديمية للدارسين برامج تدريبية متخصصة في مجالات مكافحة الفساد، والقانون، والإدارة، والاقتصاد، بعدة لغات. كما أن الأكاديمية تمنح درجة الدبلوم في الحوكمة ومكافحة الفساد ينفذ بالتعاون مع كلية الاقتصاد والعلوم السياسية بجامعة القاهرة وتم اعتماده من المجلس الأعلى للجامعات. ويؤهل الحصول على دبلوم الحوكمة ومكافحة الفساد الالتحاق بدرجة الماجيستير الأكاديمي في نفس المجال بالأكاديمية، وتم اعتماد منح درجة الدكتوراة الاكاديمية بذات المجال.</p>
                                        <p>يسعدنا أن تكونوا جزءا من قصص النجاح في مجال مكافحة الفساد من خلال التحاقكم بالأكاديمية ومساعدتنا في تنمية وتطوير ونشر وتطبيق علوم مكافحة الفساد والحوكمة.</p>
                                        <p>وادعو الله عز وجل أن يكلل جهودنا بالتوفيق والسداد.</p>
                                        <p className='font-semibold mt-6'>
                                            لواء/ عمرو عادل<br />
                                            رئيس هيئة الرقابة الإدارية ورئيس مجلس إدارة<br />
                                            الأكاديمية الوطنية لمكافحة الفساد
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className='flex items-center gap-2 text-[#d4af37] hover:text-[#c9a227] font-semibold transition-colors duration-200 mt-4'
                        >
                            {isExpanded ? (
                                <>
                                    اقرأ أقل
                                    <ChevronDown className='w-4 h-4 rotate-180 transition-transform duration-200' />
                                </>
                            ) : (
                                <>
                                    اقرأ المزيد
                                    <ChevronDown className='w-4 h-4 transition-transform duration-200' />
                                </>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

function ServicesStudies() {
    const containerRef = useRef<HTMLElement>(null)
    
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger, SplitText)
        //wait
    }, {scope: containerRef})

  return (
    <section ref={containerRef} className="sec py-15 lg:py-25 bg-stone-50 overflow-hidden space-y-24">
      {/* Card 1 */}
      <div className="studyCard max-w-screen-xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <div className="studyInfo order-2 md:order-1 space-y-6 col-span-2 lg:col-span-2" dir='rtl'>
            <div className="text-sm font-semibold tracking-[0.28em] text-red-700 uppercase">
              Scientific Studies
              <div className="mt-5 flex items-center gap-3">
                <div className="w-14 h-0.5 bg-red-700 rounded-full" />
                <div className="w-1.5 h-1.5 rotate-45 bg-red-700" />
                <div className="w-6 h-px bg-red-200" />
              </div>
            </div>
            <h2 className="studyTitle ap-display text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              الدراسات العلمية
            </h2>
            <p className="studyDesc text-stone-600 text-lg leading-relaxed">
              يقوم المركز بإعداد وتوجيه دراسات متخصصة ومتقدمة للباحثين والدارسين في مجالات الوقاية من الفساد ومكافحته، وتوظيف نتائج الأبحاث لتطوير سياسات استراتيجية وعملية تعزز النزاهة والشفافية. يهدف ذلك إلى تقديم تحليلات دقيقة لحجم الظاهرة واقتراح حلول واقعية، مما يساهم في دعم صناع القرار.
            </p>
          </div>

          <div className="studyImg order-1 md:order-2 col-span-2 lg:col-span-1 relative flex justify-center items-center">
            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">
              <Image
                src={Logo}
                alt="Scientific Studies"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="studyCard max-w-screen-xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <div className="studyImg order-1 md:order-1 col-span-2 lg:col-span-1 relative flex justify-center items-center">
            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">
              <Image
                src={Logo}
                alt="Applied Research"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="studyInfo order-2 md:order-2 space-y-6 col-span-2 lg:col-span-2" dir='rtl'>
            <div className="text-sm font-semibold tracking-[0.28em] text-red-700 uppercase">
              Applied Research
              <div className="mt-5 flex items-center gap-3">
                <div className="w-14 h-0.5 bg-red-700 rounded-full" />
                <div className="w-1.5 h-1.5 rotate-45 bg-red-700" />
                <div className="w-6 h-px bg-red-200" />
              </div>
            </div>
            <h2 className="studyTitle ap-display text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              البحوث التطبيقية
            </h2>
            <p className="studyDesc text-stone-600 text-lg leading-relaxed">
              تتبنى الأبحاث التطبيقية دراسة أبرز المشكلات والمعوقات التي تعرقل أداء المؤسسات، وتوفير حلول عملية قابلة للتنفيذ السريع والمستدام. من خلال المنهجيات المعاصرة، يتم العمل على تحديث الهياكل المنظمية والقضاء على بؤر الفساد بفاعلية، بما يتوافق مع المعايير الدولية ويعكس الرؤية الوطنية.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStudies
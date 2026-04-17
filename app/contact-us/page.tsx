import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="bg-stone-50 py-14 lg:py-20" dir="rtl">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-900">
            تواصل معنا
          </h1>
          <p className="text-stone-600 mt-3 max-w-2xl leading-relaxed">
            يسعدنا استقبال استفساراتكم ومقترحاتكم. يمكنكم التواصل عبر بيانات
            الاتصال التالية أو إرسال رسالة مباشرة من النموذج.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1 space-y-4">
            <div className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <MapPin
                className="size-6 shrink-0 text-black"
                strokeWidth={2}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-stone-900 mb-2">العنوان</h2>
                <p className="text-stone-600 leading-relaxed">
                  الأكاديمية الوطنية لمكافحة الفساد - هيئة الرقابة الإدارية
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <Mail
                className="size-6 shrink-0 text-black"
                strokeWidth={2}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-stone-900 mb-2">
                  البريد الإلكتروني
                </h2>
                <a
                  href="mailto:info@academy.aca.gov.eg"
                  className="text-red-700 hover:text-red-800 transition-colors break-all"
                >
                  info@academy.aca.gov.eg
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <Phone
                className="size-6 shrink-0 text-black"
                strokeWidth={2}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-stone-900 mb-2">الهاتف</h2>
                <a
                  href="tel:+202000000000"
                  className="text-red-700 hover:text-red-800 transition-colors tabular-nums"
                  dir="ltr"
                >
                  +20 2 0000 0000
                </a>
              </div>
            </div>
          </section>

          <section className="lg:col-span-2 bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    الاسم
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full h-11 px-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                    placeholder="الاسم الكامل"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full h-11 px-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  الموضوع
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full h-11 px-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                  placeholder="موضوع الرسالة"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                className="h-11 px-6 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-800 transition-colors"
              >
                إرسال الرسالة
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

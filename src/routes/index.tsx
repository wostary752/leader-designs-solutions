import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Clock, Shield, Users } from "lucide-react";
import { CTAButtons } from "@/components/Layout";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "КБ Лидер — Конструкторское бюро в СПб · 250+ проектов" },
      { name: "description", content: "Конструкторское бюро КБ Лидер: разработка КД, 3D-моделирование, прочностные и тепловые расчёты, производство и промышленный дизайн. 250+ реализованных проектов. Санкт-Петербург." },
      { name: "keywords", content: "конструкторское бюро СПб, КБ Лидер, разработка КД, 3D моделирование, инженерные расчёты, МКЭ, CFD, реверс-инжиниринг, металлоконструкции, 3D печать, промышленный дизайн, ЕСКД, ГОСТ, проектирование оборудования, нестандартное оборудование" },
      { property: "og:title", content: "КБ Лидер — Конструкторское бюро полного цикла" },
      { property: "og:description", content: "Конструирование, расчёты, производство, дизайн. Более 250 реализованных проектов." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "КБ Лидер",
          description: "Конструкторское бюро полного цикла в Санкт-Петербурге: конструирование, расчёты, производство, дизайн.",
          telephone: "+7-921-583-23-47",
          email: "kb-leader@mail.ru",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Пулковское ш., д. 80 литер А",
            addressLocality: "Санкт-Петербург",
            postalCode: "196140",
            addressCountry: "RU",
          },
          geo: { "@type": "GeoCoordinates", latitude: 59.8029, longitude: 30.2678 },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47" },
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Конструирование и разработка КД" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Производство и металлообработка" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Инженерные расчёты МКЭ и CFD" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Промышленный дизайн" } },
          ],
        }),
      },
    ],
  }),
});

const stats = [
  { icon: Award, value: "250+", label: "Завершённых проектов" },
  { icon: Users, value: "70+", label: "Постоянных клиентов" },
  { icon: Clock, value: "12", label: "Лет на рынке" },
  { icon: Shield, value: "100%", label: "Работаем по ГОСТ и ЕСКД" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs uppercase tracking-widest text-primary mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Конструкторское бюро · Санкт-Петербург
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] mb-6">
              Инженерия,<br />
              которая <span className="text-gradient">работает</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Проектируем, считаем и производим изделия любой сложности. От первой 3D-модели до серийной партии — на одной площадке.
            </p>
            <CTAButtons />
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div>Работаем по <span className="text-foreground">ГОСТ · ЕСКД</span></div>
              <div className="h-4 w-px bg-border" />
              <div>Подписываем <span className="text-foreground">NDA</span></div>
              <div className="h-4 w-px bg-border" />
              <div>Сроки <span className="text-foreground">от 3 дней</span></div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full" />
              <div className="relative glass-card rounded-3xl p-8">
                <div className="text-xs uppercase tracking-widest text-primary mb-3">Реализовано</div>
                <div className="font-display text-7xl sm:text-8xl font-bold text-gradient leading-none">250+</div>
                <div className="mt-3 text-lg">проектов для промышленности, медицины, оборонки и потребительского рынка.</div>
                <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-display font-bold">12</div>
                    <div className="text-muted-foreground">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold">98%</div>
                    <div className="text-muted-foreground">сдаём в срок</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map(s => {
            const I = s.icon;
            return (
              <div key={s.label} className="glass-card rounded-2xl p-5 sm:p-6">
                <I className="size-5 text-primary mb-3" />
                <div className="font-display text-3xl sm:text-4xl font-bold">{s.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <ServicesGrid />

      {/* CTA STRIP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase mb-4">
                Готовы обсудить<br />ваш проект?
              </h2>
              <p className="text-muted-foreground max-w-md">
                Оставьте короткую заявку или заполните детальное ТЗ — ответим в течение рабочего дня.
              </p>
            </div>
            <CTAButtons className="lg:justify-end" />
          </div>
        </div>
      </section>

      <FAQ />

      {/* Quick links */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { to: "/services" as const, label: "Услуги" },
            { to: "/projects" as const, label: "Проекты" },
            { to: "/contacts" as const, label: "Контакты" },
            { to: "/services/konstruirovanie" as const, label: "Конструирование" },
          ].map(l => (
            <Link key={l.to} to={l.to} className="glass-card rounded-2xl px-6 py-5 flex items-center justify-between hover:border-primary/40 transition-colors">
              <span className="font-medium">{l.label}</span>
              <ArrowRight className="size-4 text-primary" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

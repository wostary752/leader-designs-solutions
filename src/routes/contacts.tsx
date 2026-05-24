import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Building2, FileText, Award, Calendar, User, Briefcase } from "lucide-react";
import { CTAButtons } from "@/components/Layout";
import cert1 from "@/assets/certificate-1.png";
import cert2 from "@/assets/certificate-2.png";

export const Route = createFileRoute("/contacts")({
  component: ContactsPage,
  head: () => ({
    meta: [
      { title: "Контакты — КБ Лидер" },
      { name: "description", content: "Свяжитесь с конструкторским бюро Лидер: +7 (921) 583-23-47, kb-leader@mail.ru, Санкт-Петербург." },
      { property: "og:title", content: "Контакты — КБ Лидер" },
      { property: "og:description", content: "Телефон, e-mail и реквизиты конструкторского бюро." },
    ],
  }),
});

const companyFacts = [
  { icon: Calendar, label: "Дата регистрации", value: "05.04.2019" },
  { icon: User, label: "Генеральный директор", value: "Зимовский Евгений Владимирович" },
  { icon: Briefcase, label: "Сфера деятельности", value: "Оптовая торговля машинами и оборудованием" },
  { icon: Building2, label: "ОГРН", value: "1197847082872" },
];

function ContactsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Контакты</div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase mb-6">Свяжитесь с нами</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Ответим на запрос в течение рабочего дня. Для подробных задач рекомендуем сразу заполнить ТЗ.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-4">
        <a href="tel:+79215832347" className="glass-card rounded-2xl p-7 hover:border-primary/40 transition-colors">
          <Phone className="size-6 text-primary mb-4" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Телефон</div>
          <div className="font-display text-2xl font-bold">+7 (921) 583-23-47</div>
        </a>
        <a href="mailto:kb-leader@mail.ru" className="glass-card rounded-2xl p-7 hover:border-primary/40 transition-colors">
          <Mail className="size-6 text-primary mb-4" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">E-mail</div>
          <div className="font-display text-2xl font-bold">kb-leader@mail.ru</div>
        </a>
        <div className="glass-card rounded-2xl p-7">
          <Clock className="size-6 text-primary mb-4" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">График</div>
          <div className="font-display text-2xl font-bold">Пн–Пт · 09:00–19:00</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 grid lg:grid-cols-2 gap-4">
        <div className="glass-card rounded-2xl p-7">
          <MapPin className="size-6 text-primary mb-4" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Адрес</div>
          <div className="text-lg">196140, г. Санкт-Петербург,<br />Пулковское ш., д. 80, литер А, кв. 1</div>
        </div>
        <div className="glass-card rounded-2xl p-7">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="size-6 text-primary" />
            <FileText className="size-6 text-primary" />
          </div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Реквизиты</div>
          <div className="space-y-2 text-sm">
            <div><span className="text-muted-foreground">Полное наименование:</span> ООО «Пром Инжиниринг»</div>
            <div><span className="text-muted-foreground">ИНН / КПП:</span> 7810755179 / 781001001</div>
            <div><span className="text-muted-foreground">ОГРН:</span> 1197847082872</div>
            <div><span className="text-muted-foreground">Уставный капитал:</span> 10 000 ₽</div>
            <div><span className="text-muted-foreground">Юридический адрес:</span> 196140, г. Санкт-Петербург, Пулковское ш., д. 80 литер А, кв. 1</div>
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">О компании</div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-8">Официальная информация</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {companyFacts.map(f => {
            const I = f.icon;
            return (
              <div key={f.label} className="glass-card rounded-2xl p-6">
                <I className="size-5 text-primary mb-3" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{f.label}</div>
                <div className="font-medium text-sm leading-snug">{f.value}</div>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
          ООО «Пром Инжиниринг» действует с 5 апреля 2019 года и зарегистрировано в Санкт-Петербурге.
          Численность сотрудников выросла с 1 человека в 2019 году до 11 в 2025-м. Источник данных:{" "}
          <a href="https://www.rusprofile.ru/id/11754976" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            rusprofile.ru
          </a>
        </p>
      </section>

      {/* Certificates */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center gap-3 mb-3">
          <Award className="size-5 text-primary" />
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Сертификаты и аккредитации</div>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-3">Свидетельства НАКС</h2>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Аттестованные технологии сварки по требованиям РД 03-615-03. Подтверждённая компетенция для работы с трубопроводами и оборудованием химических, нефтехимических и нефтеперерабатывающих производств.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { src: cert1, title: "Свидетельство НАКС № АЦСТ-140-00681", date: "Действительно до 22.07.2029" },
            { src: cert2, title: "Свидетельство НАКС № АЦСТ-140-00640", date: "Действительно до 24.01.2029" },
          ].map(c => (
            <a
              key={c.title}
              href={c.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-4 hover:border-primary/40 transition-colors block"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white">
                <img src={c.src} alt={c.title} className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform" loading="lazy" />
              </div>
              <div className="mt-4 px-2">
                <div className="font-display text-sm font-bold">{c.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 p-10 lg:p-14">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-3">Оставить заявку онлайн</h2>
              <p className="text-muted-foreground">Короткая форма — если хотите, чтобы мы перезвонили. Полное ТЗ — для точной оценки.</p>
            </div>
            <CTAButtons className="lg:justify-end" />
          </div>
        </div>
      </section>
    </>
  );
}

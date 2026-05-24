import { useState } from "react";
import { Plus, X, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const faqs = [
  { q: "Сколько стоят инженерные услуги?", a: "Стоимость зависит от сложности и сроков. После знакомства с задачей мы готовим коммерческое предложение в течение 1–2 рабочих дней." },
  { q: "Можно ли заказать выполнение чертежей по эскизу или фото?", a: "Да. Мы регулярно работаем по эскизам, фото и описаниям, восстанавливая полную конструкторскую документацию по ГОСТ и ЕСКД." },
  { q: "Делаете ли вы 3D моделирование для производства?", a: "Да. Готовим параметрические модели и сборки, пригодные для ЧПУ-обработки, 3D-печати и литья." },
  { q: "Можно ли сделать 3D модель по готовому чертежу?", a: "Конечно. Воссоздадим точную 3D-модель по предоставленным чертежам с соблюдением допусков и посадок." },
  { q: "Работаете ли вы по ГОСТ и ЕСКД?", a: "Все документы оформляем по действующим стандартам ГОСТ и ЕСКД, при необходимости — по СТО заказчика." },
  { q: "Какие форматы файлов вы передаёте?", a: "STEP, IGES, STL, SLDPRT/SLDASM, DWG, PDF — формат согласовываем под ваши задачи." },
  { q: "Подписываете ли вы NDA?", a: "Да. При работе с промышленными проектами подписываем соглашение о конфиденциальности и работаем по договору." },
  { q: "Можно ли заказать инженерные услуги под ключ?", a: "Да. Сопровождаем проект от концепта до серийного производства, включая прототипирование и испытания." },
  { q: "В какие сроки выполняются работы?", a: "Типовые задачи — от 3–5 рабочих дней. Сложные проекты планируем по этапам со сдачей промежуточных результатов." },
  { q: "Работаете ли вы с регионами?", a: "Да, работаем по всей России и СНГ. Все коммуникации — онлайн, документы — в электронном виде или по почте." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <div className="flex items-start justify-between gap-6 mb-10 flex-wrap">
        <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase">Вопросы и&nbsp;ответы</h2>
        <Link to="/contacts" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm uppercase tracking-wider">
          Связаться с нами <ArrowUpRight className="size-4" />
        </Link>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`rounded-2xl border transition-colors ${isOpen ? "border-primary/40 bg-card" : "border-border bg-card/40"}`}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
              >
                <span className={`font-medium ${isOpen ? "text-primary" : ""}`}>{f.q}</span>
                <span className={`shrink-0 size-9 rounded-full border flex items-center justify-center transition-colors ${isOpen ? "border-primary text-primary" : "border-border"}`}>
                  {isOpen ? <X className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 -mt-1">
                  <div className="border-t border-border pt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

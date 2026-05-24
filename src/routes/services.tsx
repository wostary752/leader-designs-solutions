import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/components/ServicesGrid";
import { CTAButtons } from "@/components/Layout";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Услуги — КБ Лидер" },
      { name: "description", content: "Конструирование, производство, инженерные расчёты и дизайн. Полный цикл разработки изделий." },
      { property: "og:title", content: "Услуги — КБ Лидер" },
      { property: "og:description", content: "Полный цикл инженерных услуг — от 3D-модели до серийного производства." },
    ],
  }),
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Услуги</div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase mb-6">Полный цикл разработки</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Закрываем все этапы: от технического задания и эскиза — до серийного изделия и сопроводительной документации.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.to}
              to={s.to}
              className="group glass-card rounded-3xl p-6 sm:p-8 lg:p-10 grid lg:grid-cols-12 gap-6 lg:gap-8 items-start hover:border-primary/40 transition-colors"
            >
              <div className="lg:col-span-5 flex items-start gap-4 sm:gap-5 min-w-0">
                <div className="text-4xl sm:text-5xl font-display font-bold text-primary/40 leading-none shrink-0">
                  0{i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase break-words leading-tight">
                    {s.title}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-6 min-w-0">
                <p className="text-muted-foreground mb-5">{s.description}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-1 flex lg:justify-end">
                <div className="size-11 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary group-hover:rotate-[-45deg] transition-all">
                  <ArrowRight className="size-5" />
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass-card rounded-3xl p-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-4">Не нашли нужное?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Расскажите о задаче — мы соберём команду под проект и предложим решение.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>

      <FAQ />
    </>
  );
}

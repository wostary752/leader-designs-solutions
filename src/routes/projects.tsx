import { createFileRoute } from "@tanstack/react-router";
import { CTAButtons } from "@/components/Layout";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Проекты — КБ Лидер" },
      { name: "description", content: "Более 250 реализованных проектов для промышленности, медицины, оборонки и потребительского рынка." },
      { property: "og:title", content: "Проекты — КБ Лидер" },
      { property: "og:description", content: "Более 250 завершённых инженерных проектов." },
    ],
  }),
});

const projects = [
  { tag: "Промышленность", title: "Линия упаковки молочной продукции", desc: "Разработка узлов и сборочных единиц автоматической линии. Полный комплект КД, шеф-монтаж." },
  { tag: "Медицина", title: "Корпус аппарата УЗИ-диагностики", desc: "Промышленный дизайн, конструкция, прототипы методом SLA, подготовка пресс-форм." },
  { tag: "Энергетика", title: "Каркас распределительного шкафа", desc: "Сварная конструкция из листового металла. Расчёт на устойчивость, изготовление серии 200 шт." },
  { tag: "Робототехника", title: "Манипулятор для склада", desc: "Кинематическая схема, прочностные расчёты МКЭ, разработка приводов и редукторов." },
  { tag: "Потребрынок", title: "Кофемашина капсульного типа", desc: "Реверс-инжиниринг по образцу, локализация производства, доработка узлов под РФ." },
  { tag: "Оборонка", title: "Корпус БЛА-разведчика", desc: "Аэродинамический расчёт, композитный корпус, изготовление мастер-моделей." },
  { tag: "Авиация", title: "Кронштейн крепления оборудования", desc: "Топологическая оптимизация, снижение массы на 38% при сохранении ресурса." },
  { tag: "Транспорт", title: "Подножка электробуса", desc: "Сварная металлоконструкция, расчёт на динамические нагрузки, испытания на стенде." },
  { tag: "Нефтегаз", title: "Запорная арматура DN200", desc: "Разработка КД, тепловой и прочностной расчёт, изготовление опытного образца." },
];

function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Проекты</div>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase">Более <span className="text-gradient">250</span> проектов</h1>
          <p className="text-muted-foreground max-w-md">Каждый проект — это закрытая задача клиента: от концепта до серийного образца. Показываем избранные кейсы.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <article key={i} className="group glass-card rounded-2xl p-7 hover:border-primary/40 transition-colors flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-border text-muted-foreground">{p.tag}</span>
              <span className="font-display text-sm text-primary/60">№ {String(i + 1).padStart(3, "0")}</span>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary to-background border border-border mb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.72_0.16_52/0.2),transparent_60%)]" />
              <div className="absolute bottom-3 right-3 size-10 rounded-full border border-border bg-background/60 backdrop-blur flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                <ArrowUpRight className="size-4" />
              </div>
            </div>
            <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass-card rounded-3xl p-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-4">Ваш проект — следующий</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Расскажите о задаче. Подберём оптимальное решение по срокам и бюджету.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}

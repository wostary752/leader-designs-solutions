import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon, Boxes, Factory, Calculator, Palette } from "lucide-react";

export type ServiceItem = {
  to: "/services/konstruirovanie" | "/services/proizvodstvo" | "/services/raschety" | "/services/dizain";
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    to: "/services/konstruirovanie",
    title: "Конструирование",
    icon: Boxes,
    description: "Разработка изделий любой сложности — от концепта до рабочей документации.",
    items: ["3D моделирование", "Выполнение чертежей", "Реверс-инжиниринг"],
  },
  {
    to: "/services/proizvodstvo",
    title: "Производство",
    icon: Factory,
    description: "Прототипы и серийные изделия из пластика и металла на собственной базе.",
    items: ["3D печать (FDM, SLA, SLS)", "Изготовление металлоконструкций", "Мехобработка и сборка"],
  },
  {
    to: "/services/raschety",
    title: "Инженерные расчёты",
    icon: Calculator,
    description: "Подтверждаем работоспособность изделия численными методами до запуска в металл.",
    items: ["Прочностной анализ (МКЭ)", "Тепловые и аэродинамические расчёты", "Кинематика и динамика"],
  },
  {
    to: "/services/dizain",
    title: "Дизайн",
    icon: Palette,
    description: "Промышленный и графический дизайн, который усиливает продукт визуально.",
    items: ["Промышленный дизайн", "Логотипы и брендинг", "Презентации и рендеры"],
  },
];

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Наши услуги</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase">Что мы делаем</h2>
        </div>
        <Link to="/services" className="text-sm text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
          Все услуги <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.to} to={s.to} className="group glass-card rounded-2xl p-6 hover:border-primary/40 transition-colors flex flex-col">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="size-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{s.description}</p>
              <ul className="space-y-1.5 text-sm">
                {s.items.map(i => <li key={i} className="text-muted-foreground">— {i}</li>)}
              </ul>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Подробнее <ArrowRight className="size-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

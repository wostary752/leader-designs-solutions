import { createFileRoute } from "@tanstack/react-router";
import { CTAButtons } from "@/components/Layout";
import img1 from "@/assets/projects/01-gorelka-reaktor.png";
import img2 from "@/assets/projects/02-mazutnaya-gorelka.png";
import img3 from "@/assets/projects/03-predskrubber.png";
import img4 from "@/assets/projects/04-podogrevatel.png";
import img5 from "@/assets/projects/05-podogrevatel.png";
import img6 from "@/assets/projects/06-predskrubber.png";
import img7 from "@/assets/projects/07-pech.png";
import img8 from "@/assets/projects/08-fakelnaya-gorelka.png";
import img9 from "@/assets/projects/09-kislotnyy-bak.png";
import img10 from "@/assets/projects/10-nasos-konsolnyy.png";
import img11 from "@/assets/projects/11-nasos-dvustoronniy.png";
import img12 from "@/assets/projects/12-sistema-ciklonov.png";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Проекты КБ Лидер — 250+ реализованных инженерных проектов" },
      { name: "description", content: "Портфолио конструкторского бюро Лидер: горелки, реакторы, скрубберы, подогреватели, печи, насосы, циклоны и нестандартное промышленное оборудование. Более 250 завершённых проектов." },
      { name: "keywords", content: "проекты КБ Лидер, портфолио конструкторское бюро, горелка реактор, мазутная горелка, предскруббер, подогреватель, факельная горелка, кислотный бак, насос центробежный, система циклонов, печь промышленная" },
      { property: "og:title", content: "Проекты — КБ Лидер" },
      { property: "og:description", content: "Более 250 завершённых инженерных проектов: горелки, реакторы, скрубберы, насосы, печи." },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Проекты КБ Лидер",
          description: "Каталог реализованных инженерных проектов конструкторского бюро Лидер.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: "/" },
            { "@type": "ListItem", position: 2, name: "Проекты", item: "/projects" },
          ],
        }),
      },
    ],
  }),
});

const projects = [
  { tag: "Реактор", title: "Горелка-реактор с технической площадкой", image: img1 },
  { tag: "Горелка", title: "Мазутная горелка", image: img2 },
  { tag: "Газоочистка", title: "Предскруббер", image: img3 },
  { tag: "Теплообмен", title: "Подогреватель", image: img4 },
  { tag: "Теплообмен", title: "Подогреватель", image: img5 },
  { tag: "Газоочистка", title: "Предскруббер", image: img6 },
  { tag: "Печь", title: "Печь", image: img7 },
  { tag: "Горелка", title: "Факельная горелка", image: img8 },
  { tag: "Ёмкости", title: "Кислотный бак", image: img9 },
  { tag: "Насосы", title: "Насос центробежный консольного типа", image: img10 },
  { tag: "Насосы", title: "Насос центробежный двусторонний", image: img11 },
  { tag: "Газоочистка", title: "Система циклонов", image: img12 },
];

const scope = [
  "Разработка узлов и сборочных единиц",
  "Полный комплект КД",
  "Прочностные и тепловые расчёты",
  "Шеф-монтаж и авторский надзор",
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
        <div className="mt-8 flex flex-wrap gap-2">
          {scope.map((s) => (
            <span key={s} className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-secondary/30">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <article key={i} className="glass-card rounded-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-border text-muted-foreground">{p.tag}</span>
              <span className="font-display text-sm text-primary/60">№ {String(i + 1).padStart(3, "0")}</span>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary to-background border border-border mb-5 relative overflow-hidden flex items-center justify-center">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-contain p-2" />
            </div>
            <h3 className="font-display text-lg font-bold">{p.title}</h3>
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

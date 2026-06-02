import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/services_/raschety")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Инженерные расчёты МКЭ и CFD — КБ Лидер" },
      { name: "description", content: "Прочностной анализ методом конечных элементов (МКЭ), тепловые и аэродинамические расчёты (CFD), кинематика и динамика механизмов. ANSYS, OpenFOAM." },
      { name: "keywords", content: "инженерные расчёты, МКЭ, метод конечных элементов, CFD расчёт, ANSYS Fluent, OpenFOAM, прочностной анализ, тепловой расчёт, аэродинамический расчёт, кинематика, динамика, мультителовая динамика" },
      { property: "og:title", content: "Инженерные расчёты — КБ Лидер" },
      { property: "og:description", content: "Подтверждаем работоспособность изделия численными методами." },
      { property: "og:url", content: "/services/raschety" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/services/raschety" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Инженерные расчёты МКЭ и CFD",
          provider: { "@type": "Organization", name: "КБ Лидер" },
          areaServed: "RU",
          description: "Прочностные, тепловые, аэродинамические расчёты, кинематика и динамика.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: "/" },
            { "@type": "ListItem", position: 2, name: "Услуги", item: "/services" },
            { "@type": "ListItem", position: 3, name: "Инженерные расчёты", item: "/services/raschety" },
          ],
        }),
      },
    ],
  }),
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="Услуга 03"
      title="Инженерные расчёты"
      intro="Проверяем конструкцию до запуска в металл. Численное моделирование помогает оптимизировать массу, ресурс и стоимость изделия."
      blocks={[
        {
          title: "Прочностной анализ (МКЭ)",
          text: "Статический и динамический расчёт напряжённо-деформированного состояния, расчёт на устойчивость и усталостную прочность.",
          bullets: ["Статика и динамика", "Контактные задачи", "Расчёт сварных и резьбовых соединений"],
        },
        {
          title: "Тепловые и аэродинамические расчёты",
          text: "CFD-моделирование течений жидкости и газа, тепловые расчёты систем охлаждения, вентиляции и теплоотвода.",
          bullets: ["CFD (ANSYS Fluent, OpenFOAM)", "Стационарный и нестационарный теплоперенос", "Сопряжённый CHT-анализ"],
        },
        {
          title: "Кинематика и динамика",
          text: "Расчёт механизмов: траектории, скорости, ускорения, нагрузки в шарнирах. Оптимизация приводов и передач.",
          bullets: ["Мультителовая динамика (MBD)", "Расчёт нагрузок в опорах", "Оптимизация массы и габаритов"],
        },
      ]}
    />
  );
}

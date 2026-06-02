import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/services_/konstruirovanie")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Конструирование и разработка КД — КБ Лидер" },
      { name: "description", content: "Услуги конструирования: 3D-моделирование в SolidWorks, Compass-3D, Inventor, разработка чертежей по ГОСТ и ЕСКД, реверс-инжиниринг изделий любой сложности." },
      { name: "keywords", content: "конструирование, разработка КД, 3D моделирование, SolidWorks, Compass-3D, Inventor, чертежи ГОСТ, ЕСКД, реверс-инжиниринг, проектирование деталей и сборок" },
      { property: "og:title", content: "Конструирование — КБ Лидер" },
      { property: "og:description", content: "3D-моделирование, чертежи, реверс-инжиниринг." },
      { property: "og:url", content: "/services/konstruirovanie" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/services/konstruirovanie" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Конструирование и разработка КД",
          provider: { "@type": "Organization", name: "КБ Лидер" },
          areaServed: "RU",
          description: "3D-моделирование, разработка чертежей по ГОСТ и ЕСКД, реверс-инжиниринг.",
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
            { "@type": "ListItem", position: 3, name: "Конструирование", item: "/services/konstruirovanie" },
          ],
        }),
      },
    ],
  }),
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="Услуга 01"
      title="Конструирование"
      intro="Превращаем идею или эскиз в готовую конструкторскую документацию. Работаем в SolidWorks, Compass-3D, Inventor — выдаём результат в любом удобном формате."
      blocks={[
        {
          title: "3D моделирование",
          text: "Параметрические модели и сборки любой сложности — от детали до агрегата. Учитываем технологичность, материал, способ изготовления.",
          bullets: ["Детали и сборки в SolidWorks / Compass / Inventor", "Импорт/экспорт STEP, IGES, STL, Parasolid", "Фотореалистичные рендеры на выходе"],
        },
        {
          title: "Выполнение чертежей",
          text: "Полный комплект КД по ГОСТ и ЕСКД: рабочие чертежи деталей, сборочные чертежи, спецификации, ведомости, пояснительные записки.",
          bullets: ["Соблюдение допусков и посадок", "Указания шероховатости и термообработки", "Оформление по ГОСТ 2.105, ЕСКД"],
        },
        {
          title: "Реверс-инжиниринг",
          text: "Восстанавливаем 3D-модель и документацию по образцу, эскизу или сканированию. Помогаем модернизировать устаревшие изделия и снять с импорта.",
          bullets: ["Работа по фото, эскизу, физическому образцу", "Обработка данных 3D-сканирования", "Адаптация под современные технологии"],
        },
      ]}
    />
  );
}

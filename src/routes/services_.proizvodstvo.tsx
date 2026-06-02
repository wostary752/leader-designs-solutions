import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/services_/proizvodstvo")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Производство и металлообработка — КБ Лидер" },
      { name: "description", content: "Производство деталей и изделий: 3D-печать FDM/SLA/SLS, изготовление металлоконструкций, ЧПУ-фрезеровка, токарная обработка, сварка, сборка и испытания." },
      { name: "keywords", content: "производство, металлоконструкции, 3D печать, FDM, SLA, SLS, ЧПУ фрезеровка, токарная обработка, лазерная резка, сварка MIG TIG, прототипирование, мелкосерийное производство" },
      { property: "og:title", content: "Производство — КБ Лидер" },
      { property: "og:description", content: "Прототипы и серийные изделия из пластика и металла." },
      { property: "og:url", content: "/services/proizvodstvo" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/services/proizvodstvo" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Производство и металлообработка",
          provider: { "@type": "Organization", name: "КБ Лидер" },
          areaServed: "RU",
          description: "3D-печать, изготовление металлоконструкций, ЧПУ-обработка, сборка.",
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
            { "@type": "ListItem", position: 3, name: "Производство", item: "/services/proizvodstvo" },
          ],
        }),
      },
    ],
  }),
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="Услуга 02"
      title="Производство"
      intro="Делаем прототипы и серийные партии на собственной производственной базе. Контролируем качество на каждом этапе — от заготовки до приёмки."
      blocks={[
        {
          title: "3D печать",
          text: "Технологии под задачу: от быстрых концептов FDM до точных функциональных деталей SLA и SLS.",
          bullets: ["FDM (PLA, ABS, PETG, нейлон)", "SLA — высокая детализация", "SLS — функциональные изделия"],
        },
        {
          title: "Металлоконструкции",
          text: "Изготовление металлоконструкций по чертежам заказчика: рамы, корпуса, оснастка, нестандартное оборудование.",
          bullets: ["Лазерная и плазменная резка", "Гибка и сварка (MIG/MAG, TIG)", "Покраска и порошковое покрытие"],
        },
        {
          title: "Мехобработка и сборка",
          text: "Точение, фрезеровка, мелкосерийная сборка изделий с проведением приёмочных испытаний.",
          bullets: ["ЧПУ-фрезеровка и токарка", "Слесарная доводка", "Сборка и упаковка"],
        },
      ]}
    />
  );
}

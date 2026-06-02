import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/services_/dizain")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Промышленный дизайн и брендинг — КБ Лидер" },
      { name: "description", content: "Промышленный дизайн изделий, разработка логотипов и фирменного стиля, фотореалистичные рендеры и презентации в KeyShot и Blender." },
      { name: "keywords", content: "промышленный дизайн, дизайн изделий, логотип, брендинг, фирменный стиль, brand-book, рендеринг, KeyShot, Blender, презентация продукта" },
      { property: "og:title", content: "Дизайн — КБ Лидер" },
      { property: "og:description", content: "Промышленный и графический дизайн для продукта и бренда." },
      { property: "og:url", content: "/services/dizain" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/services/dizain" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Промышленный дизайн и брендинг",
          provider: { "@type": "Organization", name: "КБ Лидер" },
          areaServed: "RU",
          description: "Промышленный дизайн, логотипы, фирменный стиль, рендеры и презентации.",
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
            { "@type": "ListItem", position: 3, name: "Дизайн", item: "/services/dizain" },
          ],
        }),
      },
    ],
  }),
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="Услуга 04"
      title="Дизайн"
      intro="Усиливаем продукт визуально — от формы корпуса до фирменного стиля и презентации для инвестора."
      blocks={[
        {
          title: "Промышленный дизайн",
          text: "Разработка формы изделия с учётом эргономики, технологичности и фирменного стиля бренда.",
          bullets: ["Скетчинг и поиск формы", "Эргономика и UX-исследования", "Подготовка моделей под производство"],
        },
        {
          title: "Логотипы и брендинг",
          text: "Создание логотипа, фирменного стиля и гайдлайнов — основа узнаваемости вашего продукта.",
          bullets: ["Логотип и фирменные знаки", "Палитра, типографика, паттерны", "Brand-book и guidelines"],
        },
        {
          title: "Презентации и рендеры",
          text: "Готовим презентации, технические задания и фотореалистичные изображения изделий для маркетинга и инвесторов.",
          bullets: ["Pitch-deck и продающие презентации", "Фотореалистичные рендеры (KeyShot, Blender)", "Анимация работы изделия"],
        },
      ]}
    />
  );
}

import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const distDir = "dist";
const indexPath = join(distDir, "index.html");

const pages = [
  { path: "/", title: "КБ Лидер — Конструкторское бюро в СПб · 250+ проектов", description: "Конструкторское бюро КБ Лидер: разработка КД, 3D-моделирование, прочностные и тепловые расчёты, производство и промышленный дизайн. 250+ реализованных проектов." },
  { path: "/services", title: "Услуги КБ Лидер — конструирование, расчёты, производство", description: "Полный цикл инженерных услуг: разработка КД, 3D-моделирование, реверс-инжиниринг, МКЭ и CFD расчёты, производство и промышленный дизайн." },
  { path: "/services/konstruirovanie", title: "Конструирование и разработка КД — КБ Лидер", description: "3D-моделирование, разработка чертежей по ГОСТ и ЕСКД, реверс-инжиниринг изделий и подготовка полного комплекта конструкторской документации." },
  { path: "/services/proizvodstvo", title: "Производство и металлообработка — КБ Лидер", description: "Изготовление деталей и изделий: 3D-печать, металлоконструкции, ЧПУ-фрезеровка, токарная обработка, сварка, сборка и испытания." },
  { path: "/services/raschety", title: "Инженерные расчёты МКЭ и CFD — КБ Лидер", description: "Прочностной анализ методом конечных элементов, тепловые и аэродинамические CFD-расчёты, кинематика и динамика механизмов." },
  { path: "/services/dizain", title: "Промышленный дизайн и брендинг — КБ Лидер", description: "Промышленный дизайн изделий, разработка логотипов и фирменного стиля, фотореалистичные рендеры и презентации." },
  { path: "/projects", title: "Проекты КБ Лидер — 250+ реализованных инженерных проектов", description: "Портфолио КБ Лидер: горелки, реакторы, скрубберы, подогреватели, печи, насосы, циклоны и нестандартное промышленное оборудование." },
  { path: "/contacts", title: "Контакты КБ Лидер — телефон, e-mail, адрес в СПб", description: "Связаться с конструкторским бюро Лидер: +7 (921) 583-23-47, kb-leader@mail.ru. Адрес: Санкт-Петербург, Пулковское ш., 80А." },
];

const baseHtml = await readFile(indexPath, "utf8");

function pageHtml(page) {
  const canonical = page.path === "/" ? "/" : page.path;
  return baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${page.description}" />`)
    .replace(
      "</head>",
      `    <link rel="canonical" href="${canonical}" />\n    <meta property="og:title" content="${page.title}" />\n    <meta property="og:description" content="${page.description}" />\n    <meta property="og:type" content="website" />\n    <meta property="og:url" content="${canonical}" />\n  </head>`,
    );
}

for (const page of pages) {
  const target = page.path === "/" ? indexPath : join(distDir, page.path, "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, pageHtml(page));
}

await copyFile(indexPath, join(distDir, "404.html"));

const sitemapPath = join(distDir, "sitemap.xml");
const sitemap = await readFile(sitemapPath, "utf8");
const lastmod = new Date().toISOString().slice(0, 10);
await writeFile(
  sitemapPath,
  sitemap.replace(/<changefreq>/g, `<lastmod>${lastmod}</lastmod><changefreq>`),
);
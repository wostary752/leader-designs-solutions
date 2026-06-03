import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const distDir = "dist";
const indexPath = join(distDir, "index.html");

const routes = [
  "/services",
  "/services/konstruirovanie",
  "/services/proizvodstvo",
  "/services/raschety",
  "/services/dizain",
  "/projects",
  "/contacts",
];

await readFile(indexPath, "utf8");

for (const route of routes) {
  const target = join(distDir, route, "index.html");
  await mkdir(dirname(target), { recursive: true });
  await copyFile(indexPath, target);
}

await copyFile(indexPath, join(distDir, "404.html"));

const sitemapPath = join(distDir, "sitemap.xml");
const sitemap = await readFile(sitemapPath, "utf8");
const lastmod = new Date().toISOString().slice(0, 10);
await writeFile(
  sitemapPath,
  sitemap.replace(/<changefreq>/g, `<lastmod>${lastmod}</lastmod><changefreq>`),
);
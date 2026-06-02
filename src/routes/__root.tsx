import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Layout } from "@/components/Layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "yandex", content: "index, follow" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "author", content: "КБ Лидер" },
      { name: "geo.region", content: "RU-SPE" },
      { name: "geo.placename", content: "Санкт-Петербург" },
      { name: "geo.position", content: "59.8029;30.2678" },
      { name: "ICBM", content: "59.8029, 30.2678" },
      { title: "КБ Лидер — Конструкторское бюро полного цикла в СПб" },
      { name: "description", content: "Конструкторское бюро КБ Лидер: конструирование, инженерные расчёты, производство и промышленный дизайн. Более 250 реализованных проектов. Санкт-Петербург, тел. +7 (921) 583-23-47." },
      { name: "keywords", content: "конструкторское бюро, КБ Лидер, инженерные услуги, разработка КД, 3D моделирование, прочностные расчёты, МКЭ, CFD, реверс-инжиниринг, металлоконструкции, 3D печать, промышленный дизайн, ЕСКД, ГОСТ, Санкт-Петербург, СПб, проектирование, чертежи, КД, проектирование оборудования, нестандартное оборудование" },
      { property: "og:site_name", content: "КБ Лидер" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:title", content: "КБ Лидер — Конструкторское бюро" },
      { property: "og:description", content: "Инженерные решения полного цикла: от 3D-модели до серийного производства." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "КБ Лидер — Конструкторское бюро" },
      { name: "twitter:description", content: "Инженерные решения полного цикла. Более 250 проектов." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "alternate", type: "application/rss+xml", title: "Sitemap", href: "/sitemap.xml" },
    ],
    scripts: [
      {
        children: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109393661', 'ym');ym(109393661, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "КБ Лидер",
          legalName: "Конструкторское бюро Лидер",
          url: "/",
          logo: "/favicon.ico",
          description: "Конструкторское бюро полного цикла: конструирование, расчёты, производство и промышленный дизайн.",
          telephone: "+7-921-583-23-47",
          email: "kb-leader@mail.ru",
          taxID: "7810755179",
          foundingDate: "2014",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Пулковское ш., д. 80 литер А, кв. 1",
            addressLocality: "Санкт-Петербург",
            postalCode: "196140",
            addressCountry: "RU",
          },
          areaServed: "RU",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+7-921-583-23-47",
            contactType: "sales",
            email: "kb-leader@mail.ru",
            availableLanguage: ["Russian"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "КБ Лидер",
          url: "/",
          inLanguage: "ru-RU",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/109393661" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}

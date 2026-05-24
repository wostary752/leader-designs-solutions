import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { CTAButtons } from "./Layout";
import { FAQ } from "./FAQ";

export type Block = { title: string; text: string; bullets: string[] };

export function ServiceDetail({ eyebrow, title, intro, blocks }: { eyebrow: string; title: string; intro: string; blocks: Block[] }) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="size-4" /> Все услуги
        </Link>
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{eyebrow}</div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">{intro}</p>
        <CTAButtons />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <div key={b.title} className="glass-card rounded-2xl p-7 flex flex-col">
            <div className="text-primary font-display font-bold mb-3">0{i + 1}</div>
            <h3 className="font-display text-xl font-bold mb-3">{b.title}</h3>
            <p className="text-sm text-muted-foreground mb-5">{b.text}</p>
            <ul className="space-y-2 text-sm mt-auto">
              {b.bullets.map(x => (
                <li key={x} className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 p-10 lg:p-14">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-3">Обсудим вашу задачу</h2>
              <p className="text-muted-foreground">Оставьте короткую заявку или заполните подробное ТЗ — подготовим оценку в течение рабочего дня.</p>
            </div>
            <CTAButtons className="lg:justify-end" />
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="size-10 rounded-lg bg-gradient-to-br from-[var(--copper)] to-[oklch(0.55_0.18_30)] flex items-center justify-center font-display font-bold text-primary-foreground">КБ</div>
            <div>
              <div className="font-display font-bold">ЛИДЕР</div>
              <div className="text-[10px] text-muted-foreground tracking-widest uppercase">Конструкторское бюро</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Инженерные решения полного цикла: от идеи до серийного производства.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm mb-4 text-primary">Навигация</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Услуги</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Проекты</Link></li>
            <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm mb-4 text-primary">Услуги</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/konstruirovanie" className="hover:text-primary transition-colors">Конструирование</Link></li>
            <li><Link to="/services/proizvodstvo" className="hover:text-primary transition-colors">Производство</Link></li>
            <li><Link to="/services/raschety" className="hover:text-primary transition-colors">Инженерные расчёты</Link></li>
            <li><Link to="/services/dizain" className="hover:text-primary transition-colors">Дизайн</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm mb-4 text-primary">Контакты</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="tel:+79215832347" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Phone className="size-4" /> +7 (921) 583-23-47</a></li>
            <li><a href="mailto:kb-leader@mail.ru" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Mail className="size-4" /> kb-leader@mail.ru</a></li>
            <li className="inline-flex items-start gap-2 text-muted-foreground"><MapPin className="size-4 mt-0.5 shrink-0" /> Санкт-Петербург, Пулковское ш., 80А</li>
            <li className="inline-flex items-center gap-2 text-muted-foreground"><Clock className="size-4" /> Пн–Пт, 09:00–19:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} КБ Лидер. Все права защищены.</div>
          <div>ИНН 7810755179</div>
        </div>
      </div>
    </footer>
  );
}

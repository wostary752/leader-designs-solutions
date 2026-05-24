import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { to: "/services/konstruirovanie", label: "Конструирование" },
  { to: "/services/proizvodstvo", label: "Производство" },
  { to: "/services/raschety", label: "Инженерные расчёты" },
  { to: "/services/dizain", label: "Дизайн" },
] as const;

export function Header({ onEvaluate, onTZ }: { onEvaluate: () => void; onTZ: () => void }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-9 rounded-lg bg-gradient-to-br from-[var(--copper)] to-[oklch(0.55_0.18_30)] flex items-center justify-center font-display font-bold text-primary-foreground">
            КБ
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold leading-tight">ЛИДЕР</div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase">Конструкторское бюро</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          <Link to="/" className="px-3 py-2 rounded-md hover:text-primary transition-colors" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
            Главная
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/services" className="px-3 py-2 rounded-md hover:text-primary transition-colors inline-flex items-center gap-1" activeProps={{ className: "text-primary" }}>
              Услуги <ChevronDown className="size-3.5" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="glass-card rounded-xl p-2 shadow-[var(--shadow-elegant)]">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-3 py-2.5 rounded-lg text-sm hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/projects" className="px-3 py-2 rounded-md hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Проекты
          </Link>
          <Link to="/contacts" className="px-3 py-2 rounded-md hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+79215832347" className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <Phone className="size-4" /> +7 (921) 583-23-47
          </a>
          <button onClick={onEvaluate} className="btn-copper px-4 py-2 rounded-lg text-sm font-medium">
            Связаться
          </button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Меню">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block py-2.5" onClick={() => setOpen(false)}>Главная</Link>
            <Link to="/services" className="block py-2.5 font-medium" onClick={() => setOpen(false)}>Услуги</Link>
            <div className="pl-4 space-y-1">
              {services.map(s => (
                <Link key={s.to} to={s.to} className="block py-1.5 text-sm text-muted-foreground" onClick={() => setOpen(false)}>{s.label}</Link>
              ))}
            </div>
            <Link to="/projects" className="block py-2.5" onClick={() => setOpen(false)}>Проекты</Link>
            <Link to="/contacts" className="block py-2.5" onClick={() => setOpen(false)}>Контакты</Link>
            <a href="tel:+79215832347" className="block py-2.5 text-primary">+7 (921) 583-23-47</a>
            <button onClick={() => { setOpen(false); onEvaluate(); }} className="w-full btn-copper px-4 py-2.5 rounded-lg text-sm font-medium mt-2">
              Связаться
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

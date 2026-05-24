import { useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({ open, onClose, title, children, wide = false }: { open: boolean; onClose: () => void; title: string; children: ReactNode; wide?: boolean }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in" onClick={onClose}>
      <div
        className={`relative w-full ${wide ? "max-w-4xl" : "max-w-md"} max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 size-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors z-10" aria-label="Закрыть">
          <X className="size-4" />
        </button>
        <div className="p-6 sm:p-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase mb-6 pr-10">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export function useSubmit() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  return {
    state,
    submit: async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setState("sending");
      await new Promise(r => setTimeout(r, 800));
      setState("sent");
      setTimeout(() => setState("idle"), 3500);
      (e.target as HTMLFormElement).reset();
    },
  };
}

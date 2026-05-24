import { Paperclip } from "lucide-react";
import { Modal, useSubmit } from "./Modal";

const fieldClass = "w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";

export function EvaluateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { state, submit } = useSubmit();
  return (
    <Modal open={open} onClose={onClose} title="Оставьте заявку и мы свяжемся с вами">
      <form onSubmit={submit} className="space-y-3">
        <input required name="name" placeholder="Имя" className={fieldClass} />
        <input required type="tel" name="phone" placeholder="+7 (___) ___-__-__" className={fieldClass} />
        <input required type="email" name="email" placeholder="Почта" className={fieldClass} />
        <label className="flex items-start gap-3 text-xs text-muted-foreground p-4 rounded-xl border border-border">
          <input required type="checkbox" className="mt-0.5 accent-[var(--copper)]" />
          <span>Соглашаюсь с <span className="text-primary">политикой конфиденциальности</span> и на обработку персональных данных.</span>
        </label>
        <label className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-dashed border-border cursor-pointer hover:border-primary hover:text-primary transition-colors text-sm">
          <Paperclip className="size-4" /> Прикрепите файл
          <input type="file" className="hidden" />
        </label>
        <button disabled={state !== "idle"} className="w-full btn-copper py-3.5 rounded-xl font-medium disabled:opacity-70">
          {state === "idle" ? "Отправить" : state === "sending" ? "Отправка…" : "Отправлено ✓"}
        </button>
      </form>
    </Modal>
  );
}

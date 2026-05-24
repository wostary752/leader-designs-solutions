import { Paperclip } from "lucide-react";
import { Modal, useSubmit } from "./Modal";

const fieldClass = "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";
const labelClass = "block text-sm font-medium mb-1.5";

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5 gap-2 flex-wrap">
        <label className={labelClass}>{label}</label>
        {hint && <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-3 py-1">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

export function TZModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { state, submit } = useSubmit();
  return (
    <Modal open={open} onClose={onClose} title="Составить техническое задание" wide>
      <p className="text-sm text-muted-foreground -mt-3 mb-6">Заполните поля как можно подробнее — это поможет нам быстро и точно оценить проект.</p>
      <form onSubmit={submit} className="space-y-5">
        <input type="hidden" name="_subject" value="Заявка: Техническое задание — КБ Лидер" />
        <input type="hidden" name="form_type" value="Составить ТЗ" />
        <div className="grid sm:grid-cols-3 gap-4">
          <Field label="Наименование изделия"><input name="name" className={fieldClass} placeholder="Наименование изделия" /></Field>
          <Field label="Назначение изделия"><input name="purpose" className={fieldClass} placeholder="Назначение изделия" /></Field>
          <Field label="Область применения"><input name="area" className={fieldClass} placeholder="Область применения" /></Field>
        </div>
        <Field label="Цель разработки изделия"><input name="goal" className={fieldClass} placeholder="Цель разработки" /></Field>
        <Field label="Описание принципа работы"><textarea name="principle" rows={4} className={fieldClass} /></Field>
        <Field label="Имеющиеся исходные данные" hint="схемы, чертежи, фото, видео аналогов, габариты и т.д.">
          <textarea name="initial" rows={4} className={fieldClass} />
        </Field>
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Требования к внешнему виду"><textarea name="look" rows={3} className={fieldClass} /></Field>
          <Field label="Требования к функциональным характеристикам"><textarea name="func" rows={3} className={fieldClass} /></Field>
          <Field label="Требования к технологической составляющей"><textarea name="tech" rows={3} className={fieldClass} /></Field>
          <Field label="Требования безопасности"><textarea name="safety" rows={3} className={fieldClass} /></Field>
        </div>
        <Field label="Требования надёжности"><textarea name="reliability" rows={3} className={fieldClass} /></Field>
        <Field label="Дополнительные требования" hint="к материалам, экономическим показателям, упаковке и т.д.">
          <textarea name="extra" rows={3} className={fieldClass} />
        </Field>
        <Field label="Требования к конструкторской документации"><textarea name="docs" rows={3} className={fieldClass} /></Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Срок разработки, если есть ограничение"><input name="deadline" className={fieldClass} placeholder="Срок разработки" /></Field>
          <Field label="Бюджет на проектирование, если есть ограничение"><input name="budget" className={fieldClass} placeholder="Бюджет" /></Field>
          <Field label="Ваше имя"><input required name="contactName" className={fieldClass} /></Field>
          <Field label="Ваш e-mail"><input required type="email" name="contactEmail" className={fieldClass} /></Field>
        </div>
        <Field label="ТЗ на разработку">
          <label className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-border cursor-pointer hover:border-primary hover:text-primary transition-colors text-sm">
            <Paperclip className="size-4" /> Прикрепите файл
            <input type="file" className="hidden" />
          </label>
        </Field>
        <label className="flex items-start gap-3 text-xs text-muted-foreground p-4 rounded-xl border border-border">
          <input required type="checkbox" className="mt-0.5 accent-[var(--copper)]" />
          <span>Соглашаюсь с <span className="text-primary">политикой конфиденциальности</span> и на обработку персональных данных.</span>
        </label>
        <button disabled={state !== "idle"} className="w-full btn-copper py-4 rounded-xl font-medium disabled:opacity-70">
          {state === "idle" ? "Отправить форму" : state === "sending" ? "Отправка…" : "Отправлено ✓"}
        </button>
      </form>
    </Modal>
  );
}

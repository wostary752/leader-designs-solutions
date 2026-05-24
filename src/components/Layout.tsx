import { createContext, useContext, useState, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EvaluateModal } from "./EvaluateModal";
import { TZModal } from "./TZModal";

type Ctx = { openEvaluate: () => void; openTZ: () => void };
const ModalCtx = createContext<Ctx>({ openEvaluate: () => {}, openTZ: () => {} });
export const useModals = () => useContext(ModalCtx);

export function Layout({ children }: { children: ReactNode }) {
  const [evalOpen, setEvalOpen] = useState(false);
  const [tzOpen, setTzOpen] = useState(false);

  return (
    <ModalCtx.Provider value={{ openEvaluate: () => setEvalOpen(true), openTZ: () => setTzOpen(true) }}>
      <div className="bg-textured min-h-screen flex flex-col">
        <Header onEvaluate={() => setEvalOpen(true)} onTZ={() => setTzOpen(true)} />
        <main className="flex-1">{children}</main>
        <Footer />
        <EvaluateModal open={evalOpen} onClose={() => setEvalOpen(false)} />
        <TZModal open={tzOpen} onClose={() => setTzOpen(false)} />
      </div>
    </ModalCtx.Provider>
  );
}

export function CTAButtons({ className = "" }: { className?: string }) {
  const { openEvaluate, openTZ } = useModals();
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <button onClick={openEvaluate} className="btn-copper px-6 py-3.5 rounded-xl font-medium">
        Оценить задачу
      </button>
      <button onClick={openTZ} className="btn-outline-copper px-6 py-3.5 rounded-xl font-medium">
        Составить ТЗ
      </button>
    </div>
  );
}

import { Macros } from "../types";

interface FooterProps {
  dailyTotal: Macros;
}

export function Footer({ dailyTotal }: FooterProps) {
  return (
    <footer className="mt-12 pb-12 px-6">
      <div className="max-w-md mx-auto bg-slate-800/80 rounded-3xl p-6 text-white shadow-xl shadow-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4 text-center">
          Общий итог дня
        </h3>
        
        <div className="grid grid-cols-3 gap-4 divide-x divide-slate-700/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{dailyTotal.p}г</div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase mt-1 tracking-wider">Белки</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">{dailyTotal.f}г</div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase mt-1 tracking-wider">Жиры</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">{dailyTotal.c}г</div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase mt-1 tracking-wider">Углеводы</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

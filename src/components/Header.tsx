import { motion } from "framer-motion";
import { Macros } from "../types";

interface HeaderProps {
  dailyTotal: Macros;
  currentKcal: number;
}

export function Header({ dailyTotal, currentKcal }: HeaderProps) {
  const progress = Math.min((currentKcal / dailyTotal.kcal) * 100, 100);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 pb-4 pt-8 px-6 mb-8">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-end mb-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">
              Сьогодні
            </h1>
            <p className="text-sm font-medium text-slate-400 mt-1">
              Прогресс дня
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-accent-400">
              {Math.round(currentKcal)}
            </span>
            <span className="text-sm font-semibold text-slate-500 ml-1">
              / {dailyTotal.kcal} ккал
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-600 to-accent-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </header>
  );
}

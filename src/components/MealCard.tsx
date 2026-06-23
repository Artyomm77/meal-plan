import { motion } from "framer-motion";
import { Meal } from "../types";
import { IngredientItem } from "./IngredientItem";

interface MealCardProps {
  meal: Meal;
  checkedItems: Record<string, boolean>;
  onToggleItem: (id: string) => void;
  index: number;
}

export function MealCard({ meal, checkedItems, onToggleItem, index }: MealCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-slate-800/80 rounded-3xl p-6 shadow-lg border border-slate-700/50 mb-6 backdrop-blur-sm"
    >
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-lg font-bold text-slate-100 tracking-tight">
          {meal.title}
        </h2>
        <div className="text-right">
          <span className="text-sm font-semibold text-accent-400 block">
            {meal.macros.kcal} ккал
          </span>
          <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
            Б: {meal.macros.p}г • Ж: {meal.macros.f}г • В: {meal.macros.c}г
          </span>
        </div>
      </div>

      <div className="space-y-1 relative">
        {meal.items.map((item) => (
          <IngredientItem
            key={item.id}
            item={item}
            checked={!!checkedItems[item.id]}
            onToggle={onToggleItem}
          />
        ))}
      </div>
    </motion.div>
  );
}

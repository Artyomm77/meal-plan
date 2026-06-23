import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";
import { Ingredient } from "../types";

interface IngredientItemProps {
  item: Ingredient;
  checked: boolean;
  onToggle: (id: string) => void;
}

export function IngredientItem({ item, checked, onToggle }: IngredientItemProps) {
  return (
    <div
      onClick={() => onToggle(item.id)}
      className="group flex items-center justify-between py-3 cursor-pointer select-none"
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded-full border transition-colors duration-300 shrink-0",
            checked 
              ? "bg-accent-500 border-accent-500" 
              : "border-slate-600 group-hover:border-accent-400 bg-slate-800"
          )}
        >
          <motion.div
            initial={false}
            animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </motion.div>
        </div>
        <motion.span
          className={cn(
            "text-[15px] font-medium transition-colors duration-300",
            checked ? "text-slate-500" : "text-slate-200"
          )}
          animate={{ opacity: checked ? 0.5 : 1 }}
        >
          {item.name}
        </motion.span>
      </div>

      <motion.span
        className={cn(
          "text-sm transition-colors duration-300",
          checked ? "text-slate-600" : "text-slate-400"
        )}
        animate={{ opacity: checked ? 0.5 : 1 }}
      >
        {item.amount}
      </motion.span>
      
      {/* Strikethrough line animation */}
      {checked && (
        <motion.div
          layoutId={`strike-${item.id}`}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-8 h-[2px] bg-slate-500 origin-left max-w-[calc(100%-2rem)] rounded-full"
          style={{ marginTop: '1px' }}
        />
      )}
    </div>
  );
}

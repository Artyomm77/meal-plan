export interface Macros {
  kcal: number;
  p: number; // Protein (Б)
  f: number; // Fat (Ж)
  c: number; // Carbs (У)
}

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  macros?: Macros;
}

export interface Meal {
  id: string;
  title: string;
  macros: Macros;
  items: Ingredient[];
}

export interface DailyData {
  dailyTotal: Macros;
  meals: Meal[];
}

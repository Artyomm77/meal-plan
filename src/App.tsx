import { useState, useMemo, useEffect } from "react";
import { initialData } from "./data";
import { Header } from "./components/Header";
import { MealCard } from "./components/MealCard";
import { Footer } from "./components/Footer";

function App() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage and handle daily reset
  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const storedDate = localStorage.getItem("meal_plan_date");
    const storedItems = localStorage.getItem("meal_plan_checked");

    if (storedDate === today && storedItems) {
      try {
        setCheckedItems(JSON.parse(storedItems));
      } catch (e) {
        console.error("Failed to parse stored items", e);
      }
    } else {
      // If it's a new day or no data, reset
      localStorage.setItem("meal_plan_date", today);
      localStorage.setItem("meal_plan_checked", JSON.stringify({}));
      setCheckedItems({});
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever checkedItems change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("meal_plan_checked", JSON.stringify(checkedItems));
    }
  }, [checkedItems, isLoaded]);

  const handleToggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentKcal = useMemo(() => {
    let total = 0;
    initialData.meals.forEach((meal) => {
      const mealItemsCount = meal.items.length;
      const checkedMealItemsCount = meal.items.filter((item) => checkedItems[item.id]).length;
      
      if (mealItemsCount > 0) {
        const mealFraction = checkedMealItemsCount / mealItemsCount;
        total += meal.macros.kcal * mealFraction;
      }
    });
    return total;
  }, [checkedItems]);

  if (!isLoaded) return null; // Avoid hydration mismatch or flash of incorrect state

  return (
    <div className="min-h-screen pb-10 bg-slate-900 text-slate-200 selection:bg-accent-500/30">
      <Header dailyTotal={initialData.dailyTotal} currentKcal={currentKcal} />
      
      <main className="px-6 max-w-md mx-auto">
        {initialData.meals.map((meal, index) => (
          <MealCard
            key={meal.id}
            meal={meal}
            index={index}
            checkedItems={checkedItems}
            onToggleItem={handleToggleItem}
          />
        ))}
      </main>

      <Footer dailyTotal={initialData.dailyTotal} />
    </div>
  );
}

export default App;

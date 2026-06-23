import { DailyData } from "./types";

export const initialData: DailyData = {
  dailyTotal: { kcal: 2174, p: 187, f: 66, c: 202 },
  meals: [
    {
      id: "breakfast",
      title: "СНІДАНОК",
      macros: { kcal: 521, p: 39.2, f: 14.4, c: 65.3 },
      items: [
        { id: "b1", name: "Вівсяна крупа", amount: "40г" },
        { id: "b2", name: "Насіння чіа", amount: "10г" },
        { id: "b3", name: "Молоко", amount: "80г" },
        { id: "b4", name: "Банан", amount: "100г" },
        { id: "b5", name: "Йогурт", amount: "150г" },
        { id: "b6", name: "Протеїн", amount: "30г" },
      ],
    },
    {
      id: "lunch",
      title: "ОБІД",
      macros: { kcal: 536, p: 31.0, f: 20.4, c: 51.6 },
      items: [
        { id: "l1", name: "Рис", amount: "200г" },
        { id: "l2", name: "Яйця", amount: "4шт" },
        { id: "l3", name: "Овочі", amount: "200г" },
      ],
    },
    {
      id: "pre-workout",
      title: "ПЕРЕД ТРЕНУВАННЯМ",
      macros: { kcal: 522, p: 65.0, f: 3.4, c: 49.6 },
      items: [
        { id: "p1", name: "Рис", amount: "200г" },
        { id: "p2", name: "Куряче філе", amount: "200г" },
        { id: "p3", name: "Овочі", amount: "200г" },
      ],
    },
    {
      id: "dinner",
      title: "ВЕЧЕРЯ",
      macros: { kcal: 595, p: 52.2, f: 28.4, c: 36.1 },
      items: [
        { id: "d1", name: "Творог", amount: "300г" },
        { id: "d2", name: "Йогурт", amount: "100г" },
        { id: "d3", name: "Яблуко", amount: "100г" },
        { id: "d4", name: "Ківі", amount: "75г" },
        { id: "d5", name: "Арахіс", amount: "20г" },
      ],
    },
  ],
};

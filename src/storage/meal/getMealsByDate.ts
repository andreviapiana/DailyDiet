import { MealDTO } from '@storage/dtos/MealDTO'

interface MealsByDate {
  title: string
  data: MealDTO[]
}

export function getMealsByDate(meals: MealDTO[]): MealsByDate[] {
  const dates = Array.from(new Set(meals.map((meal) => meal.date)))
  const mealsByDate: MealsByDate[] = dates.map((date) => ({
    title: date,
    data: meals.filter((meal) => meal.date === date),
  }))
  return mealsByDate
}

/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { getAllMeals } from './getAllMeals'

export async function removeMealById(id: string) {
  try {
    const storage = await getAllMeals()

    const filteredMeals = storage.filter((meal) => meal.id !== id)
    const meals = JSON.stringify(filteredMeals)

    await AsyncStorage.setItem(MEAL_COLLECTION, meals)
  } catch (error) {
    throw error
  }
}

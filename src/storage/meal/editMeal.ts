/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { MealDTO } from '@storage/dtos/MealDTO'

export async function EditMeal(meals: MealDTO[]) {
  try {
    const storage = JSON.stringify(meals)
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}

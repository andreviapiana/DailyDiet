import { Container, SectionTitle, Title } from './styles'

import { Header } from '@components/Header'
import { PercentInfo } from '@components/PercentInfo'
import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'

import { SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { getAllMeals } from '@storage/meal/getAllMeals'
import { getMealsByDate } from '@storage/meal/getMealsByDate'
import { MealsHistoryDTO } from '@storage/dtos/mealsHistoryDTO'

export function Home() {
  // Navegando p/ a página NewAndEdit //
  const navigation = useNavigation()

  function handleNewAndEdit() {
    navigation.navigate('newandedit', {})
  }

  // Navegando p/ a página Details //
  function handleDetails(id: string) {
    navigation.navigate('details', { id })
  }

  // Calculando o Percentual //
  const [percent, setPercent] = useState(0)

  async function calculatePercentageWithinDiet() {
    const meals = await getAllMeals()

    const mealsWithinDiet = meals.reduce((acc, meal) => {
      // eslint-disable-next-line no-unused-expressions
      meal.inDiet ? (acc += 1) : acc

      return acc
    }, 0)

    const percentInDiet = (mealsWithinDiet / meals.length) * 100

    setPercent(percentInDiet)
  }

  // Carregando as refeições direto do Local Storage
  const [meals, setMeals] = useState<MealsHistoryDTO[]>([])

  async function fetchMeals() {
    try {
      const data = await getAllMeals()

      const mealsByDate = getMealsByDate(data)

      setMeals(mealsByDate.sort().reverse())
    } catch (error) {
      console.log(error)
    }
  }

  // Fazendo o Fecth das refeições ao carregar a página //
  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  // Chamando o cálculo do percentual ao carregar a página //
  useFocusEffect(
    useCallback(() => {
      calculatePercentageWithinDiet()
    }, []),
  )

  return (
    <Container>
      <Header />
      <PercentInfo percent={percent} />
      <Title>Refeições</Title>
      <Button title="Nova refeição" icon="add" onPress={handleNewAndEdit} />

      <SectionList
        style={{
          width: '100%',
        }}
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            hour={item.hour}
            name={item.name}
            inDiet={item.inDiet}
            onPress={() => handleDetails(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
    </Container>
  )
}

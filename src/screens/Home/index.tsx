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
  const percent = 90.86
  const [meals, setMeals] = useState<MealsHistoryDTO[]>([])

  // Navegando p/ a página NewAndEdit //
  const navigation = useNavigation()

  function handleNewAndEdit() {
    navigation.navigate('newandedit')
  }

  // Carregando as refeições direto do Local Storage
  async function fetchMeals() {
    try {
      const data = await getAllMeals()

      const mealsByDate = getMealsByDate(data)

      setMeals(mealsByDate)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
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

import {
  Container,
  HighlightWrapper,
  IconWrapper,
  InlineHighlightWrapper,
  StatisticsWrapper,
  Title,
} from './styles'

import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { MealDTO } from '@storage/dtos/MealDTO'
import { getAllMeals } from '@storage/meal/getAllMeals'

type RouteParams = {
  percent: number
}

export function Statistics() {
  // Navegando de volta para a página anterior //
  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

  // Recebendo o Percentual pela Rota //
  const route = useRoute()
  const { percent } = route.params as RouteParams

  // Buscando a refeição pelo ID e salvando ela no State //
  const [meals, setMeals] = useState<MealDTO[]>([])

  async function fetchMeals() {
    try {
      const AllMeals = await getAllMeals()

      setMeals(AllMeals)
    } catch (error) {
      console.log(error)
    }
  }

  // Calculando o número de refeições que estão DENTRO e FORA da Dieta //
  const infoMeals = meals.reduce(
    (acc, meals) => {
      if (meals.inDiet) {
        acc.mealsInDiet += 1
      } else {
        acc.mealsOutDiet += 1
      }

      acc.total += 1

      return acc
    },
    { mealsInDiet: 0, mealsOutDiet: 0, total: 0 },
  )

  // Calculando a sequência de refeições que estão DENTRO da Dieta //
  function countMaxInDietSequence(meals: MealDTO[]) {
    let maxSequence = 0
    let currentSequence = 0

    for (let i = 0; i < meals.length; i++) {
      const currentItem = meals[i]

      if (currentItem.inDiet) {
        currentSequence++
        maxSequence = Math.max(maxSequence, currentSequence)
      } else {
        currentSequence = 0
      }
    }

    return maxSequence
  }

  // Fazendo o Fecth das refeições ao carregar a página //
  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <Container type={percent < 50 ? 'SECONDARY' : 'PRIMARY'}>
      <IconWrapper>
        <ButtonIcon
          icon="arrow-back"
          type={percent < 50 ? 'SECONDARY' : 'PRIMARY'}
          onPress={previousPage}
        />
      </IconWrapper>

      <Highlight
        title={`${(Math.round(percent * 100) / 100).toFixed(2)}%`}
        subtitle={'das refeições dentro da dieta'}
      />
      <StatisticsWrapper>
        <Title>Estatísticas Gerais</Title>

        <HighlightWrapper>
          <Highlight
            title={countMaxInDietSequence(meals)}
            subtitle={'melhor sequência de pratos dentro da dieta'}
            size={'LG'}
          />
        </HighlightWrapper>
        <HighlightWrapper>
          <Highlight
            title={infoMeals.total}
            subtitle={'refeições registradas'}
            size={'LG'}
          />
        </HighlightWrapper>

        <InlineHighlightWrapper>
          <HighlightWrapper bgColor="GREEN">
            <Highlight
              title={infoMeals.mealsInDiet}
              subtitle={'refeições dentro da dieta'}
              size={'LG'}
            />
          </HighlightWrapper>
          <HighlightWrapper bgColor="RED">
            <Highlight
              title={infoMeals.mealsOutDiet}
              subtitle={'refeições fora da dieta'}
              size={'LG'}
            />
          </HighlightWrapper>
        </InlineHighlightWrapper>
      </StatisticsWrapper>
    </Container>
  )
}

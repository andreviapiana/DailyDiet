import {
  Container,
  DetailsWrapper,
  Icon,
  IconWrapper,
  InDietTag,
  Subtitle,
  Title,
  Text,
  ButtonsWrapper,
  InfosWrapper,
} from './styles'

import { ButtonIcon } from '@components/ButtonIcon'
import { Alert, View } from 'react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { Button } from '@components/Button'
import { MealDTO } from '@storage/dtos/MealDTO'
import { useCallback, useState } from 'react'
import { getAllMeals } from '@storage/meal/getAllMeals'
import { Loading } from '@components/Loading'
import { removeMealById } from '@storage/meal/removeMealById'

type RouteParams = {
  id: string
}

export function Details() {
  // Navegando de volta para a página anterior //
  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

  // Navegando para a página de Edição //
  function handleGoToEditMeal() {
    navigation.navigate('newandedit', { id })
  }

  // State p/ armazenar a refeição a ser aberta //
  const [meal, setMeal] = useState<MealDTO>()

  // Recebendo o ID pela Rota //
  const route = useRoute()
  const { id } = route.params as RouteParams

  // Buscando a refeição pelo ID e salvando ela no State //
  useFocusEffect(
    useCallback(() => {
      async function fetchMeal() {
        try {
          const meals = await getAllMeals()

          const meal = meals.find((meal) => meal.id === id)

          setMeal(meal)
          console.log(meals)
        } catch (error) {
          console.log(error)
        }
      }

      fetchMeal()
    }, [id]),
  )

  // Removendo uma refeição //
  async function handleRemoveMeal() {
    Alert.alert('Remover', 'Deseja realmente remover o registro da refeição?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removeMeal() },
    ])
  }

  async function removeMeal() {
    try {
      await removeMealById(id!)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Remover refeição',
        'Não foi possível remover a refeição. Tente novamente!',
      )
    } finally {
      navigation.navigate('home')
    }
  }

  return (
    <Container type={meal?.inDiet ? 'PRIMARY' : 'SECONDARY'}>
      <IconWrapper>
        <ButtonIcon icon="arrow-back" onPress={previousPage} />
      </IconWrapper>

      <Title>Refeição</Title>

      {meal ? (
        <DetailsWrapper>
          <InfosWrapper>
            <View>
              <Title>{meal.name}</Title>
              <Text>{meal.description}</Text>
            </View>
            <View>
              <Subtitle>Data e hora</Subtitle>
              <Text>
                {meal.date} às {meal.hour}
              </Text>
            </View>

            <InDietTag>
              <Icon
                name="circle"
                type={meal.inDiet ? 'PRIMARY' : 'SECONDARY'}
              />
              <Subtitle>
                {meal.inDiet ? 'dentro da dieta' : 'fora da dieta'}
              </Subtitle>
            </InDietTag>
          </InfosWrapper>

          <ButtonsWrapper>
            <Button
              type="PRIMARY"
              icon="border-color"
              title={'Editar refeição'}
              onPress={handleGoToEditMeal}
            />
            <Button
              type="SECONDARY"
              icon="delete"
              title={'Excluir refeição'}
              onPress={handleRemoveMeal}
            />
          </ButtonsWrapper>
        </DetailsWrapper>
      ) : (
        <DetailsWrapper>
          <Loading />
        </DetailsWrapper>
      )}
    </Container>
  )
}

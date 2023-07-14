import {
  Container,
  FakeInput,
  FakeInputLabel,
  FakeInputWrapper,
  FilterTitle,
  FilterWrapper,
  Form,
  IconWrapper,
  InlineInputWrapper,
  Title,
} from './styles'

import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { Button } from '@components/Button'

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { useCallback, useState } from 'react'
import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import { createMeal } from '@storage/meal/createMeal'
import { MealDTO } from '@storage/dtos/MealDTO'
import uuid from 'react-native-uuid'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { EditMeal } from '@storage/meal/editMeal'
import { getAllMeals } from '@storage/meal/getAllMeals'

type RouteParams = {
  id?: string
}

export function NewAndEdit() {
  // Navegando de volta para a página anterior //
  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

  // Recebendo o ID que foi enviado pela rota //
  const route = useRoute()
  const { id } = route.params as RouteParams

  // Armazenando as Refeições em um State p/ depois buscar se o ID existe //
  const [meals, setMeals] = useState<MealDTO[]>([])

  // State inicial do Filter(o Sim começa selecionado) //
  const [isActive, setIsActive] = useState('Sim')
  const inDiet = isActive === 'Sim'

  // DateTime Picker - Armazenando Data + Hora + State dos Pickers //
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false)

  function hideDatePicker() {
    setIsDatePickerVisible(false)
  }

  function handleConfirmDate(date: Date) {
    const formattedDate = format(date, 'dd/MM/yyyy', { locale: ptBR })
    setDate(formattedDate)
    hideDatePicker()
  }

  function hideTimePicker() {
    setIsTimePickerVisible(false)
  }

  function handleConfirmTime(time: Date) {
    const formattedTime = format(time, 'HH:mm')
    setTime(formattedTime)
    hideTimePicker()
  }

  // Armazenando State do Name e do Description do Formulário //
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  // Criando uma Nova Refeição e Navegando para a página Feedback //
  async function handleCreateNewMeal() {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      !date ||
      !time
    ) {
      return Alert.alert(
        'Preencha todos os campos',
        'É necessário preencher todos os campos para continuar',
      )
    }

    const id = String(uuid.v4())

    const newMeal: MealDTO = {
      id,
      name,
      description,
      date,
      hour: time,
      inDiet: isActive === 'Sim',
    }

    try {
      await createMeal(newMeal)
      console.log(newMeal)
    } catch {
      return Alert.alert('Nova refeição', 'Não foi possível criar a refeição!')
    } finally {
      navigation.navigate('feedback', { inDiet })
    }
  }

  // Editando uma Refeição existente e Navegando para a página Feedback //
  async function handleEditMeal() {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      !date ||
      !time
    ) {
      return Alert.alert(
        'Preencha todos os campos',
        'É necessário preencher todos os campos para continuar',
      )
    }

    const mealsEdited = meals.map((meal) =>
      meal.id === id
        ? {
            ...meal,
            name,
            description,
            date,
            hour: time,
            inDiet: isActive === 'Sim',
          }
        : meal,
    )

    try {
      await EditMeal(mealsEdited)
      console.log(mealsEdited)
    } catch (error) {
      return Alert.alert('Nova refeição', 'Não foi possível salvar a refeição!')
    } finally {
      navigation.navigate('feedback', { inDiet })
    }
  }

  // Fazendo o Fecth das refeições ao carregar a página //
  useFocusEffect(
    useCallback(() => {
      async function fetchMeal() {
        try {
          const meals = await getAllMeals()

          const meal = meals.find((meal) => meal.id === id)

          if (meal) {
            setDate(meal.date)
            setName(meal.name)
            setDescription(meal.description)
            setIsActive(meal.inDiet ? 'Sim' : 'Não')
            setTime(meal.hour)
            setMeals(meals)
          }
        } catch (error) {
          console.log(error)
        }
      }

      fetchMeal()
    }, [id]),
  )

  return (
    <Container>
      <IconWrapper>
        <ButtonIcon icon="arrow-back" onPress={previousPage} />
      </IconWrapper>

      {id ? <Title>Editar refeição</Title> : <Title>Nova refeição</Title>}

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Form>
          <Input
            label="Nome"
            placeholder="Digite o nome"
            onChangeText={setName}
            value={name}
          />

          <Input
            label="Descrição"
            type="TEXTAREA"
            multiline
            numberOfLines={3}
            placeholder="Digite uma descrição"
            onChangeText={setDescription}
            value={description}
          />

          <InlineInputWrapper>
            <FakeInputWrapper>
              <FakeInputLabel>Data</FakeInputLabel>
              <FakeInput onPress={() => setIsDatePickerVisible(true)}>
                <Text>{date.toString()}</Text>
              </FakeInput>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
            </FakeInputWrapper>
            <FakeInputWrapper>
              <FakeInputLabel>Hora</FakeInputLabel>
              <FakeInput onPress={() => setIsTimePickerVisible(true)}>
                <Text>{time.toString()}</Text>
              </FakeInput>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
              />
            </FakeInputWrapper>
          </InlineInputWrapper>

          <FilterWrapper>
            <FilterTitle>Está dentro da dieta?</FilterTitle>
            <FlatList
              data={['Sim', 'Não']}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Filter
                  style={{ width: '49%' }}
                  title={item}
                  isActive={item === isActive}
                  onPress={() => setIsActive(item)}
                />
              )}
            />
          </FilterWrapper>

          {id ? (
            <Button title={'Salvar alterações'} onPress={handleEditMeal} />
          ) : (
            <Button
              title={'Cadastrar refeição'}
              onPress={handleCreateNewMeal}
            />
          )}
        </Form>
      </TouchableWithoutFeedback>
    </Container>
  )
}

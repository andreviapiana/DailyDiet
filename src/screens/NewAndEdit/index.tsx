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

import { useNavigation } from '@react-navigation/native'
import { SetStateAction, useState } from 'react'
import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { createMeal } from '@storage/meal/createMeal'
import { MealDTO } from '@storage/dtos/MealDTO'
import uuid from 'react-native-uuid'

export function NewAndEdit() {
  // Navegando de volta para a página anterior //
  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

  // State inicial do Filter(o Sim começa selecionado) //
  const [isActive, setIsActive] = useState('Sim')
  const inDiet = isActive === 'Sim'

  // DateTime Picker(ele já armazena a Data e a Hora do Form dentro do Date) //
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode: SetStateAction<string>) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }

  // Armazenando State do Name e do Description do Formulário //
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  // Criando uma Nova Refeição e Navegando para a página Feedback //
  async function handleCreateNewMeal() {
    if (name.trim().length === 0) {
      return Alert.alert('Nome inválido', 'Por favor, informe um nome válido!')
    }
    if (description.trim().length === 0) {
      return Alert.alert(
        'Descrição inválida',
        'Por favor, informe uma descrição válida!',
      )
    }

    const id = String(uuid.v4())

    const newMeal: MealDTO = {
      id,
      name,
      description,
      date: date.toLocaleDateString(),
      hour: date.toLocaleTimeString(),
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

  return (
    <Container>
      <IconWrapper>
        <ButtonIcon icon="arrow-back" onPress={previousPage} />
      </IconWrapper>

      <Title>Nova Refeição</Title>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Form>
          <Input
            label="Nome"
            placeholder="Digite o nome"
            onChangeText={setName}
          />

          <Input
            label="Descrição"
            type="TEXTAREA"
            multiline
            numberOfLines={3}
            placeholder="Digite uma descrição"
            onChangeText={setDescription}
          />

          <InlineInputWrapper>
            <FakeInputWrapper>
              <FakeInputLabel>Data</FakeInputLabel>
              <FakeInput onPress={showDatepicker}>
                <Text>{date.toLocaleDateString()}</Text>
              </FakeInput>
            </FakeInputWrapper>
            <FakeInputWrapper>
              <FakeInputLabel>Hora</FakeInputLabel>
              <FakeInput onPress={showTimepicker}>
                <Text>
                  {date.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
              </FakeInput>
            </FakeInputWrapper>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
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

          <Button title={'Cadastrar refeição'} onPress={handleCreateNewMeal} />
        </Form>
      </TouchableWithoutFeedback>
    </Container>
  )
}

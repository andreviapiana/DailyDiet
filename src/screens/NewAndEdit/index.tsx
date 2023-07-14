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
import { useState } from 'react'
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

export function NewAndEdit() {
  // Navegando de volta para a página anterior //
  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

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

          <Button title={'Cadastrar refeição'} onPress={handleCreateNewMeal} />
        </Form>
      </TouchableWithoutFeedback>
    </Container>
  )
}

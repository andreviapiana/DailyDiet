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
import { FlatList, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export function NewAndEdit() {
  // Navegando de volta para a página anterior //
  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

  // Navegando para a página Feedback //
  function handleFeedback() {
    navigation.navigate('feedback')
  }

  // State inicial do Filter(o Sim começa selecionado) //
  const [inDiet, setInDiet] = useState('Sim')

  // DateTime Picker //
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

  return (
    <Container>
      <IconWrapper>
        <ButtonIcon icon="arrow-back" onPress={previousPage} />
      </IconWrapper>

      <Title>Nova Refeição</Title>

      <Form>
        <Input label="Nome" placeholder="Digite o nome" />

        <Input
          label="Descrição"
          type="TEXTAREA"
          multiline
          numberOfLines={3}
          placeholder="Digite uma descrição"
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
                isActive={item === inDiet}
                onPress={() => setInDiet(item)}
              />
            )}
          />
        </FilterWrapper>

        <Button title={'Cadastrar refeição'} onPress={handleFeedback} />
      </Form>
    </Container>
  )
}

import {
  Container,
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
import { FlatList } from 'react-native'

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
          <Input
            label="Data"
            placeholder="Digite a data"
            keyboardType="number-pad"
            size={'SM'}
          />

          <Input
            label="Hora"
            placeholder="Digite a hora"
            keyboardType="numeric"
            size={'SM'}
          />
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

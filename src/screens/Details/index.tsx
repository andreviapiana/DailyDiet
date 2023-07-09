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
import { Alert, TouchableOpacityProps, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '@components/Button'

type DetailsProps = TouchableOpacityProps & {
  inDiet: boolean
  name: string
  hour: string
  date: string
  description: string
}

export function Details() {
  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

  const route = useRoute()

  const { inDiet, name, hour, date, description } = route.params as DetailsProps

  // Removendo uma refeição //
  async function handleMealRemove() {
    Alert.alert('Remover', 'Deseja realmente remover o registro da refeição?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => mealRemove() },
    ])
  }
  return (
    <Container type={inDiet ? 'PRIMARY' : 'SECONDARY'}>
      <IconWrapper>
        <ButtonIcon icon="arrow-back" onPress={previousPage} />
      </IconWrapper>

      <Title>Refeição</Title>

      <DetailsWrapper>
        <InfosWrapper>
          <View>
            <Title>{name}</Title>
            <Text>{description}</Text>
          </View>
          <View>
            <Subtitle>Data e hora</Subtitle>
            <Text>
              {date} às {hour}
            </Text>
          </View>

          <InDietTag>
            <Icon name="circle" type={inDiet ? 'PRIMARY' : 'SECONDARY'} />
            <Subtitle>{inDiet ? 'dentro da dieta' : 'fora da dieta'}</Subtitle>
          </InDietTag>
        </InfosWrapper>

        <ButtonsWrapper>
          <Button
            type="PRIMARY"
            icon="border-color"
            title={'Editar refeição'}
          />
          <Button
            type="SECONDARY"
            icon="delete"
            title={'Excluir refeição'}
            onPress={handleMealRemove}
          />
        </ButtonsWrapper>
      </DetailsWrapper>
    </Container>
  )
}

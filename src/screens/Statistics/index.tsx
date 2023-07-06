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
import { TouchableOpacityProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'

type StatisticsProps = TouchableOpacityProps & {
  percent: number
}

export function Statistics(/* { percent }: StatisticsProps */) {
  const percent = 90.86

  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

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
        title={`${percent}%`}
        subtitle={'das refeições dentro da dieta'}
      />
      <StatisticsWrapper>
        <Title>Estatísticas Gerais</Title>

        <HighlightWrapper>
          <Highlight
            title={'22'}
            subtitle={'melhor sequência de pratos dentro da dieta'}
            size={'LG'}
          />
        </HighlightWrapper>
        <HighlightWrapper>
          <Highlight
            title={'109'}
            subtitle={'refeições registradas'}
            size={'LG'}
          />
        </HighlightWrapper>

        <InlineHighlightWrapper>
          <HighlightWrapper bgColor="GREEN">
            <Highlight
              title={'99'}
              subtitle={'refeições dentro da dieta'}
              size={'LG'}
            />
          </HighlightWrapper>
          <HighlightWrapper bgColor="RED">
            <Highlight
              title={'10'}
              subtitle={'refeições fora da dieta'}
              size={'LG'}
            />
          </HighlightWrapper>
        </InlineHighlightWrapper>
      </StatisticsWrapper>
    </Container>
  )
}

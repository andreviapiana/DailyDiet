import { TouchableOpacityProps } from 'react-native'
import { Container, Subtitle, Title, PercentInfoTypeStyleProps } from './styles'

type PercentProps = TouchableOpacityProps & {
  type?: PercentInfoTypeStyleProps
  percent: number
}

export function PercentInfo({ percent }: PercentProps) {
  return (
    <Container type={percent < 50 ? 'SECONDARY' : 'PRIMARY'}>
      <Title>{percent}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}

import { Container, Hour, Icon, MealInfoTypeStyleProps, Name } from './styles'

type Props = {
  name: string
  hour: string
  dietType?: string
  type?: MealInfoTypeStyleProps
}

export function MealCard({ name, hour, dietType }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>

      <Name>{name}</Name>

      <Icon
        name="circle"
        type={dietType === 'healthy' ? 'PRIMARY' : 'SECONDARY'}
      />
    </Container>
  )
}

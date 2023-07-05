import { Container, Hour, Icon, MealInfoTypeStyleProps, Name } from './styles'

type Props = {
  name: string
  hour: string
  inDiet?: boolean
  type?: MealInfoTypeStyleProps
}

export function MealCard({ name, hour, inDiet }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>

      <Name>{name}</Name>

      <Icon name="circle" type={inDiet === true ? 'PRIMARY' : 'SECONDARY'} />
    </Container>
  )
}

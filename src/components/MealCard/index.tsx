import { Container, Hour, Icon, MealInfoTypeStyleProps, Name } from './styles'

type Props = {
  name: string
  hour: string
  inDiet: boolean
  type?: MealInfoTypeStyleProps
}

export function MealCard({ name, hour, inDiet }: Props) {
  // Limitando o tamanho do nome de uma refeição e adicionando os 3 pontinhos...//
  function truncateString(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num - 1) + '...'
    } else {
      return str
    }
  }

  return (
    <Container>
      <Hour>{hour}</Hour>

      <Name>{truncateString(name, 30)}</Name>

      <Icon name="circle" type={inDiet ? 'PRIMARY' : 'SECONDARY'} />
    </Container>
  )
}

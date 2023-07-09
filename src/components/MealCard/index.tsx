import { useNavigation } from '@react-navigation/native'
import { Container, Hour, Icon, MealInfoTypeStyleProps, Name } from './styles'

type Props = {
  name: string
  hour: string
  date: string
  description: string
  inDiet: boolean
  type?: MealInfoTypeStyleProps
}

export function MealCard({ name, hour, inDiet, date, description }: Props) {
  // Navegando p/ a página NewAndEdit //
  const navigation = useNavigation()

  function handleDetails() {
    navigation.navigate('details', { inDiet, name, hour, date, description })
  }

  // Limitando o tamanho do nome de uma refeição e adicionando os 3 pontinhos...//
  function truncateString(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num - 1) + '...'
    } else {
      return str
    }
  }

  return (
    <Container onPress={handleDetails}>
      <Hour>{hour}</Hour>

      <Name>{truncateString(name, 30)}</Name>

      <Icon name="circle" type={inDiet ? 'PRIMARY' : 'SECONDARY'} />
    </Container>
  )
}

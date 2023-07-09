import { Container, SectionTitle, Title } from './styles'

import { Header } from '@components/Header'
import { PercentInfo } from '@components/PercentInfo'
import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'
import { SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const MEALS = [
  {
    title: '05.07.23',
    data: [
      {
        id: '1',
        name: 'X-tudo',
        description:
          'Incrivelmente saboroso(a). Dá vontade de comer o tempo todo!',
        date: '05.07.23',
        hour: '20:00',
        inDiet: false,
      },
      {
        id: '2',
        name: 'Lasanha de frango com queijo',
        description:
          'Incrivelmente saboroso(a). Dá vontade de comer o tempo todo!',
        date: '05.07.23',
        hour: '16:00',
        inDiet: true,
      },
      {
        id: '3',
        name: 'Salada Cesar com frango grelhado',
        description:
          'Incrivelmente saboroso(a). Dá vontade de comer o tempo todo!',
        date: '05.07.23',
        hour: '12:30',
        inDiet: true,
      },
      {
        id: '4',
        name: 'Vitamina de banana com abacate',
        description:
          'Incrivelmente saboroso(a). Dá vontade de comer o tempo todo!',
        date: '05.07.23',
        hour: '09:30',
        inDiet: true,
      },
    ],
  },

  {
    title: '04.07.23',
    data: [
      {
        id: '1',
        name: 'X-tudo',
        description:
          'Incrivelmente saboroso(a). Dá vontade de comer o tempo todo!',
        date: '04.07.23',
        hour: '20:00',
        inDiet: false,
      },
      {
        id: '2',
        name: 'Whey protein com leite',
        description:
          'Incrivelmente saboroso(a). Dá vontade de comer o tempo todo!',
        date: '04.07.23',
        hour: '16:00',
        inDiet: true,
      },
      {
        id: '3',
        name: 'Salada Caesar com frango grelhado',
        description:
          'Incrivelmente saboroso(a). Dá vontade de comer o tempo todo!',
        date: '07.07.23',
        hour: '12:30',
        inDiet: true,
      },
      {
        id: '4',
        name: 'Vitamina de banana com abacate',
        description:
          'Incrivelmente saboroso(a). Dá vontade de comer o tempo todo!',
        date: '04.07.23',
        hour: '09:30',
        inDiet: true,
      },
    ],
  },
]

export function Home() {
  const percent = 90.86

  // Navegando p/ a página NewAndEdit //
  const navigation = useNavigation()

  function handleNewAndEdit() {
    navigation.navigate('newandedit')
  }

  return (
    <Container>
      <Header />
      <PercentInfo percent={percent} />
      <Title>Refeições</Title>
      <Button title="Nova refeição" icon="add" onPress={handleNewAndEdit} />

      <SectionList
        style={{
          width: '100%',
        }}
        sections={MEALS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            date={item.date}
            hour={item.hour}
            description={item.description}
            name={item.name}
            inDiet={item.inDiet}
          />
        )}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
    </Container>
  )
}

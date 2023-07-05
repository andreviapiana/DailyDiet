import { Container, SectionTitle, Title } from './styles'

import { Header } from '@components/Header'
import { PercentInfo } from '@components/PercentInfo'
import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'
import { SectionList } from 'react-native'

const MEALS = [
  {
    title: '05.07.23',
    data: [
      {
        id: '1',
        name: 'X-tudo',
        description: '',
        date: '05.07.23',
        hour: '20:00',
        inDiet: false,
      },
      {
        id: '2',
        name: 'Lasanha de frandgo com queijo',
        description: '',
        date: '05.07.23',
        hour: '16:00',
        inDiet: true,
      },
      {
        id: '3',
        name: 'Salada Cesar com frango grelhado',
        description: '',
        date: '05.07.23',
        hour: '12:30',
        inDiet: true,
      },
      {
        id: '4',
        name: 'Vitamina de banana com abacate',
        description: '',
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
        description: '',
        date: '04.07.23',
        hour: '20:00',
        inDiet: false,
      },
      {
        id: '2',
        name: 'Whey protein com leite',
        description: '',
        date: '04.07.23',
        hour: '16:00',
        inDiet: true,
      },
      {
        id: '3',
        name: 'Salada Caesar com frango grelhado',
        description: '',
        date: '07.07.23',
        hour: '12:30',
        inDiet: true,
      },
      {
        id: '4',
        name: 'Vitamina de banana com abacate',
        description: '',
        date: '04.07.23',
        hour: '09:30',
        inDiet: true,
      },
    ],
  },
]

export function Home() {
  function truncateString(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num - 1) + '...'
    } else {
      return str
    }
  }

  return (
    <Container>
      <Header />
      <PercentInfo percent={90.86} />
      <Title>Refeições</Title>
      <Button title="Nova refeição" icon="add" />

      <SectionList
        style={{
          width: '100%',
        }}
        sections={MEALS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            hour={item.hour}
            name={truncateString(item.name, 30)}
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

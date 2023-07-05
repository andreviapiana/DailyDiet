import { Container, Title } from './styles'

import { Header } from '@components/Header'
import { PercentInfo } from '@components/PercentInfo'
import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'

export function Home() {
  return (
    <Container>
      <Header />
      <PercentInfo percent={90.86} />
      <Title>Refeições</Title>
      <Button title="Nova refeição" icon="add" />
      <MealCard hour={'12:28'} name="X-tudo" dietType="healthy" />
    </Container>
  )
}

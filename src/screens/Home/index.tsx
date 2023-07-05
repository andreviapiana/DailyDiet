import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { PercentInfo } from '@components/PercentInfo'
import { Container, Title } from './styles'

export function Home() {
  return (
<Container>
  <Header />
  <PercentInfo percent={90.86} />
  <Title>Refeições</Title>
  <Button title="Nova refeição" icon="add" />
</Container>
  )
}

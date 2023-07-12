import { Container, Subtitle, Title } from './styles'

type Props = {
  title: any
  subtitle: string
  size?: 'SM' | 'LG'
}

export function Highlight({ title, subtitle, size }: Props) {
  return (
    <Container size={size}>
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}

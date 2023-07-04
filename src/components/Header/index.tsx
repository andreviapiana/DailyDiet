import { Container, Logo, User } from './styles'

import logoImg from '@assets/logo.png'
import userImg from '@assets/user.png'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <User source={userImg} />
    </Container>
  )
}

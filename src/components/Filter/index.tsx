import { TouchableOpacityProps } from 'react-native'

import { Container, Title, FilterStyleProps, Icon } from './styles'

type Props = TouchableOpacityProps & FilterStyleProps

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container title={title} isActive={isActive} {...rest}>
      <Icon name="circle" title={title} />
      <Title>{title}</Title>
    </Container>
  )
}

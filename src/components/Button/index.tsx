import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon} />}
      <Title>{title}</Title>
    </Container>
  )
}

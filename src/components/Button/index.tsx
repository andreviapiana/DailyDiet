import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonTypeStyleProps, Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  icon?: keyof typeof MaterialIcons.glyphMap
  type?: ButtonTypeStyleProps
}

export function Button({ title, icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon type={type} name={icon} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}

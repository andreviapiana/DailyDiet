import { TouchableOpacityProps } from 'react-native'
import { Container, PercentInfoTypeStyleProps, IconWrapper } from './styles'

import { ButtonIcon } from '@components/ButtonIcon'
import { Highlight } from '@components/Highlight'

type PercentProps = TouchableOpacityProps & {
  type?: PercentInfoTypeStyleProps
  percent: number
}

export function PercentInfo({ percent }: PercentProps) {
  return (
    <Container type={percent < 50 ? 'SECONDARY' : 'PRIMARY'}>
      <IconWrapper>
        <ButtonIcon
          icon="north-east"
          type={percent < 50 ? 'SECONDARY' : 'PRIMARY'}
        />
      </IconWrapper>
      <Highlight
        title={`${percent}%`}
        subtitle={'das refeições dentro da dieta'}
      />
    </Container>
  )
}

import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  // O stretch deixa o botão com width 100% //
  align-self: stretch;
  min-height: 56px;
  max-height: 56px;
  gap: 12px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;

  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY'
      ? theme.COLORS.GRAY_1
      : 'transparent'};

    border-width: ${type === 'PRIMARY' ? 0 : '1px'};
    border-color: ${type === 'PRIMARY' ? 0 : `${theme.COLORS.GRAY_1}`};
  `}
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))``

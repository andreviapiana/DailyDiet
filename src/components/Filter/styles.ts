import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export type FilterStyleProps = {
  isActive?: boolean
  title: string
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  border-radius: 4px;
  flex-direction: row;
  gap: 8px;

  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  ${({ theme, isActive, title }) =>
    isActive && title
      ? css`
          border: 1px solid
            ${title === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
          background-color: ${title === 'Sim'
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_6};
        `};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`

export const Icon = styled(MaterialIcons).attrs<FilterStyleProps>(
  ({ theme, title }) => ({
    size: 8,
    color: title === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)``

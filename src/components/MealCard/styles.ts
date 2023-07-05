import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export type MealInfoTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: MealInfoTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 100%;

  background-color: transparent;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;

  margin-top: 8px;
  padding: 14px 16px;

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Hour = styled.Text`
  padding-right: 12px;
  border-right-width: 1px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    border-color: ${({ theme }) => theme.COLORS.GRAY_4};
  `}
`

export const Name = styled.Text`
  flex: 1;
  padding-left: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 14,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
}))``

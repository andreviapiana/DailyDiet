import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  // O stretch deixa o botão com width 100% //
  align-self: stretch;
  min-height: 56px;
  max-height: 56px;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Icon = styled(MaterialIcons)`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

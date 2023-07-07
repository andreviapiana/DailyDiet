import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type TextInputTypeStyleProps = 'DEFAULT' | 'TEXTAREA'

type Props = {
  size?: 'SM' | 'DEFAULT'
  type?: TextInputTypeStyleProps
}

export const ExternalContainer = styled.View`
  flex-shrink: 1;
  width: 100%;
`

export const Container = styled(TextInput)<Props>`
  padding: 14px;
  border-radius: 6px;
  border: 1px;
  text-align-vertical: top;
  ${({ theme, type }) => css`
    min-height: ${type === 'TEXTAREA' ? '48px' : '48px'};
    max-height: ${type === 'TEXTAREA' ? '120px' : '48px'};
    color: ${theme.COLORS.GRAY_1};
    background-color: transparent;
    font-size: ${theme.FONT_SIZE.MD}px;
    border-color: ${theme.COLORS.GRAY_5};
  `};
`

export const Label = styled.Text`
  margin-bottom: 4px;
  align-self: flex-start;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

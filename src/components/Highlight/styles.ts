import styled, { css } from 'styled-components/native'

export type HighlightTypeStyleProps = 'SM' | 'LG'

type Props = {
  size?: HighlightTypeStyleProps
}

export const Container = styled.View<Props>`
  width: 100%;
  gap: ${({ size }) => (size === 'LG' ? 8 : 0)}px;
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

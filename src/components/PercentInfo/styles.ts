import styled, { css } from 'styled-components/native'

export type PercentInfoTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: PercentInfoTypeStyleProps
}

export const Container = styled.View<Props>`
  width: 100%;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px 16px;
  margin-bottom: 40px;
  gap: 2px;
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
  `};
`

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `};
`

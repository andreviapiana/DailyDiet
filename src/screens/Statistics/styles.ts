import styled, { css } from 'styled-components/native'

export type StatisticsInfoTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: StatisticsInfoTypeStyleProps
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 72px 0 0;
`

export const IconWrapper = styled.View`
  position: absolute;
  top: 56px;
  left: 24px;
`

export const StatisticsWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  margin-top: 34px;
  padding: 33px 24px;
`

export const Title = styled.Text`
  margin-bottom: 23px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
type ColorProps = {
  bgColor?: 'GREEN' | 'RED'
}

export const HighlightWrapper = styled.View<ColorProps>`
  background-color: ${({ theme, bgColor }) =>
    bgColor
      ? bgColor === 'GREEN'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  flex-shrink: 1;
  width: 100%;
`

export const InlineHighlightWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`

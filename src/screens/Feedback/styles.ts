import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  width: 100%;

  padding: 128px 24px 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const FeedbackImage = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
  margin-bottom: 32px;
`

type FeedbackTypeStyleProps = {
  inDiet: boolean
}

export const Title = styled.Text<FeedbackTypeStyleProps>`
  text-align: center;
  margin-bottom: 8px;

  ${({ theme, inDiet }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
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

export const StrongText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`

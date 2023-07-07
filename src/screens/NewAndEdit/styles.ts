import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  padding: 32px 0 0;

  align-items: center;
  width: 100%;
`

export const IconWrapper = styled.View`
  position: absolute;
  top: 56px;
  left: 24px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Form = styled.View`
  flex: 1;
  gap: 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  margin-top: 34px;
  padding: 33px 24px;
`

export const InlineInputWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const FakeInputWrapper = styled.View`
  flex: 1;
  width: 100%;
`

export const FakeInputLabel = styled.Text`
  margin-bottom: 4px;
  align-self: flex-start;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const FakeInput = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  justify-content: center;
  align-items: center;
`

export const FilterWrapper = styled.View`
  width: 100%;
  flex: 1;
`

export const FilterTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 4px;
  align-self: flex-start;
`

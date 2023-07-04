import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
  padding: 56px 24px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  font-size: 32px;
`

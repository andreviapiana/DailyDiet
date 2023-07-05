import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 8px 0 32px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const User = styled.Image`
  width: 40px;
  height: 40px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 9999px;
`

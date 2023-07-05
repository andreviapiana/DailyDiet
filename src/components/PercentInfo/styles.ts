import styled from 'styled-components/native'

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

export const IconWrapper = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`

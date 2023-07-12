import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'

export type StatisticsInfoTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: StatisticsInfoTypeStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 32px 0 0;
  align-items: center;
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

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 8px;
`

export const DetailsWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  margin-top: 34px;
  padding: 33px 24px;

  justify-content: space-between;
  min-width: 100%;
`

export const InDietTag = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 1000px;
  padding: 8px 16px;
  gap: 8px;
  flex-direction: row;

  align-items: center;
  width: 100%;
`

export const ButtonsWrapper = styled.View`
  gap: 8px;
`

export const InfosWrapper = styled.View`
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 14,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``

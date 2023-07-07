import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import {
  Container,
  ExternalContainer,
  Label,
  TextInputTypeStyleProps,
} from './styles'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  label: string
  size?: 'SM' | 'DEFAULT'
  type?: TextInputTypeStyleProps
}

export function Input({
  inputRef,
  label,
  size,
  type = 'DEFAULT',
  ...rest
}: Props) {
  const { COLORS } = useTheme()

  return (
    <ExternalContainer>
      <Label>{label}</Label>
      <Container
        size={size}
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_4}
        {...rest}
        type={type}
      />
    </ExternalContainer>
  )
}

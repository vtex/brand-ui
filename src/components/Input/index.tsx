import React from 'react'
import { Input as ThemeUIInput } from 'theme-ui'
import { useInput } from 'reakit/Input'

const BrandInput = (props: any) => {
  const { ...restProps } = props
  const { children, ...inputProps } = useInput({}, restProps)
  return <ThemeUIInput {...inputProps} />
}

export interface InputProps {}

export default BrandInput

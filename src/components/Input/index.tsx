import React, { PropsWithChildren } from 'react'
import { Input as ThemeUIInput } from 'theme-ui'
import { useInput } from 'reakit/Input'

const pickPadding = (size: Size) => {
  const variants = {
    regular: {
      px: 3,
      py: 2,
    },
    large: {
      px: 3,
      py: 3,
    }
  }

  return variants?.[size] ?? variants.regular
}

const BrandInput = (props: PropsWithChildren<InputProps>) => {
  const { size = 'regular', ...restProps } = props
  const { children, ...inputProps } = useInput({}, restProps)
  return <ThemeUIInput sx={{...pickPadding(size)}} {...inputProps} />
}

export type Type = 'text' | 'password'
export type Size =  'regular' | 'large'

export interface InputProps {
  /** Size of the input
   * @default regular
   * */
  size?: Size
}

export default BrandInput

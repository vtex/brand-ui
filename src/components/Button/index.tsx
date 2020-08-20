import React, { useRef, Ref, PropsWithChildren } from 'react'
import {
  Button as ThemeUIButton,
} from 'theme-ui'
import { useButton } from 'reakit/Button'

import { forwardRef, useForkRef } from '../../utils'

function AdminButton(props: PropsWithChildren<ButtonProps>, forwardedRef: Ref<HTMLButtonElement>) {
  const {
    size = 'regular',
    variation = 'primary',
    children,
    ...restProps
  } = props

  const innerRef = useRef<HTMLButtonElement>(null)
  const htmlProps = useButton({}, restProps)
  const ref = useForkRef(innerRef, forwardedRef)

  return (
    <ThemeUIButton
      {...htmlProps}
      ref={ref}
      sx={{
        // ⚠️ WARNING: To be updated when design changes
        m: 1,
        borderWidth: 1,
        cursor: 'pointer',
        borderStyle: 'solid',
        '&:disabled': {
          color: 'muted.2',
          bg: 'muted.4',
          borderColor: 'muted.4',
        }
      }}
    >
      {children}
    </ThemeUIButton>
  )
}

export type Size = 'small' | 'regular'
export type Variation = 'primary' | 'secundary' | 'tertiary'

export interface ButtonProps {
  /** Size of the button
   * @default regular
   * */
  size?: Size
  /**
   * Action theme
   * @default primary
   */
  variation?: Variation
}

export const Button = forwardRef(AdminButton)

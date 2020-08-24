import React, { Ref } from 'react'
import { SxStyleProp, Flex } from 'theme-ui'
import BaseButton, { A11yProps } from '@vtex-components/button'
import merge from 'deepmerge'

import { forwardRef } from '../../utils'
import { getVariant, getMeasures, getIconProps } from './styled'
import { Size, Variant } from './types'

export interface BaseProps extends Omit<A11yProps, 'as'> {
  /**
   * ThemeUI sx prop
   * @default {}
   */
  sx?: SxStyleProp
}

/**
 * Component that handles all Button variants of the DS.
 * It renders a button jsx element by default
 * @example
 * import { Button, ButtonProps } from 'brand-ui'
 * <Button>Default Button</Button>
 */
const Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const {
    size = 'regular',
    variant = 'primary',
    iconPosition = 'start',
    sx = {},
    icon,
    children,
    ...restProps
  } = props

  const iconStart = !!icon && iconPosition === 'start'
  const iconEnd = !!icon && iconPosition === 'end'
  const iconOnly = !!icon && !children

  const mergedSx = merge<SxStyleProp>(
    {
      borderWidth: 1,
      borderRadius: 3,
      cursor: 'pointer',
      position: 'relative',
      borderStyle: 'solid',
      '&:focus': {
        outline: 'none',
      },
      ...getMeasures(size, iconStart, iconEnd, iconOnly),
      ...getVariant(variant),
    },
    sx
  )

  const renderIcon = () => {
    const iconProps = getIconProps(size)
    return icon?.(iconProps)
  }

  return (
    <BaseButton sx={mergedSx} ref={ref} {...restProps}>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: iconEnd ? 'row-reverse' : 'row',
          margin: 'auto',
          width: '100%',
          height: '100%',
        }}
      >
        {renderIcon()}
        {children}
      </Flex>
    </BaseButton>
  )
}

export interface ButtonProps
  extends Pick<
    BaseProps,
    | 'sx'
    | 'disabled'
    | 'focusable'
    | 'children'
    | 'id'
    | 'type'
    | 'name'
    | 'onClick'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseDown'
    | 'onMouseUp'
    | 'onFocus'
    | 'onMouseOver'
    | 'value'
  > {
  /** Size of the button
   * @default regular
   * */
  size?: Size
  /** Button variant
   * @default filled
   * */
  variant?: Variant
  /**
   * Icon of the button
   */
  icon?: (props: { size: number; sx: SxStyleProp }) => JSX.Element
  /**
   * Position of the icon
   * @default start
   */
  iconPosition?: 'start' | 'end'
}

export default forwardRef(Button)

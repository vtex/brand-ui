import { SxStyleProp } from 'theme-ui'
import { Size, Variant } from './types'

export const getVariant = (variant: Variant): SxStyleProp => {
  const palette = `${variant}.default`
  return {
    textTransform: 'uppercase',
    backgroundColor: `${palette}.enable`,
    borderColor: 'transparent',
    color: `${palette}.contrast`,
    fontWeight: 'medium',
    '&:hover': {
      backgroundColor: `${palette}.hover`,
    },
    '&:active': {
      backgroundColor: `${palette}.active`,
    },
  }
}

export const getMeasures = (
  size: Size = 'regular',
  iconStart: boolean,
  iconEnd: boolean,
  iconOnly: boolean
): SxStyleProp => {
  switch (size) {
    case 'regular':
      return {
        paddingY: 5,
        fontSize: 1,
        height: 40,
        width: iconOnly ? 40 : 'auto',
        paddingLeft: iconOnly ? 3 : iconStart ? 5 : 9,
        paddingRight: iconOnly ? 3 : iconEnd ? 5 : 9,
      }
    case 'small':
      return {
        paddingY: 4,
        fontSize: 0,
        height: 32,
        width: iconOnly ? 32 : 'auto',
        paddingLeft: iconOnly ? 2 : iconStart ? 5 : 7,
        paddingRight: iconOnly ? 2 : iconEnd ? 5 : 7,
      }
  }
}

export function getIconProps(size: Size) {
  const styles = {
    size: {
      regular: 24,
      small: 20,
    },
    margin: 3,
  }
  return {
    size: styles.size[size],
    sx: {
      marginX: styles.margin,
    },
  }
}

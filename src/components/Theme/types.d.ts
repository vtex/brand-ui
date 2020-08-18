import { Theme } from 'theme-ui'

export interface Colors {
  text: string
  background: string
  muted: string[]
  primary: SemanticColor
  secondary: SemanticColor
  success: SemanticColor
  warning: SemanticColor
  danger: SemanticColor
}

export interface SemanticShades {
  enable: string
  hover: string
  focused: string
  active: string
  contrast: string
}

export interface SemanticColor {
  default: SemanticShades
  washed: SemanticShades
}

export interface BrandTheme extends Omit<Theme, 'colors'> {
  colors: Colors
}

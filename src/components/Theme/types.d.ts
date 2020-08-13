import { Theme } from 'theme-ui'

export interface Colors {
  text: string
  background: string
  muted: string[]
  base: string[]
  primary: SemanticShades
  secondary: SemanticShades
  success: SemanticShades
  warning: SemanticShades
  danger: SemanticShades
}

export interface SemanticShades {
  enable: string
  faded: string
}

export interface ThemeWithBrandColors extends Omit<Theme, 'colors'> {
  colors: Colors
}

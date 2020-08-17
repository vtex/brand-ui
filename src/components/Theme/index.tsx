import React, { PropsWithChildren } from 'react'
import { ThemeProvider, useThemeUI } from 'theme-ui'

import theme, { BrandTheme } from './theme'

export default function Theme({ children }: PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

interface BrandUIContext {
  theme: BrandTheme
  colorMode: string
  setColorMode: React.Dispatch<React.SetStateAction<string>>
}

export const useBrandTheme = (useThemeUI as unknown) as () => BrandUIContext

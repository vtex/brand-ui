import React, { FC } from 'react'
import { ThemeProvider, useThemeUI } from 'theme-ui'

import { theme, AdminTheme } from './config'

const Theme: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

interface BrandUIContext {
  theme: AdminTheme
  colorMode: string
  setColorMode: React.Dispatch<React.SetStateAction<string>>
}

const useBrandTheme = (useThemeUI as unknown) as () => BrandUIContext

export default { Theme, useBrandTheme }
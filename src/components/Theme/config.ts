import { ThemeWithBrandColors } from './types'

const makeTheme = <T extends ThemeWithBrandColors>(t: T) => t

export const theme = makeTheme({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#323845',
    background: '#FFFFFF',
    base: ['#F8F7FC', '#FFFFFF'],
    muted: ['#717786', '#A1A8B3', '#CCCED8', '#E7E9EE'],
    primary: {
      enable: '#E42760',
      faded: '#F71963'
    },
    secondary: {
      enable: '#000711',
      faded: "#142032",
    },
    danger: {
      enable: '#E76850',
      faded: '#FDEFEF'
    },
    success: {
      enable: '#80BE80',
      faded: '#E6F2E6'
    },
    warning: {
      enable: '#FFB100',
      faded: '#FFF2D4'
    }
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
})

export type AdminTheme = typeof theme

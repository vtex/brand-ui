import theme from '@theme-ui/preset-base'
import { BrandTheme as Theme } from './types'

export default {
  ...theme,
  colors: {
    text: '#142032',
    background: '#FFFFFF',
    base: ['#F8F7FC', '#FFFFFF'],
    muted: ['#717786', '#A1A8B3', '#CCCED8', '#E7E9EE'],
    primary: {
      enable: '#E42760',
      faded: '#F71963',
    },
    secondary: {
      enable: '#000711',
      faded: '#142032',
    },
    danger: {
      enable: '#E76850',
      faded: '#FDEFEF',
    },
    success: {
      enable: '#80BE80',
      faded: '#E6F2E6',
    },
    warning: {
      enable: '#FFB100',
      faded: '#FFF2D4',
    },
  },
}

export type BrandTheme = Theme

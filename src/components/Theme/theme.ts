import baseTheme from '@theme-ui/preset-base'
import { BrandTheme as Theme } from './types'

export type BrandTheme = Theme

const theme: BrandTheme = {
  ...baseTheme,
  colors: {
    text: '#4A4A4A',
    background: '#C4C4C4',
    muted: ['#717786', '#A1A8B3', '#CCCED8', '#E7E9EE', '#F8F7FC'],
    primary: {
      default: {
        enable: '#F71963',
        hover: '#D91657',
        focused: '#D91657',
        active: '#E5175C',
        contrast: '#FFFFFF',
      },
      washed: {
        enable: '#FFF3F6',
        hover: '#FBE5EA',
        focused: '#FBE5EA',
        active: '#FDEDF1',
        contrast: '#4A4A4A',
      },
    },
    secondary: {
      default: {
        enable: '#142032',
        hover: '#000711',
        focused: '#000711',
        active: '#0C1522',
        contrast: '#FFFFFF',
      },
      washed: {
        enable: '#F5F9FF',
        hover: '#EDF3FC',
        focused: '#EDF3FC',
        active: '#F2F6FD',
        contrast: '#142032',
      },
    },
    danger: {
      default: {
        enable: '#DC5A41',
        hover: '#CE4A30',
        focused: '#CE4A30',
        active: '#D65138',
        contrast: '#FFFFFF',
      },
      washed: {
        enable: '#FDEFEF',
        hover: '#FADCDC',
        focused: '#FADCDC',
        active: '#FBDFDF',
        contrast: '#CE4A30',
      },
    },
    success: {
      default: {
        enable: '#79A479',
        hover: '#719471',
        focused: '#709370',
        active: '#6D9C6D',
        contrast: '#FFFFFF',
      },
      washed: {
        enable: '#EFF6EF',
        hover: '#D6E5D6',
        focused: '#D6E5D6',
        active: '#E5F0E5',
        contrast: '#709370',
      },
    },
    warning: {
      default: {
        enable: '#FFB100',
        hover: '#E6A30A',
        focused: '#E6A30A',
        active: '#EFA906',
        contrast: '#FFFFFF',
      },
      washed: {
        enable: '#FFF2D4',
        hover: '#FCE3AC',
        focused: '#FCE3AC',
        active: '#FEEABE',
        contrast: '#FFB100',
      },
    },
  },
}

export default theme

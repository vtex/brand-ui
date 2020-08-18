import baseTheme from '@theme-ui/preset-base'
import { BrandTheme as Theme } from './types'

export type BrandTheme = Theme

const theme: BrandTheme = {
  ...baseTheme,
  colors: {
    text: '#142032',
    background: '#FFFFFF',
    muted: ['#717786', '#A1A8B3', '#CCCED8', '#E7E9EE', '#F8F7FC'],
    primary: {
      default: {
        enable: '#F71963',
        active: '#F71963', /** ⚠️ missing specs */
        focused: '#F71963', /** ⚠️ missing specs */
        hover: '#E42760',
        contrast: '#FFFFFF',
      },
      washed: {
        enable: '#FFF3F6',
        active: '#FFF3F6', /** ⚠️ missing specs */
        focused: '#FFF3F6', /** ⚠️ missing specs */
        hover: '#FFF3F6', /** ⚠️ missing specs */
        contrast: '#F71963'
      }
    },
    secondary: {
      default: {
        enable: '#142032',
        active: '#142032', /** ⚠️ missing specs */
        focused: '#142032', /** ⚠️ missing specs */
        hover: '#000711',
        contrast: '#FFFFFF'
      },
      washed: {
        enable: '#142032',
        active: '#142032', /** ⚠️ missing specs */
        focused: '#142032', /** ⚠️ missing specs */
        hover: '#000711', /** ⚠️ missing specs */
        contrast: '#FFFFFF' /** ⚠️ missing specs */
      }
    },
    danger: {
      default: {
        enable: '#E76850',
        active: '#E76850', /** ⚠️ missing specs */
        focused: '#E76850', /** ⚠️ missing specs */
        hover: '#E76850', /** ⚠️ missing specs */
        contrast: '#FFFFFF',
      },
      washed: {
        enable: '#FDEFEF',
        active: '#FDEFEF', /** ⚠️ missing specs */
        focused: '#FDEFEF', /** ⚠️ missing specs */
        hover: '#FDEFEF', /** ⚠️ missing specs */
        contrast: '#E76850'
      },
    },
    success: {
      default: {
        enable: '#80BE80',
        active: '#80BE80', /** ⚠️ missing specs */
        focused: '#80BE80', /** ⚠️ missing specs */
        hover: '#80BE80', /** ⚠️ missing specs */
        contrast: "#FFFFFF"
      },
      washed: {
        enable: '#E6F2E6',
        active: '#E6F2E6', /** ⚠️ missing specs */
        focused: '#E6F2E6', /** ⚠️ missing specs */
        hover: '#E6F2E6', /** ⚠️ missing specs */
        contrast: '#80BE80'
      }
    },
    warning: {
      default: {
        enable: '#FFB100',
        active: '#FFB100', /** ⚠️ missing specs */
        focused: '#FFB100', /** ⚠️ missing specs */
        hover: '#FFB100', /** ⚠️ missing specs */
        contrast: '#FFFFFF'
      },
      washed: {
        enable: '#FFF2D4',
        active: '#FFF2D4', /** ⚠️ missing specs */
        focused: '#FFF2D4', /** ⚠️ missing specs */
        hover: '#FFF2D4', /** ⚠️ missing specs */
        contrast: '#FFB100'
      },
    },
  },
}

export default theme


import React from 'react'
import BrandTheme from '../components/Theme'

export default function themeDecorator(storyFn: Function) {
  return <BrandTheme>{storyFn()}</BrandTheme>
}

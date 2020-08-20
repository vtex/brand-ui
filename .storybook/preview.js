import { themeDecorator } from '../src/storybook-utils'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [themeDecorator]

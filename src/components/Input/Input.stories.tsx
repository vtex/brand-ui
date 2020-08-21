import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from './index'

export default {
  title: 'Work in progress/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Input',
}

// import React from 'react'
// import { withA11y } from '@storybook/addon-a11y'

// import BrandTheme from '../Theme'
// import { Input } from './index'

// export default {
//   title: 'Input',
//   decorators: [withA11y],
//   component: Input,
// }

// export function Playground() {
//   return (
//     <Input />
//   )
// }

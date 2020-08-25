import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from './index'

export default {
  title: 'Work in progress/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['regular', 'large'],
      },
    }
  }
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Playground = Template.bind({})
Playground.args = {
  size: 'regular',
}

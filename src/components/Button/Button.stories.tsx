import React from 'react'

import { Button, ButtonProps } from './index'

export default {
  title: 'Work in progress/Button',
  component: Button,
}

const Template = (args: ButtonProps) => <Button {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Admin UI Button',
}
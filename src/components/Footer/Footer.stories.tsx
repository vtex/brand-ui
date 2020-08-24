import React from 'react'
import Footer, { FooterProps } from './index'

export default {
  title: 'Work in progress/Footer',
  component: Footer,
}

const Template = (args: FooterProps) => <Footer {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Brand UI Footer',
}

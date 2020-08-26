import React from 'react'

import FooterLanding, { FooterLandingProps } from './index'

export default {
  title: 'Work in progress/Footer Landing',
  component: FooterLanding,
}

const links = [
  {
    name: 'Platform Overview',
    href: '#',
  },
  {
    name: 'Sitemap',
    href: '#',
  },
  {
    name: 'Help Center',
    href: '#',
  },
  {
    name: 'Privacy Terms',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'DMCA Policy',
    href: '#',
  },
]

const Template = (args: FooterLandingProps) => <FooterLanding {...args} />

export const Playground = Template.bind({})
Playground.args = { links }

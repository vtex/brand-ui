import React from 'react'

import Footer, { FooterProps } from './index'

export default {
  title: 'Work in progress/Footer',
  component: Footer,
}

const links = [
  {
    name: 'Terms and Policies',
    href: '#',
  },
  {
    name: 'Sitemap',
    href: '#',
  },
]

const footerSections = [
  {
    sectionName: 'Product',
    links: [
      {
        name: 'Platform Overview',
        href: '#',
      },
      {
        name: 'Marketplace',
        href: '#',
      },
      {
        name: 'Order Management System',
        href: '#',
      },
      {
        name: 'VTEX tracking',
        href: '#',
      },
      {
        name: 'VTEX Log',
        href: '#',
      },
      {
        name: 'Store Framework',
        href: '#',
      },
      {
        name: 'Indeva by VTEX',
        href: '#',
      },
      {
        name: 'Digital Commerce',
        href: '#',
      },
    ],
  },
  {
    sectionName: 'Partners',
    links: [
      {
        name: 'Become a Partner',
        href: '#',
      },
      {
        name: 'Find a Partner',
        href: '#',
      },
      {
        name: 'Partner AWS',
        href: '#',
      },
    ],
  },
  {
    sectionName: 'Company',
    links: [
      {
        name: 'About',
        href: '#',
      },
      {
        name: 'Press & Media',
        href: '#',
      },
      {
        name: 'Clients',
        href: '#',
      },
      {
        name: 'Careers',
        href: '#',
      },
      {
        name: 'Contact Us',
        href: '#',
      },
    ],
  },
  {
    sectionName: 'Resources',
    links: [
      {
        name: 'Blog',
        href: '#',
      },
      {
        name: 'Developer Center',
        href: '#',
      },
      {
        name: 'Help Center',
        href: '#',
      },
      {
        name: 'App Store',
        href: '#',
      },
    ],
  },
]

const Template = (args: FooterProps) => <Footer {...args} />

export const Playground = Template.bind({})
Playground.args = {
  footerSections,
  links,
}

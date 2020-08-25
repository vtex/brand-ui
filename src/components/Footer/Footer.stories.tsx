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

/*

<Box
        sx={{
          display: 'flex',
        }}
      >
        <Box sx={{ marginRight: '3rem' }}>
          <Text
            as="p"
            sx={{
              color: 'white',
              fontSize: '1.25rem',
              lineHeight: '1.875rem',
              fontStyle: 'normal',
              fontWeight: 'normal',
            }}
          >
            Product
          </Text>
        </Box>
        <Box sx={{ marginRight: '3rem' }}>
          <Text
            as="p"
            sx={{
              color: 'white',
              fontSize: '1.25rem',
              lineHeight: '1.875rem',
              fontStyle: 'normal',
              fontWeight: 'normal',
            }}
          >
            Partners
          </Text>
        </Box>
        <Box sx={{ marginRight: '3rem' }}>
          <Text
            as="p"
            sx={{
              color: 'white',
              fontSize: '1.25rem',
              lineHeight: '1.875rem',
              fontStyle: 'normal',
              fontWeight: 'normal',
            }}
          >
            Company
          </Text>
        </Box>
        <Box sx={{ marginRight: '3rem' }}>
          <Text
            as="p"
            sx={{
              color: 'white',
              fontSize: '1.25rem',
              lineHeight: '1.875rem',
              fontStyle: 'normal',
              fontWeight: 'normal',
            }}
          >
            Resources
          </Text>
        </Box>
      </Box>

*/

const Template = (args: FooterProps) => <Footer {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Brand UI Footer',
  links,
}

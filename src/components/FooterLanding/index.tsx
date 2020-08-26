import React from 'react'
import { Box, Text } from 'theme-ui'

import Footer, { Link } from '../Footer'
import IconVTEX from './IconVTEX'

export interface FooterLandingProps {
  links?: Link[]
}

const FooterLanding = ({ links }: FooterLandingProps) => (
  <Box
    as="footer"
    sx={{
      variant: 'secondary',
      width: '100%',
      bg: 'secondary.default.enable',
      color: 'background',
      paddingLeft: '2rem',
      paddingRight: '1.5em',
    }}
  >
    <Box
      sx={{
        maxWidth: '70rem',
        margin: '0 auto',
        paddingY: '4rem',
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-between',
        alignItems: ['start', 'start', 'center'],
      }}
    >
      <IconVTEX width={80} height={42} />
      <Box
        sx={{
          display: ['grid', 'grid', 'flex'],
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: '1rem',
          width: ['100%', '100%', 'auto'],
          marginTop: ['2rem', '2rem', '0'],
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          lineHeight: '2rem',
        }}
      >
        {links?.map((link, index) => (
          <Text
            key={link.name}
            sx={{
              marginRight: [
                '0',
                '0',
                index !== links.length - 1 ? '2rem' : '0',
              ],
            }}
          >
            <Footer.Link fontSize="0.875rem" href={link.href}>
              {link.name}
            </Footer.Link>
          </Text>
        ))}
      </Box>
    </Box>
  </Box>
)

export default FooterLanding

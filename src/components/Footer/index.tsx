import React, { ReactNode, PropsWithChildren } from 'react'
import { Box } from 'theme-ui';

export interface FooterProps {
  links: ReactNode
}

const Footer = ({ links }: PropsWithChildren<FooterProps>) => (
  <Box
    as="footer"
    sx={{
      variant: 'secondary',
      width: '100%',
      backgroundColor: 'secondary.default.enable',
      color: 'background',
      paddingX: ['1rem', '8.375rem'],
      paddingY: ['4rem', '4rem', '8rem']
    }}
  >
    <Box
      sx={{
        maxWidth: '70rem',
        margin: '0 auto',
      }}
    >
      <img
        src="https://vtex.com/wp-content/themes/VTEXTheme/assets/imgs/base/logo-vtex.svg"
        alt="VTEX - Accelerate Commerce Transformation"
        title="VTEX - Accelerate Commerce Transformation"
      />
      {links}
    </Box>
  </Box>
)


export default Footer

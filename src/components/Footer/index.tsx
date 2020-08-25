import React, { ReactNode, PropsWithChildren } from 'react'
import { Box, Text, Link } from 'theme-ui'

import IconFacebook from './IconFacebook'
import IconInstagram from './IconInstagram'
import IconYouTube from './IconYouTube'

const ICON_SIZE = 20

const socialMediaLinks = [
  {
    to: 'https://www.facebook.com/vtexcommerce',
    icon: <IconFacebook size={ICON_SIZE} />,
  },
  {
    to: 'https://www.instagram.com/vtexcommerce/',
    icon: <IconInstagram size={ICON_SIZE} />,
  },
  {
    to: 'https://www.youtube.com/user/VTEXTV/',
    icon: <IconYouTube size={ICON_SIZE} />,
  },
]

export interface FooterProps {
  links: Array<{ name: string; href: string }>
}

export interface FooterLinkProps {
  href: string
  fontSize?: string
}

export interface FooterSocialMediaProps extends FooterLinkProps {
  icon: ReactNode
}

export const FooterLink = ({
  href,
  fontSize = '1rem',
  children,
}: PropsWithChildren<FooterLinkProps>) => (
  <Link
    sx={{
      fontSize,
      textDecoration: 'none',
      color: '#A1A8B3',
      '&:hover': {
        color: 'primary.default.contrast',
      },
    }}
    href={href}
  >
    {children}
  </Link>
)

const FooterSocialMedia = ({ href, icon }: FooterSocialMediaProps) => (
  <Link
    sx={{
      width: '2.5rem',
      height: '2.5rem',
      marginRight: '1rem',
      bg: '#111C2D',
      padding: '0.6rem',
      borderRadius: '100%',
      border: '1px solid #222C44',
      boxSizing: 'border-box',
      transition: 'all 0.1s ease-in-out',
      '&:hover': {
        bg: '#222C44',
      },
    }}
    href={href}
  >
    <Box
      sx={{
        color: '#CCCED8',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Box>
  </Link>
)

const Footer = ({ links, children }: PropsWithChildren<FooterProps>) => (
  <Box
    as="footer"
    sx={{
      variant: 'secondary',
      width: '100%',
      bg: 'secondary.default.enable',
      color: 'background',
    }}
  >
    <Box
      sx={{
        maxWidth: '70rem',
        margin: '0 auto',
        paddingY: ['4rem', '4rem', '8rem'],
        paddingX: ['1rem', '1.5rem', '1.5rem', '0'],
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
        justifyContent: 'space-between',
        alignItems: 'start',
      }}
    >
      <img
        src="https://vtex.com/wp-content/themes/VTEXTheme/assets/imgs/base/logo-vtex.svg"
        alt="VTEX - Accelerate Commerce Transformation"
        title="VTEX - Accelerate Commerce Transformation"
      />
      {children}
    </Box>
    <Box
      sx={{
        borderTop: '1px solid #222C44',
      }}
    >
      <Box
        sx={{
          maxWidth: '70rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-between',
          paddingY: '3rem',
          paddingX: ['1rem', '1.5rem', '1.5rem', '0'],
        }}
      >
        <Box sx={{ display: 'flex' }}>
          {socialMediaLinks.map((socialMediaLink) => (
            <FooterSocialMedia
              key={socialMediaLink.to}
              href={socialMediaLink.to}
              icon={socialMediaLink.icon}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', marginTop: ['2rem', '2rem', '0'] }}>
          {links?.map((link, index) => (
            <Text
              key={link.href}
              sx={{ marginRight: index !== links.length - 1 ? '2rem' : '0' }}
            >
              <FooterLink fontSize="0.875rem" href={link.href}>
                {link.name}
              </FooterLink>
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
)

Footer.FooterLink = FooterLink

export default Footer

import React, { ReactNode, PropsWithChildren } from 'react'
import { Box, Text, Link, Flex } from 'theme-ui'

import IconFacebook from './icons/IconFacebook'
import IconInstagram from './icons/IconInstagram'
import IconYouTube from './icons/IconYouTube'
import IconLinkedIn from './icons/IconLinkedIn'

const ICON_SIZE = 20

const socialMediaLinks = [
  {
    name: 'Facebook',
    to: 'https://www.facebook.com/vtexcommerce',
    icon: <IconFacebook size={ICON_SIZE} />,
  },
  {
    name: 'Instagram',
    to: 'https://www.instagram.com/vtexcommerce/',
    icon: <IconInstagram size={ICON_SIZE} />,
  },
  {
    name: 'YouTube',
    to: 'https://www.youtube.com/user/VTEXTV/',
    icon: <IconYouTube size={ICON_SIZE} />,
  },
  {
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/company/vtex/',
    icon: <IconLinkedIn size={ICON_SIZE} />,
  },
]

export interface Link {
  name: string
  href: string
}

interface Section {
  sectionName: string
  links: Link[]
}

interface FooterLinkProps {
  href: string
  fontSize?: string
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
      color: 'muted.1',
      '&:hover': {
        color: 'primary.default.contrast',
      },
    }}
    href={href}
  >
    {children}
  </Link>
)

export const FooterSection = ({ section }: { section: Section }) => (
  <Box sx={{ marginRight: ['0', '0', '0', '3rem'] }}>
    <Text
      as="p"
      sx={{
        color: 'white',
        fontSize: '1.25rem',
        lineHeight: '1.875rem',
        fontStyle: 'normal',
        fontWeight: 'normal',
        marginBottom: '1rem',
      }}
    >
      {section.sectionName}
    </Text>
    <Box
      sx={{
        width: '100%',
        display: ['flex', 'flex', 'flex', 'block'],
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {section.links.map((link) => (
        <Box
          key={link.name}
          sx={{
            marginBottom: '1rem',
            marginRight: ['1.875rem', '1.875rem', '1.875rem', '0'],
            maxWidth: '10rem',
          }}
        >
          <Footer.Link href={link.href}>{link.name}</Footer.Link>
        </Box>
      ))}
    </Box>
  </Box>
)

interface FooterSocialMediaProps extends FooterLinkProps {
  icon: ReactNode
  ariaLabel: string
}

const FooterSocialMedia = ({
  href,
  icon,
  ariaLabel,
}: FooterSocialMediaProps) => (
  <Link
    aria-label={ariaLabel}
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
    <Flex
      sx={{
        color: 'muted.2',
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Flex>
  </Link>
)

export interface FooterProps {
  links?: Link[]
  footerSections?: Section[]
}

const Footer = ({ links, footerSections }: FooterProps) => (
  <Box
    as="footer"
    sx={{
      variant: 'secondary',
      width: '100%',
      bg: 'secondary.default.enable',
      color: 'background',
    }}
  >
    <Flex
      sx={{
        maxWidth: '70rem',
        margin: '0 auto',
        paddingTop: ['4rem', '4rem', '8rem'],
        paddingBottom: ['2rem', '4rem'],
        paddingX: ['1rem', '1.5rem', '1.5rem', '0'],
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
      <Flex
        sx={{
          flexDirection: ['column', 'column', 'column', 'row'],
          marginTop: ['2rem', '4rem', '4rem', '0'],
        }}
      >
        {footerSections?.map((section) => (
          <FooterSection key={section.sectionName} section={section} />
        ))}
      </Flex>
    </Flex>
    <Box
      sx={{
        borderTop: '1px solid #222C44',
      }}
    >
      <Flex
        sx={{
          maxWidth: '70rem',
          margin: '0 auto',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-between',
          paddingY: '3rem',
          paddingX: ['1rem', '1.5rem', '1.5rem', '0'],
        }}
      >
        <Flex>
          {socialMediaLinks.map((socialMediaLink) => (
            <FooterSocialMedia
              ariaLabel={socialMediaLink.name}
              key={socialMediaLink.to}
              href={socialMediaLink.to}
              icon={socialMediaLink.icon}
            />
          ))}
        </Flex>
        <Flex sx={{ marginTop: ['2rem', '2rem', '0'] }}>
          {links?.map((link, index) => (
            <Text
              key={link.name}
              sx={{ marginRight: index !== links.length - 1 ? '2rem' : '0' }}
            >
              <FooterLink fontSize="0.875rem" href={link.href}>
                {link.name}
              </FooterLink>
            </Text>
          ))}
        </Flex>
      </Flex>
    </Box>
  </Box>
)

Footer.Link = FooterLink

export default Footer

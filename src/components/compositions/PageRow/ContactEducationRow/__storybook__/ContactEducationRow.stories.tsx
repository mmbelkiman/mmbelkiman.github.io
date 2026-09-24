import { EnvelopeIcon } from '@phosphor-icons/react/dist/csr/Envelope'
import { GithubLogoIcon } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/csr/LinkedinLogo'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactEducationRow } from '@/components/compositions/PageRow/ContactEducationRow'

const meta = {
  title: 'Compositions/Page Row/Contact Education Row',
  component: ContactEducationRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ContactEducationRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    contactLinks: [
      {
        label: 'LinkedIn',
        value: '/demo',
        href: 'https://www.linkedin.com/in/demo',
        icon: <LinkedinLogoIcon weight="fill" />,
      },
      {
        label: 'GitHub',
        value: '/demo',
        href: 'https://github.com/demo',
        icon: <GithubLogoIcon weight="fill" />,
      },
      {
        label: 'Email',
        value: 'marcelo@mail.com',
        href: 'mailto:marcelo@mail.com',
        icon: <EnvelopeIcon weight="bold" />,
      },
    ],
    education: [
      {
        title: 'Specialization in Digital Games Development',
        institution: 'Unyleya',
        period: '2017 – 2018',
        logoSrc: '/images/logos/education/img-unyleya.png',
        logoAlt: 'Unyleya logo',
      },
      {
        title: "Bachelor's Degree in Computer Science",
        institution: 'Wyden, Metrocamp',
        period: '2012 – 2015',
        logoSrc: '/images/logos/education/img-metrocamp.png',
        logoAlt: 'Wyden Metrocamp logo',
      },
    ],
    languages: [
      { flag: '🇧🇷', name: 'Portuguese', proficiency: 'Native' },
      { flag: '🇺🇸', name: 'English', proficiency: 'Professional' },
    ],
  },
}

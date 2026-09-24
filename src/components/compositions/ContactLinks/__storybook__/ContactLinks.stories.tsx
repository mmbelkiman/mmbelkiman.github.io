import { EnvelopeIcon } from '@phosphor-icons/react/dist/csr/Envelope'
import { GithubLogoIcon } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/csr/LinkedinLogo'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactLinks } from '@/components/compositions/ContactLinks'

const meta = {
  title: 'Compositions/Contact Links',
  component: ContactLinks,
  tags: ['autodocs'],
} satisfies Meta<typeof ContactLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    links: [
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
  },
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { IdentityHeader } from '@/components/compositions/IdentityHeader'

const meta = {
  title: 'Compositions/Identity Header',
  component: IdentityHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof IdentityHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    givenName: 'Marcelo',
    familyName: 'Belkiman',
    roles: ['Senior Software Engineer', 'Full-Stack Developer'],
  },
}

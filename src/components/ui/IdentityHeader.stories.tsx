import type { Meta, StoryObj } from '@storybook/react-vite'
import { IdentityHeader } from './IdentityHeader'

const meta = {
  title: 'Composition/IdentityHeader',
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
    roles: ['Software Engineer', 'Mobile Developer', 'Full Stack'],
  },
}

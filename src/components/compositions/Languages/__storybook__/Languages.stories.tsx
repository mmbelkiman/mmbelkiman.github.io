import type { Meta, StoryObj } from '@storybook/react-vite'
import { Languages } from '@/components/compositions/Languages'

const meta = {
  title: 'Compositions/Languages',
  component: Languages,
  tags: ['autodocs'],
} satisfies Meta<typeof Languages>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    languages: [
      { flag: '🇧🇷', name: 'Portuguese', proficiency: 'Native' },
      { flag: '🇺🇸', name: 'English', proficiency: 'Professional' },
    ],
  },
}

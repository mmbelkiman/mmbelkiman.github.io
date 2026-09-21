import type { Meta, StoryObj } from '@storybook/react-vite'
import { AboutMeCard } from '..'

const meta = {
  title: 'Compositions/About Me Card',
  component: AboutMeCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof AboutMeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Portfolio } from '@/pages/Portfolio'

const meta = {
  title: 'Pages/Portfolio',
  component: Portfolio,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Portfolio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

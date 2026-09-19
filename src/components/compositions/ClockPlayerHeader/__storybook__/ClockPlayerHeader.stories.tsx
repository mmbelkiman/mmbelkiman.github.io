import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClockPlayerHeader } from '@/components/compositions/ClockPlayerHeader'

const meta = {
  title: 'Compositions/Clock Player Header',
  component: ClockPlayerHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ClockPlayerHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    locale: 'en-US',
    timeZone: 'America/Sao_Paulo',
  },
}

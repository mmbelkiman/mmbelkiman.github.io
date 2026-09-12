import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClockPlayerHeader } from './ClockPlayerHeader'

const meta = {
  title: 'Modules/ClockPlayerHeader',
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
    locationLabel: 'Campinas, BR',
    timeZone: 'America/Sao_Paulo',
  },
}

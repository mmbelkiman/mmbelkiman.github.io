import type { Meta, StoryObj } from '@storybook/react-vite'
import { PortfolioTopRow } from '@/components/compositions/PortfolioTopRow'

const meta = {
  title: 'Compositions/Portfolio Top Row',
  component: PortfolioTopRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PortfolioTopRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    locationLabel: 'Campinas, BR',
    locale: 'en-US',
    timeZone: 'America/Sao_Paulo',
  },
}

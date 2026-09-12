import type { Meta, StoryObj } from '@storybook/react-vite'
import { PortfolioTopRow } from './PortfolioTopRow'

const meta = {
  title: 'Composition/PortfolioTopRow',
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

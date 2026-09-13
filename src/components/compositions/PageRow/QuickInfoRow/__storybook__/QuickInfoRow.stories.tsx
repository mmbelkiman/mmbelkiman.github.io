import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuickInfoRow } from '@/components/compositions/PageRow/QuickInfoRow'

const meta = {
  title: 'Compositions/Page Row/Quick Info Row',
  component: QuickInfoRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof QuickInfoRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

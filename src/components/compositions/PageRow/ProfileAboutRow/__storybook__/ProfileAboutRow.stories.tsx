import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProfileAboutRow } from '@/components/compositions/PageRow/ProfileAboutRow'

const meta = {
  title: 'Compositions/Page Row/Profile About Row',
  component: ProfileAboutRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ProfileAboutRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

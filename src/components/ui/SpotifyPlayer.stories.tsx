import type { Meta, StoryObj } from '@storybook/react-vite'
import { SpotifyPlayer } from './SpotifyPlayer'

const meta = {
  title: 'Modules/SpotifyPlayer',
  component: SpotifyPlayer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SpotifyPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

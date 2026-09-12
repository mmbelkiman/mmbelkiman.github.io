import type { Meta, StoryObj } from '@storybook/react-vite'
import { CityLandscapeParallax } from './CityLandscapeParallax'

const meta = {
  title: 'Modules/CityLandscapeParallax',
  component: CityLandscapeParallax,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CityLandscapeParallax>

export default meta
type Story = StoryObj<typeof meta>

export const Morning: Story = {
  args: {
    period: 'morning',
  },
}

export const Afternoon: Story = {
  args: {
    period: 'afternoon',
  },
}

export const Night: Story = {
  args: {
    period: 'night',
  },
}

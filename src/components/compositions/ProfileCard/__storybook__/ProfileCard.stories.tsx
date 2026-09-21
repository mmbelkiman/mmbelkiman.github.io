import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProfileCard } from '..'

const meta = {
  title: 'Compositions/Profile Card',
  component: ProfileCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '18rem' }}>
        <Story />
      </div>
    ),
  ],
}

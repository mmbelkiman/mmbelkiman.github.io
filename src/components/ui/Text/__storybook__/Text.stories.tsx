import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '..'

const meta = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Semantic text adapts to the active theme.',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
}

export const Label: Story = {
  args: {
    size: 'label',
  },
}

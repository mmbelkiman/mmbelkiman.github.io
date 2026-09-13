import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from '..'

const meta = {
  title: 'UI/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Technical section heading',
    level: 2,
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const LevelOne: Story = {
  args: {
    level: 1,
  },
}

export const LevelTwo: Story = {}

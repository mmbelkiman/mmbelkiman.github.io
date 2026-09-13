import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectCategory } from '@/components/compositions/ProjectCategory'

const meta = {
  title: 'Compositions/Project Category',
  component: ProjectCategory,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCategory>

export default meta
type Story = StoryObj<typeof meta>

export const Financial: Story = {
  args: { category: 'financial' },
}

export const Banking: Story = {
  args: { category: 'banking' },
}

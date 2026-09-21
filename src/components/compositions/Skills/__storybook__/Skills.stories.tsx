import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skills } from '@/components/compositions/Skills'

const meta = {
  title: 'Compositions/Skills',
  component: Skills,
  tags: ['autodocs'],
} satisfies Meta<typeof Skills>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    groups: [
      {
        title: 'Frontend',
        technologies: ['react', 'react-native', 'typescript'],
      },
      {
        title: 'Backend',
        technologies: ['node-js', 'postgresql'],
      },
      {
        title: 'Tools & others',
        technologies: ['firebase'],
      },
    ],
  },
}

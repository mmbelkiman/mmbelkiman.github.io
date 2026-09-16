import type { Meta, StoryObj } from '@storybook/react-vite'
import { SkillsRow } from '@/components/compositions/PageRow/SkillsLanguagesRow'

const meta = {
  title: 'Compositions/Page Row/Skills Row',
  component: SkillsRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SkillsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    skillGroups: [
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

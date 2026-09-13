import type { Meta, StoryObj } from '@storybook/react-vite'
import { SkillsLanguagesRow } from '@/components/compositions/PageRow/SkillsLanguagesRow'

const meta = {
  title: 'Compositions/Page Row/Skills Languages Row',
  component: SkillsLanguagesRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SkillsLanguagesRow>

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
    languages: [
      { flag: '🇧🇷', name: 'Portuguese', proficiency: 'Native' },
      { flag: '🇺🇸', name: 'English', proficiency: 'Professional' },
    ],
  },
}

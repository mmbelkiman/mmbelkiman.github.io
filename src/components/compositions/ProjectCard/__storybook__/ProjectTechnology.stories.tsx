import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ProjectTechnology,
  PROJECT_TECHNOLOGY_NAMES,
} from '@/components/compositions/ProjectCard'

const meta = {
  title: 'Compositions/Project Technology',
  component: ProjectTechnology,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectTechnology>

export default meta
type Story = StoryObj<typeof meta>

export const AllTechnologies: Story = {
  render: () => (
    <ul className="v1-project-card__technologies">
      {PROJECT_TECHNOLOGY_NAMES.map((tech) => (
        <ProjectTechnology key={tech} tech={tech} />
      ))}
    </ul>
  ),
}

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    tech: 'firebase',
  },
  render: (args) => (
    <ul className="v1-project-card__technologies">
      <ProjectTechnology {...args} />
    </ul>
  ),
}

export const TransparentBackground: Story = {
  args: {
    bg: 'transparent',
    tech: 'typescript',
  },
  render: (args) => (
    <ul className="v1-project-card__technologies">
      <ProjectTechnology {...args} />
    </ul>
  ),
}

export const TransparentWithoutBorder: Story = {
  args: {
    bg: 'transparent',
    border: 'none',
    tech: 'react-native',
  },
  render: (args) => (
    <ul className="v1-project-card__technologies">
      <ProjectTechnology {...args} />
    </ul>
  ),
}

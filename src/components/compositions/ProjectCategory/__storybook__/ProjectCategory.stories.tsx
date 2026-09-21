import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  PROJECT_CATEGORY_NAMES,
  ProjectCategory,
} from '@/components/compositions/ProjectCategory'

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

export const ResearchPlatform: Story = {
  args: { category: 'research-platform' },
}

export const Insurance: Story = {
  args: { category: 'insurance' },
}

export const EdTech: Story = {
  args: { category: 'edtech' },
}

export const ThreatIntelligence: Story = {
  args: { category: 'threat-intelligence' },
}

export const Fintech: Story = {
  args: { category: 'fintech' },
}

export const Loyalty: Story = {
  args: { category: 'loyalty' },
}

export const Media: Story = {
  args: { category: 'media' },
}

export const Logistics: Story = {
  args: { category: 'logistics' },
}

export const Industrial: Story = {
  args: { category: 'industrial' },
}

export const Simulation: Story = {
  args: { category: 'simulation' },
}

export const AllCategories: Story = {
  args: { category: 'financial' },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {PROJECT_CATEGORY_NAMES.map((category) => (
        <ProjectCategory category={category} key={category} />
      ))}
    </div>
  ),
}

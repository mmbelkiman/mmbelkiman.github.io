import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectTypeBadge, PROJECT_TYPE_NAMES } from '@/components/compositions/ProjectTypeBadge'

const meta = {
  title: 'Compositions/Project Type Badge',
  component: ProjectTypeBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectTypeBadge>

export default meta
type Story = StoryObj<typeof meta>

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
      {PROJECT_TYPE_NAMES.map((type) => (
        <ProjectTypeBadge key={type} type={type} />
      ))}
    </div>
  ),
}

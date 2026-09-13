import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FeaturedProjectTechnology,
  FEATURED_PROJECT_TECHNOLOGY_NAMES,
} from '@/components/compositions/FeaturedProjectCard'

const meta = {
  title: 'Compositions/Featured Project Technology',
  component: FeaturedProjectTechnology,
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturedProjectTechnology>

export default meta
type Story = StoryObj<typeof meta>

export const AllTechnologies: Story = {
  render: () => (
    <ul className="v1-featured-project-card__technologies">
      {FEATURED_PROJECT_TECHNOLOGY_NAMES.map((tech) => (
        <FeaturedProjectTechnology key={tech} tech={tech} />
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
    <ul className="v1-featured-project-card__technologies">
      <FeaturedProjectTechnology {...args} />
    </ul>
  ),
}

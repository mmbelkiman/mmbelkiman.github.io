import type { Meta, StoryObj } from '@storybook/react-vite'
import { TechnologyTag, TECHNOLOGY_NAMES } from '@/components/compositions/TechnologyTag'

const meta = {
  title: 'Compositions/Technology Tag',
  component: TechnologyTag,
  tags: ['autodocs'],
} satisfies Meta<typeof TechnologyTag>

export default meta
type Story = StoryObj<typeof meta>

export const AllTechnologies: Story = {
  args: {
    technology: 'react',
  },
  render: () => (
    <ul className="technology-tags">
      {TECHNOLOGY_NAMES.map((technology) => (
        <TechnologyTag key={technology} technology={technology} />
      ))}
    </ul>
  ),
}

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    technology: 'firebase',
  },
  render: (args) => (
    <ul className="technology-tags">
      <TechnologyTag {...args} />
    </ul>
  ),
}

export const TransparentBackground: Story = {
  args: {
    bg: 'transparent',
    technology: 'typescript',
  },
  render: (args) => (
    <ul className="technology-tags">
      <TechnologyTag {...args} />
    </ul>
  ),
}

export const TransparentWithoutBorder: Story = {
  args: {
    bg: 'transparent',
    border: 'none',
    technology: 'react-native',
  },
  render: (args) => (
    <ul className="technology-tags">
      <TechnologyTag {...args} />
    </ul>
  ),
}

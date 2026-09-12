import type { Meta, StoryObj } from '@storybook/react-vite'
import { PanelFrame } from './PanelFrame'

const meta = {
  title: 'Primitives/PanelFrame',
  component: PanelFrame,
  tags: ['autodocs'],
} satisfies Meta<typeof PanelFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <p style={{ margin: 0, padding: 'var(--space-4)' }}>Independent panel content.</p>,
  },
}

export const Dark: Story = {
  args: {
    children: <p style={{ margin: 0, padding: 'var(--space-4)' }}>High-emphasis panel content.</p>,
    tone: 'dark',
  },
}

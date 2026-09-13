import type { Meta, StoryObj } from '@storybook/react-vite'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { Text } from '@/components/ui/Text'

const content = <Text>Independent panel content.</Text>

const meta = {
  title: 'UI/Panel Frame',
  component: PanelFrame,
  tags: ['autodocs'],
} satisfies Meta<typeof PanelFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div style={{ padding: 'var(--space-4)' }}>{content}</div>,
  },
}

export const Dark: Story = {
  args: {
    children: (
      <div style={{ padding: 'var(--space-4)' }}>
        <Text>High-emphasis panel content.</Text>
      </div>
    ),
    tone: 'dark',
  },
}

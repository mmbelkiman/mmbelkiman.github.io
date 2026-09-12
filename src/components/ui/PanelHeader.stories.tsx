import type { Meta, StoryObj } from '@storybook/react-vite'
import { PanelFrame } from './PanelFrame'
import { PanelHeader } from './PanelHeader'

const meta = {
  title: 'Primitives/PanelHeader',
  component: PanelHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof PanelHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <PanelFrame header={<PanelHeader {...args} />}>
      <p style={{ margin: 0, padding: 'var(--space-4)' }}>Panel content.</p>
    </PanelFrame>
  ),
  args: {
    label: 'System module',
    endContent: 'Status / Online',
  },
}

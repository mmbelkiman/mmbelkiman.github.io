import type { Meta, StoryObj } from '@storybook/react-vite'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'

const meta = {
  title: 'UI/Panel Header',
  component: PanelHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof PanelHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <PanelFrame header={<PanelHeader {...args} />}>
      <div style={{ padding: 'var(--space-4)' }}>
        <Text>Panel content.</Text>
      </div>
    </PanelFrame>
  ),
  args: {
    label: 'System module',
    endContent: 'Status / Online',
  },
}

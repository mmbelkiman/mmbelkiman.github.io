import type { Meta, StoryObj } from '@storybook/react-vite'
import { Grid } from '@/components/layout/Grid'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Split40_60: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Grid rowHeight="7rem">
      <Grid.Column weight={4}>
        <div style={{ padding: 'var(--space-4)', background: 'var(--color-surface-raised)' }}>
          40%
        </div>
      </Grid.Column>
      <Grid.Column weight={6}>
        <div style={{ padding: 'var(--space-4)', background: 'var(--color-surface-muted)' }}>
          60%
        </div>
      </Grid.Column>
    </Grid>
  ),
}

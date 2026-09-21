import type { Meta, StoryObj } from '@storybook/react-vite'
import { LocalClock } from '@/components/widgets/LocalClock'

const meta = {
  title: 'Widgets/Local Clock',
  component: LocalClock,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '18rem',
          minHeight: '9.5rem',
          background: 'var(--color-surface-strong)',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LocalClock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    locale: 'en-US',
    now: new Date('2025-08-30T13:24:00-03:00'),
    timeZone: 'America/Sao_Paulo',
  },
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { PortfolioVideoPlayer } from '@/components/widgets/PortfolioVideoPlayer'

const meta = {
  title: 'Widgets/Portfolio Video Player',
  component: PortfolioVideoPlayer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'min(32rem, 90vw)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PortfolioVideoPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const VideoPreview: Story = {
  args: {
    imageAlt: 'Tiny Tic Tac Toe preview',
    imageSrc: '/images/portfolio-previews/tictac.jpg',
    title: 'Tiny Tic Tac Toe',
    videoSrc: '/videos/tictac.webm',
  },
}

export const StaticImage: Story = {
  args: {
    imageAlt: 'Pipoclube preview',
    imageSrc: '/images/portfolio-previews/pipoclube.jpg',
    title: 'Pipoclube',
  },
}

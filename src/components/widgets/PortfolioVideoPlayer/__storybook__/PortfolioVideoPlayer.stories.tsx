import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { PortfolioVideoPlayer } from '@/components/widgets/PortfolioVideoPlayer'

function restoreProperty(target: object, key: PropertyKey, descriptor?: PropertyDescriptor) {
  if (descriptor) {
    Object.defineProperty(target, key, descriptor)
    return
  }

  Reflect.deleteProperty(target, key)
}

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
  beforeEach: () => {
    let fullscreenElement: Element | null = null
    let isVideoPaused = false
    const fullscreenElementDescriptor = Object.getOwnPropertyDescriptor(document, 'fullscreenElement')
    const exitFullscreenDescriptor = Object.getOwnPropertyDescriptor(document, 'exitFullscreen')
    const requestFullscreenDescriptor = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'requestFullscreen',
    )
    const pausedDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'paused')
    const playDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'play')
    const pauseDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'pause')

    Object.defineProperty(document, 'fullscreenElement', {
      configurable: true,
      get: () => fullscreenElement,
    })
    Object.defineProperty(document, 'exitFullscreen', {
      configurable: true,
      value: async () => {
        fullscreenElement = null
        document.dispatchEvent(new Event('fullscreenchange'))
      },
    })
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', {
      configurable: true,
      value: async () => {
        fullscreenElement = document.querySelector('.portfolio-video-player')
        document.dispatchEvent(new Event('fullscreenchange'))
      },
    })
    Object.defineProperty(HTMLMediaElement.prototype, 'paused', {
      configurable: true,
      get: () => isVideoPaused,
    })
    Object.defineProperty(HTMLMediaElement.prototype, 'play', {
      configurable: true,
      value: async function play() {
        isVideoPaused = false
        this.dispatchEvent(new Event('play'))
      },
    })
    Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
      configurable: true,
      value: function pause() {
        isVideoPaused = true
        this.dispatchEvent(new Event('pause'))
      },
    })

    return () => {
      restoreProperty(document, 'fullscreenElement', fullscreenElementDescriptor)
      restoreProperty(document, 'exitFullscreen', exitFullscreenDescriptor)
      restoreProperty(HTMLElement.prototype, 'requestFullscreen', requestFullscreenDescriptor)
      restoreProperty(HTMLMediaElement.prototype, 'paused', pausedDescriptor)
      restoreProperty(HTMLMediaElement.prototype, 'play', playDescriptor)
      restoreProperty(HTMLMediaElement.prototype, 'pause', pauseDescriptor)
    }
  },
} satisfies Meta<typeof PortfolioVideoPlayer>

export default meta
type Story = StoryObj<typeof meta>

const fullscreenLabels = {
  enter: /enter fullscreen|entrar em tela cheia/i,
  exit: /exit fullscreen|sair da tela cheia/i,
}
const playPreviewLabel = /play .* preview|reproduzir prévia/i
const resumePreviewLabel = /resume .* preview|retomar prévia/i

export const VideoPreview: Story = {
  args: {
    imageAlt: 'Tiny Tic Tac Toe preview',
    imageSrc: '/images/portfolio-previews/tictac.jpg',
    title: 'Tiny Tic Tac Toe',
    videoSrc: '/videos/tictac.webm',
  },
}

export const InteractionFlow: Story = {
  name: 'Interaction flow: play, pause and fullscreen',
  args: VideoPreview.args,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: playPreviewLabel }))

    const video = await canvas.findByLabelText('Tiny Tic Tac Toe preview')
    await expect(video).toBeInTheDocument()

    await userEvent.click(await canvas.findByRole('button', { name: fullscreenLabels.enter }))
    await expect(await canvas.findByRole('button', { name: fullscreenLabels.exit })).toBeVisible()

    await userEvent.click(await canvas.findByRole('button', { name: fullscreenLabels.exit }))
    await expect(await canvas.findByRole('button', { name: fullscreenLabels.enter })).toBeVisible()

    await userEvent.click(video)
    await expect(await canvas.findByRole('button', { name: resumePreviewLabel })).toBeVisible()
    await expect(canvas.queryByRole('button', { name: /fullscreen|tela cheia/i })).not.toBeInTheDocument()

    await userEvent.click(await canvas.findByRole('button', { name: resumePreviewLabel }))
    await expect(await canvas.findByRole('button', { name: fullscreenLabels.enter })).toBeVisible()
  },
}

export const StaticImage: Story = {
  args: {
    imageAlt: 'Pipoclube preview',
    imageSrc: '/images/portfolio-previews/pipoclube.jpg',
    title: 'Pipoclube',
  },
}

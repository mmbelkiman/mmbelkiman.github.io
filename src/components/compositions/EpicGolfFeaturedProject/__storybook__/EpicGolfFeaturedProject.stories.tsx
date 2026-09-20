import type { Meta, StoryObj } from '@storybook/react-vite'
import { EpicGolfFeaturedProject } from '@/components/compositions/EpicGolfFeaturedProject'

const meta = {
  title: 'Compositions/Epic Golf Featured Project',
  component: EpicGolfFeaturedProject,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof EpicGolfFeaturedProject>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description:
      "Mobile golf game focused on simple physics-based mechanics. I developed all of the game's code and contributed to game-design decisions.\n\nThe project was a finalist at BIG Festival 2018. After the festival, it received support from publisher ZPlay.",
    externalLinks: [
      {
        label: 'Android',
        text: 'play.google.com',
        url: 'https://play.google.com/store/apps/details?id=br.com.estudiovacaroxa.eg2d',
      },
    ],
    imageAlt: 'Epic Golf 2D preview',
    imageSrc: '/images/portfolio-previews/epicgolf2d.jpg',
    logoSrc: '/images/logos/epic-golf-2d.png',
    projectType: 'game',
    supplementaryImage: {
      alt: 'Epic Golf 2D, finalist at BIG Festival 2018',
      caption: 'Finalista Big Festival\nBig Starter 2018',
      src: '/images/portfolio-awards/epic-golf-2d/big-festival-finalist.png',
    },
    technologies: ['monogame', 'csharp'],
    title: 'Epic Golf 2D',
    videoSrc: '/videos/epicgolf2d.webm',
    year: 'Year: 2018',
  },
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { PipoclubeFeaturedProject } from '@/components/compositions/PipoclubeFeaturedProject'

const meta = {
  title: 'Compositions/Pipoclube Featured Project',
  component: PipoclubeFeaturedProject,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PipoclubeFeaturedProject>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description:
      'Social network for discovering, cataloging, and reviewing movies, with collections, ratings, and user-generated content.\n\nLed end-to-end development of the PHP backend and React Native mobile and web apps, while guiding product direction from concept through delivery.',
    externalLinks: [{ label: 'Website', url: 'https://www.pipoclube.com/' }],
    imageAlt: 'Pipoclube preview',
    imageSrc: '/images/portfolio-previews/pipoclube.jpg',
    logoSrc: '/images/logos/pipoclube.png',
    projectType: 'social',
    technologies: ['typescript', 'react-native', 'php'],
    title: 'Pipoclube',
    videoSrc: '/videos/pipoclube.webm',
    year: 'Year: 2022',
  },
}

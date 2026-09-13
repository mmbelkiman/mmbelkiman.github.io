import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { FilmSlateIcon } from '@phosphor-icons/react/dist/csr/FilmSlate'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeaturedProjectsRow } from '@/components/compositions/PageRow/FeaturedProjectsRow'

const meta = {
  title: 'Compositions/Page Row/Featured Projects Row',
  component: FeaturedProjectsRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FeaturedProjectsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    projects: [
      {
        title: 'Project one',
        subtitle: 'A mobile experience',
        description:
          'A concise overview of the product, its audience and the challenge it addresses.',
        technologies: ['react-native', 'typescript', 'firebase'],
        imageSrc: '/images/portfolio-previews/pipoclube.jpg',
        imageAlt: 'Project one preview',
        icon: <FilmSlateIcon size={28} weight="fill" />,
        externalLinks: [{ label: 'Website', url: 'https://example.com' }],
      },
      {
        title: 'Project two',
        subtitle: 'A developer platform',
        description:
          'A concise overview of the product, its audience and the challenge it addresses.',
        technologies: ['react', 'node-js', 'postgresql'],
        technologyIconVisibility: { 'node-js': false },
        imageSrc: '/images/portfolio-previews/aulapp.jpg',
        imageAlt: 'Project two preview',
        icon: <CodeIcon size={28} weight="fill" />,
        externalLinks: [
          { label: 'Website', url: 'https://example.com' },
          { label: 'Play Store', url: 'https://play.google.com' },
        ],
      },
      {
        title: 'Project three',
        subtitle: 'An interactive product',
        description:
          'A concise overview of the product, its audience and the challenge it addresses.',
        technologies: ['typescript', 'react', 'node-js'],
        imageSrc: '/images/portfolio-previews/epicgolf2d.jpg',
        imageAlt: 'Project three preview',
        icon: <GameControllerIcon size={28} weight="fill" />,
        externalLinks: [{ label: 'Website', url: 'https://example.com' }],
      },
    ],
  },
}

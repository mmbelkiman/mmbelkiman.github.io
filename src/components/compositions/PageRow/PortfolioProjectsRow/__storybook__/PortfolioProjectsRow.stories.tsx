import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { RocketLaunchIcon } from '@phosphor-icons/react/dist/csr/RocketLaunch'
import { WalletIcon } from '@phosphor-icons/react/dist/csr/Wallet'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PortfolioProjectsRow } from '@/components/compositions/PageRow/PortfolioProjectsRow'

const meta = {
  title: 'Compositions/Page Row/Portfolio Projects Row',
  component: PortfolioProjectsRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PortfolioProjectsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    projects: [
      {
        id: 'orbit-defender',
        title: 'Orbit Defender',
        subtitle: 'A compact arcade prototype.',
        description:
          'A small arcade project created to explore fast game loops, score systems and responsive keyboard controls.',
        featured: true,
        year: '2024',
        projectType: 'game',
        icon: <GameControllerIcon weight="fill" />,
        imageSrc: '/images/portfolio-previews/epicgolf2d.jpg',
        imageAlt: 'Orbit Defender game preview',
        technologies: ['typescript', 'react'],
        externalLinks: [{ label: 'Play online', url: 'https://example.com/orbit-defender' }],
      },
      {
        id: 'reading-shelf',
        title: 'Reading Shelf',
        subtitle: 'Book discovery and recommendations.',
        description:
          'A mobile-focused experiment for browsing books, saving favorites and organizing recommendations.',
        year: '2023',
        projectType: 'mobile',
        icon: <RocketLaunchIcon weight="fill" />,
        imageSrc: '/images/portfolio-previews/livroh.jpg',
        imageAlt: 'Reading Shelf mobile app preview',
        technologies: ['react-native', 'firebase'],
      },
      {
        id: 'personal-ledger',
        title: 'Personal Ledger',
        subtitle: 'A personal finance web application.',
        description:
          'A web application prototype focused on making everyday financial information easier to organize and review.',
        featured: true,
        year: '2022',
        projectType: 'web',
        icon: <WalletIcon weight="fill" />,
        imageSrc: '/images/portfolio-previews/bancah.jpg',
        imageAlt: 'Personal Ledger web application preview',
        technologies: ['react', 'node-js', 'postgresql'],
        externalLinks: [{ label: 'Repository', url: 'https://github.com/mmbelkiman' }],
      },
    ],
  },
}

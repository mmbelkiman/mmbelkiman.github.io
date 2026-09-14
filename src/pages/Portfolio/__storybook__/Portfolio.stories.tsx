import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { FilmSlateIcon } from '@phosphor-icons/react/dist/csr/FilmSlate'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { RocketLaunchIcon } from '@phosphor-icons/react/dist/csr/RocketLaunch'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Portfolio } from '@/pages/Portfolio'

const meta = {
  title: 'Pages/Portfolio',
  component: Portfolio,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Portfolio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    topRow: {
      locale: 'en-US',
      locationLabel: 'Campinas, BR',
      timeZone: 'America/Sao_Paulo',
    },
    featuredProjects: [
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
        imageSrc: '/images/portfolio-previews/aulapp.jpg',
        imageAlt: 'Project two preview',
        icon: <CodeIcon size={28} weight="fill" />,
        externalLinks: [{ label: 'Website', url: 'https://example.com' }],
      },
    ],
    professionalExperience: [
      {
        id: 'sample-company',
        company: 'Sample company',
        role: 'Software engineer',
        period: { start: { month: 'Jan', year: 2022 } },
        location: 'Campinas, SP',
        companyType: 'Product company',
        description: 'A placeholder description for a professional experience.',
        engagements: [
          {
            id: 'sample-product',
            type: 'product',
            name: 'Sample product',
            period: '2022 – Present',
            description: 'A placeholder product engagement with a representative scope.',
            responsibilities: [
              'Build product features with multidisciplinary teams',
              'Improve application quality and performance',
            ],
            technologies: ['react', 'typescript', 'node-js'],
            technologyBackground: 'transparent',
          },
        ],
      },
    ],
    skillsAndLanguages: {
      skillGroups: [
        { title: 'Frontend', technologies: ['react', 'react-native', 'typescript'] },
        { title: 'Backend', technologies: ['node-js', 'postgresql'] },
        { title: 'Tools & others', technologies: ['firebase'] },
      ],
      languages: [
        { flag: '🇧🇷', name: 'Portuguese', proficiency: 'Native' },
        { flag: '🇺🇸', name: 'English', proficiency: 'Professional' },
      ],
    },
    archivedProjects: [
      {
        id: 'orbit-defender',
        title: 'Orbit Defender',
        subtitle: 'A compact arcade prototype.',
        description:
          'A small arcade project created to explore fast game loops and responsive controls.',
        year: '2024',
        role: 'Game developer',
        kind: 'game',
        icon: <GameControllerIcon weight="fill" />,
        imageSrc: '/images/portfolio-previews/epicgolf2d.jpg',
        imageAlt: 'Orbit Defender game preview',
        technologies: ['typescript', 'react'],
        links: [{ label: 'Play online', url: 'https://example.com/orbit-defender' }],
      },
      {
        id: 'reading-shelf',
        title: 'Reading Shelf',
        subtitle: 'Book discovery and recommendations.',
        description:
          'A mobile-focused experiment for browsing books and organizing recommendations.',
        year: '2023',
        role: 'Mobile developer',
        kind: 'mobile',
        icon: <RocketLaunchIcon weight="fill" />,
        imageSrc: '/images/portfolio-previews/livroh.jpg',
        imageAlt: 'Reading Shelf mobile app preview',
        technologies: ['react-native', 'firebase'],
      },
    ],
  },
}

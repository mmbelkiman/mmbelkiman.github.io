import { EnvelopeIcon } from '@phosphor-icons/react/dist/csr/Envelope'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { GithubLogoIcon } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/csr/LinkedinLogo'
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
    contactAndEducation: {
      contactLinks: [
        {
          label: 'LinkedIn',
          value: '/mmbelkiman',
          href: 'https://www.linkedin.com/in/mmbelkiman',
          icon: <LinkedinLogoIcon weight="fill" />,
        },
        {
          label: 'GitHub',
          value: '/mmbelkiman',
          href: 'https://github.com/mmbelkiman',
          icon: <GithubLogoIcon weight="fill" />,
        },
        {
          label: 'Email',
          value: 'marcelo@mmbelkiman.com',
          href: 'mailto:marcelo@mmbelkiman.com',
          icon: <EnvelopeIcon weight="bold" />,
        },
      ],
      education: [
        {
          title: 'Specialization in Digital Games Development',
          institution: 'Unyleya',
          period: '2017 – 2018',
          logoSrc: '/img-unyleya.png',
          logoAlt: 'Unyleya logo',
        },
        {
          title: "Bachelor's Degree in Computer Science",
          institution: 'Wyden, Metrocamp',
          period: '2012 – 2015',
          logoSrc: '/img-metrocamp.png',
          logoAlt: 'Wyden Metrocamp logo',
        },
      ],
    },
    projects: [
      {
        id: 'orbit-defender',
        title: 'Orbit Defender',
        subtitle: 'A compact arcade prototype.',
        description:
          'A small arcade project created to explore fast game loops and responsive controls.',
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
          'A mobile-focused experiment for browsing books and organizing recommendations.',
        year: '2023',
        projectType: 'mobile',
        icon: <RocketLaunchIcon weight="fill" />,
        imageSrc: '/images/portfolio-previews/livroh.jpg',
        imageAlt: 'Reading Shelf mobile app preview',
        technologies: ['react-native', 'firebase'],
      },
    ],
  },
}

import { FilmSlateIcon } from '@phosphor-icons/react/dist/csr/FilmSlate'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectCard } from '@/components/compositions/ProjectCard'

const meta = {
  title: 'Compositions/Project Card',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '25rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Project name',
    subtitle: 'A concise project subtitle',
    description:
      'A short project description that explains its purpose and the main problem it solves.',
    technologies: ['react', 'typescript', 'firebase'],
    technologyIconVisibility: { firebase: false },
    imageSrc: '/images/portfolio-previews/pipoclube.jpg',
    imageAlt: 'Project preview',
    videoSrc: '/videos/tictac.webm',
    icon: <FilmSlateIcon size="var(--icon-size-big)" weight="fill" />,
    externalLinks: [{ label: 'Website', url: 'https://example.com' }],
  },
}

export const WithProjectLogo: Story = {
  args: {
    ...Default.args,
    logoSrc: '/images/logos/pathcrypto.jpg',
  },
}

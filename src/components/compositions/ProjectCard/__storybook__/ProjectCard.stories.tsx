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
    description:
      'A short project description that explains its purpose and the main problem it solves.',
    technologies: ['react', 'typescript', 'firebase'],
    technologyIconVisibility: { firebase: false },
    imageSrc: '/images/portfolio-previews/pipoclube.jpg',
    imageAlt: 'Project preview',
    videoSrc: '/videos/tictac.webm',
    icon: <FilmSlateIcon size="var(--icon-size-big)" weight="fill" />,
    externalLinks: [{ label: 'Website', text: 'example.com', url: 'https://example.com' }],
  },
}

export const WithProjectLogo: Story = {
  args: {
    ...Default.args,
    logoSrc: '/images/logos/pathcrypto.jpg',
  },
}

export const WithRecognition: Story = {
  args: {
    ...Default.args,
    supplementaryImage: {
      alt: 'Epic Golf 2D, finalist at BIG Festival 2018',
      src: '/images/portfolio-awards/epic-golf-2d/big-festival-finalist.png',
    },
  },
}

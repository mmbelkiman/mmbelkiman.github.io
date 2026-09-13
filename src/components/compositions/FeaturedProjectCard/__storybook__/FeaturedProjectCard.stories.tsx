import { FilmSlateIcon } from '@phosphor-icons/react/dist/csr/FilmSlate'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeaturedProjectCard } from '@/components/compositions/FeaturedProjectCard'

const meta = {
  title: 'Compositions/Featured Project Card',
  component: FeaturedProjectCard,
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
} satisfies Meta<typeof FeaturedProjectCard>

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
    icon: <FilmSlateIcon size={28} weight="fill" />,
    externalLinks: [{ label: 'Website', url: 'https://example.com' }],
  },
}

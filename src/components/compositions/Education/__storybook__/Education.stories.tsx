import type { Meta, StoryObj } from '@storybook/react-vite'
import { Education } from '@/components/compositions/Education'

const meta = {
  title: 'Compositions/Education',
  component: Education,
  tags: ['autodocs'],
} satisfies Meta<typeof Education>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Specialization in Digital Games Development',
        institution: 'Unyleya',
        period: '2017 – 2018',
        logoSrc: '/images/logos/education/img-unyleya.png',
        logoAlt: 'Unyleya logo',
      },
      {
        title: "Bachelor's Degree in Computer Science",
        institution: 'Wyden, Metrocamp',
        period: '2012 – 2015',
        logoSrc: '/images/logos/education/img-metrocamp.png',
        logoAlt: 'Wyden Metrocamp logo',
      },
      {
        title: 'Technician in Systems Development',
        institution: 'ETEC',
        period: '2006 – 2007',
        logoSrc: '/images/logos/education/img-centropaulasouza.png',
        logoAlt: 'Centro Paula Souza logo',
      },
    ],
  },
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProfessionalExperienceRow } from '@/components/compositions/PageRow/ProfessionalExperienceRow'

const meta = {
  title: 'Compositions/Page Row/Professional Experience Row',
  component: ProfessionalExperienceRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ProfessionalExperienceRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    initialSelectedExperienceId: 'ci-and-t',
    experiences: [
      {
        id: 'trio',
        company: 'Northstar',
        role: 'Senior Full-Stack Developer',
        period: { start: { month: 'Aug', year: 2023 } },
        location: 'Remote',
        companyType: 'Product studio',
        description:
          'A placeholder description of the company, collaboration model and the technical challenges addressed in this experience.',
      },
      {
        id: 'aura-labs',
        company: 'Aura Labs',
        role: 'React Native Consultant',
        period: { start: { month: 'Jan', year: 2021 }, end: { month: 'Dec', year: 2024 } },
        description: 'A placeholder description for a consulting experience.',
      },
      {
        id: 'blue-orbit',
        company: 'Blue Orbit',
        role: 'Senior Full-Stack Developer',
        period: { start: { month: 'Apr', year: 2023 }, end: { month: 'Oct', year: 2023 } },
        description: 'A placeholder description for a short-term product engagement.',
      },
      {
        id: 'ci-and-t',
        company: 'CI&T',
        role: 'Junior Android & JavaScript Developer',
        period: { start: { month: 'Aug', year: 2015 }, end: { month: 'Nov', year: 2017 } },
        location: 'São Paulo, SP',
        companyType: 'Global outsourcing company',
        description:
          'Worked within a multidisciplinary team to deliver mobile and web applications for large clients, with a focus on maintainable solutions and clear user experiences.',
        engagements: [
          {
            id: 'client-atlas-bank',
            type: 'client',
            name: 'Atlas Bank',
            period: '2015 – 2016',
            category: 'financial',
            description:
              'Development of a mobile application that helped customers manage account information and daily banking tasks.',
            responsibilities: [
              'Develop native Android application features',
              'Implement new flows with product and design teams',
              'Collaborate with backend engineers on API integrations',
              'Maintain performance and application stability',
            ],
            technologies: ['typescript', 'firebase', 'react-native'],
            technologyBackground: 'transparent',
          },
          {
            id: 'client-summit-finance',
            type: 'client',
            name: 'Summit Finance',
            period: '2016 – 2017',
            category: 'banking',
            description:
              'Creation of a cross-platform banking experience designed for a growing customer base and multiple product areas.',
            responsibilities: [
              'Build reusable interface components',
              'Integrate banking services and APIs',
              'Improve existing features and fix production defects',
              'Partner with distributed teams across time zones',
            ],
            technologies: ['react', 'node-js', 'postgresql'],
            technologyBackground: 'transparent',
          },
          {
            id: 'product-mobile-foundation',
            type: 'product',
            name: 'Mobile Foundation',
            period: '2017',
            description:
              'An internal product initiative focused on documenting mobile development practices and accelerating new project setup.',
            responsibilities: [
              'Document onboarding practices for mobile teams',
              'Create example implementations for common flows',
              'Gather feedback from developers and product managers',
              'Maintain a shared technical reference',
            ],
            technologies: ['react-native', 'typescript', 'firebase'],
            technologyBackground: 'transparent',
          },
        ],
      },
      {
        id: 'onebrain',
        company: 'Onebrain',
        role: 'React Native Developer',
        period: { start: { month: 'Feb', year: 2020 }, end: { month: 'Sep', year: 2021 } },
        description: 'A placeholder description for a mobile product experience.',
      },
      {
        id: 'ies2',
        company: 'IES2',
        role: 'Full-Stack Developer',
        period: { start: { month: 'Jun', year: 2015 }, end: { month: 'Jul', year: 2017 } },
        description: 'A placeholder description for a full-stack role.',
      },
      {
        id: 'ithink',
        company: 'iThink Solutions',
        role: 'Junior Developer',
        period: { start: { month: 'Mar', year: 2012 }, end: { month: 'May', year: 2015 } },
        description: 'A placeholder description for an early-career role.',
      },
      {
        id: 'early-career',
        company: 'Early Career',
        role: 'Technical and Academic Experience',
        period: { start: { month: 'Jan', year: 2007 }, end: { month: 'Dec', year: 2011 } },
        description: 'A placeholder description for academic and technical foundations.',
      },
    ],
  },
}

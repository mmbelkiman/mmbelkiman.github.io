import type { TechnologyName } from '@/components/compositions/TechnologyTag'
import type { ProjectCategoryName } from '@/components/compositions/ProjectCategory'

type ProfessionalEngagement = {
  category?: ProjectCategoryName
  descriptionKey: string
  id: string
  logoUrl?: string
  nameKey: string
  periodKey?: string
  roleKey?: string
  responsibilitiesKey: string
  technologies: readonly TechnologyName[]
  typeKey: string
}

type ProfessionalExperience = {
  companyTypeKey?: string
  engagements?: readonly ProfessionalEngagement[]
  logoUrl: string
  location?: string
  titleKey: string
  workModeKey?: string
  periodKey: string
  roleKey: string
  descriptionsKey?: string
}

export const professionalExperiences: ProfessionalExperience[] = [
  {
    companyTypeKey: 'professionalExperience.companyTypes.usOutsourcing',
    engagements: [
      {
        descriptionKey: 'professionalExperience.trio.current.engagement.studylog.description',
        id: 'studylog',
        nameKey: 'professionalExperience.trio.current.engagement.studylog.name',
        periodKey: 'professionalExperience.trio.current.engagement.studylog.period',
        responsibilitiesKey: 'professionalExperience.trio.current.engagement.studylog.responsibilities',
        technologies: [
          'react',
          'react-native',
          'typescript',
          'realm',
          'firebase',
          'sentry',
          'redux',
          'electron',
          'next-js',
          'storybook',
          'node-js',
          'nestjs',
          'graphql',
          'prisma',
          'postgresql',
          'redis',
          'jest',
          'aws-cognito',
          'github-actions',
        ],
        typeKey: 'professionalExperience.trio.current.engagement.studylog.type',
      },
      {
        descriptionKey: 'professionalExperience.trio.current.engagement.flyreel.description',
        id: 'flyreel',
        nameKey: 'professionalExperience.trio.current.engagement.flyreel.name',
        periodKey: 'professionalExperience.trio.current.engagement.flyreel.period',
        roleKey: 'professionalExperience.trio.current.engagement.flyreel.role',
        responsibilitiesKey: 'professionalExperience.trio.current.engagement.flyreel.responsibilities',
        technologies: [],
        typeKey: 'professionalExperience.trio.current.engagement.flyreel.type',
      },
    ],
    logoUrl: 'img-trio.png',
    location: 'Boston, Massachusetts, United States',
    titleKey: 'professionalExperience.trio.current.companyName',
    periodKey: 'professionalExperience.trio.current.period',
    roleKey: 'professionalExperience.trio.current.role',
    workModeKey: 'v1.workModes.remote',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.edtech',
    engagements: [
      {
        descriptionKey: 'professionalExperience.aulapp.engagement.description',
        id: 'aulapp-lms',
        logoUrl: 'img-aulapp.jpg',
        nameKey: 'professionalExperience.aulapp.engagement.name',
        responsibilitiesKey: 'professionalExperience.aulapp.engagement.responsibilities',
        technologies: [
          'react-native',
          'typescript',
          'realm',
          'firebase',
          'sentry',
          'redux',
          'jest',
          'storybook',
        ],
        typeKey: 'professionalExperience.aulapp.engagement.type',
      },
    ],
    logoUrl: 'img-aulapp.jpg',
    location: 'Campinas, São Paulo, Brazil',
    titleKey: 'professionalExperience.aulapp.companyName',
    periodKey: 'professionalExperience.aulapp.period',
    roleKey: 'professionalExperience.aulapp.role',
    workModeKey: 'v1.workModes.remote',
    descriptionsKey: 'professionalExperience.aulapp.description',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.cybersecurity',
    engagements: [
      {
        descriptionKey: 'professionalExperience.cyberISight.engagement.description',
        id: 'cyber-isight',
        logoUrl: 'img-cyberIsight.png',
        nameKey: 'professionalExperience.cyberISight.engagement.name',
        responsibilitiesKey: 'professionalExperience.cyberISight.engagement.responsibilities',
        technologies: [
          'postgresql',
          'swagger',
          'docker',
          'surveyjs',
          'frontegg',
          'typescript',
          'jest',
          'prisma',
          'express',
          'react',
          'node-js',
          'jspreport',
          'github-actions',
        ],
        typeKey: 'professionalExperience.cyberISight.engagement.type',
      },
    ],
    logoUrl: 'img-cyberIsight.png',
    location: 'Colorado, United States',
    titleKey: 'professionalExperience.cyberISight.companyName',
    periodKey: 'professionalExperience.cyberISight.period',
    roleKey: 'professionalExperience.cyberISight.role',
    workModeKey: 'v1.workModes.remote',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.usOutsourcing',
    engagements: [
      {
        descriptionKey: 'professionalExperience.trio.previous.engagement.pathCrypto.description',
        id: 'pathcrypto',
        logoUrl: 'images/portfolio-previews/pathcrypto.jpg',
        nameKey: 'professionalExperience.trio.previous.engagement.pathCrypto.name',
        responsibilitiesKey:
          'professionalExperience.trio.previous.engagement.pathCrypto.responsibilities',
        technologies: [
          'react-native',
          'typescript',
          'firebase',
          'amplitude',
          'mobx',
          'storybook',
          'node-js',
          'prisma',
          'nestjs',
          'express',
          'redis',
          'jest',
          'react-hooks',
          'typeorm',
          'apollo-client',
          'graphql',
        ],
        typeKey: 'professionalExperience.trio.previous.engagement.pathCrypto.type',
      },
    ],
    logoUrl: 'img-trio.png',
    location: 'Boston, Massachusetts, United States',
    titleKey: 'professionalExperience.trio.previous.companyName',
    periodKey: 'professionalExperience.trio.previous.period',
    roleKey: 'professionalExperience.trio.previous.role',
    workModeKey: 'v1.workModes.remote',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.consultancy',
    engagements: [
      {
        descriptionKey: 'professionalExperience.ilia.engagement.livelo.description',
        id: 'livelo',
        nameKey: 'professionalExperience.ilia.engagement.livelo.name',
        responsibilitiesKey: 'professionalExperience.ilia.engagement.livelo.responsibilities',
        technologies: [
          'react-native',
          'typescript',
          'firebase',
          'storybook',
          'jest',
          'redux',
          'react-hooks',
          'styled-components',
        ],
        typeKey: 'professionalExperience.ilia.engagement.livelo.type',
      },
    ],
    logoUrl: 'img-ilia.png',
    location: 'Brasília, Federal District, Brazil',
    titleKey: 'professionalExperience.ilia.companyName',
    periodKey: 'professionalExperience.ilia.period',
    roleKey: 'professionalExperience.ilia.role',
    workModeKey: 'v1.workModes.remote',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.edtech',
    engagements: [
      {
        descriptionKey: 'professionalExperience.ies2.engagement.aulapp.description',
        id: 'aulapp',
        logoUrl: 'img-aulapp.jpg',
        nameKey: 'professionalExperience.ies2.engagement.aulapp.name',
        responsibilitiesKey: 'professionalExperience.ies2.engagement.aulapp.responsibilities',
        technologies: ['react-native', 'react', 'javascript', 'firebase', 'sentry', 'redux', 'jest'],
        typeKey: 'professionalExperience.ies2.engagement.aulapp.type',
      },
    ],
    logoUrl: 'img-ies2.png',
    location: 'Campinas, São Paulo, Brazil',
    titleKey: 'professionalExperience.ies2.companyName',
    periodKey: 'professionalExperience.ies2.period',
    roleKey: 'professionalExperience.ies2.role',
    descriptionsKey: 'professionalExperience.ies2.description',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.software',
    engagements: [
      {
        descriptionKey: 'professionalExperience.verisoft.engagements.uol.description',
        id: 'uol-curso-de-bolso',
        nameKey: 'professionalExperience.verisoft.engagements.uol.name',
        responsibilitiesKey: 'professionalExperience.verisoft.engagements.uol.responsibilities',
        technologies: ['android-sdk', 'java', 'sqlite', 'realm'],
        typeKey: 'professionalExperience.verisoft.engagements.uol.type',
      },
      {
        descriptionKey: 'professionalExperience.verisoft.engagements.bancah.description',
        id: 'bancah',
        nameKey: 'professionalExperience.verisoft.engagements.bancah.name',
        responsibilitiesKey: 'professionalExperience.verisoft.engagements.bancah.responsibilities',
        technologies: ['android-sdk', 'java', 'sqlite', 'realm'],
        typeKey: 'professionalExperience.verisoft.engagements.bancah.type',
      },
      {
        descriptionKey: 'professionalExperience.verisoft.engagements.livroh.description',
        id: 'livroh',
        nameKey: 'professionalExperience.verisoft.engagements.livroh.name',
        responsibilitiesKey: 'professionalExperience.verisoft.engagements.livroh.responsibilities',
        technologies: ['android-sdk', 'java', 'sqlite', 'realm', 'exoplayer'],
        typeKey: 'professionalExperience.verisoft.engagements.livroh.type',
      },
    ],
    logoUrl: 'img-verisoft.png',
    location: 'Campinas, São Paulo, Brazil',
    titleKey: 'professionalExperience.verisoft.companyName',
    periodKey: 'professionalExperience.verisoft.period',
    roleKey: 'professionalExperience.verisoft.role',
    descriptionsKey: 'professionalExperience.verisoft.description',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.globalOutsourcing',
    engagements: [
      {
        category: 'financial',
        descriptionKey: 'professionalExperience.ciandt.engagements.itau.description',
        id: 'itau-unibanco',
        nameKey: 'professionalExperience.ciandt.engagements.itau.name',
        periodKey: 'professionalExperience.ciandt.engagements.itau.period',
        responsibilitiesKey: 'professionalExperience.ciandt.engagements.itau.responsibilities',
        technologies: ['java', 'android-sdk'],
        typeKey: 'professionalExperience.ciandt.engagements.itau.type',
      },
      {
        category: 'banking',
        descriptionKey: 'professionalExperience.ciandt.engagements.tribanco.description',
        id: 'tribanco',
        nameKey: 'professionalExperience.ciandt.engagements.tribanco.name',
        periodKey: 'professionalExperience.ciandt.engagements.tribanco.period',
        responsibilitiesKey: 'professionalExperience.ciandt.engagements.tribanco.responsibilities',
        technologies: ['javascript', 'kony'],
        typeKey: 'professionalExperience.ciandt.engagements.tribanco.type',
      },
    ],
    logoUrl: 'img-ciet.png',
    location: 'Campinas, São Paulo, Brazil',
    titleKey: 'professionalExperience.ciandt.companyName',
    periodKey: 'professionalExperience.ciandt.period',
    roleKey: 'professionalExperience.ciandt.role',
    descriptionsKey: 'professionalExperience.ciandt.description',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.edtech',
    engagements: [
      {
        descriptionKey: 'professionalExperience.clickideia.engagement.description',
        id: 'clickideia-platform',
        logoUrl: 'img-clickideia.png',
        nameKey: 'professionalExperience.clickideia.engagement.name',
        responsibilitiesKey: 'professionalExperience.clickideia.engagement.responsibilities',
        technologies: ['jquery', 'php', 'mysql', 'html', 'css', 'javascript'],
        typeKey: 'professionalExperience.clickideia.engagement.type',
      },
    ],
    logoUrl: 'img-clickideia.png',
    location: 'Campinas, São Paulo, Brazil',
    titleKey: 'professionalExperience.clickideia.companyName',
    periodKey: 'professionalExperience.clickideia.period',
    roleKey: 'professionalExperience.clickideia.role',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.logistics',
    engagements: [
      {
        descriptionKey: 'professionalExperience.artivinco.engagement.deliveryManagement.description',
        id: 'delivery-management',
        nameKey: 'professionalExperience.artivinco.engagement.deliveryManagement.name',
        responsibilitiesKey:
          'professionalExperience.artivinco.engagement.deliveryManagement.responsibilities',
        technologies: ['delphi', 'sql-server'],
        typeKey: 'professionalExperience.artivinco.engagement.deliveryManagement.type',
      },
      {
        descriptionKey: 'professionalExperience.artivinco.engagement.reporting.description',
        id: 'factory-reporting',
        nameKey: 'professionalExperience.artivinco.engagement.reporting.name',
        responsibilitiesKey: 'professionalExperience.artivinco.engagement.reporting.responsibilities',
        technologies: ['delphi', 'sql-server'],
        typeKey: 'professionalExperience.artivinco.engagement.reporting.type',
      },
    ],
    logoUrl: 'img-artivinco.png',
    location: 'Itatiba, São Paulo, Brazil',
    titleKey: 'professionalExperience.artivinco.companyName',
    periodKey: 'professionalExperience.artivinco.period',
    roleKey: 'professionalExperience.artivinco.role',
    descriptionsKey: 'professionalExperience.artivinco.description',
  },
  {
    companyTypeKey: 'professionalExperience.companyTypes.simulation',
    engagements: [
      {
        descriptionKey: 'professionalExperience.brSimulations.engagement.a320.description',
        id: 'airbus-a320',
        nameKey: 'professionalExperience.brSimulations.engagement.a320.name',
        responsibilitiesKey: 'professionalExperience.brSimulations.engagement.a320.responsibilities',
        technologies: ['delphi', 'opengl'],
        typeKey: 'professionalExperience.brSimulations.engagement.a320.type',
      },
    ],
    logoUrl: 'img-brsimulations.png',
    location: 'Itatiba, São Paulo, Brazil',
    titleKey: 'professionalExperience.brSimulations.companyName',
    periodKey: 'professionalExperience.brSimulations.period',
    roleKey: 'professionalExperience.brSimulations.role',
    descriptionsKey: 'professionalExperience.brSimulations.description',
  },
]

import { EnvelopeIcon } from '@phosphor-icons/react/dist/csr/Envelope'
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { CompassIcon } from '@phosphor-icons/react/dist/csr/Compass'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { FileTextIcon } from '@phosphor-icons/react/dist/csr/FileText'
import { GithubLogoIcon } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { GridNineIcon } from '@phosphor-icons/react/dist/csr/GridNine'
import { HouseIcon } from '@phosphor-icons/react/dist/csr/House'
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/csr/LinkedinLogo'
import { UsersIcon } from '@phosphor-icons/react/dist/csr/Users'
import { VirusIcon } from '@phosphor-icons/react/dist/csr/Virus'
import { useTranslation } from 'react-i18next'
import { academicEducation } from '@/data/academicEducation'
import {
  portfolioItems,
  type PortfolioProjectIcon,
  type PortfolioTechnology,
} from '@/data/portfolio'
import { professionalExperiences } from '@/data/professionalExperiences'
import type { TechnologyName } from '@/components/compositions/TechnologyTag'
import type { PortfolioContent } from './types'

const TECHNOLOGY_MAP: Record<PortfolioTechnology, TechnologyName> = {
  construct2: 'html-css',
  csharp: 'csharp',
  htmlCss: 'html-css',
  java: 'java',
  javascript: 'javascript',
  monogame: 'monogame',
  nodeJs: 'node-js',
  php: 'php',
  reactNative: 'react-native',
  sql: 'sql',
  typescript: 'typescript',
  unity: 'unity',
}

const PROJECT_ICON_MAP: Record<PortfolioProjectIcon, React.JSX.Element> = {
  'grid-nine': <GridNineIcon weight="fill" />,
  virus: <VirusIcon weight="fill" />,
  compass: <CompassIcon weight="fill" />,
  house: <HouseIcon weight="fill" />,
}

function formatMonth(month: number, locale: string) {
  return new Intl.DateTimeFormat(locale, { month: 'short' }).format(new Date(2020, month - 1, 1))
}

function getPeriod(period: string, locale: string) {
  const dates = [...period.matchAll(/(\d{2})\/(\d{4})/g)].map(([, month, year]) => ({
    month: formatMonth(Number(month), locale),
    year: Number(year),
  }))

  return { end: dates[1], start: dates[0] ?? { month: '', year: 0 } }
}

export function usePortfolioContent(): PortfolioContent {
  const { i18n, t } = useTranslation()
  const locale = i18n.resolvedLanguage === 'pt-BR' ? 'pt-BR' : 'en-US'
  const getTextList = (key?: string) => {
    if (!key) return []

    const value = t(key, { returnObjects: true })
    return Array.isArray(value) ? value.map(String).filter(Boolean) : []
  }

  return {
    topRow: {
      familyName: 'Belkiman',
      givenName: 'Marcelo',
      locale,
      roles: [t('v1.roles.softwareEngineer'), t('v1.roles.fullStack')],
      timeZone: 'America/Sao_Paulo',
    },
    professionalExperience: professionalExperiences.map((experience) => {
      const descriptionKey =
        experience.descriptionsKey ?? experience.titleKey.replace(/companyName$/, 'description')
      const description = getTextList(descriptionKey).join(' ')

      return {
        company: t(experience.titleKey),
        companyType: experience.companyTypeKey ? t(experience.companyTypeKey) : undefined,
        description,
        engagements: experience.engagements?.map((engagement) => ({
          category: engagement.category,
          description: t(engagement.descriptionKey),
          id: engagement.id,
          logo: engagement.logoUrl ? `/${engagement.logoUrl}` : undefined,
          name: t(engagement.nameKey),
          period: engagement.periodKey ? t(engagement.periodKey) : undefined,
          role: engagement.roleKey ? t(engagement.roleKey) : undefined,
          responsibilities: getTextList(engagement.responsibilitiesKey),
          technologies: engagement.technologies,
          technologyBackground: 'transparent' as const,
          type: t(engagement.typeKey) as 'client' | 'product',
        })),
        id: experience.titleKey,
        logo: `/${experience.logoUrl}`,
        location: experience.locationKey
          ? [t(experience.locationKey), experience.workModeKey ? t(experience.workModeKey) : undefined]
              .filter(Boolean)
              .join(' · ')
          : undefined,
        period: getPeriod(t(experience.periodKey), locale),
        role: t(experience.roleKey),
      }
    }),
    skills: {
      skillGroups: [
        {
          title: t('v1.skills.development'),
          technologies: [
            'typescript',
            'csharp',
            'java',
            'php',
            'sql',
          ],
        },
        {
          title: t('v1.skills.tools'),
          technologies: [
            'react-native',
            'react',
            'node-js',
            'next-js',
            'graphql',
            'nestjs',
            'redux',
            'jest',
            'unity',
            'monogame',
            'electron',
          ],
        },
        {
          title: t('v1.skills.architectureDeliveryDataInfrastructure'),
          technologies: [
            'firebase',
            'aws',
            'postgresql',
            'redis',
            'docker',
            'software-architecture',
            'agile-methodologies',
            'ci-cd',
          ],
        },
      ],
    },
    contactAndEducation: {
      contactLinks: [
        {
          href: 'https://www.linkedin.com/in/marcelobelkiman',
          icon: <LinkedinLogoIcon weight="fill" />,
          label: 'LinkedIn',
          value: '/marcelobelkiman',
        },
        {
          href: 'https://github.com/mmbelkiman',
          icon: <GithubLogoIcon weight="fill" />,
          label: 'GitHub',
          value: '/mmbelkiman',
        },
        {
          href: 'mailto:marcelobelkiman@gmail.com',
          icon: <EnvelopeIcon weight="bold" />,
          label: t('v1.contact.email'),
          value: 'marcelobelkiman@gmail.com',
        },
      ],
      education: academicEducation.map((education) => ({
        institution: t(education.institutionKey),
        logoAlt: t(education.institutionKey),
        logoSrc: `/${education.logoUrl}`,
        period: t(education.periodKey),
        title: t(education.titleKey),
      })),
      languages: [
        { flag: '🇧🇷', name: t('home.language-port-1'), proficiency: t('home.language-port-2') },
        { flag: '🇺🇸', name: t('home.language-eng-1'), proficiency: t('v1.languages.professional') },
      ],
    },
    projects: portfolioItems.map((project) => {
      const description = t(project.titleKey.replace(/\.title$/, '.description.summary'))
      const projectType = project.category

      return {
        description,
        externalLinks: project.links?.map((link) => ({
          label: t(link.labelKey),
          text: t(link.textKey),
          url: link.href,
        })),
        featured: project.featured,
        icon: project.projectIcon ? (
          PROJECT_ICON_MAP[project.projectIcon]
        ) : projectType === 'game' ? (
            <GameControllerIcon weight="fill" />
          ) : projectType === 'social' ? (
            <UsersIcon weight="fill" />
          ) : projectType === 'doc' ? (
            <FileTextIcon weight="fill" />
          ) : (
            <CodeIcon weight="fill" />
          ),
        id: project.titleKey,
        imageAlt: t(project.titleKey),
        imageSrc: project.posterUrl,
        logoSrc: project.logoUrl,
        presentation: project.presentation,
        projectType,
        supplementaryImage: project.supplementaryImage
          ? {
              alt: t(project.supplementaryImage.altKey),
              caption: project.supplementaryImage.captionKey ? t(project.supplementaryImage.captionKey) : undefined,
              src: project.supplementaryImage.src,
            }
          : undefined,
        technologies: project.technologies.map((technology) => TECHNOLOGY_MAP[technology]),
        technologyBackground: 'transparent' as const,
        title: t(project.titleKey),
        videoSrc: project.videoUrl,
        year: t(project.yearKey ?? ''),
      }
    }),
  }
}

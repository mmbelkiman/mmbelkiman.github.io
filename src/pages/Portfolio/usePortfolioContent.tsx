import { EnvelopeIcon } from '@phosphor-icons/react/dist/csr/Envelope'
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { GithubLogoIcon } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/csr/LinkedinLogo'
import { useTranslation } from 'react-i18next'
import { academicEducation } from '@/data/academicEducation'
import { portfolioItems, type PortfolioTechnology } from '@/data/portfolio'
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
      locationLabel: t('v1.profile.location'),
      roles: [t('v1.roles.softwareEngineer'), t('v1.roles.mobileDeveloper'), t('v1.roles.fullStack')],
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
        location: experience.location
          ? [experience.location, experience.workModeKey ? t(experience.workModeKey) : undefined]
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
        externalLinks: project.links?.map((link) => ({ label: t(link.labelKey), url: link.href })),
        featured: project.featured,
        icon:
          projectType === 'game' ? (
            <GameControllerIcon weight="fill" />
          ) : (
            <CodeIcon weight="fill" />
          ),
        id: project.titleKey,
        imageAlt: t(project.titleKey),
        imageSrc: project.posterUrl,
        projectType,
        subtitle: t(`v1.projectTypes.${projectType}`),
        technologies: project.technologies.map((technology) => TECHNOLOGY_MAP[technology]),
        technologyBackground: 'transparent' as const,
        title: t(project.titleKey),
        videoSrc: project.videoUrl,
        year: t(project.yearKey ?? ''),
      }
    }),
  }
}

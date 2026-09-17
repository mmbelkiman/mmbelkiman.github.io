import { ProjectCard } from '@/components/compositions/ProjectCard'
import { useTranslation } from 'react-i18next'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import './style.css'
import type { PortfolioProjectsRowProps } from './types'

export type { PortfolioProject, PortfolioProjectsRowProps } from './types'

export function PortfolioProjectsRow({ projects }: PortfolioProjectsRowProps) {
  const { t } = useTranslation()
  const orderedProjects = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ]

  return (
    <PanelFrame
      header={
        <PanelHeader
          endContent={t('v1.sections.projectCount', { count: projects.length })}
          label={t('v1.sections.portfolio')}
        />
      }
    >
      <section aria-label={t('v1.sections.portfolio')} className="portfolio-projects-row">
        {orderedProjects.map(({ id, ...project }) => (
          <div
            className={
              project.featured
                ? 'portfolio-projects-row__item--featured'
                : 'portfolio-projects-row__item'
            }
            key={id}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </section>
    </PanelFrame>
  )
}

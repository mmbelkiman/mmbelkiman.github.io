import { ProjectCard } from '@/components/compositions/ProjectCard'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import './style.css'
import type { PortfolioProjectsRowProps } from './types'

export type { PortfolioProject, PortfolioProjectsRowProps } from './types'

export function PortfolioProjectsRow({ projects }: PortfolioProjectsRowProps) {
  const orderedProjects = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ]

  return (
    <PanelFrame
      header={<PanelHeader endContent={`${projects.length} projects`} label="Portfólio" />}
    >
      <section aria-label="Portfolio projects" className="v1-portfolio-projects-row">
        {orderedProjects.map(({ id, ...project }) => (
          <ProjectCard {...project} key={id} />
        ))}
      </section>
    </PanelFrame>
  )
}

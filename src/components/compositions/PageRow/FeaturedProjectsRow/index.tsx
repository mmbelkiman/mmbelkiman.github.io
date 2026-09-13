import { FeaturedProjectCard } from '@/components/compositions/FeaturedProjectCard'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import './style.css'
import type { FeaturedProjectsRowProps } from './types'

export type { FeaturedProjectsRowProps } from './types'

export function FeaturedProjectsRow({ projects }: FeaturedProjectsRowProps) {
  return (
    <PanelFrame header={<PanelHeader label="Featured projects" />}>
      <section aria-label="Featured projects" className="v1-featured-projects-row">
        {projects.map((project) => (
          <FeaturedProjectCard {...project} key={project.title} />
        ))}
      </section>
    </PanelFrame>
  )
}

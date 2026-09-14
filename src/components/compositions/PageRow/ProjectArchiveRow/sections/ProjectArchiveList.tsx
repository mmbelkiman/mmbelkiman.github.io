import { FeaturedProjectTechnology } from '@/components/compositions/FeaturedProjectCard'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import type { ProjectArchiveProject } from '../types'

type ProjectArchiveListProps = {
  onSelect: (projectId: string) => void
  projects: readonly ProjectArchiveProject[]
  selectedProjectId: string
}

export function ProjectArchiveList({
  onSelect,
  projects,
  selectedProjectId,
}: ProjectArchiveListProps) {
  return (
    <section aria-label="Project archive" className="v1-project-archive-row__list">
      {projects.map((project) => {
        const isSelected = project.id === selectedProjectId

        return (
          <button
            aria-pressed={isSelected}
            className="v1-project-archive-row__summary"
            key={project.id}
            onClick={() => onSelect(project.id)}
            type="button"
          >
            <span aria-hidden="true" className="v1-project-archive-row__summary-icon">
              {project.icon}
            </span>
            <span className="v1-project-archive-row__summary-content">
              <span className="v1-project-archive-row__summary-heading">
                <Heading level={3}>{project.title}</Heading>
                <span>{project.kind}</span>
              </span>
              <Text color="secondary" size="meta">
                {project.subtitle}
              </Text>
              <span className="v1-project-archive-row__summary-technologies">
                {project.technologies.map((technology) => (
                  <FeaturedProjectTechnology bg="transparent" key={technology} tech={technology} />
                ))}
              </span>
            </span>
          </button>
        )
      })}
    </section>
  )
}

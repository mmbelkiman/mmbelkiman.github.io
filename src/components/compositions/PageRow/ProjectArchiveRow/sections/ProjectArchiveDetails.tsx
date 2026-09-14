import { ArrowSquareOutIcon } from '@phosphor-icons/react/dist/csr/ArrowSquareOut'
import { CalendarIcon } from '@phosphor-icons/react/dist/csr/Calendar'
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { UserIcon } from '@phosphor-icons/react/dist/csr/User'
import { FeaturedProjectTechnology } from '@/components/compositions/FeaturedProjectCard'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import type { ProjectArchiveProject } from '../types'

type ProjectArchiveDetailsProps = {
  project: ProjectArchiveProject
}

export function ProjectArchiveDetails({ project }: ProjectArchiveDetailsProps) {
  return (
    <article className="v1-project-archive-row__details">
      <header className="v1-project-archive-row__details-header">
        <span aria-hidden="true" className="v1-project-archive-row__details-icon">
          {project.icon}
        </span>
        <div>
          <Heading level={2}>{project.title}</Heading>
          <Text color="secondary">{project.subtitle}</Text>
        </div>
        <span className="v1-project-archive-row__kind">{project.kind}</span>
      </header>

      <img
        alt={project.imageAlt}
        className="v1-project-archive-row__image"
        src={project.imageSrc}
      />

      <Text color="secondary">{project.description}</Text>

      <div className="v1-project-archive-row__details-footer">
        <dl className="v1-project-archive-row__metadata">
          <div>
            <dt>
              <CalendarIcon aria-hidden="true" size={18} weight="bold" /> Year
            </dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>
              <UserIcon aria-hidden="true" size={18} weight="bold" /> Role
            </dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
        <div className="v1-project-archive-row__details-side">
          <div>
            <span className="v1-project-archive-row__section-label">
              <CodeIcon aria-hidden="true" size={16} weight="bold" /> Tech stack
            </span>
            <ul className="v1-featured-project-card__technologies">
              {project.technologies.map((technology) => (
                <FeaturedProjectTechnology key={technology} tech={technology} />
              ))}
            </ul>
          </div>
          {project.links?.length ? (
            <div>
              <span className="v1-project-archive-row__section-label">Links</span>
              <ul className="v1-project-archive-row__links">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} rel="noreferrer" target="_blank">
                      {link.label}
                      <ArrowSquareOutIcon aria-hidden="true" size={15} weight="bold" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

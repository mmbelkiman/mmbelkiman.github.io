import { ArrowSquareOutIcon } from '@phosphor-icons/react/dist/csr/ArrowSquareOut'
import { CalendarIcon } from '@phosphor-icons/react/dist/csr/Calendar'
import { StarIcon } from '@phosphor-icons/react/dist/csr/Star'
import { ProjectTypeBadge } from '@/components/compositions/ProjectTypeBadge'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { Text } from '@/components/ui/Text'
import { ProjectTechnology } from './sections/ProjectTechnology'
import './style.css'
import type { ProjectCardProps } from './types'
import { getExternalLinkText } from './utils'

export type {
  ProjectCardProps,
  ProjectExternalLink,
  ProjectTechnologyBackground,
  ProjectTechnologyName,
} from './types'
export { ProjectTechnology } from './sections/ProjectTechnology'
export type { ProjectTechnologyProps } from './sections/ProjectTechnology'
export { PROJECT_TECHNOLOGY_NAMES } from './constants'

export function ProjectCard({
  description,
  externalLinks,
  featured = false,
  icon,
  imageAlt,
  imageSrc,
  projectType,
  subtitle,
  technologies,
  technologyBackground,
  technologyIconVisibility,
  title,
  year,
}: ProjectCardProps) {
  return (
    <PanelFrame tone="dark">
      <article className="v1-project-card">
        <div className="v1-project-card__content">
          <div className="v1-project-card__summary">
            <header className="v1-project-card__header">
              <span aria-hidden="true" className="v1-project-card__icon">
                {icon}
              </span>
              <div className="v1-project-card__identity">
                <Heading level={2}>
                  {featured ? (
                    <StarIcon
                      aria-hidden="true"
                      className="v1-project-card__featured-icon"
                      size="var(--icon-size-normal)"
                      weight="fill"
                    />
                  ) : null}
                  {title}
                </Heading>
                <Text color="secondary">{subtitle}</Text>
                {projectType ? <ProjectTypeBadge type={projectType} /> : null}
              </div>
            </header>
            <div className="v1-project-card__description">
              <Text color="secondary">{description}</Text>
            </div>
            {externalLinks?.length ? (
              <div className="v1-project-card__link-section">
                <ul className="v1-project-card__external-links">
                  {externalLinks.map((externalLink) => (
                    <li key={externalLink.url}>
                      <span>{externalLink.label}:</span>
                      <a href={externalLink.url} rel="noreferrer" target="_blank">
                        {getExternalLinkText(externalLink.url)}
                        <ArrowSquareOutIcon
                          aria-hidden="true"
                          size="var(--icon-size-nano)"
                          weight="bold"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="v1-project-card__technology-stack">
              <ul className="v1-project-card__technologies">
                {technologies.map((tech) => (
                  <ProjectTechnology
                    bg={technologyBackground}
                    key={tech}
                    showIcon={technologyIconVisibility?.[tech]}
                    tech={tech}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="v1-project-card__media-column">
            {year ? (
              <span className="v1-project-card__year">
                <CalendarIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
                {year}
              </span>
            ) : null}
            <div className="v1-project-card__media-frame">
              <img alt={imageAlt} className="v1-project-card__image" src={imageSrc} />
            </div>
          </div>
        </div>
      </article>
    </PanelFrame>
  )
}

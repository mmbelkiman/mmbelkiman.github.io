import { ArrowSquareOutIcon } from '@phosphor-icons/react/dist/csr/ArrowSquareOut'
import { CalendarIcon } from '@phosphor-icons/react/dist/csr/Calendar'
import { StarIcon } from '@phosphor-icons/react/dist/csr/Star'
import { ProjectTypeBadge } from '@/components/compositions/ProjectTypeBadge'
import { TechnologyTag } from '@/components/compositions/TechnologyTag'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { Text } from '@/components/ui/Text'
import { PortfolioVideoPlayer } from '@/components/widgets/PortfolioVideoPlayer'
import './style.css'
import type { ProjectCardProps } from './types'

export type {
  ProjectCardProps,
  ProjectExternalLink,
  ProjectSupplementaryImage,
} from './types'

export function ProjectCard({
  description,
  externalLinks,
  featured = false,
  icon,
  logoSrc,
  imageAlt,
  imageSrc,
  projectType,
  supplementaryImage,
  technologies,
  technologyBackground,
  technologyIconVisibility,
  title,
  videoSrc,
  year,
}: ProjectCardProps) {
  return (
    <PanelFrame tone={featured ? 'dark' : 'default'}>
      <article className={`project-card${featured ? ' project-card-featured' : ''}`}>
        <div className="project-card-content">
          <div className="project-card-summary">
            <header className="project-card-header">
              <span aria-hidden="true" className="project-card-icon">
                {logoSrc ? <img alt="" src={logoSrc} /> : icon}
              </span>
              <div className="project-card-identity">
                <Heading level={2}>
                  {featured ? (
                    <StarIcon
                      aria-hidden="true"
                      className="project-card-featured-icon"
                      size="var(--icon-size-normal)"
                      weight="fill"
                    />
                  ) : null}
                  {title}
                </Heading>
                {projectType ? <ProjectTypeBadge tone={featured ? 'featured' : 'default'} type={projectType} /> : null}
              </div>
            </header>
            <div className="project-card-description">
              {description.split(/\n{2,}/).map((paragraph) => (
                <Text color="secondary" key={paragraph}>
                  {paragraph}
                </Text>
              ))}
              {supplementaryImage ? (
                <figure className="project-card-supplementary-image">
                  <img alt={supplementaryImage.alt} src={supplementaryImage.src} />
                </figure>
              ) : null}
            </div>
            {externalLinks?.length ? (
              <div className="project-card-link-section">
                <ul className="project-card-external-links">
                  {externalLinks.map((externalLink) => (
                    <li key={externalLink.url}>
                      <span>{externalLink.label}:</span>
                      <a href={externalLink.url} rel="noreferrer" target="_blank">
                        {externalLink.text}
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
            <div className="project-card-technology-stack">
              <ul className="technology-tags">
                {technologies.map((tech) => (
                  <TechnologyTag
                    bg={technologyBackground}
                    key={tech}
                    showIcon={technologyIconVisibility?.[tech]}
                    technology={tech}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="project-card-media-column">
            {year ? (
              <span className="project-card-year">
                <CalendarIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
                {year}
              </span>
            ) : null}
            <PortfolioVideoPlayer
              imageAlt={imageAlt}
              imageSrc={imageSrc}
              title={title}
              videoSrc={videoSrc}
            />
          </div>
        </div>
      </article>
    </PanelFrame>
  )
}

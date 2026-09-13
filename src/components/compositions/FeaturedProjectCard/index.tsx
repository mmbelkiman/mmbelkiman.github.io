import { ArrowSquareOutIcon } from '@phosphor-icons/react/dist/csr/ArrowSquareOut'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { Text } from '@/components/ui/Text'
import { FeaturedProjectTechnology } from './sections/FeaturedProjectTechnology'
import './style.css'
import type { FeaturedProjectCardProps } from './types'
import { getExternalLinkText } from './utils'

export type {
  FeaturedProjectCardProps,
  FeaturedProjectExternalLink,
  FeaturedProjectTechnologyName,
} from './types'
export { FeaturedProjectTechnology } from './sections/FeaturedProjectTechnology'
export type { FeaturedProjectTechnologyProps } from './sections/FeaturedProjectTechnology'
export { FEATURED_PROJECT_TECHNOLOGY_NAMES } from './constants'

export function FeaturedProjectCard({
  description,
  externalLinks,
  icon,
  imageAlt,
  imageSrc,
  subtitle,
  technologies,
  technologyIconVisibility,
  title,
}: FeaturedProjectCardProps) {
  return (
    <PanelFrame tone="dark">
      <article className="v1-featured-project-card">
        <header className="v1-featured-project-card__header">
          <span aria-hidden="true" className="v1-featured-project-card__icon">
            {icon}
          </span>
          <div>
            <Heading level={2}>{title}</Heading>
            <Text color="secondary">{subtitle}</Text>
          </div>
        </header>

        <img alt={imageAlt} className="v1-featured-project-card__image" src={imageSrc} />
        <ul className="v1-featured-project-card__technologies">
          {technologies.map((tech) => (
            <FeaturedProjectTechnology
              key={tech}
              showIcon={technologyIconVisibility?.[tech]}
              tech={tech}
            />
          ))}
        </ul>
        <Text color="secondary">{description}</Text>

        {externalLinks?.length ? (
          <ul className="v1-featured-project-card__external-links">
            {externalLinks.map((externalLink) => (
              <li key={externalLink.url}>
                <span>{externalLink.label}:</span>
                <a href={externalLink.url} rel="noreferrer" target="_blank">
                  {getExternalLinkText(externalLink.url)}
                  <ArrowSquareOutIcon aria-hidden="true" size={15} weight="bold" />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </PanelFrame>
  )
}

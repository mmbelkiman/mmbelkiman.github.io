import { ArrowSquareOutIcon } from '@phosphor-icons/react/dist/csr/ArrowSquareOut'
import { CalendarIcon } from '@phosphor-icons/react/dist/csr/Calendar'
import { StarIcon } from '@phosphor-icons/react/dist/csr/Star'
import { ProjectTypeBadge } from '@/components/compositions/ProjectTypeBadge'
import { TechnologyTag } from '@/components/compositions/TechnologyTag'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import { PortfolioVideoPlayer } from '@/components/widgets/PortfolioVideoPlayer'
import './style.css'
import type { EpicGolfFeaturedProjectProps } from './types'

export type { EpicGolfFeaturedProjectProps } from './types'

export function EpicGolfFeaturedProject({
  description,
  externalLinks,
  imageAlt,
  imageSrc,
  logoSrc,
  projectType,
  supplementaryImage,
  technologies,
  title,
  videoSrc,
  year,
}: EpicGolfFeaturedProjectProps) {
  const [awardTitle, awardSubtitle] = (supplementaryImage?.caption ?? supplementaryImage?.alt ?? '').split('\n')

  return (
    <div className="epic-golf-featured-project">
      <PanelFrame
        header={
          <PanelHeader
            endContent={
              year ? (
                <span className="epic-golf-featured-project__year">
                  <CalendarIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
                  {year}
                </span>
              ) : undefined
            }
            label=""
          />
        }
        tone="dark"
      >
        <div aria-hidden="true" className="epic-golf-featured-project__background">
          <img
            alt=""
            className="epic-golf-featured-project__cloud epic-golf-featured-project__cloud--one"
            src="/images/portfolio-scenery/epic-golf-2d/cloud-03.png"
          />
          <img
            alt=""
            className="epic-golf-featured-project__cloud epic-golf-featured-project__cloud--two"
            src="/images/portfolio-scenery/epic-golf-2d/cloud-09.png"
          />
          <img
            alt=""
            className="epic-golf-featured-project__cloud epic-golf-featured-project__cloud--three"
            src="/images/portfolio-scenery/epic-golf-2d/cloud-04.png"
          />
          <img
            alt=""
            className="epic-golf-featured-project__cloud epic-golf-featured-project__cloud--four"
            src="/images/portfolio-scenery/epic-golf-2d/cloud-06.png"
          />
          <img
            alt=""
            className="epic-golf-featured-project__cloud epic-golf-featured-project__cloud--five"
            src="/images/portfolio-scenery/epic-golf-2d/cloud-01.png"
          />
          <img
            alt=""
            className="epic-golf-featured-project__cloud epic-golf-featured-project__cloud--six"
            src="/images/portfolio-scenery/epic-golf-2d/cloud-08.png"
          />
          <img
            alt=""
            className="epic-golf-featured-project__course"
            src="/images/portfolio-scenery/epic-golf-2d-course-foreground-v4.png"
          />
          <img
            alt=""
            className="epic-golf-featured-project__star-decoration"
            src="/images/portfolio-scenery/epic-golf-2d/star.png"
          />
        </div>

        <article className="epic-golf-featured-project__content">
          <div className="epic-golf-featured-project__summary">
            <header className="epic-golf-featured-project__identity">
              {logoSrc ? <img alt="" className="epic-golf-featured-project__logo" src={logoSrc} /> : null}
              <div>
                <Heading level={2}>
                  <StarIcon
                    aria-hidden="true"
                    className="epic-golf-featured-project__title-star"
                    size="var(--icon-size-big)"
                    weight="fill"
                  />
                  {title}
                </Heading>
                {projectType ? <ProjectTypeBadge tone="featured" type={projectType} /> : null}
              </div>
            </header>

            <div className="epic-golf-featured-project__description">
              {description.split(/\n{2,}/).map((paragraph) => (
                <Text color="secondary" key={paragraph} size="body">
                  {paragraph}
                </Text>
              ))}
            </div>

            {supplementaryImage ? (
              <figure className="epic-golf-featured-project__award">
                <span className="epic-golf-featured-project__award-badge">
                  <img alt={supplementaryImage.alt} src={supplementaryImage.src} />
                </span>
                <figcaption>
                  <span className="epic-golf-featured-project__award-title">{awardTitle}</span>
                  {awardSubtitle ? (
                    <span className="epic-golf-featured-project__award-subtitle">{awardSubtitle}</span>
                  ) : null}
                </figcaption>
              </figure>
            ) : null}

            {externalLinks?.length ? (
              <ul className="epic-golf-featured-project__links">
                {externalLinks.map((externalLink) => (
                  <li key={externalLink.url}>
                    <span>{externalLink.label}:</span>
                    <a href={externalLink.url} rel="noreferrer" target="_blank">
                      {externalLink.url.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0]}
                      <ArrowSquareOutIcon
                        aria-hidden="true"
                        size="var(--icon-size-normal)"
                        weight="bold"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}

            <ul className="technology-tags epic-golf-featured-project__technologies">
              {technologies.map((technology) => (
                <TechnologyTag bg="transparent" key={technology} technology={technology} />
              ))}
            </ul>
          </div>

          <div className="epic-golf-featured-project__demo">
            <div className="epic-golf-featured-project__demo-label">// Demo</div>
            <PortfolioVideoPlayer
              imageAlt={imageAlt}
              imageSrc={imageSrc}
              title={title}
              videoSrc={videoSrc}
            />
          </div>
        </article>
      </PanelFrame>
    </div>
  )
}

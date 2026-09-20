import { ArrowSquareOutIcon } from '@phosphor-icons/react/dist/csr/ArrowSquareOut'
import { CalendarIcon } from '@phosphor-icons/react/dist/csr/Calendar'
import { FilmReelIcon } from '@phosphor-icons/react/dist/csr/FilmReel'
import { FilmStripIcon } from '@phosphor-icons/react/dist/csr/FilmStrip'
import { PopcornIcon } from '@phosphor-icons/react/dist/csr/Popcorn'
import { StarIcon } from '@phosphor-icons/react/dist/csr/Star'
import { ProjectTypeBadge } from '@/components/compositions/ProjectTypeBadge'
import { TechnologyTag } from '@/components/compositions/TechnologyTag'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import { PortfolioVideoPlayer } from '@/components/widgets/PortfolioVideoPlayer'
import './style.css'
import type { PipoclubeFeaturedProjectProps } from './types'

export type { PipoclubeFeaturedProjectProps } from './types'

export function PipoclubeFeaturedProject({
  description,
  externalLinks,
  imageAlt,
  imageSrc,
  logoSrc,
  projectType,
  technologies,
  title,
  videoSrc,
  year,
}: PipoclubeFeaturedProjectProps) {
  return (
    <div className="pipoclube-featured-project">
      <PanelFrame
        header={
          <PanelHeader
            endContent={
              year ? (
                <span className="pipoclube-featured-project__year">
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
        <div aria-hidden="true" className="pipoclube-featured-project__background">
          <span className="pipoclube-featured-project__glow pipoclube-featured-project__glow--top" />
          <span className="pipoclube-featured-project__glow pipoclube-featured-project__glow--bottom" />
          <span className="pipoclube-featured-project__glow pipoclube-featured-project__glow--center" />
          <span className="pipoclube-featured-project__ring pipoclube-featured-project__ring--top" />
          <span className="pipoclube-featured-project__ring pipoclube-featured-project__ring--bottom" />
          <span className="pipoclube-featured-project__dot pipoclube-featured-project__dot--red" />
          <span className="pipoclube-featured-project__dot pipoclube-featured-project__dot--light" />
          <PopcornIcon className="pipoclube-featured-project__background-icon pipoclube-featured-project__background-icon--popcorn" weight="fill" />
          <FilmStripIcon className="pipoclube-featured-project__background-icon pipoclube-featured-project__background-icon--film-strip" weight="bold" />
          <FilmReelIcon className="pipoclube-featured-project__background-icon pipoclube-featured-project__background-icon--reel" weight="bold" />
          <StarIcon className="pipoclube-featured-project__background-icon pipoclube-featured-project__background-icon--star" weight="fill" />
        </div>

        <article className="pipoclube-featured-project__content">
          <div className="pipoclube-featured-project__summary">
            <header className="pipoclube-featured-project__identity">
              {logoSrc ? <img alt="" className="pipoclube-featured-project__logo" src={logoSrc} /> : null}
              <div>
                <Heading level={2}>
                  <StarIcon
                    aria-hidden="true"
                    className="pipoclube-featured-project__star"
                    size="var(--icon-size-big)"
                    weight="fill"
                  />
                  {title}
                </Heading>
                {projectType ? <ProjectTypeBadge tone="featured" type={projectType} /> : null}
              </div>
            </header>

            <div className="pipoclube-featured-project__description">
              {description.split(/\n{2,}/).map((paragraph) => (
                <Text color="secondary" key={paragraph} size="body">
                  {paragraph}
                </Text>
              ))}
            </div>

            {externalLinks?.length ? (
              <ul className="pipoclube-featured-project__links">
                {externalLinks.map((externalLink) => (
                  <li key={externalLink.url}>
                    <span>{externalLink.label}:</span>
                    <a href={externalLink.url} rel="noreferrer" target="_blank">
                      {externalLink.text}
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

            <ul className="technology-tags pipoclube-featured-project__technologies">
              {technologies.map((technology) => (
                <TechnologyTag bg="transparent" key={technology} technology={technology} />
              ))}
            </ul>
          </div>

          <div className="pipoclube-featured-project__demo">
            <div className="pipoclube-featured-project__demo-label">// Demo</div>
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

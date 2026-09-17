import { ArrowSquareOutIcon } from '@phosphor-icons/react/dist/csr/ArrowSquareOut'
import { CalendarIcon } from '@phosphor-icons/react/dist/csr/Calendar'
import { PlayIcon } from '@phosphor-icons/react/dist/csr/Play'
import { StarIcon } from '@phosphor-icons/react/dist/csr/Star'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  videoSrc,
  year,
}: ProjectCardProps) {
  const { t } = useTranslation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoPaused, setIsVideoPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const resumeVideo = () => {
    void videoRef.current?.play()
  }

  return (
    <PanelFrame tone={featured ? 'dark' : 'default'}>
      <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
        <div className="project-card__content">
          <div className="project-card__summary">
            <header className="project-card__header">
              <span aria-hidden="true" className="project-card__icon">
                {icon}
              </span>
              <div className="project-card__identity">
                <Heading level={2}>
                  {featured ? (
                    <StarIcon
                      aria-hidden="true"
                      className="project-card__featured-icon"
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
            <div className="project-card__description">
              <Text color="secondary">{description}</Text>
            </div>
            {externalLinks?.length ? (
              <div className="project-card__link-section">
                <ul className="project-card__external-links">
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
            <div className="project-card__technology-stack">
              <ul className="project-card__technologies">
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
          <div className="project-card__media-column">
            {year ? (
              <span className="project-card__year">
                <CalendarIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
                {year}
              </span>
            ) : null}
            <div className="project-card__media-frame">
              {videoSrc ? (
                isVideoLoaded ? (
                  <video
                    aria-label={imageAlt}
                    autoPlay
                    className="project-card__media"
                    loop
                    muted
                    onClick={(event) => {
                      const video = event.currentTarget

                      if (video.paused) {
                        void video.play()
                        return
                      }

                      video.pause()
                    }}
                    onPause={() => setIsVideoPaused(true)}
                    onPlay={() => setIsVideoPaused(false)}
                    playsInline
                    poster={imageSrc}
                    ref={videoRef}
                    src={videoSrc}
                  />
                ) : (
                  <button
                    aria-label={t('v1.actions.playPreview', { title })}
                    className="project-card__play-trigger"
                    onClick={() => setIsVideoLoaded(true)}
                    type="button"
                  >
                    <img alt={imageAlt} className="project-card__media" src={imageSrc} />
                    <span aria-hidden="true" className="project-card__play-icon">
                      <PlayIcon weight="fill" />
                    </span>
                  </button>
                )
              ) : (
                <img alt={imageAlt} className="project-card__media" src={imageSrc} />
              )}
              {isVideoLoaded && isVideoPaused ? (
                <button
                  aria-label={t('v1.actions.resumePreview', { title })}
                  className="project-card__play-overlay"
                  onClick={resumeVideo}
                  type="button"
                >
                  <span aria-hidden="true" className="project-card__play-icon">
                    <PlayIcon weight="fill" />
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </PanelFrame>
  )
}

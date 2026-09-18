import { CornersInIcon } from '@phosphor-icons/react/dist/csr/CornersIn'
import { CornersOutIcon } from '@phosphor-icons/react/dist/csr/CornersOut'
import { PlayIcon } from '@phosphor-icons/react/dist/csr/Play'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './style.css'
import type { PortfolioVideoPlayerProps } from './types'

export type { PortfolioVideoPlayerProps } from './types'

export function PortfolioVideoPlayer({
  imageAlt,
  imageSrc,
  title,
  videoSrc,
}: PortfolioVideoPlayerProps) {
  const { t } = useTranslation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoPaused, setIsVideoPaused] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(document.fullscreenElement === frameRef.current)
    }

    document.addEventListener('fullscreenchange', syncFullscreenState)

    return () => document.removeEventListener('fullscreenchange', syncFullscreenState)
  }, [])

  const resumeVideo = () => {
    void videoRef.current?.play()
  }

  const toggleFullscreen = () => {
    if (document.fullscreenElement === frameRef.current) {
      void document.exitFullscreen()
      return
    }

    void frameRef.current?.requestFullscreen()
  }

  return (
    <div className="portfolio-video-player" ref={frameRef}>
      {videoSrc ? (
        isVideoLoaded ? (
          <video
            aria-label={imageAlt}
            autoPlay
            className="portfolio-video-player__media"
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
            className="portfolio-video-player__play-trigger"
            onClick={() => setIsVideoLoaded(true)}
            type="button"
          >
            <img alt={imageAlt} className="portfolio-video-player__media" src={imageSrc} />
            <span aria-hidden="true" className="portfolio-video-player__play-icon">
              <PlayIcon weight="fill" />
            </span>
          </button>
        )
      ) : (
        <img alt={imageAlt} className="portfolio-video-player__media" src={imageSrc} />
      )}
      {isVideoLoaded && isVideoPaused ? (
        <button
          aria-label={t('v1.actions.resumePreview', { title })}
          className="portfolio-video-player__play-overlay"
          onClick={resumeVideo}
          type="button"
        >
          <span aria-hidden="true" className="portfolio-video-player__play-icon">
            <PlayIcon weight="fill" />
          </span>
        </button>
      ) : null}
      {isVideoLoaded && !isVideoPaused ? (
        <button
          aria-label={
            isFullscreen
              ? t('v1.actions.exitFullscreen', { title })
              : t('v1.actions.enterFullscreen', { title })
          }
          className="portfolio-video-player__fullscreen-control"
          onClick={toggleFullscreen}
          type="button"
        >
          {isFullscreen ? (
            <CornersInIcon aria-hidden="true" weight="bold" />
          ) : (
            <CornersOutIcon aria-hidden="true" weight="bold" />
          )}
        </button>
      ) : null}
    </div>
  )
}

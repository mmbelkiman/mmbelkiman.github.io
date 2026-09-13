import { useEffect, useRef, useState } from 'react'
import './PortfolioPreview.css'

type PortfolioPreviewProps = {
  alt: string
  posterUrl: string
  src: string
  width: string
}

export function PortfolioPreview({ alt, posterUrl, src, width }: PortfolioPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasStartedLoading, setHasStartedLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (hasStartedLoading) {
      const video = videoRef.current
      video?.load()
      void video?.play()
    }
  }, [hasStartedLoading])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return

    if (!hasStartedLoading) {
      setHasStartedLoading(true)
      return
    }

    if (video.paused) {
      void video.play()
    } else {
      video.pause()
    }
  }

  return (
    <div className="portfolio-preview" style={{ width }}>
      <video
        ref={videoRef}
        aria-label={alt}
        className="portfolio-preview-video"
        loop
        muted
        playsInline
        poster={posterUrl}
        preload="none"
        onClick={togglePlayback}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        {hasStartedLoading && <source src={src} type="video/webm" />}
      </video>
      <button
        aria-label={isPlaying ? `Pausar ${alt}` : `Reproduzir ${alt}`}
        aria-pressed={isPlaying}
        className="portfolio-preview-toggle"
        data-playing={isPlaying}
        onClick={togglePlayback}
        type="button"
      >
        <span aria-hidden="true" className="portfolio-preview-toggle-icon">
          {isPlaying ? '❚❚' : '▶'}
        </span>
      </button>
    </div>
  )
}

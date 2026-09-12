import { useRef, useState } from 'react'
import './PortfolioPreview.css'

type PortfolioPreviewProps = {
  alt: string
  src: string
  width: string
}

export function PortfolioPreview({ alt, src, width }: PortfolioPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return

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
        preload="metadata"
        onClick={togglePlayback}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src={src} type="video/webm" />
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

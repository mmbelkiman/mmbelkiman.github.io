import { CityLandscapeParallax } from './CityLandscapeParallax'
import { LocalClock } from './LocalClock'
import { PanelFrame } from './PanelFrame'
import { SpotifyPlayer } from './SpotifyPlayer'
import './ClockPlayerHeader.css'

export type ClockPlayerHeaderProps = {
  className?: string
  locale?: string
  locationLabel?: string
  spotifyUrl?: string
  timeZone?: string
}

export function ClockPlayerHeader({
  className,
  locale,
  locationLabel,
  spotifyUrl,
  timeZone,
}: ClockPlayerHeaderProps) {
  return (
    <PanelFrame className={className} tone="dark">
      <section aria-label="Now playing and local time" className="v1-clock-player-header">
        <div className="v1-clock-player-header__city">
          <CityLandscapeParallax timeZone={timeZone} />
          <LocalClock
            className="v1-clock-player-header__clock"
            locale={locale}
            locationLabel={locationLabel}
            timeZone={timeZone}
          />
        </div>
        <SpotifyPlayer className="v1-clock-player-header__player" spotifyUrl={spotifyUrl} />
      </section>
    </PanelFrame>
  )
}

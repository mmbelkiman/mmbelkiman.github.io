import { CityLandscapeParallax } from '@/components/widgets/CityLandscapeParallax'
import { LocalClock } from '@/components/widgets/LocalClock'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { SpotifyPlayer } from '@/components/widgets/SpotifyPlayer'
import './style.css'
import type { ClockPlayerHeaderProps } from './types'

export type { ClockPlayerHeaderProps } from './types'

export function ClockPlayerHeader({
  locale,
  spotifyUrl,
  timeZone,
}: ClockPlayerHeaderProps) {
  return (
    <PanelFrame tone="dark">
      <section aria-label="Now playing and local time" className="clock-player-header">
        <div className="clock-player-header__city">
          <CityLandscapeParallax timeZone={timeZone} />
          <LocalClock locale={locale} timeZone={timeZone} />
        </div>
        <SpotifyPlayer spotifyUrl={spotifyUrl} />
      </section>
    </PanelFrame>
  )
}

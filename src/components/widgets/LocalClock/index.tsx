import { useMemo } from 'react'
import { Text } from '@/components/ui/Text'
import { useLocalClock } from './hooks/useLocalClock'
import './style.css'
import type { LocalClockProps } from './types'
import {
  formatLocalDate,
  formatLocalTime,
  getLocationFromTimeZone,
  getResolvedTimeZone,
} from './utils'

export type { LocalClockProps } from './types'

export function LocalClock({ locale, locationLabel, now, timeZone }: LocalClockProps) {
  const displayedTime = useLocalClock(now)
  const resolvedTimeZone = useMemo(() => getResolvedTimeZone(timeZone), [timeZone])
  const date = formatLocalDate({ locale, time: displayedTime, timeZone: resolvedTimeZone })
  const time = formatLocalTime({ locale, time: displayedTime, timeZone: resolvedTimeZone })
  return (
    <section aria-label="Local date and time" className="v1-local-clock">
      <Text color="secondary" size="meta">
        {locationLabel ?? getLocationFromTimeZone(resolvedTimeZone)}
      </Text>
      <time className="v1-local-clock__time" dateTime={displayedTime.toISOString()}>
        {time}
      </time>
      <time className="v1-local-clock__date" dateTime={displayedTime.toISOString()}>
        {date}
      </time>
    </section>
  )
}

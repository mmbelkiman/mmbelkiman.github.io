import { useEffect, useMemo, useState } from 'react'
import './LocalClock.css'

export type LocalClockProps = {
  className?: string
  locale?: string
  locationLabel?: string
  now?: Date
  timeZone?: string
}

function getLocationFromTimeZone(timeZone: string) {
  const city = timeZone.split('/').at(-1)?.replaceAll('_', ' ')

  return city ?? timeZone
}

export function LocalClock({ className, locale, locationLabel, now, timeZone }: LocalClockProps) {
  const [currentTime, setCurrentTime] = useState(() => now ?? new Date())
  const resolvedTimeZone = useMemo(
    () => timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
    [timeZone],
  )

  useEffect(() => {
    if (now) {
      return undefined
    }

    const updateClock = () => setCurrentTime(new Date())
    const intervalId = window.setInterval(updateClock, 1000)

    return () => window.clearInterval(intervalId)
  }, [now])

  const displayedTime = now ?? currentTime

  const date = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    timeZone: resolvedTimeZone,
    weekday: 'short',
    year: 'numeric',
  }).format(displayedTime)
  const time = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    timeZone: resolvedTimeZone,
  }).format(displayedTime)
  const classNames = ['v1-local-clock', className].filter(Boolean).join(' ')

  return (
    <section aria-label="Local date and time" className={classNames}>
      <p className="v1-local-clock__location">
        {locationLabel ?? getLocationFromTimeZone(resolvedTimeZone)}
      </p>
      <time className="v1-local-clock__time" dateTime={displayedTime.toISOString()}>
        {time}
      </time>
      <time className="v1-local-clock__date" dateTime={displayedTime.toISOString()}>
        {date}
      </time>
    </section>
  )
}

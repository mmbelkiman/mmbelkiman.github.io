type DateFormatOptions = {
  locale?: string
  time: Date
  timeZone: string
}

export function formatLocalDate({ locale, time, timeZone }: DateFormatOptions) {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    timeZone,
    weekday: 'short',
    year: 'numeric',
  }).format(time)
}

export function formatLocalTime({ locale, time, timeZone }: DateFormatOptions) {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    timeZone,
  }).format(time)
}

export function getLocationFromTimeZone(timeZone: string) {
  const city = timeZone.split('/').at(-1)?.replaceAll('_', ' ')

  return city ?? timeZone
}

export function getResolvedTimeZone(timeZone?: string) {
  return timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone
}

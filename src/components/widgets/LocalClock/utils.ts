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

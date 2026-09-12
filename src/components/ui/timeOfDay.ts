export type TimeOfDay = 'morning' | 'afternoon' | 'night'

function getHourInTimeZone(date: Date, timeZone?: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hourCycle: 'h23',
    timeZone,
  }).formatToParts(date)

  return Number(parts.find((part) => part.type === 'hour')?.value ?? date.getHours())
}

export function getTimeOfDay(date = new Date(), timeZone?: string): TimeOfDay {
  const hour = getHourInTimeZone(date, timeZone)

  if (hour >= 5 && hour < 12) {
    return 'morning'
  }

  if (hour >= 12 && hour < 18) {
    return 'afternoon'
  }

  return 'night'
}

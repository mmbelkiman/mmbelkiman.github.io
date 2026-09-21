import { CITY_LAYER_ASSETS, CITY_LAYER_COUNTS, CITY_LAYER_DURATIONS } from './constants'
import type { CityLayer, TimeOfDay } from './types'

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

  if (hour >= 5 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 18) return 'afternoon'

  return 'night'
}

export function getCityLayer(period: TimeOfDay, index: number): CityLayer {
  const layer = Math.min(index + 1, CITY_LAYER_COUNTS[period])
  const imagePath = CITY_LAYER_ASSETS[`/src/assets/backgrounds/city/${period}/${layer}.png`]

  if (!imagePath) {
    throw new Error(`Missing city layer: ${period}/${layer}`)
  }

  return {
    direction: index % 2 === 0 ? 'left' : 'right',
    duration: CITY_LAYER_DURATIONS[index] ?? CITY_LAYER_DURATIONS.at(-1) ?? 0,
    imagePath,
  }
}

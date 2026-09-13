import type { TimeOfDay } from './types'

export const CITY_LAYER_ASSETS = import.meta.glob<string>('/src/assets/backgrounds/city/*/*.png', {
  eager: true,
  import: 'default',
  query: '?url',
})

export const CITY_LAYER_COUNTS: Record<TimeOfDay, number> = {
  morning: 5,
  afternoon: 6,
  night: 5,
}

export const CITY_LAYER_DURATIONS = [1000, 900, 800, 700, 600, 500, 400]
export const CITY_LAYER_COPIES = 10
export const CITY_PERIOD_REFRESH_INTERVAL_MS = 60_000

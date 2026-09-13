import { useEffect, useState } from 'react'
import { CITY_PERIOD_REFRESH_INTERVAL_MS } from '../constants'
import type { TimeOfDay } from '../types'
import { getTimeOfDay } from '../utils'

export function useCityPeriod(period?: TimeOfDay, timeZone?: string) {
  const [currentPeriod, setCurrentPeriod] = useState(
    () => period ?? getTimeOfDay(new Date(), timeZone),
  )

  useEffect(() => {
    if (period) return undefined

    const updatePeriod = () => setCurrentPeriod(getTimeOfDay(new Date(), timeZone))
    const intervalId = window.setInterval(updatePeriod, CITY_PERIOD_REFRESH_INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [period, timeZone])

  return period ?? currentPeriod
}

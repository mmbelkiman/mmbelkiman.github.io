import { useEffect, useState } from 'react'

export function useLocalClock(now?: Date) {
  const [currentTime, setCurrentTime] = useState(() => now ?? new Date())

  useEffect(() => {
    if (now) {
      return undefined
    }

    const updateClock = () => setCurrentTime(new Date())
    const intervalId = window.setInterval(updateClock, 1000)

    return () => window.clearInterval(intervalId)
  }, [now])

  return now ?? currentTime
}

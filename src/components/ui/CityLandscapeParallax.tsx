import { useEffect, useState, type CSSProperties } from 'react'
import { getTimeOfDay, type TimeOfDay } from './timeOfDay'
import './CityLandscapeParallax.css'

const layersByPeriod: Record<TimeOfDay, number> = {
  morning: 5,
  afternoon: 6,
  night: 5,
}

const layerDurations = [1000, 900, 800, 700, 600, 500, 400]
const layerCopies = 10

export type CityLandscapeParallaxProps = {
  className?: string
  period?: TimeOfDay
  timeZone?: string
}

export function CityLandscapeParallax({ className, period, timeZone }: CityLandscapeParallaxProps) {
  const [currentPeriod, setCurrentPeriod] = useState(
    () => period ?? getTimeOfDay(new Date(), timeZone),
  )

  useEffect(() => {
    if (period) {
      return undefined
    }

    const updatePeriod = () => setCurrentPeriod(getTimeOfDay(new Date(), timeZone))
    const intervalId = window.setInterval(updatePeriod, 60_000)

    return () => window.clearInterval(intervalId)
  }, [period, timeZone])

  const displayedPeriod = period ?? currentPeriod

  const classNames = ['v1-city-landscape-parallax', className].filter(Boolean).join(' ')
  const layerCount = layersByPeriod[displayedPeriod]

  return (
    <section className={classNames} data-period={displayedPeriod}>
      <div aria-hidden="true" className="v1-city-landscape-parallax__scene">
        {Array.from({ length: layerCount }, (_, index) => {
          const layer = index + 1
          const direction = index % 2 === 0 ? 'left' : 'right'
          const imagePath = `/images/city/${displayedPeriod}/${layer}.png`
          const style = {
            '--city-layer-duration': `${layerDurations[index]}s`,
          } as CSSProperties
          const layerClassName = `v1-city-landscape-parallax__layer v1-city-landscape-parallax__layer--${direction}`

          return (
            <div className={layerClassName} key={imagePath} style={style}>
              {Array.from({ length: layerCopies }, (_, copyIndex) => (
                <img alt="" draggable="false" key={copyIndex} src={imagePath} />
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}

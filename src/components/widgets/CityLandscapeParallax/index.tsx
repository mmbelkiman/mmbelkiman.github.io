import { CITY_LAYER_COUNTS } from './constants'
import { useCityPeriod } from './hooks/useCityPeriod'
import { LandscapeLayer } from './sections/LandscapeLayer'
import './style.css'
import type { CityLandscapeParallaxProps } from './types'
import { getCityLayer } from './utils'

export type { CityLandscapeParallaxProps } from './types'

export function CityLandscapeParallax({ period, timeZone }: CityLandscapeParallaxProps) {
  const displayedPeriod = useCityPeriod(period, timeZone)
  const layerCount = CITY_LAYER_COUNTS[displayedPeriod]

  return (
    <section className="v1-city-landscape-parallax" data-period={displayedPeriod}>
      <div aria-hidden="true" className="v1-city-landscape-parallax__scene">
        {Array.from({ length: layerCount }, (_, index) => {
          const layer = getCityLayer(displayedPeriod, index)

          return <LandscapeLayer key={layer.imagePath} layer={layer} />
        })}
      </div>
    </section>
  )
}

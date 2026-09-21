import type { CSSProperties } from 'react'
import { CITY_LAYER_COPIES } from '../constants'
import type { LandscapeLayerProps } from '../types'

const LAYER_DIRECTION_CLASSES = {
  left: 'city-landscape-parallax-layer-left',
  right: 'city-landscape-parallax-layer-right',
} as const

export function LandscapeLayer({ layer }: LandscapeLayerProps) {
  const style = {
    '--city-layer-duration': `${layer.duration}s`,
  } as CSSProperties
  const className = `city-landscape-parallax-layer ${LAYER_DIRECTION_CLASSES[layer.direction]}`

  return (
    <div className={className} style={style}>
      {Array.from({ length: CITY_LAYER_COPIES }, (_, copyIndex) => (
        <img alt="" draggable="false" key={copyIndex} src={layer.imagePath} />
      ))}
    </div>
  )
}

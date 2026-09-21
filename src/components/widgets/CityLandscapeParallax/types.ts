export type TimeOfDay = 'morning' | 'afternoon' | 'night'

export type CityLandscapeParallaxProps = {
  period?: TimeOfDay
  timeZone?: string
}

export type CityLayerDirection = 'left' | 'right'

export type CityLayer = {
  direction: CityLayerDirection
  duration: number
  imagePath: string
}

export type LandscapeLayerProps = {
  layer: CityLayer
}

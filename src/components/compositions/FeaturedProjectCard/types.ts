import type { ReactNode } from 'react'

export type FeaturedProjectExternalLink = {
  label: string
  url: string
}

export type FeaturedProjectTechnologyName =
  'firebase' | 'node-js' | 'postgresql' | 'react' | 'react-native' | 'typescript'

export type FeaturedProjectTechnologyBackground = 'filled' | 'transparent'

export type FeaturedProjectCardProps = {
  description: string
  externalLinks?: readonly FeaturedProjectExternalLink[]
  icon: ReactNode
  imageAlt: string
  imageSrc: string
  subtitle: string
  technologies: readonly FeaturedProjectTechnologyName[]
  technologyBackground?: FeaturedProjectTechnologyBackground
  technologyIconVisibility?: Partial<Record<FeaturedProjectTechnologyName, boolean>>
  title: string
}

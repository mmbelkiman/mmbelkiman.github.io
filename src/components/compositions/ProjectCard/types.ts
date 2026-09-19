import type { ReactNode } from 'react'
import type { ProjectTypeName } from '@/components/compositions/ProjectTypeBadge'
import type { TechnologyName, TechnologyTagBackground } from '@/components/compositions/TechnologyTag'

export type ProjectExternalLink = {
  label: string
  url: string
}

export type ProjectSupplementaryImage = {
  alt: string
  caption?: string
  src: string
}

export type ProjectCardProps = {
  description: string
  externalLinks?: readonly ProjectExternalLink[]
  featured?: boolean
  icon: ReactNode
  logoSrc?: string
  imageAlt: string
  imageSrc: string
  projectType?: ProjectTypeName
  supplementaryImage?: ProjectSupplementaryImage
  technologies: readonly TechnologyName[]
  technologyBackground?: TechnologyTagBackground
  technologyIconVisibility?: Partial<Record<TechnologyName, boolean>>
  title: string
  videoSrc?: string
  year?: string
}

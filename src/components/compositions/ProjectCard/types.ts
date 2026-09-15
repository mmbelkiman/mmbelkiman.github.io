import type { ReactNode } from 'react'
import type { ProjectTypeName } from '@/components/compositions/ProjectTypeBadge'

export type ProjectExternalLink = {
  label: string
  url: string
}

export type ProjectTechnologyName =
  'firebase' | 'node-js' | 'postgresql' | 'react' | 'react-native' | 'typescript'

export type ProjectTechnologyBackground = 'filled' | 'transparent'

export type ProjectCardProps = {
  description: string
  externalLinks?: readonly ProjectExternalLink[]
  featured?: boolean
  icon: ReactNode
  imageAlt: string
  imageSrc: string
  projectType?: ProjectTypeName
  subtitle: string
  technologies: readonly ProjectTechnologyName[]
  technologyBackground?: ProjectTechnologyBackground
  technologyIconVisibility?: Partial<Record<ProjectTechnologyName, boolean>>
  title: string
  year?: string
}

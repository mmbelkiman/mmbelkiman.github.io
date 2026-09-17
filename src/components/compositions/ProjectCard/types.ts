import type { ReactNode } from 'react'
import type { ProjectTypeName } from '@/components/compositions/ProjectTypeBadge'

export type ProjectExternalLink = {
  label: string
  url: string
}

export type ProjectTechnologyName =
  | 'amplitude'
  | 'apollo-client'
  | 'android-sdk'
  | 'aws-cognito'
  | 'csharp'
  | 'css'
  | 'delphi'
  | 'docker'
  | 'express'
  | 'exoplayer'
  | 'firebase'
  | 'frontegg'
  | 'github-actions'
  | 'html'
  | 'html-css'
  | 'java'
  | 'javascript'
  | 'jest'
  | 'jspreport'
  | 'jquery'
  | 'kony'
  | 'monogame'
  | 'mobx'
  | 'mysql'
  | 'nestjs'
  | 'next-js'
  | 'node-js'
  | 'opengl'
  | 'electron'
  | 'php'
  | 'postgresql'
  | 'prisma'
  | 'react'
  | 'react-hooks'
  | 'react-native'
  | 'realm'
  | 'redux'
  | 'sentry'
  | 'storybook'
  | 'styled-components'
  | 'surveyjs'
  | 'swagger'
  | 'sql'
  | 'sqlite'
  | 'sql-server'
  | 'typescript'
  | 'typeorm'
  | 'unity'
  | 'graphql'
  | 'redis'

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
  videoSrc?: string
  year?: string
}

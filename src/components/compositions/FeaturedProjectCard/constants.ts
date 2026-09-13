import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { DatabaseIcon } from '@phosphor-icons/react/dist/csr/Database'
import { FileJsIcon } from '@phosphor-icons/react/dist/csr/FileJs'
import { FileTsIcon } from '@phosphor-icons/react/dist/csr/FileTs'
import { FireIcon } from '@phosphor-icons/react/dist/csr/Fire'
import type { Icon } from '@phosphor-icons/react'
import type { FeaturedProjectTechnologyName } from './types'

type FeaturedProjectTechnologyDefinition = {
  icon: Icon
  label: string
}

export const FEATURED_PROJECT_TECHNOLOGY_NAMES = [
  'react',
  'react-native',
  'typescript',
  'firebase',
  'node-js',
  'postgresql',
] as const satisfies readonly FeaturedProjectTechnologyName[]

export const FEATURED_PROJECT_TECHNOLOGIES: Record<
  FeaturedProjectTechnologyName,
  FeaturedProjectTechnologyDefinition
> = {
  react: { icon: CodeIcon, label: 'React' },
  'react-native': { icon: CodeIcon, label: 'React Native' },
  typescript: { icon: FileTsIcon, label: 'TypeScript' },
  firebase: { icon: FireIcon, label: 'Firebase' },
  'node-js': { icon: FileJsIcon, label: 'Node.js' },
  postgresql: { icon: DatabaseIcon, label: 'PostgreSQL' },
}

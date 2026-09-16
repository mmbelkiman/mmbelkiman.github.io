import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { DatabaseIcon } from '@phosphor-icons/react/dist/csr/Database'
import { FileJsIcon } from '@phosphor-icons/react/dist/csr/FileJs'
import { FileTsIcon } from '@phosphor-icons/react/dist/csr/FileTs'
import { FireIcon } from '@phosphor-icons/react/dist/csr/Fire'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { FileCodeIcon } from '@phosphor-icons/react/dist/csr/FileCode'
import { FileSqlIcon } from '@phosphor-icons/react/dist/csr/FileSql'
import type { Icon } from '@phosphor-icons/react'
import type { ProjectTechnologyName } from './types'

type ProjectTechnologyDefinition = {
  icon: Icon
  label: string
}

export const PROJECT_TECHNOLOGY_NAMES = [
  'react',
  'react-native',
  'typescript',
  'javascript',
  'java',
  'php',
  'html-css',
  'sql',
  'unity',
  'monogame',
  'csharp',
  'firebase',
  'node-js',
  'postgresql',
] as const satisfies readonly ProjectTechnologyName[]

export const PROJECT_TECHNOLOGIES: Record<
  ProjectTechnologyName,
  ProjectTechnologyDefinition
> = {
  react: { icon: CodeIcon, label: 'React' },
  'react-native': { icon: CodeIcon, label: 'React Native' },
  typescript: { icon: FileTsIcon, label: 'TypeScript' },
  javascript: { icon: FileJsIcon, label: 'JavaScript' },
  java: { icon: FileCodeIcon, label: 'Java' },
  php: { icon: FileCodeIcon, label: 'PHP' },
  'html-css': { icon: FileCodeIcon, label: 'HTML / CSS' },
  sql: { icon: FileSqlIcon, label: 'SQL' },
  unity: { icon: GameControllerIcon, label: 'Unity' },
  monogame: { icon: GameControllerIcon, label: 'MonoGame' },
  csharp: { icon: FileCodeIcon, label: 'C#' },
  firebase: { icon: FireIcon, label: 'Firebase' },
  'node-js': { icon: FileJsIcon, label: 'Node.js' },
  postgresql: { icon: DatabaseIcon, label: 'PostgreSQL' },
}

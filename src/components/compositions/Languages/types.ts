import type { ReactNode } from 'react'

export type Language = {
  flag: ReactNode
  name: string
  proficiency: string
}

export type LanguagesProps = {
  languages: readonly Language[]
}

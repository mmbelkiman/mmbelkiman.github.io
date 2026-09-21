import type { ReactNode } from 'react'

export type ContactLink = {
  href: string
  icon: ReactNode
  label: string
  value: string
}

export type ContactLinksProps = {
  links: readonly ContactLink[]
}

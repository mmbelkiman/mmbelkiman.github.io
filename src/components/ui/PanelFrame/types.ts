import type { ReactNode } from 'react'

export type PanelFrameProps = {
  children: ReactNode
  header?: ReactNode
  tone?: 'default' | 'dark'
}

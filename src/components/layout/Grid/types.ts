import type { ReactNode } from 'react'

export type GridProps = {
  children: ReactNode
  columns?: number
  rowHeight?: string
}

export type ColumnProps = {
  children: ReactNode
  weight: number
}

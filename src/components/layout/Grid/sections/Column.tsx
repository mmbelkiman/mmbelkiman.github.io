import type { CSSProperties } from 'react'
import type { ColumnProps } from '../types'

export function Column({ children, weight }: ColumnProps) {
  const style = { '--v1-grid-column-weight': weight } as CSSProperties

  return (
    <div className="v1-grid__column" style={style}>
      {children}
    </div>
  )
}

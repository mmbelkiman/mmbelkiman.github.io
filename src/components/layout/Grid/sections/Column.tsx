import type { CSSProperties } from 'react'
import type { ColumnProps } from '../types'

export function Column({ children, weight }: ColumnProps) {
  const style = { '--grid-column-weight': weight } as CSSProperties

  return (
    <div className="grid-column" style={style}>
      {children}
    </div>
  )
}

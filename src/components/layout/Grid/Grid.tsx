import type { CSSProperties } from 'react'
import { DEFAULT_GRID_COLUMNS } from './constants'
import { Column } from './sections/Column'
import type { GridProps } from './types'

export function Grid({ children, columns = DEFAULT_GRID_COLUMNS, rowHeight }: GridProps) {
  const style = {
    '--v1-grid-columns': columns,
    '--v1-grid-row-height': rowHeight ?? 'auto',
  } as CSSProperties

  return (
    <div className="v1-grid" style={style}>
      {children}
    </div>
  )
}

Grid.Column = Column

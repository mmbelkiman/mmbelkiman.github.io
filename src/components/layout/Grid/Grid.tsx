import type { CSSProperties } from 'react'
import { DEFAULT_GRID_COLUMNS } from './constants'
import { Column } from './sections/Column'
import type { GridProps } from './types'

export function Grid({ children, columns = DEFAULT_GRID_COLUMNS, rowHeight }: GridProps) {
  const style = {
    '--grid-columns': columns,
    '--grid-row-height': rowHeight ?? 'auto',
  } as CSSProperties

  return (
    <div className="grid" style={style}>
      {children}
    </div>
  )
}

Grid.Column = Column

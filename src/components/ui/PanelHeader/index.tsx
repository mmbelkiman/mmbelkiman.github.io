import './style.css'
import type { PanelHeaderProps } from './types'

export type { PanelHeaderProps } from './types'

export function PanelHeader({ endContent, label, prefix = '//' }: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <span className="panel-header-label">
        <span aria-hidden="true" className="panel-header-prefix">
          {prefix}
        </span>
        {label}
      </span>
      <span className="panel-header-details">{endContent}</span>
    </div>
  )
}

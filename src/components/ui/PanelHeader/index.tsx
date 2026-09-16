import './style.css'
import type { PanelHeaderProps } from './types'

export type { PanelHeaderProps } from './types'

export function PanelHeader({ endContent, label, prefix = '//' }: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <span className="panel-header__label">
        <span aria-hidden="true" className="panel-header__prefix">
          {prefix}
        </span>
        {label}
      </span>
      <span className="panel-header__details">{endContent}</span>
    </div>
  )
}

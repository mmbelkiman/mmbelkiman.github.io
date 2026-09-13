import './style.css'
import type { PanelHeaderProps } from './types'

export type { PanelHeaderProps } from './types'

export function PanelHeader({ endContent, label, prefix = '//' }: PanelHeaderProps) {
  return (
    <div className="v1-panel-header">
      <span className="v1-panel-header__label">
        <span aria-hidden="true" className="v1-panel-header__prefix">
          {prefix}
        </span>
        {label}
      </span>
      <span className="v1-panel-header__details">{endContent}</span>
    </div>
  )
}

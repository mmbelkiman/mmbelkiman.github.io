import type { ReactNode } from 'react'
import './PanelHeader.css'

export type PanelHeaderProps = {
  className?: string
  endContent?: ReactNode
  label: string
  prefix?: string
}

export function PanelHeader({ className, endContent, label, prefix = '//' }: PanelHeaderProps) {
  const classNames = ['v1-panel-header', className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
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

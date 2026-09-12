import type { ReactNode } from 'react'
import './PanelFrame.css'

export type PanelFrameProps = {
  children: ReactNode
  className?: string
  header?: ReactNode
  tone?: 'default' | 'dark'
}

export function PanelFrame({ children, className, header, tone = 'default' }: PanelFrameProps) {
  const classNames = ['v1-panel-frame', `v1-panel-frame--${tone}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classNames}>
      {header ? <div className="v1-panel-frame__header">{header}</div> : null}
      <div className="v1-panel-frame__content">{children}</div>
    </section>
  )
}

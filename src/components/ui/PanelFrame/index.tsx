import './style.css'
import type { PanelFrameProps } from './types'

export type { PanelFrameProps } from './types'

export function PanelFrame({ children, header, tone = 'default' }: PanelFrameProps) {
  return (
    <section className={`panel-frame panel-frame-${tone}`}>
      {header ? <div className="panel-frame-header">{header}</div> : null}
      <div className="panel-frame-content">{children}</div>
    </section>
  )
}

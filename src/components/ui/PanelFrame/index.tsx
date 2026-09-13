import './style.css'
import type { PanelFrameProps } from './types'

export type { PanelFrameProps } from './types'

export function PanelFrame({ children, header, tone = 'default' }: PanelFrameProps) {
  return (
    <section className={`v1-panel-frame v1-panel-frame--${tone}`}>
      {header ? <div className="v1-panel-frame__header">{header}</div> : null}
      <div className="v1-panel-frame__content">{children}</div>
    </section>
  )
}

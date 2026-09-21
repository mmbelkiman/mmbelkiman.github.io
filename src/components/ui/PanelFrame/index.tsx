import './style.css'
import type { PanelFrameProps } from './types'

export type { PanelFrameProps } from './types'

const PANEL_FRAME_TONE_CLASSES = {
  default: undefined,
  dark: 'panel-frame-dark',
} as const

export function PanelFrame({ children, header, tone = 'default' }: PanelFrameProps) {
  return (
    <section className={['panel-frame', PANEL_FRAME_TONE_CLASSES[tone]].filter(Boolean).join(' ')}>
      {header ? <div className="panel-frame-header">{header}</div> : null}
      <div className="panel-frame-content">{children}</div>
    </section>
  )
}

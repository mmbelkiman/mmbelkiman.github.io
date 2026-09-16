import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { QUICK_INFO_ITEMS } from './constants'
import { QuickInfoItem } from './sections/QuickInfoItem'
import './style.css'

export function QuickInfoRow() {
  return (
    <PanelFrame header={<PanelHeader label="Quick info" />}>
      <section aria-label="Quick information" className="quick-info-row">
        {QUICK_INFO_ITEMS.map((item) => (
          <QuickInfoItem {...item} key={item.label} />
        ))}
      </section>
    </PanelFrame>
  )
}

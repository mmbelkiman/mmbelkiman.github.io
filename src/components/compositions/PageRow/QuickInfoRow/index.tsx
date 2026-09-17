import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { QUICK_INFO_ITEMS } from './constants'
import { QuickInfoItem } from './sections/QuickInfoItem'
import './style.css'

export function QuickInfoRow() {
  const { t } = useTranslation()
  const labels = t('v1.quickInfo', { returnObjects: true }) as string[]

  return (
    <PanelFrame header={<PanelHeader label={t('v1.sections.quickInfo')} />}>
      <section aria-label={t('v1.sections.quickInfo')} className="quick-info-row">
        {QUICK_INFO_ITEMS.map((item, index) => (
          <QuickInfoItem {...item} key={item.label} label={labels[index] ?? item.label} />
        ))}
      </section>
    </PanelFrame>
  )
}
import { useTranslation } from 'react-i18next'

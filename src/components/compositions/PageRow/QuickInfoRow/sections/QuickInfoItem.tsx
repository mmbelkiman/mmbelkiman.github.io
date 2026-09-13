import { Text } from '@/components/ui/Text'
import type { QuickInfoItem as QuickInfoItemType } from '../types'

type QuickInfoItemProps = QuickInfoItemType

export function QuickInfoItem({ icon: Icon, label }: QuickInfoItemProps) {
  return (
    <div className="v1-quick-info-row__item">
      <Icon aria-hidden="true" className="v1-quick-info-row__icon" size={28} weight="fill" />
      <Text color="secondary" size="label">
        {label}
      </Text>
    </div>
  )
}

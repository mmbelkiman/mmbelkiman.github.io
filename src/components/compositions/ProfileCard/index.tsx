import { MapPinIcon } from '@phosphor-icons/react/dist/csr/MapPin'
import { useTranslation } from 'react-i18next'
import profileImage from '@/assets/images/profile.png'
import photoStatic from '@/assets/images/photo-static.gif'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import './style.css'

export function ProfileCard() {
  const { t } = useTranslation()

  return (
    <PanelFrame header={<PanelHeader label={t('v1.sections.profile')} />}>
      <section aria-label={t('v1.sections.profile')} className="profile-card">
        <div className="profile-card__photo-frame">
          <img alt={t('v1.profile.name')} className="profile-card__photo" src={profileImage} />
          <img
            alt=""
            aria-hidden="true"
            className="profile-card__photo-static"
            src={photoStatic}
          />
        </div>

        <div className="profile-card__details">
          <Heading level={2}>{t('v1.profile.name')}</Heading>
          <Text color="secondary">{t('v1.profile.subtitle')}</Text>
        </div>

        <div className="profile-card__location">
          <MapPinIcon aria-hidden="true" size="var(--icon-size-normal)" weight="fill" />
          <Text color="secondary" size="meta">
            {t('v1.profile.location')}
          </Text>
        </div>
      </section>
    </PanelFrame>
  )
}

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
        <div className="profile-card-photo-frame">
          <img alt={t('v1.profile.name')} className="profile-card-photo" src={profileImage} />
          <img
            alt=""
            aria-hidden="true"
            className="profile-card-photo-static"
            src={photoStatic}
          />
        </div>

        <div className="profile-card-details">
          <Heading level={2}>
            <span className="profile-card-handle">{t('v1.profile.handle')}</span>
            <span aria-hidden="true" className="profile-card-separator">
              {' :: '}
            </span>
            <span className="profile-card-credential">{t('v1.profile.subtitle')}</span>
          </Heading>
        </div>

        <div className="profile-card-location">
          <MapPinIcon aria-hidden="true" size="var(--icon-size-normal)" weight="fill" />
          <Text color="secondary" size="meta">
            {t('v1.profile.location')}
          </Text>
        </div>
      </section>
    </PanelFrame>
  )
}

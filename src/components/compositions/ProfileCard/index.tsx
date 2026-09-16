import { MapPinIcon } from '@phosphor-icons/react/dist/csr/MapPin'
import profileImage from '@/assets/images/profile.png'
import photoStatic from '@/assets/images/photo-static.gif'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import { PROFILE_CARD_CONTENT } from './constants'
import './style.css'

export function ProfileCard() {
  return (
    <PanelFrame header={<PanelHeader label="Profile" />}>
      <section aria-label="Profile" className="profile-card">
        <div className="profile-card__photo-frame">
          <img alt="Marcelo Belkiman" className="profile-card__photo" src={profileImage} />
          <img
            alt=""
            aria-hidden="true"
            className="profile-card__photo-static"
            src={photoStatic}
          />
        </div>

        <div className="profile-card__details">
          <Heading level={2}>{PROFILE_CARD_CONTENT.name}</Heading>
          <Text color="secondary">{PROFILE_CARD_CONTENT.subtitle}</Text>
        </div>

        <div className="profile-card__location">
          <MapPinIcon aria-hidden="true" size="var(--icon-size-normal)" weight="fill" />
          <Text color="secondary" size="meta">
            {PROFILE_CARD_CONTENT.location}
          </Text>
        </div>
      </section>
    </PanelFrame>
  )
}

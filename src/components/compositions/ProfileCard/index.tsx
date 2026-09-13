import { MapPinIcon } from '@phosphor-icons/react/dist/csr/MapPin'
import profileImage from '@/assets/images/profile.png'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import { PROFILE_CARD_CONTENT } from './constants'
import './style.css'

export function ProfileCard() {
  return (
    <PanelFrame header={<PanelHeader label="Profile" />}>
      <section aria-label="Profile" className="v1-profile-card">
        <div className="v1-profile-card__photo-frame">
          <img alt="Marcelo Belkiman" className="v1-profile-card__photo" src={profileImage} />
        </div>

        <div className="v1-profile-card__details">
          <Heading level={2}>{PROFILE_CARD_CONTENT.name}</Heading>
          <Text color="secondary">{PROFILE_CARD_CONTENT.subtitle}</Text>
        </div>

        <div className="v1-profile-card__location">
          <MapPinIcon aria-hidden="true" size={20} weight="fill" />
          <Text color="secondary" size="meta">
            {PROFILE_CARD_CONTENT.location}
          </Text>
        </div>
      </section>
    </PanelFrame>
  )
}

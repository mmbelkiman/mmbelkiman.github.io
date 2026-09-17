import { AboutMeCard } from '@/components/compositions/AboutMeCard'
import { useTranslation } from 'react-i18next'
import { ProfileCard } from '@/components/compositions/ProfileCard'
import { Grid } from '@/components/layout/Grid'
import './style.css'

export function ProfileAboutRow() {
  const { t } = useTranslation()

  return (
    <section aria-label={`${t('v1.sections.profile')} ${t('v1.sections.about')}`} className="profile-about-row">
      <Grid>
        <Grid.Column weight={3}>
          <ProfileCard />
        </Grid.Column>
        <Grid.Column weight={7}>
          <AboutMeCard />
        </Grid.Column>
      </Grid>
    </section>
  )
}

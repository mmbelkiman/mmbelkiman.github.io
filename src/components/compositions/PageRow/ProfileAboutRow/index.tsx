import { AboutMeCard } from '@/components/compositions/AboutMeCard'
import { ProfileCard } from '@/components/compositions/ProfileCard'
import { Grid } from '@/components/layout/Grid'
import './style.css'

export function ProfileAboutRow() {
  return (
    <section aria-label="Profile and about me" className="profile-about-row">
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

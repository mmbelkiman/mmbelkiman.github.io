import { Grid } from '@/components/layout/Grid'
import { ClockPlayerHeader } from '@/components/compositions/ClockPlayerHeader'
import { IdentityHeader } from '@/components/compositions/IdentityHeader'
import { DEFAULT_FAMILY_NAME, DEFAULT_GIVEN_NAME, DEFAULT_ROLES } from './constants'
import './style.css'
import type { PortfolioTopRowProps } from './types'

export type { PortfolioTopRowProps } from './types'

export function PortfolioTopRow({
  familyName = DEFAULT_FAMILY_NAME,
  givenName = DEFAULT_GIVEN_NAME,
  locale,
  locationLabel,
  roles = DEFAULT_ROLES,
  spotifyUrl,
  timeZone,
}: PortfolioTopRowProps) {
  return (
    <header className="v1-portfolio-top-row">
      <Grid rowHeight="7rem">
        <Grid.Column weight={3}>
          <IdentityHeader familyName={familyName} givenName={givenName} roles={roles} />
        </Grid.Column>
        <Grid.Column weight={7}>
          <ClockPlayerHeader
            locale={locale}
            locationLabel={locationLabel}
            spotifyUrl={spotifyUrl}
            timeZone={timeZone}
          />
        </Grid.Column>
      </Grid>
    </header>
  )
}

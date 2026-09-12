import { ClockPlayerHeader } from '../ui/ClockPlayerHeader'
import { IdentityHeader } from '../ui/IdentityHeader'
import './PortfolioTopRow.css'

export type PortfolioTopRowProps = {
  className?: string
  familyName?: string
  givenName?: string
  locale?: string
  locationLabel?: string
  roles?: readonly string[]
  spotifyUrl?: string
  timeZone?: string
}

export function PortfolioTopRow({
  className,
  familyName = 'Belkiman',
  givenName = 'Marcelo',
  locale,
  locationLabel,
  roles = ['Software Engineer', 'Mobile Developer', 'Full Stack'],
  spotifyUrl,
  timeZone,
}: PortfolioTopRowProps) {
  return (
    <header className={['v1-portfolio-top-row', className].filter(Boolean).join(' ')}>
      <IdentityHeader familyName={familyName} givenName={givenName} roles={roles} />
      <ClockPlayerHeader
        locale={locale}
        locationLabel={locationLabel}
        spotifyUrl={spotifyUrl}
        timeZone={timeZone}
      />
    </header>
  )
}

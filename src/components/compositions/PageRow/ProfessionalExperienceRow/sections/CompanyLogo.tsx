import { getCompanyInitials } from '../utils'

type CompanyLogoProps = {
  company: string
  logo?: string
  size?: 'compact' | 'large'
}

export function CompanyLogo({ company, logo, size = 'compact' }: CompanyLogoProps) {
  return (
    <div
      className={`professional-experience-row__company-logo professional-experience-row__company-logo--${size}`}
    >
      {logo ? <img alt={`${company} logo`} src={logo} /> : getCompanyInitials(company)}
    </div>
  )
}

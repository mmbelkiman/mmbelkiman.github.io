import { getCompanyInitials } from '../utils'

const COMPANY_LOGO_SIZE_CLASSES = {
  compact: 'professional-experience-row-company-logo-compact',
  large: 'professional-experience-row-company-logo-large',
} as const

type CompanyLogoProps = {
  company: string
  logo?: string
  size?: 'compact' | 'large'
}

export function CompanyLogo({ company, logo, size = 'compact' }: CompanyLogoProps) {
  return (
    <div className={`professional-experience-row-company-logo ${COMPANY_LOGO_SIZE_CLASSES[size]}`}>
      {logo ? <img alt={`${company} logo`} src={logo} /> : getCompanyInitials(company)}
    </div>
  )
}

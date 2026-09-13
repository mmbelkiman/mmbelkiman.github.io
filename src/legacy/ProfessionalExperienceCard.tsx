export type ProfessionalExperienceCardProps = {
  title: string
  logoUrl: string
  period: string
  role: string
  descriptions?: string[]
}

export function ProfessionalExperienceCard({
  title,
  logoUrl,
  period,
  role,
  descriptions = [],
}: ProfessionalExperienceCardProps) {
  return (
    <div className="pn-ProductNav_Link card-info">
      <div>
        <img className="img-education" src={logoUrl} alt={title} />
        <div className="title-education">{title}</div>
        <div className="subtitle-education">{period}</div>
        <div className="subtitle-education">{role}</div>
        {descriptions.map((item, index) => (
          <p key={`${title}-${index}`}>{item}</p>
        ))}
      </div>
    </div>
  )
}

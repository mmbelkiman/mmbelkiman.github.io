export type EducationItem = {
  institution: string
  logoAlt: string
  logoSrc: string
  period: string
  title: string
}

export type EducationProps = {
  items: readonly EducationItem[]
}

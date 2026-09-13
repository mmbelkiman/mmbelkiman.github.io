export type AcademicEducationCardProps = {
  institution: string;
  logoUrl: string;
  period: string;
  title: string;
};

export function AcademicEducationCard({
  institution,
  logoUrl,
  period,
  title,
}: AcademicEducationCardProps) {
  return (
    <div className="pn-ProductNav_Link card-info">
      <div>
        <img className="img-education" src={logoUrl} alt={institution} />
        <div className="title-education">{title}</div>
        <div className="subtitle-education">{period}</div>
        <div className="subtitle-education">{institution}</div>
      </div>
    </div>
  );
}

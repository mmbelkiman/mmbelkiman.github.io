type AcademicEducation = {
  institutionKey: string;
  logoUrl: string;
  periodKey: string;
  titleKey: string;
};

export const academicEducation: AcademicEducation[] = [
  {
    logoUrl: 'img-unyleya.png',
    titleKey: 'education.unyleya.title',
    periodKey: 'education.unyleya.period',
    institutionKey: 'education.unyleya.institution',
  },
  {
    logoUrl: 'img-metrocamp.png',
    titleKey: 'education.metrocamp.title',
    periodKey: 'education.metrocamp.period',
    institutionKey: 'education.metrocamp.institution',
  },
  {
    logoUrl: 'img-centropaulasouza.png',
    titleKey: 'education.centroPaulaSouza.technicalMaintenance.title',
    periodKey: 'education.centroPaulaSouza.technicalMaintenance.period',
    institutionKey: 'education.centroPaulaSouza.technicalMaintenance.institution',
  },
  {
    logoUrl: 'img-centropaulasouza.png',
    titleKey: 'education.centroPaulaSouza.technicalProgramming.title',
    periodKey: 'education.centroPaulaSouza.technicalProgramming.period',
    institutionKey: 'education.centroPaulaSouza.technicalProgramming.institution',
  },
];

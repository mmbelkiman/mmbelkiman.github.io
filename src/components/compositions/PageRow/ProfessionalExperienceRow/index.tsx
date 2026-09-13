import { useState } from 'react'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { ExperienceDetails } from './sections/ExperienceDetails'
import { ExperienceTimeline } from './sections/ExperienceTimeline'
import './style.css'
import type { ProfessionalExperienceRowProps } from './types'

export type {
  Engagement,
  Experience,
  ExperienceMonthYear,
  ExperiencePeriod,
  ProfessionalExperienceRowProps,
} from './types'

export function ProfessionalExperienceRow({
  experiences,
  initialSelectedExperienceId,
}: ProfessionalExperienceRowProps) {
  const [selectedExperienceId, setSelectedExperienceId] = useState(
    initialSelectedExperienceId ?? experiences[0]?.id,
  )
  const selectedExperience =
    experiences.find((experience) => experience.id === selectedExperienceId) ?? experiences[0]

  return (
    <PanelFrame header={<PanelHeader label="Professional experience" />}>
      <section aria-label="Professional experience" className="v1-professional-experience-row">
        <ExperienceTimeline
          experiences={experiences}
          onSelect={setSelectedExperienceId}
          selectedExperienceId={selectedExperience?.id}
        />
        {selectedExperience ? <ExperienceDetails experience={selectedExperience} /> : null}
      </section>
    </PanelFrame>
  )
}

import { useState } from 'react'
import { Grid } from '@/components/layout/Grid'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { ProjectArchiveDetails } from './sections/ProjectArchiveDetails'
import { ProjectArchiveList } from './sections/ProjectArchiveList'
import './style.css'
import type { ProjectArchiveRowProps } from './types'

export type {
  ProjectArchiveLink,
  ProjectArchiveProject,
  ProjectArchiveProjectKind,
  ProjectArchiveRowProps,
} from './types'

export function ProjectArchiveRow({ initialSelectedProjectId, projects }: ProjectArchiveRowProps) {
  const [selectedProjectId, setSelectedProjectId] = useState(
    initialSelectedProjectId ?? projects[0].id,
  )
  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? projects[0]

  return (
    <section aria-label="Project archive" className="v1-project-archive-row">
      <Grid>
        <Grid.Column weight={6}>
          <PanelFrame
            header={
              <PanelHeader endContent={`${projects.length} projects`} label="Project archive" />
            }
          >
            <ProjectArchiveList
              onSelect={setSelectedProjectId}
              projects={projects}
              selectedProjectId={selectedProject.id}
            />
          </PanelFrame>
        </Grid.Column>
        <Grid.Column weight={4}>
          <PanelFrame header={<PanelHeader label={selectedProject.title} />} tone="dark">
            <ProjectArchiveDetails project={selectedProject} />
          </PanelFrame>
        </Grid.Column>
      </Grid>
    </section>
  )
}

import type { ProjectCardProps } from '@/components/compositions/ProjectCard'

export type EpicGolfFeaturedProjectProps = Pick<
  ProjectCardProps,
  | 'description'
  | 'externalLinks'
  | 'imageAlt'
  | 'imageSrc'
  | 'logoSrc'
  | 'projectType'
  | 'supplementaryImage'
  | 'technologies'
  | 'title'
  | 'videoSrc'
  | 'year'
>

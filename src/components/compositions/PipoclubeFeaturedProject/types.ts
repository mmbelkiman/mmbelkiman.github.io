import type { ProjectCardProps } from '@/components/compositions/ProjectCard'

export type PipoclubeFeaturedProjectProps = Pick<
  ProjectCardProps,
  | 'description'
  | 'externalLinks'
  | 'imageAlt'
  | 'imageSrc'
  | 'logoSrc'
  | 'projectType'
  | 'technologies'
  | 'title'
  | 'videoSrc'
  | 'year'
>

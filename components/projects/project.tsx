import { ComponentProps, Dispatch, SetStateAction } from 'react'
import type { Project } from '@/lib/schemas'
import { formatDateRange } from '@/lib/utils'
import SkillsList from './skills-list'

type ProjectProps = {
  project: Project
  index: number
  setImage: Dispatch<SetStateAction<{ active: boolean; index: number }>>
  className?: string
}

const Project = ({
  project,
  index,
  setImage,
  className,
  ...props
}: ComponentProps<'button'> & ProjectProps) => {
  return (
    <button
      className="flex w-full cursor-none flex-col justify-between gap-x-4 gap-y-1 sm:flex-row"
      onMouseEnter={() => setImage({ active: true, index: index })}
      onFocus={() => setImage({ active: true, index: index })}
      onMouseLeave={() => setImage({ active: false, index: index })}
      {...props}
    >
      <div className="max-w-lg transition-all group-hover:-translate-x-2">
        <p className="text-start text-lg font-semibold">{project.name}</p>
        {project.skills.length > 0 && (
          <div className="mt-1">
            <SkillsList skills={project.skills} />
          </div>
        )}
      </div>
      {project.start && (
        <time className="mt-1 text-sm font-light capitalize transition-all group-hover:translate-x-2 text-start">
          {formatDateRange(project.start, project.end)}
        </time>
      )}
    </button>
  )
}

export default Project

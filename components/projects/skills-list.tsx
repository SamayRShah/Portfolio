import { useId } from 'react'
import { skills as skillSet } from '@/lib/data'
import { Skill } from '@/lib/schemas'
import { Badge } from '../shad-ui/badge'

type SkillsProps = {
  skills: Skill[]
  abbrs?: boolean
  useLong?: boolean
}

const SkillsList = ({ skills, abbrs = false }: SkillsProps) => {
  const id = useId()

  return (
    <div className="flex flex-wrap gap-1">
      {skills.map((skill, idx) => {
        if (!skill) return null

        return (
          <Badge
            variant="outline"
            className="text-muted-foreground uppercase hover:text-foreground"
            key={`${id}_${skill.short}_${idx}`}
          >
            {skill.long && abbrs ? (
              <abbr title={skill.long}>{skill.short}</abbr>
            ) : (
              skill.short
            )}
          </Badge>
        )
      })}
    </div>
  )
}

export default SkillsList

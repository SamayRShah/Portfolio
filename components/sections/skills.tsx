import { skills } from '@/lib/data'
import SkillsList from '../projects/skills-list'

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="title">Skills</h2>
      <SkillsList skills={Object.values(skills)} abbrs={true} />
    </section>
  )
}

export default Skills

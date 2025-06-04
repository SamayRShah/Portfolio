import { projects } from '@/lib/data'
import ProjectsList from '../projects/projects-list'

const Projects = () => (
  <section id="projects">
    <h2 className="title">Featured Projects</h2>
    <ProjectsList projects={projects} />
  </section>
)

export default Projects

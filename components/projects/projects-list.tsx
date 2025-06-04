'use client'

import { useState } from 'react'
import type { Project as ProjectType } from '@/lib/schemas'
import Project from './project'
import ProjectImage from './project-image'
import ProjectModal from './project-modal'

const ProjectsList = ({ projects }: { projects: ProjectType[] }) => {
  const [image, setImage] = useState({ active: false, index: 0 })
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  )

  const openProject = (project: ProjectType) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <>
      <ul
        className="items-between flex flex-col justify-center"
        onBlur={() => setImage(prev => ({ ...prev, active: false }))}
      >
        {projects.map((project, idx) => (
          <li
            key={`project_${idx}_${project.name}`}
            className="group w-full py-2 transition-colors hover:opacity-60 [&:not(:first-child)]:border-t-2"
            onClick={() => openProject(project)}
          >
            <Project
              key={idx}
              index={idx}
              project={project}
              setImage={setImage}
            />
          </li>
        ))}
        <ProjectImage image={image} projects={projects} />
      </ul>
      <ProjectModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        project={selectedProject}
      />
    </>
  )
}

export default ProjectsList

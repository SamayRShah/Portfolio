// components/project-details-modal.tsx
'use client'

import Image from 'next/image'
import { XIcon } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/shad-ui/dialog'
import type { Project as ProjectType } from '@/lib/schemas'
import { Button } from '../shad-ui/button'
import SkillsList from './skills-list'

type ProjectModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: ProjectType | null
}

const ProjectModal = ({ open, onOpenChange, project }: ProjectModalProps) => {
  if (!project) return null
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="title mb-0 text-3xl">
            {project.name}
          </DialogTitle>
          <SkillsList skills={project.skills} abbrs={true} />
        </DialogHeader>
        <DialogClose asChild>
          <Button
            variant="ghost"
            aria-label="Close"
            className="absolute top-4 right-4 size-5 cursor-pointer"
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </DialogClose>
        {project.image && (
          <div className="relative h-60 w-full overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.name || ''}
              className="object-cover"
              fill
              priority
            />
          </div>
        )}
        <ul className="ml-4 list-outside list-disc">
          {project.description.map((line, idx) => (
            <li
              key={`desc_${project.name}_${idx}`}
              className="prose dark:prose-invert text-sm"
            >
              {line}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal

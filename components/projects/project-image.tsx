import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'motion/react'
import type { Project } from '@/lib/schemas'

type ModalProps = {
  projects: Project[]
  image: { active: boolean; index: number }
}

const scAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  open: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0]
    }
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0]
    }
  }
}

const ProjectImage = ({ projects, image }: ModalProps) => {
  const { active, index } = image
  const container = useRef(null)
  const cursor = useRef(null)

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, 'left', {
      duration: 0.8,
      ease: 'power3'
    })
    const moveContainerY = gsap.quickTo(container.current, 'top', {
      duration: 0.8,
      ease: 'power3'
    })
    const moveCursorX = gsap.quickTo(cursor.current, 'left', {
      duration: 0.1,
      ease: 'power3'
    })
    const moveCursorY = gsap.quickTo(cursor.current, 'top', {
      duration: 0.1,
      ease: 'power3'
    })

    const handleMouse = (e: MouseEvent) => {
      const { pageX, pageY } = e
      moveContainerX(pageX)
      moveContainerY(pageY)
      moveCursorX(pageX)
      moveCursorY(pageY)
    }

    window.addEventListener('mousemove', handleMouse)

    return () => {
      window.removeEventListener('mousemove', handleMouse)
    }
  })

  return (
    <>
      <motion.div
        ref={container}
        variants={scAnimation}
        initial="initial"
        animate={active ? 'open' : 'closed'}
        className="pointer-events-none absolute flex h-[200px] w-[300px] items-center justify-center self-center justify-self-center overflow-hidden bg-foreground cursor-none"
      >
        <div className="h-full w-full">
          {projects.map((project, idx) => {
            const { image, name } = project
            return (
              <div
                key={idx}
                className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] relative flex h-full items-center justify-center transition-[top] bg-accent"
                style={{ top: index * -100 + '%' }}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={name || ''}
                    width={250}
                    height={0}
                    className="h-auto max-h-full"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    {name}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scAnimation}
        initial="initial"
        animate={active ? 'open' : 'closed'}
        className="pointer-events-none absolute flex h-15 w-15 items-center justify-center rounded-full bg-foreground text-background cursor-none"
      >
        View
      </motion.div>
    </>
  )
}

export default ProjectImage

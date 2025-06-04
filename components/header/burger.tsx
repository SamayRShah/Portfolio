import { HTMLMotionProps, motion, MotionConfig } from 'motion/react'
import { cn } from '@/lib/utils'

type BtnProps = HTMLMotionProps<'button'> & {
  isActive: boolean
  className?: string
  spanCn?: string
}

const Burger = ({ isActive, className, spanCn, ...props }: BtnProps) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
    >
      <motion.button
        {...props}
        initial={false}
        className={cn(
          'relative size-4 cursor-pointer rounded-lg bg-accent/0 transition-colors hover:bg-accent',
          className
        )}
        animate={isActive ? 'open' : 'closed'}
      >
        <motion.span
          style={{
            left: '50%',
            top: '25%',
            x: '-50%',
            y: '-50%'
          }}
          className={cn('absolute h-0.5 w-6 bg-accent-foreground', spanCn)}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['25%', '50%', '50%']
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '25%']
            }
          }}
        />
        <motion.span
          style={{
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%'
          }}
          className={cn('absolute h-0.5 w-6 bg-accent-foreground', spanCn)}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              opacity: [1, 1, 0]
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              opacity: [0, 1, 1]
            }
          }}
        />
        <motion.span
          style={{
            left: '50%',
            bottom: '20%',
            x: '-50%',
            y: '50%'
          }}
          className={cn('absolute h-0.5 w-6 bg-accent-foreground', spanCn)}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
              bottom: ['20%', '50%', '50%']
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
              bottom: ['50%', '50%', '20%']
            }
          }}
        />
      </motion.button>
    </MotionConfig>
  )
}

export default Burger

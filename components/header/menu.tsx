'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn, tw } from '@/lib/utils'
import { useBreakPoint } from '../hooks/use-media'
import Burger from './burger'
import Nav from './nav'

const Menu = ({ className }: { className?: string }) => {
  const [hydrated, setHydrated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const isDesktop = useBreakPoint('sm')
  const [navSize, setNavSize] = useState({ width: 0, height: 0 })
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHydrated(true)
  }, [])

  // Measure the size of Nav when it's rendered
  useEffect(() => {
    if (isOpen && navRef.current) {
      requestAnimationFrame(() => {
        const { width, height } = navRef.current!.getBoundingClientRect()
        setNavSize({ width, height })
      })
    }
  }, [isOpen])

  const renderBurger = () => (
    <div className="absolute top-0 right-0 z-10">
      <Burger
        isActive={isOpen}
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true)
            setNavOpen(true)
          } else setNavOpen(false)
        }}
        className={cn(
          'size-6 rounded-sm border-black bg-white transition-colors hover:bg-black dark:border-white',
          !isOpen && 'border-2'
        )}
        spanCn={tw`h-1 w-5 bg-white mix-blend-difference`}
      />
    </div>
  )

  if (!hydrated) return null
  const renderMobileMenu = () => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="nav-container"
          initial={{ height: '1.5rem', width: '1.5rem', top: 0, right: 0 }}
          animate={{
            height: `${navSize.height + 20}px`,
            width: `${navSize.width + 20}px`,
            top: '-0.75rem',
            right: '-0.75rem'
          }}
          exit={{ height: '1.5rem', width: '1.5rem', top: 0, right: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute flex items-center justify-center rounded-lg border-2 bg-foreground"
        >
          <AnimatePresence
            onExitComplete={() => {
              console.log('Exit animation completed, closing menu')
              setIsOpen(false)
            }}
          >
            {navOpen && (
              <motion.div
                key="nav-child"
                ref={navRef}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, transition: { delay: 0 } }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 0.4
                }}
              >
                <Nav />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <div className={cn('relative ml-2 max-sm:size-6', className)}>
      {!isDesktop && renderBurger()}
      {!isDesktop ? renderMobileMenu() : <Nav />}
    </div>
  )
}

export default Menu

'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import ThemeToggle from '../themes/theme-toggle'
import Menu from './menu'

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('font-serif text-xl sm:text-2xl font-bold', className)}>
    SRS<span className="text-yellow-500">.</span>
  </div>
)

const Header = () => {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 py-4 sm:py-6 backdrop-blur-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-end px-8 sm:justify-between">
        <Logo className="order-0 max-sm:mr-auto" />
        <Menu className="order-2 sm:order-1" />
        <ThemeToggle className="order-1 sm:order-2"/>
      </div>
    </motion.header>
  )
}

export default Header

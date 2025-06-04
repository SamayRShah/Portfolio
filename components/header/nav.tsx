'use client'

import { ComponentPropsWithRef, useEffect } from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  useTabsContext
} from '@/components/ui/tabs'
import { links } from '@/lib/data'
import { cn } from '@/lib/utils'

const ScrollListener = () => {
  const { setHovered } = useTabsContext('ScrollListener')

  useEffect(() => {
    const sectionElements = links
      .map(link => {
        const el = document.querySelector(link.hash)
        return el ? { id: link.hash, el } : null
      })
      .filter(Boolean) as { id: string; el: Element }[]
    
    const handleScroll = () => {
      let current = sectionElements[0]?.id

      for (const section of sectionElements) {
        const rect = section.el.getBoundingClientRect()
        if (rect.top <= 100) {
          current = section.id
        }
      }

      setHovered(current!)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [setHovered])

  return null
}

const Nav = ({
  className,
  props
}: {
  className?: string
  props?: ComponentPropsWithRef<'nav'>
}) => {
  const hlProps = {
    style: { borderRadius: '999px' }
  }

  return (
    <Tabs
      defaultValue={links[0].hash}
      className={cn(
        'flex items-center justify-center rounded-lg border-2 px-0.5 max-sm:border-0 max-sm:p-5 sm:rounded-full',
        className
      )}
    >
      <ScrollListener />
      <TabsList
        className="flex items-center justify-between space-x-2 border-0 px-2 text-center max-sm:flex-col max-sm:p-8 sm:rounded-full"
        {...props}
      >
        {links.map(link => (
          <TabsTrigger
            key={link.hash}
            value={link.hash}
            href={link.hash}
            scroll={true}
            highlightProps={hlProps}
            className="py-1 text-center"
          >
            <span className="text-sm uppercase">{link.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default Nav

'use client'

import Link from 'next/link'
import {
  ReactElement,
  ReactNode,
  createContext,
  isValidElement,
  useContext,
  useId,
  useState
} from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

type TabsContextProps = {
  active: string
  setActive: (val: string) => void
  hovered: string
  setHovered: (val: string) => void
  id: string
}

const TabsContext = createContext<TabsContextProps | null>(null)

export const Tabs = ({
  defaultValue,
  className,
  children
}: {
  defaultValue: string
  className?: string
  children: ReactNode
}) => {
  const [active, setActive] = useState(defaultValue)
  const [hovered, setHovered] = useState(defaultValue)
  const id = useId()

  return (
    <TabsContext.Provider
      value={{ active, setActive, hovered, setHovered, id }}
    >
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export const useTabsContext = (component: string) => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error(`<${component}> must be used within <Tabs>`)
  }
  return context
}

export const TabsList = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  const { setHovered, active } = useTabsContext('TabsList')

  return (
    <ul
      role="tablist"
      className={cn(
        'flex gap-2 rounded-xl border-2 bg-background p-2 text-center',
        className
      )}
      onBlur={() => setHovered(active)}
      onMouseLeave={() => setHovered(active)}
    >
      {children}
    </ul>
  )
}

export const TabsTrigger = ({
  value,
  className,
  children,
  href,
  replace,
  scroll,
  highlightProps = {}
}: {
  value: string
  className?: string
  children: ReactNode
  href?: string
  replace?: boolean
  scroll?: boolean
  highlightProps?: React.ComponentProps<typeof motion.div>
}) => {
  const { active, setActive, hovered, setHovered, id } =
    useTabsContext('TabsTrigger')

  const isActive = active === value
  const isHovered = hovered === value

  const handleClick = () => {
    setActive(value)
  }

  const handleHover = () => setHovered(value)

  const commonProps = {
    className: cn(
      'relative block w-full cursor-pointer p-2 text-center',
      className
    ),
    'aria-selected': isActive,
    'aria-controls': `tabpanel-${id}-${value}`,
    onClick: handleClick,
    onMouseEnter: handleHover,
    onFocus: handleHover
  }

  const { className: hlClasses, ...hlProps } = highlightProps
  return (
    <li role="presentation" className="relative flex-1 text-center">
      {isHovered && (
        <motion.div
          className={cn(
            'absolute inset-0 rounded-lg border-2 border-foreground/60 bg-foreground',
            hlClasses
          )}
          layoutId={`active-tab ${id}`}
          transition={{ type: 'spring', duration: 0.6 }}
          {...hlProps}
        />
      )}
      {href ? (
        <Link href={href} replace={replace} scroll={scroll} {...commonProps}>
          <span className="relative z-10 text-white mix-blend-difference">
            {children}
          </span>
        </Link>
      ) : (
        <button type="button" {...commonProps}>
          <span className="relative z-10 text-white mix-blend-difference">
            {children}
          </span>
        </button>
      )}
    </li>
  )
}

type TabContentChild = ReactElement<{
  value: string
  children: React.ReactNode
}>
export const TabsContent = ({
  children
}: {
  children: TabContentChild[] | TabContentChild
}) => {
  const { active, id } = useTabsContext('TabsContent')

  const childrenArray = Array.isArray(children) ? children : [children]
  const activeChild = childrenArray.find(
    child => isValidElement(child) && child.props.value === active
  )

  return (
    <AnimatePresence mode="wait" initial={false}>
      {activeChild && (
        <motion.div
          key={active}
          role="tabpanel"
          id={`tabpanel-${id}-${active}`}
          className="mt-2 w-full rounded-xl border-2 p-4"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        >
          {activeChild.props.children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const ContentPanel = ({
  value,
  children
}: {
  value: string
  children: ReactNode
}) => {
  const { active, id } = useTabsContext('ContentPanel')

  if (active !== value) return null
  return <div>{children}</div>
}

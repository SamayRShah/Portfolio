import { socials } from '@/lib/data'
import { cn } from '@/lib/utils'
import Icon from './icon'

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex gap-4', className)}>
      {socials.map(item => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
          rel="noopener nonreferer"
          title={item.name}
        >
          <span className="sr-only">{item.name}</span>
          <Icon name={item.icon} aria-hidden="true" className="size-5" />
        </a>
      ))}
    </div>
  )
}

export default Socials

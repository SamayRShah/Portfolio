import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/shad-ui/avatar'
import { Experience } from '@/lib/schemas'
import { formatDateRange } from '@/lib/utils'

const TimelineItem = ({ experience }: { experience: Experience }) => {
  return (
    <li className="relative ml-10 p-2">
      <a
        href={experience.href}
        target="_blank"
        className="absolute top-4 -left-16 rounded-full"
        rel="noopener nonreferer"
      >
        <Avatar className="size-12 border-2 border-accent">
          <AvatarImage
            src={experience.logo}
            alt={experience.name}
            className="rounded-full bg-white object-contain"
          />
          <AvatarFallback className="flex h-full w-full items-center justify-center bg-accent text-center text-accent-foreground">
            {experience.name[0]}
          </AvatarFallback>
        </Avatar>
      </a>
      <h2 className="leading-none font-semibold">{experience.name}</h2>
      {experience.title && (
        <p className="text-sm text-muted-foreground">{experience.title}</p>
      )}
      <div className="flex flex-1 flex-col justify-start gap-1">
        {experience.start && (
          <time>{formatDateRange(experience.start, experience.end)}</time>
        )}
        {experience.description && (
          <ul className="ml-4 list-outside list-disc">
            {experience.description.map((desc, i) => (
              <li key={i} className="prose dark:prose-invert text-sm">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default TimelineItem

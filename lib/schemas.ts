import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { z } from 'zod'
import { skills } from './data'

const iconLinkSchema = z.object({
  name: z.string(),
  href: z.string().url(),
  icon: z.custom<keyof typeof dynamicIconImports>()
})
export type IconLink = z.infer<typeof iconLinkSchema>
const experienceSchema = z.object({
  name: z.string(),
  href: z.string(),
  title: z.string(),
  logo: z.string().optional(),
  start: z.coerce.date(),
  end: z.coerce.date().optional(),
  description: z.array(z.string()).optional()
})
export type Experience = z.infer<typeof experienceSchema>

const skillSchema = z.object({
  short: z.string(),
  long: z.string().optional()
})
export type Skill = z.infer<typeof skillSchema>

const projectSchema = z.object({
  name: z.string(),
  image: z.string().url(),
  skills: z.array(skillSchema),
  description: z.array(z.string()),
  start: z.coerce.date(),
  end: z.coerce.date().optional()
})
export type Project = z.infer<typeof projectSchema>

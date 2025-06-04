import { MapPin } from 'lucide-react'
import { about } from '@/lib/data'
import Socials from '../ui/socials'

const About = () => {
  return (
    <section id="about">
      <h1 className="title">{about.title}</h1>
      <p className="flex items-center font-light text-muted-foreground">
        <MapPin className="mr-1 size-3" /> {about.location}
      </p>
      <p className="font-light text-muted-foreground">{about.content}</p>
      <Socials className="mt-4 items-center" />
    </section>
  )
}

export default About

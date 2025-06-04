import { Experience } from '@/lib/schemas'
import React from 'react'
import TimelineItem from './timeline-item'

const Timeline = ({experiences} : {experiences : Experience[]}) => {
  return (
    <ul className='ml-10 border-l-2 border-accent'>
      {experiences.map((experience) => (
        <TimelineItem key={experience.name} experience={experience} />
      ))}
    </ul>
  )
}

export default Timeline
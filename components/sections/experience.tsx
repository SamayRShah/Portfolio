import { career, education } from '@/lib/data'
import Timeline from '../timeline/timeline'
import {
  ContentPanel,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../ui/tabs'

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="title">Experience</h2>
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="career">Career</TabsTrigger>
        </TabsList>
        <TabsContent>
          <ContentPanel value="education">
            <Timeline experiences={education} />
          </ContentPanel>
          <ContentPanel value="career">
            <Timeline experiences={career} />
          </ContentPanel>
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default Experience

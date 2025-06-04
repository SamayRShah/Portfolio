import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'

export default function Home() {
  return (
    <main className="mx-auto mt-20 max-w-3xl px-8 pb-24 sm:mt-30">
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

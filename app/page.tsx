import { PageWrapper } from '@/components/ui/PageWrapper'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Parcours } from '@/components/sections/Career'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Projects />
      <Parcours />
      <Contact />
    </PageWrapper>
  )
}

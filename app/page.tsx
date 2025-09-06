import { MainLayout } from '@/app/components/layout/main-layout'
import { HeroSection } from '@/app/components/sections/hero-section'
import { ExperienceSection } from '@/app/components/sections/experience-section'
import { SkillsSection } from '@/app/components/sections/skills-section'
import { ProjectsSection } from '@/app/components/sections/projects-section'
import { ContactSection } from '@/app/components/sections/contact-section'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  )
}

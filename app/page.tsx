import { MainLayout } from '@/app/components/layout/main-layout'
import { HeroSection } from '@/app/components/sections/hero-section'
import { ExperienceSection } from '@/app/components/sections/experience-section'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ExperienceSection />

      <div id="skills" className="min-h-screen flex items-center justify-center bg-muted/20">
        <h2 className="text-4xl font-bold">Habilidades - Em breve</h2>
      </div>

      <div id="projects" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Projetos - Em breve</h2>
      </div>

      <div id="contact" className="min-h-screen flex items-center justify-center bg-muted/20">
        <h2 className="text-4xl font-bold">Contato - Em breve</h2>
      </div>
    </MainLayout>
  )
}

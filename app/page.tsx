import { MainLayout } from '@/app/components/layout/main-layout'
import { HeroSection } from '@/app/components/sections/hero-section'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />

      {/* Placeholder sections - will be implemented next */}
      <div id="about" className="min-h-screen flex items-center justify-center bg-muted/20">
        <h2 className="text-4xl font-bold">Sobre Mim - Em breve</h2>
      </div>

      <div id="experience" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Experiência - Em breve</h2>
      </div>

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

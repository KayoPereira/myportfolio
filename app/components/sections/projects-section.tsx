'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { GitBranch, TrendingUp, Code2, Zap } from 'lucide-react'
import { Section } from '@/app/components/ui/section'
import { FadeIn } from '@/app/components/ui/animated-text'
import { GitHubStats } from '@/app/components/github/github-stats'
import { RepositoryList } from '@/app/components/github/repository-list'
import { ErrorBoundary } from '@/app/components/ui/error-boundary'
import { useTheme } from 'next-themes'

export function ProjectsSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-slate-900"
      style={mounted ? {
        backgroundColor: theme === 'dark' ? '#0f172a' : '#f8fafc'
      } : undefined}
    >
      <Section id="projects">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <FadeIn delay={0.1}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Meus Projetos
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore meus projetos no GitHub, desde aplicações web completas até ferramentas e bibliotecas. 
                Cada projeto reflete minha paixão por código limpo e soluções inovadoras.
              </p>
            </FadeIn>
          </div>

          {/* GitHub Stats */}
          <div className="mb-16">
            <FadeIn delay={0.4}>
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold text-gray-900 ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Estatísticas do GitHub
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Um resumo da minha atividade e contribuições na plataforma
                </p>
              </div>
            </FadeIn>
            <ErrorBoundary>
              <GitHubStats />
            </ErrorBoundary>
          </div>

          {/* Featured Repositories */}
          <div className="mb-16">
            <ErrorBoundary>
              <RepositoryList />
            </ErrorBoundary>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <FadeIn delay={0.9}>
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">
                    Vamos Colaborar?
                  </h3>
                </div>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Estou sempre aberto a novos projetos e colaborações. 
                  Se você tem uma ideia interessante ou precisa de ajuda com desenvolvimento, 
                  vamos conversar!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/KayoPereira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    <GitBranch className="w-5 h-5" />
                    Ver GitHub Completo
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
                  >
                    <Zap className="w-5 h-5" />
                    Entrar em Contato
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <FadeIn delay={1.0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-lg font-semibold text-gray-900 ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Código Aberto
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Acredito no poder do código aberto e contribuo regularmente para a comunidade
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-lg font-semibold text-gray-900 ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Sempre Aprendendo
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Constantemente explorando novas tecnologias e melhores práticas de desenvolvimento
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-lg font-semibold text-gray-900 ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Soluções Eficientes
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Foco em criar soluções que sejam não apenas funcionais, mas também performáticas e escaláveis
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  )
}

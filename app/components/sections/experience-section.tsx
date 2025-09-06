'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { Section } from '@/app/components/ui/section'
import { FadeIn } from '@/app/components/ui/animated-text'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'freelance'
  website?: string
  logo?: string
}

const experiences: Experience[] = [
  {
    id: "exp-0",
    company: "4MDG",
    position: "Backend Developer",
    startDate: "Jul 2024",
    description: "Desenvolvimento e manutenção de APIs escaláveis com Ruby on Rails, modelagem e otimização de bancos de dados PostgreSQL, além de testes automatizados com RSpec. Experiência em autenticação, segurança, integração de serviços externos e monitoramento de aplicações em produção. Atuação colaborativa em equipes multidisciplinares, assegurando qualidade, desempenho e valor ao usuário final.",
    technologies: ["Ruby on Rails", "Ruby", "PostgreSQL", "Docker", "AWS"],
    location: "São Paulo, SP - Remoto",
    type: "full-time",
    website: "https://conteudo.4mdg.com.br/software",
    logo: "/images/companies/4mdg_logo.jpg"
  },
  {
    id: "exp-1",
    company: "Le Wagon",
    position: "Teacher",
    startDate: "Dez 2021",
    description: "Ministro aulas de Ruby, Rails, bancos de dados, HTML, CSS e JavaScript, com foco em POO e boas práticas. Acompanho e oriento alunos em projetos práticos, promovendo aplicação real dos conceitos. Realizo avaliações contínuas e forneço feedback para o desenvolvimento técnico individual.",
    technologies: ["Ruby on Rails", "Ruby", "Stimulus", "JavaScript", "Vue.js", "Heroku", "Mustache.js"],
    location: "São Paulo, SP - Remoto",
    type: "part-time",
    website: "https://www.lewagon.com",
    logo: "/images/companies/le_wagon_logo.jpg"
  },
  {
    id: "exp-2",
    company: "Cardeal.app",
    position: "Software Engineer",
    startDate: "Jun 2023",
    endDate: "Mai 2024",
    description: "Atuação no desenvolvimento de soluções completas, desde a concepção até a entrega, com foco em planejamento tecnológico, modelagem de bancos de dados e setup de ambientes. Experiência em metodologias ágeis, liderando cerimônias Scrum e organizando tarefas da equipe. Responsável também pela seleção e alocação de membros, garantindo times qualificados e produtivos.",
    technologies: ["Ruby on Rails", "Ruby", "Next.js", "PostgreSQL", "AWS"],
    location: "São Paulo, SP - Remoto",
    type: "full-time",
    website: "https://cardeal.app",
    logo: "/images/companies/cardeal_logo.jpg"
  },
  {
    id: "exp-3",
    company: "YU",
    position: "Full Stack Developer",
    startDate: "Fev 2022",
    endDate: "Mai 2023",
    description: "Atuação como desenvolvedor full-stack, implementando funcionalidades em Ruby on Rails no backend e React no frontend. Responsável por revisão de pull requests, garantindo qualidade e consistência do código. Colaboração ativa com a equipe, oferecendo suporte técnico e promovendo um ambiente de trabalho cooperativo.",
    technologies: ["Ruby on Rails", "Ruby", "React", "PostgreSQL", "Sidekiq", "Heroku", "AWS"],
    location: "São Paulo, SP - Remoto",
    type: "full-time",
    website: "https://jobs.jornadayu.com/",
    logo: "/images/companies/jornadayu_logo.jpg"
  },
  {
    id: "exp-4",
    company: "HortaTech",
    position: "Full Stack Developer",
    startDate: "Mai 2021",
    endDate: "Fev 2022",
    description: "Experiência em software house com desenvolvimento de projetos para múltiplos setores, como saúde, educação, pets e entregas. Atuação full-stack, implementando funcionalidades em Ruby on Rails no backend e React no frontend.",
    technologies: ["Ruby on Rails", "Ruby", "JavaScript", "React", "Bootstrap", "MySQL", "PostgreSQL"],
    location: "São Paulo, SP - Remoto",
    type: "full-time",
    logo: "/images/companies/hortatech_logo.jpg"
  }
]

export function ExperienceSection() {
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
    <Section id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn delay={0.1}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Experiência Profissional
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Minha jornada profissional e as empresas onde contribuí para o desenvolvimento de soluções inovadoras
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={0.4 + index * 0.2}>
                <motion.div
                  className="relative flex items-start gap-8"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  </div>

                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {exp.logo ? (
                          <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-700 rounded-lg p-2 border border-gray-200 dark:border-gray-600">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.company}
                            </h3>
                            {exp.website && (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            {exp.position}
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {exp.startDate} - {exp.endDate || 'Presente'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                          {exp.type === 'full-time' ? 'Tempo Integral' : 
                           exp.type === 'part-time' ? 'Meio Período' :
                           exp.type === 'contract' ? 'Contrato' : 'Freelancer'}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
    </div>
  )
}

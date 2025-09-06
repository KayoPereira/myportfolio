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
    description: "Fundação e liderança técnica de uma software house focada em soluções sob medida. Desenvolvimento de aplicações web completas, consultoria em tecnologia e gestão de equipe de desenvolvimento.",
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
    description: "Bootcamp de desenvolvimento web full-stack. Ensino de programação Ruby e Ruby on Rails para desenvolvedores iniciantes. Acompanhamento da evolução de alunos em projetos práticos e mentoria técnica.",
    technologies: ["Ruby on Rails", "Ruby", "JavaScript", "Vue.js", "Heroku"],
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
    description: "Desenvolvimento de sistemas web complexos e APIs robustas. Liderança técnica de projetos e mentoria de desenvolvedores júnior.",
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
    description: "Desenvolvimento de MVP e features para plataforma de e-commerce. Trabalho em equipe ágil com foco em entrega rápida e qualidade.",
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
    description: "Desenvolvimento de sites e sistemas web para diversos clientes. Especialização em Ruby on Rails e consultoria técnica.",
    technologies: ["Ruby on Rails", "Ruby", "JavaScript", "React", "Bootstrap", "MySQL", "PostgreSQL"],
    location: "São Paulo, SP - Remoto",
    type: "full-time",
    logo: "/images/companies/hortatech_logo.jpg"
  }
]

export function ExperienceSection() {
  const { theme } = useTheme()

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme === 'dark' ? '#0f172a' : '#f8fafc'
      }}
    >
    <Section id="experience">
      <div className="max-w-4xl mx-auto bg-muted/20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Experiência Profissional
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Minha jornada profissional e as empresas onde contribuí para o desenvolvimento de soluções inovadoras
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={0.4 + index * 0.2}>
                <motion.div
                  className="relative flex items-start gap-8"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
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

                    {/* Technologies */}
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

        {/* Call to Action */}
        <FadeIn delay={1.4}>
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Interessado em trabalhar comigo?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Estou sempre aberto a novos desafios e oportunidades interessantes.
            </p>
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Entre em Contato
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </Section>
    </div>
  )
}

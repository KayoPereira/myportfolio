'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Server, Smartphone, Wrench } from 'lucide-react'
import { Section } from '@/app/components/ui/section'
import { FadeIn } from '@/app/components/ui/animated-text'
import { useTheme } from 'next-themes'

interface Skill {
  name: string
  level: number
  category: string
  icon?: string
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ComponentType<any>
  skills: Skill[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: Server,
    color: "from-red-500 to-pink-500",
    skills: [
      { name: "Ruby on Rails", level: 95, category: "backend", color: "bg-red-500" },
      { name: "Ruby", level: 95, category: "backend", color: "bg-red-600" },
      { name: "Python", level: 80, category: "backend", color: "bg-yellow-500" },
      { name: "Golang", level: 65, category: "backend", color: "bg-blue-500" },
      { name: "Node.js", level: 80, category: "backend", color: "bg-green-500" },
      { name: "PostgreSQL", level: 85, category: "backend", color: "bg-blue-600" },
      { name: "MySQL", level: 80, category: "backend", color: "bg-orange-500" },
      { name: "Redis", level: 75, category: "backend", color: "bg-red-700" }
    ]
  },
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 85, category: "frontend", color: "bg-blue-500" },
      { name: "Next.js", level: 75, category: "frontend", color: "bg-gray-800" },
      { name: "TypeScript", level: 75, category: "frontend", color: "bg-blue-600" },
      { name: "JavaScript", level: 85, category: "frontend", color: "bg-yellow-500" },
      { name: "Tailwind CSS", level: 70, category: "frontend", color: "bg-teal-500" },
      { name: "Bootstrap", level: 70, category: "frontend", color: "bg-teal-500" },
      { name: "HTML/CSS", level: 90, category: "frontend", color: "bg-orange-500" }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Docker", level: 80, category: "devops", color: "bg-blue-600" },
      { name: "AWS", level: 75, category: "devops", color: "bg-orange-600" },
      { name: "Git", level: 90, category: "devops", color: "bg-orange-700" },
      { name: "Linux", level: 85, category: "devops", color: "bg-gray-800" },
      { name: "Heroku", level: 80, category: "devops", color: "bg-purple-600" },
      { name: "Sidekiq", level: 85, category: "devops", color: "bg-red-600" }
    ]
  }
]

export function SkillsSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-slate-900"
      style={mounted ? {
        backgroundColor: theme === 'dark' ? '#0A0A0A' : '#f8fafc'
      } : undefined}
    >
      <Section id="skills">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <FadeIn delay={0.1}>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Habilidades Técnicas
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tecnologias e ferramentas que domino para criar soluções completas e eficientes
              </p>
            </FadeIn>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <FadeIn key={category.title} delay={0.4 + categoryIndex * 0.2}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Additional Info */}
          <FadeIn delay={1.6}>
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Sempre Aprendendo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
                A tecnologia evolui constantemente, e eu me mantenho atualizado com as últimas tendências 
                e melhores práticas do desenvolvimento de software. Além de me aperfeiçoar nas habilidades 
                mencionadas, também busco conhecimento em várias outras tecnologias e estou sempre pronto 
                para aprender novas habilidades. Atualmente estou estudando as seguintes tecnologias:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Java", "Angular", "C++", "Docker", "Kubernetes", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  )
}

'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Users,
  GitBranch,
  Globe,
  MessageCircle
} from 'lucide-react'
import { Section } from '@/app/components/ui/section'
import { FadeIn } from '@/app/components/ui/animated-text'
import { personalInfo } from '@/app/data/profile'
import { useTheme } from 'next-themes'

export function ContactSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'from-red-500 to-red-600',
      description: 'Respondo em até 24h'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: personalInfo.contact.phone,
      href: `https://api.whatsapp.com/send?phone=${personalInfo.contact.phone?.replace(/\D/g, '')}`,
      color: 'from-green-500 to-green-600',
      description: 'WhatsApp disponível'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: personalInfo.contact.location,
      href: 'https://maps.google.com/?q=Recife,PE,Brasil',
      color: 'from-blue-500 to-blue-600',
      description: 'Trabalho remoto'
    }
  ]

  const socialLinks = [
    {
      icon: Users,
      label: 'LinkedIn',
      href: personalInfo.contact.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      href: personalInfo.contact.github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Globe,
      label: 'Website',
      href: personalInfo.contact.website,
      color: 'hover:text-purple-600'
    }
  ]

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-slate-900"
      style={mounted ? {
        backgroundColor: theme === 'dark' ? '#0A0A0A' : '#f8fafc'
      } : undefined}
    >
      <Section id="contact">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <FadeIn delay={0.1}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Vamos Conversar?
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Estou sempre aberto a novas oportunidades, projetos interessantes e colaborações. 
                Entre em contato e vamos transformar suas ideias em realidade!
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <div>
              <FadeIn delay={0.4}>
                <h3 className={`text-2xl font-bold mb-8 ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Entre em Contato
                </h3>
              </FadeIn>

              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <FadeIn key={method.label} delay={0.5 + index * 0.1}>
                    <motion.a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color}`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {method.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">
                          {method.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {method.description}
                        </p>
                      </div>
                    </motion.a>
                  </FadeIn>
                ))}
              </div>

              {/* Social Links */}
              <FadeIn delay={0.8}>
                <h4 className={`text-lg font-semibold mb-4 ${mounted && theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200`}
                      whileHover={{ y: -2, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </Section>
    </div>
  )
}

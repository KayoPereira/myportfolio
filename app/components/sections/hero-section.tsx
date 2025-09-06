'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Section } from '@/app/components/ui/section'
import { AnimatedText, FadeIn } from '@/app/components/ui/animated-text'
import { personalInfo } from '@/app/data/profile'
import Image from 'next/image'

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <FadeIn delay={0.2} className="mb-8">
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-blue-500">
                <Image
                  src={personalInfo.avatar || "/images/profile.jpg"}
                  alt={personalInfo.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
            </motion.div>
          </FadeIn>

          {/* Greeting */}
          <FadeIn delay={0.4} className="mb-4">
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 text-center">
              Olá, eu sou
            </p>
          </FadeIn>

          {/* Name */}
          <div className="mb-6 flex justify-center">
            <AnimatedText
              text={personalInfo.name}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent text-center"
              delay={0.6}
            />
          </div>

          {/* Title */}
          <div className="mb-8 flex justify-center">
            <AnimatedText
              text={personalInfo.title}
              className="text-xl md:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 text-center"
              delay={1.0}
            />
          </div>

          {/* Bio */}
          <FadeIn delay={1.4} className="mb-12">
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed text-center">
              {personalInfo.bio}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={1.8} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="group relative overflow-hidden flex items-center justify-center"
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Entre em Contato
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>

              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 border border-gray-300 bg-transparent hover:bg-gray-50/30 dark:border-gray-600 dark:hover:bg-gray-800/20 group cursor-pointer"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </a>
              )}
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <FadeIn delay={2.2}>
            <motion.button
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}

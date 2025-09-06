'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  Home,
  User,
  Briefcase,
  Code,
  FolderOpen,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/app/lib/utils'
import { Button } from './button'
import { ThemeToggle } from './theme-toggle'
import { personalInfo } from '@/app/data/profile'
import Image from 'next/image'

interface SidebarProps {
  className?: string
  onCollapseChange?: (isCollapsed: boolean) => void
}

const navigationItems = [
  { id: 'home', label: 'Início', icon: Home, href: '#home' },
  { id: 'about', label: 'Sobre', icon: User, href: '#about' },
  { id: 'experience', label: 'Experiência', icon: Briefcase, href: '#experience' },
  { id: 'skills', label: 'Habilidades', icon: Code, href: '#skills' },
  { id: 'projects', label: 'Projetos', icon: FolderOpen, href: '#projects' },
  { id: 'contact', label: 'Contato', icon: Mail, href: '#contact' },
]

export function Sidebar({ className, onCollapseChange }: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(false) // Mobile menu
  const [isCollapsed, setIsCollapsed] = React.useState(false) // Desktop collapse
  const [activeSection, setActiveSection] = React.useState('home')
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'

  // Notify parent component when collapse state changes
  React.useEffect(() => {
    onCollapseChange?.(isCollapsed)
  }, [isCollapsed, onCollapseChange])

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close mobile menu after navigation
  }

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-white/80 backdrop-blur-sm border border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Desktop Collapse Button */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "fixed top-4 z-50 hidden md:flex cursor-pointer transition-all duration-300 -translate-x-1/2",
          isCollapsed ? "left-20" : "left-80",
          isDark
            ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700"
            : "bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200"
        )}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>

      {/* Desktop Sidebar */}
      <motion.aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen backdrop-blur-sm border-r',
          'hidden md:flex flex-col overflow-hidden',
          isDark
            ? 'bg-gray-900 border-gray-700 text-white'
            : 'bg-white border-gray-200 text-gray-900',
          className
        )}
        initial={{ width: isCollapsed ? 80 : 320 }}
        animate={{ width: isCollapsed ? 80 : 320 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <SidebarContent
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onClose={() => setIsOpen(false)}
          isDark={isDark}
          isCollapsed={isCollapsed}
        />
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Sidebar */}
            <motion.aside
              className={cn(
                "fixed left-0 top-0 z-40 h-screen w-80 border-r md:hidden",
                isDark
                  ? 'bg-gray-900 border-gray-700 text-white'
                  : 'bg-white border-gray-200 text-gray-900'
              )}
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <SidebarContent
                activeSection={activeSection}
                onNavigate={scrollToSection}
                onClose={() => setIsOpen(false)}
                isDark={isDark}
                isCollapsed={false}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

interface SidebarContentProps {
  activeSection: string
  onNavigate: (href: string) => void
  onClose: () => void
  isDark: boolean
  isCollapsed: boolean
}

function SidebarContent({ activeSection, onNavigate, onClose, isDark, isCollapsed }: SidebarContentProps) {
  return (
    <div className={cn(
      "flex flex-col h-full transition-all duration-300",
      isCollapsed ? "px-2 py-4" : "p-6",
      isDark ? "text-white" : "text-gray-900"
    )}>
      {/* Profile Section */}
      <div className={cn(
        "flex flex-col items-center text-center transition-all duration-300",
        isCollapsed ? "mb-6" : "mb-8"
      )} style={{ marginTop: '55px' }}>
        <motion.div
          className={cn(
            "rounded-full overflow-hidden border-2 border-blue-500 transition-all duration-300",
            isCollapsed ? "w-10 h-10 mb-3" : "w-20 h-20 mb-4"
          )}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={personalInfo.avatar || "/images/profile.jpg"}
            alt={personalInfo.name}
            width={isCollapsed ? 40 : 80}
            height={isCollapsed ? 40 : 80}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        {!isCollapsed && (
          <>
            <h2 className="text-xl font-bold mb-1">{personalInfo.name}</h2>
            <p className={cn(
              "text-sm mb-2",
              isDark ? "text-gray-300" : "text-gray-500"
            )}>{personalInfo.title}</p>
            <div className={cn(
              "flex items-center text-xs",
              isDark ? "text-gray-400" : "text-gray-500"
            )}>
              <MapPin className="w-3 h-3 mr-1" />
              {personalInfo.contact.location}
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className={cn(
          "transition-all duration-300",
          isCollapsed ? "space-y-3" : "space-y-2"
        )}>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <motion.button
                className={cn(
                  'w-full flex items-center rounded-lg text-left transition-all duration-200 cursor-pointer',
                  isCollapsed
                    ? 'px-0 py-3 justify-center mx-auto w-12 h-12'
                    : 'px-4 py-3',
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : isDark ? 'text-gray-300' : 'text-gray-600'
                )}
                onClick={() => onNavigate(item.href)}
                whileHover={{ x: isCollapsed ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className={cn(
                  "transition-all duration-200",
                  isCollapsed ? "w-5 h-5" : "w-5 h-5 mr-3"
                )} />
                {!isCollapsed && (
                  <span className="transition-opacity duration-200">
                    {item.label}
                  </span>
                )}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links & Theme Toggle */}
      <div className={cn(
        "mt-auto pt-6 border-t transition-all duration-300",
        isDark ? "border-gray-700" : "border-gray-200"
      )}>
        <div className={cn(
          "flex items-center transition-all duration-300",
          isCollapsed ? "flex-col space-y-3 mb-4" : "justify-between mb-4"
        )}>
          <div className={cn(
            "flex transition-all duration-300",
            isCollapsed ? "flex-col space-y-3" : "space-x-2"
          )}>
            {personalInfo.contact.github && (
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10",
                  "transition-colors duration-200 cursor-pointer",
                  isCollapsed ? "mx-auto" : "",
                  isDark
                    ? "hover:bg-gray-800/50 text-gray-400 hover:text-gray-200"
                    : "hover:bg-gray-100/50 text-gray-500 hover:text-gray-700"
                )}
                title={isCollapsed ? "GitHub" : undefined}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {personalInfo.contact.linkedin && (
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10",
                  "transition-colors duration-200 cursor-pointer",
                  isCollapsed ? "mx-auto" : "",
                  isDark
                    ? "hover:bg-gray-800/50 text-gray-400 hover:text-gray-200"
                    : "hover:bg-gray-100/50 text-gray-500 hover:text-gray-700"
                )}
                title={isCollapsed ? "LinkedIn" : undefined}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
          <div className={cn(isCollapsed && "mx-auto")}>
            <ThemeToggle />
          </div>
        </div>

        {!isCollapsed && (
          <p className={cn(
            "text-xs text-center transition-opacity duration-300",
            isDark ? "text-gray-400" : "text-gray-500"
          )}>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        )}
      </div>
    </div>
  )
}

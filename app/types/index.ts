export interface Experience {
  id: string
  company: string
  position: string
  startDate: Date
  endDate?: Date
  description: string
  technologies: string[]
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'freelance'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
}

export interface Skill {
  id: string
  name: string
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'mobile' | 'other'
  level: 1 | 2 | 3 | 4 | 5
  icon?: string
  description?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate?: Date
  description?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  linkedin?: string
  github?: string
  twitter?: string
  website?: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  avatar?: string
  resumeUrl?: string
  contact: ContactInfo
}

export interface SectionProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimationProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
}

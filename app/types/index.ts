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

export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  watchers_count: number
  forks_count: number
  open_issues_count: number
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
  topics: string[]
  visibility: 'public' | 'private'
  archived: boolean
  disabled: boolean
  fork: boolean
}

export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  bio: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GitHubStats {
  totalRepos: number
  totalStars: number
  totalForks: number
  totalCommits?: number
  languages: { [key: string]: number }
  mostUsedLanguage: string
  publicRepos: number
  followers: number
  following: number
}

export interface GitHubApiError {
  message: string
  status: number
  documentation_url?: string
}

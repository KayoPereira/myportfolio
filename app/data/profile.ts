import { PersonalInfo, Experience, Skill, Project } from '@/app/types'

export const personalInfo: PersonalInfo = {
  name: "Kayo Pereira",
  title: "Desenvolvedor Full Stack & Professor de Ruby",
  bio: "Desenvolvedor de Software e Professor de Programação Ruby, com mais de 5 anos de experiência no mercado, atuando no desenvolvimento de aplicações web e APIs robustas, escaláveis e seguras.",
  avatar: "/images/profile.jpg",
  resumeUrl: "/cv - kayo pereira.pdf",
  contact: {
    email: "kayo.pereira.dev@gmail.com",
    phone: "+55 (81) 98238-6533",
    location: "Recife, PE - Brasil",
    linkedin: "https://linkedin.com/in/kayopereira",
    github: "https://github.com/KayoPereira",
    website: "https://kayo.devrec.com.br"
  }
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Startup Software House",
    position: "Fundador & CTO",
    startDate: new Date("2022-01-01"),
    description: "Fundação e liderança técnica de uma software house focada em soluções sob medida. Desenvolvimento de aplicações web completas, consultoria em tecnologia e gestão de equipe de desenvolvimento.",
    technologies: ["Ruby on Rails", "React", "PostgreSQL", "Docker", "AWS"],
    location: "Recife, PE",
    type: "full-time"
  },
  {
    id: "exp-2",
    company: "Professor Independente",
    position: "Professor de Programação Ruby",
    startDate: new Date("2020-06-01"),
    description: "Ensino de programação Ruby e Ruby on Rails para desenvolvedores iniciantes e intermediários. Acompanhamento da evolução de alunos em projetos práticos e mentoria técnica.",
    technologies: ["Ruby", "Ruby on Rails", "Git", "PostgreSQL", "TDD"],
    location: "Remoto",
    type: "part-time"
  }
  // Adicione mais experiências conforme necessário
]

export const skills: Skill[] = [
  // Backend
  { id: "ruby", name: "Ruby", category: "backend", level: 5, description: "Ruby on Rails v7-8" },
  { id: "rails", name: "Ruby on Rails", category: "backend", level: 5, description: "Framework principal" },
  { id: "django", name: "Django", category: "backend", level: 4, description: "Python web framework" },
  { id: "nodejs", name: "Node.js", category: "backend", level: 3, description: "JavaScript runtime" },
  
  // Frontend
  { id: "react", name: "React", category: "frontend", level: 4, description: "Web e React Native" },
  { id: "angular", name: "Angular", category: "frontend", level: 4, description: "Framework TypeScript" },
  { id: "javascript", name: "JavaScript", category: "frontend", level: 5, description: "ES6+ vanilla" },
  { id: "typescript", name: "TypeScript", category: "frontend", level: 4, description: "Tipagem estática" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", level: 5, description: "Utility-first CSS" },
  
  // Database
  { id: "postgresql", name: "PostgreSQL", category: "database", level: 5, description: "Queries avançadas" },
  { id: "redis", name: "Redis", category: "database", level: 4, description: "Cache e sessions" },
  
  // DevOps
  { id: "docker", name: "Docker", category: "devops", level: 4, description: "Containerização" },
  { id: "aws", name: "AWS", category: "devops", level: 3, description: "Cloud services" },
  { id: "git", name: "Git", category: "devops", level: 5, description: "Controle de versão" },
  
  // Mobile
  { id: "react-native", name: "React Native", category: "mobile", level: 4, description: "Apps móveis" },
  
  // Other
  { id: "rspec", name: "RSpec", category: "other", level: 5, description: "TDD/BDD" },
  { id: "sidekiq", name: "Sidekiq", category: "other", level: 4, description: "Background jobs" },
  { id: "playwright", name: "Playwright", category: "other", level: 4, description: "Automação e scraping" }
]

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Sistema Multi-tenant SaaS",
    description: "Plataforma SaaS completa com multi-tenancy usando ros-apartment",
    longDescription: "Sistema completo de SaaS com arquitetura multi-tenant, autenticação robusta, sistema de permissões, integração com pagamentos e dashboard administrativo.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "React"],
    githubUrl: "https://github.com/kayopereira/saas-platform",
    featured: true,
    status: "completed"
  },
  {
    id: "project-2",
    title: "API de Integração Financeira",
    description: "API REST para integração com múltiplos provedores de pagamento",
    longDescription: "API robusta para processamento de pagamentos com múltiplos provedores, webhook handling, retry logic e monitoramento em tempo real.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Docker", "AWS"],
    githubUrl: "https://github.com/kayopereira/payment-api",
    featured: true,
    status: "completed"
  },
  {
    id: "project-3",
    title: "App Mobile E-commerce",
    description: "Aplicativo móvel para e-commerce com React Native",
    longDescription: "Aplicativo completo de e-commerce com carrinho de compras, pagamentos, notificações push e sincronização offline.",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
    githubUrl: "https://github.com/kayopereira/ecommerce-app",
    featured: false,
    status: "completed"
  }
]

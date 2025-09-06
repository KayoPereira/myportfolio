import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
  }).format(date)
}

export function calculateExperience(startDate: Date): string {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - startDate.getTime())
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
  const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
  
  if (diffYears === 0) {
    return `${diffMonths} ${diffMonths === 1 ? 'mês' : 'meses'}`
  }
  
  if (diffMonths === 0) {
    return `${diffYears} ${diffYears === 1 ? 'ano' : 'anos'}`
  }
  
  return `${diffYears} ${diffYears === 1 ? 'ano' : 'anos'} e ${diffMonths} ${diffMonths === 1 ? 'mês' : 'meses'}`
}

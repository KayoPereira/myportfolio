'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Star,
  GitFork,
  Eye,
  Calendar,
  Code,
  AlertCircle
} from 'lucide-react'
import { CardSkeleton } from '@/app/components/ui/error-boundary'
import { GitHubRepository } from '@/app/types'
import { useGitHubFeaturedRepos } from '@/app/hooks/useGitHub'
import { formatDate, formatNumber } from '@/app/lib/github'
import { FadeIn } from '@/app/components/ui/animated-text'
import { useTheme } from 'next-themes'

interface RepositoryCardProps {
  repository: GitHubRepository
  delay?: number
}

function RepositoryCard({ repository, delay = 0 }: RepositoryCardProps) {
  // Projetos em destaque
  const featuredProjects = [
    'myportfolio',
    'vitalis_app',
    'itbi-county',
    'HiperionSerras',
    'DevRec',
    'WiFiClientConnect'
  ]

  const isFeatured = featuredProjects.includes(repository.name)

  const languageColors: { [key: string]: string } = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'Python': '#3572A5',
    'Ruby': '#701516',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'PHP': '#4F5D95',
    'C++': '#f34b7d',
    'C': '#555555',
    'HTML': '#e34c26',
    'CSS': '#1572B6',
    'Shell': '#89e051',
    'Dockerfile': '#384d54'
  }

  return (
    <FadeIn delay={delay}>
      <motion.div
        className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full ${
          isFeatured
            ? 'border-2 border-blue-500 shadow-lg ring-2 ring-blue-500/20'
            : 'border border-gray-200 dark:border-gray-700'
        }`}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {repository.name}
              </h3>
              {isFeatured && (
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium">
                  Destaque
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {repository.description || 'Sem descrição disponível'}
            </p>
          </div>
          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 p-2 text-gray-500 hover:text-blue-500 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Topics */}
        {repository.topics && repository.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repository.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {topic}
              </span>
            ))}
            {repository.topics.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                +{repository.topics.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{formatNumber(repository.stargazers_count)}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span>{formatNumber(repository.forks_count)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{formatNumber(repository.watchers_count)}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          {/* Language */}
          {repository.language && (
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: languageColors[repository.language] || '#6b7280' 
                }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {repository.language}
              </span>
            </div>
          )}

          {/* Updated date */}
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(repository.updated_at)}</span>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

interface RepositoryListProps {
  title?: string
  showAll?: boolean
  limit?: number
}

export function RepositoryList({
  title = "Repositórios em Destaque",
  showAll = true,
  limit = 6
}: RepositoryListProps) {
  const { repositories, loading, error, refetch } = useGitHubFeaturedRepos()
  const { theme } = useTheme()

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: limit }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    )
  }

  if (!repositories || repositories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Code className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-gray-600 dark:text-gray-400">
          Nenhum repositório encontrado
        </p>
      </div>
    )
  }

  const displayedRepos = showAll ? repositories : repositories.slice(0, limit)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <FadeIn delay={0.1}>
          <h3 className={`text-2xl font-bold text-gray-900 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
            {title}
          </h3>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projetos selecionados que demonstram minhas habilidades e experiência em diferentes tecnologias e domínios
          </p>
        </FadeIn>
      </div>

      {/* Repository Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedRepos.map((repo, index) => (
          <RepositoryCard
            key={repo.id}
            repository={repo}
            delay={0.3 + index * 0.1}
          />
        ))}
      </div>

      {/* Show more button */}
      {!showAll && repositories.length > limit && (
        <div className="text-center">
          <FadeIn delay={0.8}>
            <a
              href="https://github.com/KayoPereira?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Ver todos os repositórios
              <ExternalLink className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      )}
    </div>
  )
}

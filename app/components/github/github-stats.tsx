'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  GitBranch,
  Star,
  Users,
  BookOpen,
  Loader2,
  AlertCircle
} from 'lucide-react'
import { useGitHubStats } from '@/app/hooks/useGitHub'
import { formatNumber } from '@/app/lib/github'
import { FadeIn } from '@/app/components/ui/animated-text'

interface StatCardProps {
  icon: React.ElementType
  label: string
  value: string | number
  color: string
  delay?: number
}

function StatCard({ icon: Icon, label, value, color, delay = 0 }: StatCardProps) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {typeof value === 'number' ? formatNumber(value) : value}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {label}
            </p>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

interface LanguageBarProps {
  languages: { [key: string]: number }
  delay?: number
}

function LanguageBar({ languages, delay = 0 }: LanguageBarProps) {
  const total = Object.values(languages).reduce((sum, count) => sum + count, 0)
  const sortedLanguages = Object.entries(languages)
    .sort(([,a], [,b]) => b - a) // Todas as linguagens, ordenadas por uso

  console.log(sortedLanguages)

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
    'Dockerfile': '#384d54',
    'Vue': '#4FC08D',
    'React': '#61DAFB',
    'Angular': '#DD0031',
    'Node.js': '#339933',
    'Swift': '#FA7343',
    'Kotlin': '#7F52FF',
    'Dart': '#0175C2',
    'Scala': '#DC322F',
    'Clojure': '#5881D8',
    'Haskell': '#5e5086',
    'Lua': '#000080',
    'Perl': '#0298c3',
    'R': '#276DC3',
    'MATLAB': '#e16737',
    'Objective-C': '#438eff',
    'C#': '#239120',
    'F#': '#b845fc',
    'Visual Basic': '#945db7',
    'Assembly': '#6E4C13',
    'Makefile': '#427819',
    'CMake': '#DA3434',
    'PowerShell': '#012456',
    'Batch': '#C1F12E',
    'YAML': '#cb171e',
    'JSON': '#292929',
    'XML': '#0060ac',
    'Markdown': '#083fa1',
    'LaTeX': '#3D6117',
    'Jupyter Notebook': '#DA5B0B',
    'Vim script': '#199f4b',
    'Emacs Lisp': '#c065db',
    'SCSS': '#c6538c',
    'Less': '#1d365d',
    'Stylus': '#ff6347',
    'CoffeeScript': '#244776',
    'LiveScript': '#499886',
    'PureScript': '#1D222D',
    'Elm': '#60B5CC',
    'ReasonML': '#ff5847',
    'OCaml': '#3be133',
    'Erlang': '#B83998',
    'Elixir': '#6e4a7e',
    'Crystal': '#000100',
    'Nim': '#ffc200',
    'Zig': '#ec915c',
    'shell': '#89e051'
  }

  return (
    <FadeIn delay={delay}>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Todas as Linguagens
        </h3>
        
        <div className="space-y-3">
          {sortedLanguages.map(([language, count], index) => {
            const percentage = (count / total) * 100
            return (
              <div key={language} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {language}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {count} {count === 1 ? 'repo' : 'repos'} ({percentage.toFixed(1)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: languageColors[language] || '#6b7280',
                      width: `${percentage}%`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: delay + index * 0.05 }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Resumo no final */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {sortedLanguages.length}
              </span>
              <br />
              linguagens
            </div>
            <div className="text-center">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {total}
              </span>
              <br />
              repositórios
            </div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export function GitHubStats() {
  const { stats, loading, error, refetch } = useGitHubStats()

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        <span className="ml-2 text-gray-600 dark:text-gray-400">
          Carregando estatísticas...
        </span>
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

  if (!stats) {
    return null
  }

  return (
    <div className="space-y-8">
      {/* Estatísticas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={BookOpen}
          label="Repositórios"
          value={stats.totalRepos}
          color="from-blue-500 to-blue-600"
          delay={0.1}
        />
        <StatCard
          icon={Star}
          label="Total de Stars"
          value={stats.totalStars}
          color="from-yellow-500 to-yellow-600"
          delay={0.2}
        />
        <StatCard
          icon={GitBranch}
          label="Total de Forks"
          value={stats.totalForks}
          color="from-green-500 to-green-600"
          delay={0.3}
        />
        <StatCard
          icon={Users}
          label="Seguidores"
          value={stats.followers}
          color="from-purple-500 to-purple-600"
          delay={0.4}
        />
      </div>

      {/* Todas as linguagens */}
      {Object.keys(stats.languages).length > 0 && (
        <LanguageBar languages={stats.languages} delay={0.5} />
      )}
    </div>
  )
}

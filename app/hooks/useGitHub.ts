'use client'

import { useState, useEffect, useCallback } from 'react'
import { GitHubRepository, GitHubUser, GitHubStats } from '@/app/types'
import { 
  fetchGitHubUser, 
  fetchGitHubRepositories, 
  fetchFeaturedRepositories, 
  fetchGitHubStats 
} from '@/app/lib/github'

interface UseGitHubState {
  user: GitHubUser | null
  repositories: GitHubRepository[]
  featuredRepositories: GitHubRepository[]
  stats: GitHubStats | null
  loading: boolean
  error: string | null
}

interface UseGitHubReturn extends UseGitHubState {
  refetch: () => Promise<void>
  refetchUser: () => Promise<void>
  refetchRepositories: () => Promise<void>
  refetchStats: () => Promise<void>
}

export function useGitHub(): UseGitHubReturn {
  const [state, setState] = useState<UseGitHubState>({
    user: null,
    repositories: [],
    featuredRepositories: [],
    stats: null,
    loading: true,
    error: null
  })

  const setLoading = (loading: boolean) => {
    setState(prev => ({ ...prev, loading }))
  }

  const setError = (error: string | null) => {
    setState(prev => ({ ...prev, error, loading: false }))
  }

  const refetchUser = useCallback(async () => {
    try {
      const user = await fetchGitHubUser()
      setState(prev => ({ ...prev, user }))
    } catch (error) {
      console.error('Error fetching GitHub user:', error)
      setError('Erro ao carregar dados do usuário')
    }
  }, [])

  const refetchRepositories = useCallback(async () => {
    try {
      const [repositories, featuredRepositories] = await Promise.all([
        fetchGitHubRepositories(),
        fetchFeaturedRepositories()
      ])
      setState(prev => ({ 
        ...prev, 
        repositories, 
        featuredRepositories 
      }))
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error)
      setError('Erro ao carregar repositórios')
    }
  }, [])

  const refetchStats = useCallback(async () => {
    try {
      const stats = await fetchGitHubStats()
      setState(prev => ({ ...prev, stats }))
    } catch (error) {
      console.error('Error fetching GitHub stats:', error)
      setError('Erro ao carregar estatísticas')
    }
  }, [])

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      await Promise.all([
        refetchUser(),
        refetchRepositories(),
        refetchStats()
      ])
    } catch (error) {
      console.error('Error fetching GitHub data:', error)
      setError('Erro ao carregar dados do GitHub')
    } finally {
      setLoading(false)
    }
  }, [refetchUser, refetchRepositories, refetchStats])

  useEffect(() => {
    refetch()
  }, [refetch])

  return {
    ...state,
    refetch,
    refetchUser,
    refetchRepositories,
    refetchStats
  }
}

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchGitHubStats()
      setStats(data)
    } catch (error) {
      console.error('Error fetching GitHub stats:', error)
      setError('Erro ao carregar estatísticas')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { stats, loading, error, refetch }
}

export function useGitHubFeaturedRepos() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchFeaturedRepositories()
      setRepositories(data)
    } catch (error) {
      console.error('Error fetching featured repositories:', error)
      setError('Erro ao carregar repositórios em destaque')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { repositories, loading, error, refetch }
}

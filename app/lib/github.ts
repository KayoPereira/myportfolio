import { GitHubRepository, GitHubUser, GitHubStats, GitHubApiError } from '@/app/types'

const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_USERNAME = 'KayoPereira'

const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000

function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data as T
  }
  return null
}

function setCachedData<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() })
}

async function fetchGitHubAPI<T>(endpoint: string): Promise<T> {
  const cacheKey = endpoint
  const cached = getCachedData<T>(cacheKey)
  
  if (cached) {
    return cached
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-App'
      }
    })

    if (!response.ok) {
      const error: GitHubApiError = {
        message: `GitHub API error: ${response.statusText}`,
        status: response.status
      }
      throw error
    }

    const data = await response.json()
    setCachedData(cacheKey, data)
    return data
  } catch (error) {
    console.error('GitHub API fetch error:', error)
    throw error
  }
}

export async function fetchGitHubUser(): Promise<GitHubUser> {
  return fetchGitHubAPI<GitHubUser>(`/users/${GITHUB_USERNAME}`)
}

export async function fetchGitHubRepositories(includeForks: boolean = true): Promise<GitHubRepository[]> {
  const repos = await fetchGitHubAPI<GitHubRepository[]>(
    `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  )

  const totalRepos = repos.length
  const publicRepos = repos.filter(repo => repo.visibility === 'public').length
  const forkRepos = repos.filter(repo => repo.fork && repo.visibility === 'public').length
  const originalRepos = repos.filter(repo => !repo.fork && repo.visibility === 'public').length

  if (includeForks) {
    return repos.filter(repo => repo.visibility === 'public')
  }

  return repos.filter(repo => !repo.fork && repo.visibility === 'public')
}

export async function fetchAllGitHubRepositories(): Promise<GitHubRepository[]> {
  return fetchGitHubRepositories(true)
}

export async function getRepositoryStats(): Promise<{
  total: number
  original: number
  forks: number
  private: number
}> {
  const allRepos = await fetchGitHubAPI<GitHubRepository[]>(
    `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  )

  const stats = {
    total: allRepos.length,
    original: allRepos.filter(repo => !repo.fork && repo.visibility === 'public').length,
    forks: allRepos.filter(repo => repo.fork && repo.visibility === 'public').length,
    private: allRepos.filter(repo => repo.visibility === 'private').length
  }

  return stats
}

export async function fetchFeaturedRepositories(includeForks: boolean = false): Promise<GitHubRepository[]> {
  const repos = await fetchGitHubRepositories(includeForks)

  // Projetos em destaque (prioridade)
  const featuredProjects = [
    'myportfolio',
    'vitalis_app',
    'itbi-county',
    'HiperionSerras',
    'DevRec',
    'WiFiClientConnect'
  ]

  // Separar projetos em destaque dos demais
  const priorityRepos: GitHubRepository[] = []
  const otherRepos: GitHubRepository[] = []

  repos.forEach(repo => {
    if (featuredProjects.includes(repo.name)) {
      priorityRepos.push(repo)
    } else {
      otherRepos.push(repo)
    }
  })

  // Ordenar projetos em destaque pela ordem especificada
  const sortedPriorityRepos = featuredProjects
    .map(projectName => priorityRepos.find(repo => repo.name === projectName))
    .filter(repo => repo !== undefined) as GitHubRepository[]

  // Ordenar outros projetos por stars
  const sortedOtherRepos = otherRepos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)

  // Combinar: projetos em destaque primeiro, depois outros até completar 6
  const result = [...sortedPriorityRepos, ...sortedOtherRepos].slice(0, 6)

  return result
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const [user, repos] = await Promise.all([
      fetchGitHubUser(),
      fetchGitHubRepositories()
    ])

    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0)
    
    const languages: { [key: string]: number } = {}
    repos.forEach(repo => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1
      }
    })

    const mostUsedLanguage = Object.entries(languages)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'JavaScript'

    return {
      totalRepos: repos.length,
      totalStars,
      totalForks,
      languages,
      mostUsedLanguage,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    throw error
  }
}

export async function fetchRepositoryLanguages(repoName: string): Promise<{ [key: string]: number }> {
  return fetchGitHubAPI<{ [key: string]: number }>(`/repos/${GITHUB_USERNAME}/${repoName}/languages`)
}

export async function fetchRepositoryCommits(repoName: string): Promise<any[]> {
  try {
    return await fetchGitHubAPI<any[]>(`/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=100`)
  } catch (error) {
    console.error(`Error fetching commits for ${repoName}:`, error)
    return []
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export const GITHUB_USERNAME = "seancrawford55"

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  pushed_at: string
}

export interface GitHubEvent {
  id: string
  type: string
  created_at: string
  repo: { name: string; url: string }
  payload?: {
    action?: string
    ref?: string
    ref_type?: string
    size?: number
    pull_request?: { merged?: boolean }
  }
}

const API = `https://api.github.com/users/${GITHUB_USERNAME}`
const HEADERS = { Accept: "application/vnd.github+json" }

async function fetchJson<T>(url: string, signal: AbortSignal): Promise<T> {
  const res = await fetch(url, { signal, headers: HEADERS })
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  return (await res.json()) as T
}

export async function fetchRepos(signal: AbortSignal): Promise<GitHubRepo[]> {
  return fetchJson<GitHubRepo[]>(
    `${API}/repos?sort=updated&per_page=30&type=owner`,
    signal,
  )
}

export async function fetchEvents(signal: AbortSignal): Promise<GitHubEvent[]> {
  return fetchJson<GitHubEvent[]>(
    `${API}/events/public?per_page=10`,
    signal,
  )
}

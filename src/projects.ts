import { initLayout } from "./layout"
import { projects } from "./data"
import { fetchEvents, fetchRepos, GITHUB_USERNAME, type GitHubEvent, type GitHubRepo } from "./github"
import "./styles/base.css"
import "./styles/projects.css"

initLayout()

const grid = document.querySelector<HTMLElement>("[data-projects]")
if (grid) {
  grid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-card__body">
            <div class="project-card__tags mono">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__desc">${project.description}</p>
          </div>
        </article>`,
    )
    .join("")
}

const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`
const controller = new AbortController()
const YEAR_MS = 365 * 24 * 60 * 60 * 1000

type RepoWindow = "year" | "all"

function touchedWithin(repo: GitHubRepo, window: RepoWindow): boolean {
  return window === "all" || Date.now() - new Date(repo.pushed_at).getTime() < YEAR_MS
}

function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (seconds < 60) return "just now"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

function renderError(slot: HTMLElement, message: string): void {
  slot.innerHTML = `
    <p class="status status--error">${message}</p>
    <a class="repo-list__more mono" href="${GITHUB_PROFILE}" target="_blank" rel="noopener noreferrer">
      view profile on github &rarr;
    </a>
  `
}

const reposSlot = document.querySelector<HTMLElement>("[data-repos]")
const filterRail = document.querySelector<HTMLElement>("[data-filter]")

if (reposSlot) {
  const renderRepos = (repos: GitHubRepo[], window: RepoWindow): void => {
    const visible = repos.filter((repo) => touchedWithin(repo, window))
    if (visible.length === 0) {
      reposSlot.innerHTML = `<p class="status">no repos touched in the last year</p>`
      return
    }
    reposSlot.innerHTML = visible
      .map(
        (repo) => `
            <article class="repo-card">
              <h3 class="repo-card__title">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
              </h3>
              <p class="repo-card__desc">${repo.description ?? "no description"}</p>
              <div class="repo-card__meta mono">
                ${repo.language ? `<span class="repo-card__lang">${repo.language}</span>` : ""}
                <span>${repo.stargazers_count} &#9733;</span>
                <span>updated ${timeAgo(repo.pushed_at)}</span>
              </div>
            </article>`,
      )
      .join("")
      + `
          <a class="repo-list__more mono" href="${GITHUB_PROFILE}" target="_blank" rel="noopener noreferrer">
            view all on github &rarr;
          </a>
        `
  }

  let repos: GitHubRepo[] = []
  let window: RepoWindow = "year"

  filterRail?.addEventListener("click", (event) => {
    const btn = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-window]")
    if (!btn) return
    window = btn.dataset.window as RepoWindow
    filterRail.querySelectorAll<HTMLButtonElement>("[data-window]").forEach((b) => {
      b.classList.toggle("is-active", b === btn)
    })
    renderRepos(repos, window)
  })

  fetchRepos(controller.signal)
    .then((fetched: GitHubRepo[]) => {
      repos = fetched
      renderRepos(repos, window)
    })
    .catch(() => renderError(reposSlot, "couldn't load repos right now"))
}

function describeEvent(event: GitHubEvent): string {
  const repo = event.repo.name.split("/")[1] ?? event.repo.name
  switch (event.type) {
    case "PushEvent":
      return `pushed ${event.payload?.size ?? 1} commit${(event.payload?.size ?? 1) > 1 ? "s" : ""} to ${repo}`
    case "CreateEvent":
      return `created ${event.payload?.ref_type ?? "repo"} ${event.payload?.ref ?? ""} in ${repo}`
    case "IssuesEvent":
      return `${event.payload?.action ?? "opened"} an issue in ${repo}`
    case "PullRequestEvent":
      return `${event.payload?.action ?? "opened"} a pull request in ${repo}`
    case "ForkEvent":
      return `forked ${repo}`
    case "WatchEvent":
      return `starred ${repo}`
    case "DeleteEvent":
      return `deleted ${event.payload?.ref_type ?? "branch"} ${event.payload?.ref ?? ""} in ${repo}`
    default:
      return `${event.type.replace("Event", "")} in ${repo}`
  }
}

const eventsSlot = document.querySelector<HTMLElement>("[data-events]")
if (eventsSlot) {
  fetchEvents(controller.signal)
    .then((events: GitHubEvent[]) => {
      if (events.length === 0) {
        eventsSlot.innerHTML = `<p class="status">no recent activity</p>`
        return
      }
      eventsSlot.innerHTML = events
        .map(
          (event) => `
            <div class="activity-row">
              <span class="activity-row__type mono">${event.type.replace("Event", "").toLowerCase()}</span>
              <span class="activity-row__desc">${describeEvent(event)}</span>
              <span class="activity-row__time mono">${timeAgo(event.created_at)}</span>
            </div>`,
        )
        .join("")
    })
    .catch(() => renderError(eventsSlot, "couldn't load activity right now"))
}

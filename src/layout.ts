import { socials } from "./data"

const NAV_LINKS = [
  { label: "home", href: "/index.html" },
  { label: "projects", href: "/projects.html" },
  { label: "resume", href: "/resume.html" },
  { label: "contact", href: "/contact.html" },
]

function currentPage(): string {
  const file = window.location.pathname.split("/").pop() ?? "index.html"
  return file === "" ? "index.html" : file
}

function header(): string {
  const active = currentPage()
  return `
    <nav class="nav">
      <div class="container nav__inner">
        <a href="/index.html" class="nav__brand mono">sean@dev: ~</a>
        <ul class="nav__links">
          ${NAV_LINKS.map(
            ({ label, href }) =>
              `<li><a href="${href}" class="nav__link${
                active === href ? " nav__link--active" : ""
              }">${label}</a></li>`,
          ).join("")}
        </ul>
      </div>
    </nav>
  `
}

function footer(): string {
  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <span class="site-footer__copy">&copy; ${new Date().getFullYear()} Sean Crawford</span>
        <div class="site-footer__social">
          <a href="${socials.github}" target="_blank" rel="noopener noreferrer">github</a>
          <a href="${socials.linkedin}" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
      </div>
    </footer>
  `
}

export function initLayout(): void {
  const headerSlot = document.querySelector<HTMLElement>("[data-layout='header']")
  const footerSlot = document.querySelector<HTMLElement>("[data-layout='footer']")
  if (headerSlot) headerSlot.innerHTML = header()
  if (footerSlot) footerSlot.innerHTML = footer()
}

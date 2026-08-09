import { initLayout } from "./layout"
import { experience, education, skills } from "./data"
import "./styles/base.css"
import "./styles/resume.css"

initLayout()

const expEl = document.querySelector<HTMLElement>("[data-experience]")
if (expEl) {
  expEl.innerHTML = experience
    .map(
      (job) => `
        <article class="entry-card">
          <div class="entry-card__meta">
            <span class="entry-card__period mono">${job.period}</span>
            <h4 class="entry-card__role">${job.role}</h4>
            <div class="entry-card__company">${job.company}</div>
            <div class="entry-card__location">${job.location}</div>
          </div>
          <p class="entry-card__desc">${job.description}</p>
        </article>`,
    )
    .join("")
}

const eduEl = document.querySelector<HTMLElement>("[data-education]")
if (eduEl) {
  eduEl.innerHTML = education
    .map(
      (item) => `
        <article class="entry-card">
          <div class="entry-card__meta">
            <span class="entry-card__period mono">${item.period}</span>
            <h4 class="entry-card__role">${item.school}</h4>
            <div class="entry-card__company">${item.detail}</div>
            <div class="entry-card__location">${item.location}</div>
          </div>
          <p class="entry-card__desc">${item.description}</p>
        </article>`,
    )
    .join("")
}

const skillsEl = document.querySelector<HTMLElement>("[data-skills]")
if (skillsEl) {
  skillsEl.innerHTML = skills
    .map(
      (group) => `
        <div class="skill-group">
          <h4 class="skill-group__heading mono">${group.heading}</h4>
          <ul class="skill-group__list">
            ${group.skills.map((skill) => `<li>${skill}</li>`).join("")}
          </ul>
        </div>`,
    )
    .join("")
}

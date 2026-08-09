import { initLayout } from "./layout"
import { contactRows, socials } from "./data"
import "./styles/base.css"
import "./styles/contact.css"

initLayout()

const card = document.querySelector<HTMLElement>("[data-contact]")
if (card) {
  card.innerHTML = contactRows
    .map(
      (row) => `
        <div class="contact__row">
          <span class="contact__key">${row.key}:</span>
          ${
            row.href
              ? `<a class="contact__value" href="${row.href}">${row.value}</a>`
              : `<span class="contact__value">${row.value}</span>`
          }
        </div>`,
    )
    .join("")
}

const social = document.querySelector<HTMLElement>("[data-social]")
if (social) {
  social.innerHTML = `
    <a class="contact__social-link" href="${socials.github}" target="_blank" rel="noopener noreferrer">github</a>
    <a class="contact__social-link" href="${socials.linkedin}" target="_blank" rel="noopener noreferrer">linkedin</a>
  `
}

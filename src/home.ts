import { initLayout } from "./layout"
import { specRows } from "./data"
import "./styles/base.css"
import "./styles/home.css"

initLayout()

const spec = document.querySelector<HTMLElement>("[data-spec]")
if (spec) {
  spec.innerHTML = specRows
    .map(
      (row) =>
        `<div class="spec-block__row">
          <span class="spec-block__key">${row.key}:</span>
          <span class="spec-block__value">${row.value}</span>
        </div>`,
    )
    .join("")
}

import { worksData } from "./DATA";

export function initWorksSingle() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const work = worksData.find((w) => w.id === id);
  if (!work) return;

  document.title = `SJ - ${work.title}`;

  const container = document.querySelector(".work__single");
  if (!container) return;

  const challengesHtml = (work.challenges || [])
    .map(
      (item) => `<li class="work__single__info-item">
        ${item}
      </li>`
    )
    .join("");

  const solutionsHtml = (work.solutions || [])
    .map(
      (item) => `<li class="work__single__info-item">
        ${item}
      </li>`
    )
    .join("");

  container.innerHTML = `
    <img src="${work.image}" alt="${work.title}" class="work__single__image">
    <h1 class="work__single__title text-heading">${work.title}</h1>

    <div class="work__single__content">
      <h2 class="work__single__subtitle text-label">Overview</h2>
      <p class="work__single__description">${work.description}</p>
    </div>

    <div class="work__single__info glass-bg">
      <div class="work__single__challenges">
        <h3 class="work__single__info-title">Challenges</h3>
        <ul class="work__single__info-list">
          ${challengesHtml}
        </ul>
      </div>

      <hr style="border-color: var(--color-tertiary)" />

      <div class="work__single__solutions">
        <h3 class="work__single__info-title">Solutions</h3>
        <ul class="work__single__info-list">
          ${solutionsHtml}
        </ul>
      </div>
    </div>

    <div class="work__single__key">
      <h3 class="work__single__info-title">Key Takeaways</h3>
      <p class="work__single__description">
        ${work.keyTakeaways || ""}
      </p>
    </div>
  `;

  const heroTitle = document.querySelector(".hero__title");
  if (!heroTitle) return;
  heroTitle.textContent = work.title;

  const heroLabel = document.querySelector(".text-label");
  if (!heroLabel) return;
  heroLabel.textContent = `${work.type} - ${work.year}`;
}

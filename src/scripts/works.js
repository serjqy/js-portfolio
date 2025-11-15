import { worksData } from "./DATA";

export function initWorks() {
  const workCards = document.querySelector(".work__cards");

  if (!workCards) return;

  worksData.forEach(({ title, description, type, year, image }) => {
    const card = document.createElement("div");
    card.classList.add("work__card", "glass-bg");
    card.innerHTML = `                <div class="work__card__content">
                  <h2 class="work__card__title">${title}</h2>
                  <p class="work__card__description">
                    ${description}
                  </p>
                  <p class="work__card__type">${type} - ${year}</p>
                  <button class="btn btn-primary">
                    Read More<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div class="work__card__source">
                  <img
                    src="${image}"
                    alt="${title}"
                    class="work__card__image"
                  />
                </div>`;
    workCards.appendChild(card);
  });
}

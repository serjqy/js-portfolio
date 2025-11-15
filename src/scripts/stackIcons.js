import { stackIcons } from "./DATA";

export function initStackIcons() {
  const stackContainer = document.querySelector(".stack__list");

  if (!stackContainer) return;

  stackIcons.forEach((icon) => {
    const item = document.createElement("div");
    item.classList.add("stack__item");

    const img = document.createElement("img");
    img.src = icon.img;
    img.alt = icon.name;

    item.appendChild(img);
    stackContainer.appendChild(item);
  });
}

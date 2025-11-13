export function initNavbarMenu() {
  const btnMenu = document.querySelector(".btn-menu");
  const navbar = document.querySelector(".nav");

  btnMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

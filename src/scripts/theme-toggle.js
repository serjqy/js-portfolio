export function initThemeToggle() {
  const btnTheme = document.querySelector(".btn-theme");
  const root = document.documentElement;

  function updateBtnThemeIcon() {
    if (root.classList.contains("light-theme")) {
      btnTheme.innerHTML = `<i class="bx bxs-moon"></i>`;
    } else {
      btnTheme.innerHTML = `<i class="bx bx-sun"></i>`;
    }
  }
  btnTheme.addEventListener("click", () => {
    root.classList.toggle("light-theme");
    updateBtnThemeIcon();
  });
}

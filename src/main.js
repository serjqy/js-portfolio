import { initNavbarMenu } from "./scripts/navbar";
import { initThemeToggle } from "./scripts/theme-toggle";
import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  initNavbarMenu();
  initThemeToggle();
});

import { initNavbarMenu } from "./scripts/navbar";
// import { initThemeToggle } from "./scripts/theme-toggle";
import { initWorks } from "./scripts/works";
import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  initNavbarMenu();
  // initThemeToggle();
  initWorks();
});

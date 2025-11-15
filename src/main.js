import { initContactForm } from "./scripts/contactForm";
import { initNavbarMenu } from "./scripts/navbar";
import { initStackIcons } from "./scripts/stackIcons";
import { initWorks } from "./scripts/works";
import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  initNavbarMenu();
  initContactForm();
  initStackIcons();
  initWorks();
});

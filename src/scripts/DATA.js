import css3 from "../assets/icons/css3.svg";
import figma from "../assets/icons/figma.svg";
import git from "../assets/icons/git.svg";
import html5 from "../assets/icons/html5.svg";
import js from "../assets/icons/js.svg";
import nodejs from "../assets/icons/nodejs.svg";
import npm from "../assets/icons/npm2.svg";
import react from "../assets/icons/react.svg";
import sass from "../assets/icons/sass.svg";
import tailwind from "../assets/icons/tailwindcss.svg";
import vite from "../assets/icons/vitejs.svg";

export const worksData = [
  {
    id: 1,
    title: "Title1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, eum dolore maxime, at doloribus optio hic et quisquam illo, tempore illum quo!",
    type: "Type",
    year: "2025",
    image: "/project-1.png",
    challenges: [
      "Clarify the project requirements and scope.",
      "Design a layout that works across different devices.",
      "Keep performance high while using visual effects.",
    ],
    solutions: [
      "Created a clear information architecture and content structure.",
      "Implemented a responsive grid system and flexible typography.",
      "Optimised images and reduced unnecessary scripts.",
    ],
    keyTakeaways:
      "A clear structure and early planning make design and development much smoother. Small technical decisions (like asset optimisation) have a big impact on user experience.",
  },
  {
    id: 2,
    title: "Title2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, eum dolore maxime, at doloribus optio hic et quisquam illo, tempore illum quo!",
    type: "Type",
    year: "2025",
    image: "/project-1.png",
    challenges: [
      "Example challenge 1 for project 2.",
      "Example challenge 2 for project 2.",
    ],
    solutions: [
      "Example solution 1 for project 2.",
      "Example solution 2 for project 2.",
    ],
    keyTakeaways: "Key takeaway text for project 2 goes here.",
  },
  {
    id: 3,
    title: "Title3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, eum dolore maxime, at doloribus optio hic et quisquam illo, tempore illum quo!",
    type: "Type",
    year: "2025",
    image: "/project-1.png",
    challenges: [
      "Example challenge 1 for project 3.",
      "Example challenge 2 for project 3.",
    ],
    solutions: [
      "Example solution 1 for project 3.",
      "Example solution 2 for project 3.",
    ],
    keyTakeaways: "Key takeaway text for project 3 goes here.",
  },
];

export const stackIcons = [
  { img: html5, name: "HTML5" },
  { img: css3, name: "CSS3" },
  { img: js, name: "JavaScript" },
  { img: sass, name: "SASS" },
  { img: tailwind, name: "TailwindCSS" },
  { img: vite, name: "Vite" },
  { img: git, name: "Git" },
  { img: npm, name: "NPM" },
  { img: figma, name: "Figma" },
  // { img: react, name: "React" },
  // { img: nodejs, name: "Node.js" },
];

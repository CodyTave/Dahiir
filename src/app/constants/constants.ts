import { build, code, design } from "@/assets";
import { StaticImageData } from "next/image";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "docs",
    title: "Docs",
    link: "/documentation",
  },
  {
    id: "about",
    title: "About",
    link: "/contact",
  },
  {
    id: "work",
    title: "Work",
    link: "/work",
  },
];

export const Cards: {
  id: string;
  title: string;
  desc: string;
  zelij: 1 | 2 | 3;
  img: StaticImageData;
}[] = [
  {
    id: "design",
    title: "I Design",
    desc: "Pretty things and Unique enjoyable experiences",
    zelij: 1,
    img: design,
  },
  {
    id: "code",
    title: "I Code",
    desc: "Giving life to abstract and on paper ideas ",
    zelij: 2,
    img: code,
  },
  {
    id: "build",
    title: "I Build",
    desc: "Projects applying my creative perspectives on clients specific needs",
    zelij: 3,
    img: build,
  },
];

export const socialLinks = [
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/dahiir",
    bg: "bg-blue-0",
  },
  {
    id: "dribbble",
    title: "Dribbble",
    link: "https://dribbble.com/Dahiir",
    bg: "bg-pink-0",
  },
  {
    id: "github",
    title: "Github",
    link: "https://github.com/CodyTave",
    bg: "bg-dark-1",
  },
  {
    id: "insta",
    title: "Instagram",
    link: "https://www.instagram.com/oz_odeys",
    bg: "bg-insta",
  },
];

export const footerLinks = [
  {
    id: "ressources",
    title: "Ressources",
    links: [
      {
        id: "home",
        title: "Home Page",
        url: "/",
      },
      {
        id: "docs",
        title: "Documentation",
        url: "/documentation",
      },
      {
        id: "about",
        title: "About",
        url: "/#about",
      },
      {
        id: "contact",
        title: "Contact",
        url: "/contact",
      },
    ],
  },
  {
    id: "api",
    title: "API",
    links: [
      {
        id: "education",
        title: "Education",
        url: "/documentation/education",
      },
      {
        id: "skills",
        title: "Skills",
        url: "/documentation/skills",
      },
      {
        id: "experience",
        title: "Experience",
        url: "/documentation/experience",
      },
      {
        id: "projects",
        title: "Projects",
        url: "/documentation/projects",
      },
    ],
  },
  {
    id: "quick_access",
    title: "Quick Access",
    links: [
      {
        id: "randomProject",
        title: "Random Project",
        url: "/work/random",
      },
      {
        id: "npm",
        title: "Npm Libraries",
        url: "https://www.npmjs.com/~odeys",
        external: true,
      },
      {
        id: "github",
        title: "Github",
        url: "https://github.com/CodyTave",
        external: true,
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/dahiir",
        external: true,
      },
    ],
  },
];
export const docsNav = [
  { id: "education", endpoint: "education", title: "Education" },
  { id: "experience", endpoint: "experience", title: "Experience" },
  { id: "about", endpoint: "about", title: "About" },
  { id: "bio", endpoint: "about/bio", title: "About - Bio" },
  { id: "skills", endpoint: "skills", title: "Skills" },
  {
    id: "skillCheck",
    endpoint: "skills/skillCheck",
    title: "Skills - SkillCheck",
  },
  { id: "projects", endpoint: "projects", title: "Projects" },
  { id: "random", endpoint: "projects/random", title: "Projects - Random" },
];

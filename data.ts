import { RiComputerLine, RiCodeBoxFill } from "react-icons/ri";
import { MdAppSettingsAlt } from "react-icons/md";
import {SiGoogleoptimize} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import { IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b>  and and <b>next.js</b>",
  },

  {
    Icon: MdAppSettingsAlt,
    title: "Production and maintenance",
    about:
      "Production and maintenance of websites and web application user interfaces",
  },
  {
    Icon: SiGoogleoptimize,
    title: "Looking at SEO best practices",
    about: "<b>SEO</b> best practices are a set of tasks designed to help improve a website’s search engine rankings.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "TailWind",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "MaterialUI",
    level: "80",
  },
  
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Sass",
    level: "80",
  },

  {
    Icon: BsCircleFill,
    name: "Git",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "NextJS",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "70",
  },
];

export const projects: IProject[] = [
  { 
    name: "Linkedin Clone",
    description:
      "Build LinkedIn with React JS (Firebase + Styled Components + Redux)",
    image_path: "/images/linkedin.jpg",
    deployed_url: "https://dummy-linkedin-clone-fa74e.web.app/",
    github_url: "https://github.com/aminsoltani57/linkdinClone.git",
    category: ["react","redux"],
    key_techs: ["React", "Redux", "Firebase","Styled Components"],
  },

  {
    name: "Panel Admin Dashboard",
    image_path: "/images/panel1.jpg",
    deployed_url:" https://enchanting-mousse-cfed57.netlify.app/",
    github_url: "https://github.com/aminsoltani57/admin-pannel-project-.git",
    category: ["react"],
    description:
      "React Admin Panel With ReactJS and State management with context and use scss for styling",
    key_techs: ["React"],
  },

  {
    name: "Portfolio",
    image_path: "/images/portfolio.jpg",
    deployed_url: "",
    github_url: "",
    category: ["react","next", "redux", "tailwind"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Next",
      "Redux",
      "tailwind",
    ],
  },


];

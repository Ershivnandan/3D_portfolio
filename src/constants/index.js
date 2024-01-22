import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  bootstrap,
  chakra,
  ionic,
  git,
  figma,
  blender,
  eirlLogo,
  Gunagya,
  dav,
  anshuiya,
  hidr8,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Ionic Developer",
    icon: mobile,
  },
  {
    title: "Figma designer",
    icon: backend,
  },
  {
    title: "Blender Animation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 5",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: ionic,
  },
  {
    name: "MongoDB",
    icon: chakra,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Engineering Innovations",
    icon: eirlLogo,
    iconBg: "#fff",
    date: "March 2023 - Jun 2023",
    points: [
      "Developing and maintaining web applications using Html, css, Bootstrap and Javascript",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to maintain web apps",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate software developer",
    company_name: "Gunagya Technologies Pvt. Ltd.",
    icon: Gunagya,
    iconBg: "#fff",
    date: "Jul 2023 - Present",
    points: [
      "Developing web and android applications using React.js, Angular and Ionic related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Creating Figma design and Blender animations.",
      "Creating 3D models in blender for the 3D websites with animations",
      "Project lead in R&D product Hidr8 smart water bottle"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "David Adefesso Portfolio",
    description:
      "Web base portfolio of David Adefesso, Completely responsive and animated website.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framerMotion",
        color: "green-text-gradient",
      },
      {
        name: "chakraUi",
        color: "pink-text-gradient",
      },
    ],
    image: dav,
    source_code_link: "https://github.com/",
  },
  {
    name: "Anshuiya Foundation",
    description:
      "Web application for Anshuiya foundation trust, in which people can donate money to the needy child.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css5",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: anshuiya,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hidr8",
    description:
      "A mobile application that can track water drinking and connects with smart water bottle through bluetooth low energy,",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "ngxEcharts",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "Type Script",
        color: "blue-text-gradient",
      },
    ],
    image: hidr8,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

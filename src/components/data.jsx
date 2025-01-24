// data.jsx

import { moodBoardCover, myChaiCover, plantBudCover, portfolioCover } from "../assets";

const projects = [
  {
    title: 'MyChai.',
    subtitle: 'Premium Tea E-Commerce Store',
    shortDescription: `MyChai is an ecommerce concept store for speciality loose leaf teas.`,
    description_1: 'MyChai is a concept eCommerce store for specialty loose-leaf teas, built to demonstrate proficiency in React and showcase design skills for eCommerce.',
    coverPhoto: [myChaiCover],
    skills: 'React, SCSS, FireBase.',
    exploreLink: '/my-chai',
    url: 'https://ljames97.github.io/my-chai',
    gitHub: 'https://github.com/ljames97/my-chai',
    backgroundColor: 'bg-dark-brown'
  },
  {
    title: 'PlantBud.',
    shortDescription: `PlantBud is a plant care assistant application for plant enthusiasts.`,
    description_1: 'PlantBud is a concept plant care management app, built to demonstrate proficiency in Vanilla JavaScript, CSS, and Firebase, showcasing core web development skills.',
    coverPhoto: [plantBudCover],
    skills: 'Javascript, CSS, Firebase.',
    exploreLink: '/plant-bud',
    url: 'https://ljames97.github.io/plant-bud',
    gitHub: 'https://github.com/ljames97/plant-bud',
    backgroundColor: 'bg-dark-brown'
  },
  {
    title: 'Portfolio.',
    description_1: 'My web developer portfolio, showcasing projects, skills and bio, created using React and styled with Tailwind CSS.',
    skills: 'React, Tailwind CSS.',
    coverPhoto: portfolioCover,
    exploreLink: '/portfolio',
    gitHub: 'https://github.com/ljames97/portfolio',
    portfolio: true
  },
  {
    title: 'MoodLab.',
    description_1: 'MoodLab is a collaborative mood board applicaiton that lets users create, customise, and share ideas in real time.',
    skills: 'React, Tailwind CSS, FireBase, Next.js, Node.js.',
    coverPhoto: moodBoardCover,
    comingSoon: true,
    comingSoonMobile: true
  }
]

const comingSoon = {
    title: 'MoodLab.',
    description_1: 'MoodLab is a collaborative mood board applicaiton that lets users create, customise, and share ideas in real time.',
    skills: 'React, Tailwind CSS, FireBase, Next.js, Node.js.',
    coverPhoto: moodBoardCover,
    comingSoon: true
  }

export { projects, comingSoon };
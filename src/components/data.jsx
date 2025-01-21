// data.jsx

import { moodBoardCover, myChaiCover, myChaiCoverMobile, myChaiCoverMobile_2, myChaiCoverMobile_3, plantBudCover, plantBudCoverMobile, plantBudCoverMobile_2, plantBudCoverMobile_3, portfolioCover } from "../assets";

const projects = [
  {
    title: 'MyChai.',
    subtitle: 'Premium Tea E-Commerce Store',
    shortDescription: `MyChai is an ecommerce concept store for speciality loose leaf teas.`,
    description_1: 'MyChai is a concept ecommerce store for specialty loose leaf teas, designed to showcase proficiency in React and design skills for ecommerce.',
    description_2: 'MyChai is a concept ecommerce store for specialty loose leaf teas, designed to showcase core web development and design skills. Built using React, SCSS, and Firebase, the project features customer account management, user authentication, local cart storage, and a focus on elegant ecommerce design.',
    coverPhotoMobile: [myChaiCoverMobile, myChaiCoverMobile_2, myChaiCoverMobile_3],
    coverPhoto: [myChaiCover],
    skills: 'React, SCSS, FireBase.',
    exploreLink: '/my-chai',
    url: 'https://ljames97.github.io/my-chai',
    backgroundColor: 'bg-dark-brown'
  },
  {
    title: 'PlantBud.',
    shortDescription: `PlantBud is a plant care assistant application for plant enthusiasts.`,
    description_1: 'PlantBud is a concept plant care management app, designed to showcase a deep understanding of vanilla JavaScript and CSS without relying on frameworks.',
    description_2: `PlantBud is a concept plant care management app, designed to showcase a deep understanding of vanilla JavaScript and CSS without relying on frameworks. The project features user authentication, local storage, reponsive design and comprehensive code testing`,
    coverPhotoMobile: [plantBudCoverMobile_3, plantBudCoverMobile, plantBudCoverMobile_2],
    coverPhoto: [plantBudCover],
    skills: 'Javascript, CSS, Firebase.',
    exploreLink: '/plant-bud',
    url: 'https://ljames97.github.io/plant-bud',
    backgroundColor: 'bg-dark-brown'
  },
  {
    title: 'Portfolio.',
    description_1: 'This web developer portfolio, showcasing projects, skills and bio. Created using React and Tailwind CSS.',
    skills: 'React, Tailwind CSS.',
    coverPhoto: portfolioCover,
    exploreLink: '/portfolio',
    portfolio: true
  },
  {
    title: 'MoodLab.',
    description_1: 'MoodLab is a collaborative mood board applicaiton that lets users create, customize, and share ideas in real time.',
    skills: 'React, Tailwind CSS, FireBase, Next.js, Node.js.',
    coverPhoto: moodBoardCover,
    comingSoon: true,
    comingSoonMobile: true
  }
]

const comingSoon = {
    title: 'MoodLab.',
    description_1: 'MoodLab is a collaborative mood board applicaiton that lets users create, customize, and share ideas in real time.',
    skills: 'React, Tailwind CSS, FireBase, Next.js, Node.js.',
    coverPhoto: moodBoardCover,
    comingSoon: true
  }

export { projects, comingSoon };
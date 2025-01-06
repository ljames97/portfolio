// data.jsx

import { myChaiCover, myChaiCoverMobile, myChaiCoverMobile_2, myChaiCoverMobile_3, plantBudCover, plantBudCoverMobile, plantBudCoverMobile_2, plantBudCoverMobile_3 } from "../assets";

const projects = [
  {
    title: 'MyChai',
    subtitle: 'Premium Tea E-Commerce Store',
    shortDescription: `MyChai is an ecommerce concept store for speciality loose leaf teas.`,
    coverPhotoMobile: [myChaiCoverMobile, myChaiCoverMobile_2, myChaiCoverMobile_3],
    coverPhoto: [myChaiCover],
    skills: 'React, SCSS, FireBase',
    exploreLink: '/my-chai',
    url: 'https://ljames97.github.io/my-chai'
  },
  {
    title: 'PlantBud',
    shortDescription: `PlantBud is a plant care assistant application for plant enthusiasts.`,
    coverPhotoMobile: [plantBudCoverMobile_3, plantBudCoverMobile, plantBudCoverMobile_2],
    coverPhoto: [plantBudCover],
    skills: 'Javascript, CSS, Firebase',
    exploreLink: '/plant-bud',
    url: 'https://ljames97.github.io/plant-bud'
  }
]

export { projects };
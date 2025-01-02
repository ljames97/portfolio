// data.jsx

import { myChaiCover, myChaiCoverMobile, myChaiCoverMobile_2, myChaiCoverMobile_3, plantBudCover, plantBudCoverMobile, plantBudCoverMobile_2, plantBudCoverMobile_3 } from "../assets";

const projects = [
  {
    title: 'MyChai',
    shortDescription: `MyChai is an ecommerce concept store for speciality loose leaf teas.`,
    coverPhoto: [myChaiCoverMobile, myChaiCoverMobile_2, myChaiCoverMobile_3],
    skills: 'React, SCSS, FireBase'
  },
  {
    title: 'PlantBud',
    shortDescription: `PlantBud is a plant care assistant application for plant enthusiasts.`,
    coverPhoto: [plantBudCoverMobile_3, plantBudCoverMobile, plantBudCoverMobile_2],
    skills: 'Javascript, CSS, Firebase'
  }
]

export { projects };
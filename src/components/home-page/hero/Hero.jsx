// Hero.jsx

import HeroGraphic from "./HeroGraphic";
import HeroHeader from "./HeroHeader"

const Hero = () => {
  return (
    <div className="flex flex-col items-center -mt-10">
      <HeroGraphic />
      <HeroHeader />

    </div>
  )
}

export default Hero;
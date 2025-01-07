// Hero.jsx

import HeroGraphic from "./HeroGraphic";
import HeroHeader from "./HeroHeader"
import Socials from "./Socials";
 
const Hero = () => {
  return (
    <div className="flex flex-col items-center">

      <HeroHeader />
      <HeroGraphic />
      <Socials />
    </div>
  )
}

export default Hero
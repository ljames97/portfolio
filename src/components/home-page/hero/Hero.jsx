// Hero.jsx

import HeroGraphic from "./HeroGraphic";
import HeroHeader from "./HeroHeader"
import Socials from "./Socials";
 
const Hero = () => {
  return (
    <div className="flex flex-col">

      <HeroHeader />
      <HeroGraphic />
      <Socials />
    </div>
  )
}

export default Hero
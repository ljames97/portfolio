// Hero.jsx

import HeroGraphic from "./HeroGraphic";
import HeroHeader from "./HeroHeader"
import Socials from "./Socials";
 
const Hero = () => {
  return (
    <div className=" md:bg-[url('./assets/dark-gradient.png')] md:bg-cover bg-right-top md:h-screen flex flex-col md:flex-row md:items-center my-8 md:py-16 md:px-16 md:mb-0 md:mt-0">
      <HeroHeader />
      <div className="md:w-1/3 flex flex-col ml-12 mb-10 md:mt-16 md:items-start">
        {/* <HeroGraphic /> */}
      </div>
      <div className="md:hidden">
        <Socials />
      </div>
    </div>
  )
}

export default Hero
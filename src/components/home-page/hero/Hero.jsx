// Hero.jsx

import HeroHeader from "./HeroHeader"
 
const Hero = () => {
  return (
    <div className="md:bg-[url('./assets/dark-gradient.png')] md:dark:bg-[url('./assets/dark-gradient.png')] md:bg-cover bg-off-white dark:bg-dark-blue bg-right-top justify-center md:justify-start h-screen flex flex-col md:flex-row md:items-center md:my-8 md:py-16 md:px-16 md:mb-0 md:mt-0">
      <HeroHeader />
    </div>
  )
}

export default Hero
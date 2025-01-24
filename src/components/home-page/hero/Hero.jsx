// Hero.jsx

import SocialIcons from "../../global/SocialIcons"

/**
 * Renders hero section, including name, subtitle, description and social media icons.
 */
const Hero = () => {
  return (
    <div className="lg:bg-[url('./assets/dark-gradient.png')] md:bg-cover bg-dark-blue bg-right-top justify-center md:justify-start h-screen flex flex-col md:flex-row md:items-center md:my-8 md:py-16 md:px-16 md:mb-0 md:mt-0">
      <div className="pb-0 md:pb-12 p-12 md:px-8 mb-4 md:mt-24 text-left text-white">
        <h1 className="text-accent text-5xl md:text-8xl">Luke James</h1>
        <h1 className="text-white font-thin text-3xl md:text-7xl md:border-none md:pb-0">Frontend Developer.</h1>
        <p className="text-lg font-thin pt-4 md:pt-6 pr-4">I build modern websites with creativity, vision and elegant design.</p>
        <div className="flex gap-10 mt-10">
          <SocialIcons widthHeight={'30'} />
        </div>
      </div>
    </div>
  )
}

export default Hero
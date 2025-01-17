// HeroHeader.jsx

import SocialIcons from "../../global/SocialIcons";
import HeroGraphic from "./HeroGraphic";

const HeroHeader = () => {
  return (
    <div className="md:w-1/2 pb-0 md:pb-12 p-12 md:px-8 mb-4 md:mt-24 text-left text-black dark:text-white">
      <h1 className="text-dark-teal dark:text-lighter-orange text-5xl md:text-8xl">Luke James</h1>
      <h1 className="text-dark-orange font-thin text-3xl md:text-7xl md:border-none md:pb-0">Frontend Developer.</h1>
      <p className="md:w-3/4 text-lg dark:font-thin pt-4 md:pt-6 pr-4">I like to build modern websites with creativity, vision and elegant design.</p>
      {/* <p className="font-thin">I crete responsive, accessible, and interactive web experiences.</p> */}
      <div className="flex gap-10 mt-10">
        <SocialIcons widthHeight={'30'} />
      </div>
    </div>
  )
}

export default HeroHeader;
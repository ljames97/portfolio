// HeroGraphic.jsx

import { blueBlur, geometricBackground, headshot, pinkBlur } from "../../../assets"

const HeroGraphic = () => {
  return (
    <div className="relative flex flex-col items-center w-full -mt-12 mb-10">
      <div className="absolute -mt-12 opacity-60">
        <img src={pinkBlur}/>
      </div>
      <div className="relative w-1/2 mt-16">
        <img className="rounded-full" src={headshot}/>
      </div>

   </div>
  )
}

export default HeroGraphic;
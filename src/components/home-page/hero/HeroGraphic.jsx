// HeroGraphic.jsx

import { blueBlur, geometricBackground, headshot, pinkBlur } from "../../../assets"

const HeroGraphic = () => {
  return (
    <div className="relative w-1/2 md:w-1/1">
      <img className=" rounded-3xl" src={headshot}/>
    </div>
  )
}

export default HeroGraphic;
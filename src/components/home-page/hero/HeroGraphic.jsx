// HeroGraphic.jsx

import { blueBlur, geometricBackground, headshot, pinkBlur } from "../../../assets"

const HeroGraphic = () => {
  return (
    <div className="flex flex-col ml-16 mb-10">
      {/* <div className="absolute -mt-12 opacity-60">
        <img src={pinkBlur}/>
      </div> */}
      <div className="relative w-1/2">
        <img className="rounded-xl" src={headshot}/>
      </div>

   </div>
  )
}

export default HeroGraphic;
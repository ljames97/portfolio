// HeroGraphic.jsx

import { blueBlur, geometricBackground, headshot, pinkBlur } from "../../../assets"

const HeroGraphic = () => {
  return (
    <div className="relative flex flex-col items-center w-full mb-10">
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
// HeroHeader.jsx

const HeroHeader = () => {
  return (
    <div className=" m-12 mb-12 text-left text-black dark:text-white">
      <h1 className="text-dark-teal dark:text-lighter-orange text-4xl">Luke James</h1>
      <h1 className=" font-thin text-3xl pt-0 border-b dark:border-white border-dark-blue pb-4">Frontend Developer.</h1>
      <p className="text-lg font- dark:font-thin pt-6 pr-4">I build websites with creativity, vision and elegant design.</p>
      {/* <p className="font-thin">I crete responsive, accessible, and interactive web experiences.</p> */}
    </div>
  )
}

export default HeroHeader;
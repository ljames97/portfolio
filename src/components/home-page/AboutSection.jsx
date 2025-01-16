// AboutSection.jsx

import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about')
  }
  return (
    <div className="md:bg-[url('./assets/edge-squares.png')] md:bg-cover md:bg-left-bottom md:h-screen md:px-16 md:flex md:flex-col md:justify-center md:items-center bg-dark-teal dark:bg-dark-teal p-8 py-16 mt-6 leading-relaxed text-white md:mt-0">
            <h1 className="text-center font-thin tracking-widest mt-8 text-3xl">About</h1>

      <div className="md:mb-auto md:mt-10 border-deep-red dark:border-light-orange border p-8 rounded-3xl dark:text-white text-dark-blue bg-off-white dark:bg-dark-teal md:w-1/2">
        <h1 className="tracking-widest text-lg py-4">Bringing ideas to life.</h1>
        <p className="mt-4 font-thin">I specialize in crafting modern, responsive websites with a focus on clean design and seamless user experiences.
          With experience in technologies like React, Tailwind CSS, and JavaScript, I bring ideas to life on the web.
        </p>
        <p className="mt-8 font-thin">I specialize in crafting modern, responsive websites with a focus on clean design and seamless user experiences.
          With experience in technologies like React, Tailwind CSS, and JavaScript, I bring ideas to life on the web.
        </p>
        <button onClick={handleClick} className="text-white mt-12 mb-4 p-4 w-1/1 bg-dark-blue dark:text-black dark:bg-light-orange rounded-3xl">About me →</button>
      </div>

    </div>
  )
}

export default AboutSection;
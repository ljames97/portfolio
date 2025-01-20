// AboutSection.jsx

import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about')
  }
  return (
    <div className="relative min-h-screen md:px-16 md:flex md:flex-col md:justify-center md:items-center bg-dark-teal md:bg-blue-gradient p-8 py-16 leading-relaxed text-black md:mt-0">
      <h1 className="text-white text-center font-thin tracking-widest mt-8 mb-8 md:mb-0 text-3xl">Bringing ideas to life...</h1>
      <div className="z-10 md:mb-auto md:mt-10 border-dark-blue dark:border-off-white border p-8 rounded-3xl dark:text-white text-white bg-white dark:bg-transparent md:w-1/2">
        <p className="mt-4 font-thin">I specialize in crafting modern, responsive websites with a focus on clean design and seamless user experiences.
          With experience in technologies like React, Tailwind CSS, and JavaScript, I bring ideas to life on the web.
        </p>
        <p className="mt-8 font-thin">I specialize in crafting modern, responsive websites with a focus on clean design and seamless user experiences.
          With experience in technologies like React, Tailwind CSS, and JavaScript, I bring ideas to life on the web.
        </p>
        <button onClick={handleClick} className="mt-12 mb-4 p-4 w-1/1 bg-light-orange text-black dark:bg-accent hover:dark:bg-hover-accent rounded-3xl">About me →</button>
      </div>

    </div>
  )
}

export default AboutSection;
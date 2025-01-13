// AboutSection.jsx

import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about')
  }
  return (
    <div className="bg-dark-teal dark:bg-dark-teal p-8 py-16 mt-6 leading-relaxed text-white">
      <div className="border-deep-red dark:border-light-orange border-2 p-8 rounded-3xl dark:text-white text-dark-blue bg-off-white dark:bg-dark-blue">
        <h1 className="tracking-widest text-lg py-4">ABOUT</h1>
        <p className="mt-2 font-thin">I specialize in crafting modern, responsive websites with a focus on clean design and seamless user experiences.
          With experience in technologies like React, Tailwind CSS, and JavaScript, I bring ideas to life on the web.
        </p>
        <button onClick={handleClick} className="text-white mt-10 mb-4 p-4 mt-8 w-1/1 bg-dark-blue dark:text-black dark:bg-light-orange rounded-3xl">About me →</button>
      </div>

    </div>
  )
}

export default AboutSection;
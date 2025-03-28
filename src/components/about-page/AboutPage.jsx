// AboutPage.jsx

import { useNavigate } from "react-router-dom";

/**
 * AboutPage - React functional component for the About page.
 * 
 * @component
 * @returns {JSX.Element} A styled "About Me" page with text content and navigation functionality.
 */
const AboutPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/portfolio')
  }

  return (
    <div className="text-black text-left flex flex-col items-center bg-off-white p-12 md:px-16 py-24 transition-opacity transition-transform ease-out">
      <div>
        <h1 className="text-5xl tracking-wide font-thin">About Me</h1>
        <p className="md:w-2/5 my-4 md:my-6 mt-10 md:mt-16 opacity-80">Hi, I’m Luke, a front-end developer based in London, specializing in React, JavaScript, and UI/UX design. I focus on crafting modern, responsive web applications with clean, efficient code and intuitive user experiences.</p>
        {/* <h1 className="w-2/5 mt-6 text-lg">Technical Skills</h1> */}
        <p className="md:w-2/5 my-4 md:my-6 opacity-80">I have a strong foundation in JavaScript and CSS, which I believe is essential for mastering web development. Whether it's optimizing performance, building interactive UI components, or integrating APIs, I enjoy the problem-solving and creativity involved in bringing projects to life.</p>
        {/* <h1 className="w-2/5 mt-6 text-lg">Interests</h1> */}
        <p className="md:w-2/5 my-4 md:mt-6 opacity-80">Beyond web development, I’m passionate about jazz piano, art, and writing, which fuel my creativity and help shape my approach to design and development.</p>
        <button onClick={handleClick} className="mt-8 p-4 hover:bg-hover-accent bg-accent text-black rounded-3xl">My Portfolio →</button>
      </div>

    </div>
  )

}

export default AboutPage;
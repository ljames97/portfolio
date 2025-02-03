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
    navigate('/projects')
  }

  return (
    <div className="text-black text-left flex flex-col items-center bg-off-white p-12 md:px-16 py-24 transition-opacity transition-transform ease-out">
      <div>
        <h1 className="text-5xl tracking-wide font-thin">About Me</h1>
        <p className="md:w-2/5 my-4 md:my-6 mt-10 md:mt-16 opacity-80">Hi, I’m Luke, a front-end web developer based in London. I specialise in building modern websites and am passionate about creating user-focused designs that are intuitive and enjoyable to interact with..</p>
        {/* <h1 className="w-2/5 mt-6 text-lg">Technical Skills</h1> */}
        <p className="md:w-2/5 my-4 md:my-6 opacity-80">I have a strong foundation in vanilla JavaScript and CSS which I believe is key to truly understanding the core of web development. Whether it’s solving complex technical challenges or learning new technologies, I enjoy the creative problem-solving that comes with bringing projects to life on the web.</p>
        {/* <h1 className="w-2/5 mt-6 text-lg">Interests</h1> */}
        <p className="md:w-2/5 my-4 md:mt-6 opacity-80">Outside of web development, I enjoy creative pursuits and am a keen jazz pianist, artist, and writer. I find these creative disciplines keep me engaged, inspire my approach to development, and help bring a unique perspective to my work.</p>
        <button onClick={handleClick} className="mt-8 p-4 hover:bg-hover-accent bg-accent text-black rounded-3xl">My Projects →</button>
      </div>

    </div>
  )

}

export default AboutPage;
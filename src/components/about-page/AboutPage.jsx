// AboutPage.jsx

import { headshot } from "../../assets";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects')
  }

  return (
    <div className="h-screen text-left flex flex-col items-center bg-off-white dark:bg-dark-blue p-10 py-24">
      <h1 className="text-xl tracking-widest">ABOUT ME</h1>
      <p className="w-2/5 mt-6 opacity-80">Hi, I’m Luke, a front-end web developer living in London. I work with React, Vanilla JavaScript, CSS, Tailwind, and Firebase to build responsive, user-focused web applications.</p>
      <h1 className="w-2/5 mt-6 text-lg">Technical Skills</h1>
      <p className="w-2/5 mt-1 opacity-80">I think having a solid grasp of vanilla JS and CSS is essential for understanding the core of web development and writing cleaner, more efficient code.</p>
      <h1 className="w-2/5 mt-6 text-lg">Interests</h1>
      <p className="w-2/5 mt-1 opacity-80">I’m really interested in design, technology, and how AI is changing the way we build and interact with the web. Outside of development, I’m a jazz pianist and love exploring music. I’m also into writing and theatre, and I enjoy digging into the overlap between creativity and business.</p>
      <p className="w-2/5 mt-8 opacity-80">For me, web development is about more than just solving technical problems—it’s about creating things that feel intuitive and exciting to use.</p>
      <button onClick={handleClick} className="mt-8 p-4 bg-light-orange text-black rounded-3xl">My Projects →</button>
    </div>
  )

}

export default AboutPage;
// AboutPage.jsx

import { headshot } from "../../assets";

const AboutPage = () => {
  return (
    <div className="p-8 pt-4">
      <h1 className="text-lg tracking-widest">ABOUT ME</h1>
      <div className="flex items-center">
        <p className="w-3/4 mt-4 opacity-80">Hi, I’m Luke, a front-end web developer living in London. I work with React, Vanilla JavaScript, CSS, Tailwind, and Firebase to build responsive, user-focused web applications.</p>
        <div className="w-1/2">
          <img className="rounded" src={headshot} />
        </div>
      </div>
      <p className="mt-8 opacity-80">I think having a solid grasp of vanilla JS and CSS is essential for understanding the core of web development and writing cleaner, more efficient code.</p>
      <p className="mt-8 opacity-80">I’m really interested in design, technology, and how AI is changing the way we build and interact with the web. Outside of development, I’m a jazz pianist and love exploring music. I’m also into writing and theatre, and I enjoy digging into the overlap between creativity and business.</p>
      <p className="mt-8 opacity-80">For me, web development is about more than just solving technical problems—it’s about creating things that feel intuitive and exciting to use.</p>
    </div>
  )

}

export default AboutPage;
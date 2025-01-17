// Projects.jsx

import { projects } from "../../data"
import ProjectWidget from "./ProjectWidget";

const Projects = ({ isHomePage }) => {
  return (
    <div className="md:flex md:flex-col items-center">
      <h1 className="self-center font-thin tracking-widest text-3xl py-4 mb-8 text-black dark:text-white">{`${isHomePage ? 'Recent Projects' : ''}`}</h1>
      <div className="md:flex gap-16 ">
        {projects.map((project, index) => (
          <ProjectWidget key={index} project={project} isHomePage={isHomePage}/>
        ))}
      </div>
    </div>
  )
}

export default Projects;
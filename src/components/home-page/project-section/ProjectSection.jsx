// ProjectSection.jsx

import { projects } from "../../data";
import ProjectWidget from "./ProjectWidget";

const ProjectSection = () => {
  return (
    <div className="md:bg-[url('./assets/')] md:bg-cover md:bg-right-bottom md:h-screen md:px-16 md:pt-14 p-8 pb-16 leading-relaxed text-white md:flex bg-dark-teal">
      <div className="md:flex md:flex-col items-center">
        <h1 className="self-center font-thin tracking-widest text-3xl py-4 mb-8 text-black dark:text-white">Recent Projects</h1>
        <div className="md:flex gap-16 ">
          {projects.map((project, index) => (
            <ProjectWidget key={index} project={project}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection;
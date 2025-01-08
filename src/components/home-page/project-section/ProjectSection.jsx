// ProjectSection.jsx

import { projects } from "../../data";
import ProjectWidget from "./ProjectWidget";

const ProjectSection = () => {
  return (
    <div className="p-8 py-16 leading-relaxed text-white">
      <div className="">
        <h1 className="tracking-widest text-2xl py-4 mb-8">Recent Projects</h1>
        <div className="">
          {projects.map((project, index) => (
            <ProjectWidget key={index} project={project}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection;
// ProjectSection.jsx

import { projects } from "../../data";
import ProjectWidget from "./ProjectWidget";

const ProjectSection = () => {
  return (
    <div className="p-8 leading-relaxed">
      <h1 className="text-lg font-semibold pb-2">Recent Projects</h1>
      <div className="">
        {projects.map((project, index) => (
          <ProjectWidget key={index} project={project}/>
        ))}
      </div>
    </div>
  )
}

export default ProjectSection;
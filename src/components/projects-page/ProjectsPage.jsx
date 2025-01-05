// ProjectsPage.jsx

import { projects } from "../data";
import MainProjectWidget from "./MainProjectWidget";

const ProjectsPage = () => {
  return (
    <div className="p-4 pb-16">
      <h1 className="text-center text-xl tracking-widest">PROJECTS</h1>
      <div className="-mt-4">
        {projects.map((project, index) => (
          <MainProjectWidget key={index} project={project}/>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage;
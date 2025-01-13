// ProjectsPage.jsx

import { comingSoon, projects } from "../data";
import MainProjectWidget from "./MainProjectWidget";

const ProjectsPage = () => {
  return (
    <div className=" dark:bg-dark-blue p-10 pb-16">
      <h1 className="text-xl tracking-widest">PROJECTS</h1>
      <div className="mt-8">
        {projects.map((project, index) => (
          <MainProjectWidget key={index} project={project} CTA={true}/>
        ))}
      </div>
      <MainProjectWidget project={comingSoon[0]} CTA={false}/>
    </div>
  )
}

export default ProjectsPage;
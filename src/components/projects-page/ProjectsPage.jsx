// ProjectsPage.jsx

import { comingSoon } from "../data";
import ProjectWidget from "../home-page/project-section/ProjectWidget";
import Projects from "../home-page/project-section/Projects";

const ProjectsPage = ({ isHomePage }) => {
  return (
    <div className="px-8 md:px-16 md:py-24 py-24 dark:bg-off-white">
      <h1 className="tracking-wide text-black font-thin text-5xl">My Projects</h1>
      <Projects isHomePage={isHomePage} />
    </div>
  )
}

export default ProjectsPage;
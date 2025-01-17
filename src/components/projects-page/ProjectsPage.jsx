// ProjectsPage.jsx

import Projects from "../home-page/project-section/Projects";

const ProjectsPage = ({ isHomePage }) => {
  return (
    <div className="px-8 md:px-16 md:py-24 py-24 dark:bg-dark-teal">
      <h1 className="tracking-wide font-thin text-5xl">/projects</h1>
      <Projects isHomePage={isHomePage} />
    </div>
  )
}

export default ProjectsPage;
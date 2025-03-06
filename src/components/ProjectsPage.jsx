// ProjectsPage.jsx

import Projects from "./home-page/project-section/Projects";

/**
 * Renders projects page
 * @param {boolean} props.isHomePage
 */
const ProjectsPage = ({ isHomePage }) => {
  return (
    <div className="px-8 md:px-16 md:py-24 py-24 bg-off-white">
      <h1 className="text-center tracking-wide text-black font-thin text-5xl">My Portfolio</h1>
      <Projects isHomePage={isHomePage} />
    </div>
  )
}

export default ProjectsPage;
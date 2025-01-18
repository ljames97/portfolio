// ProjectSection.jsx

import Projects from "./Projects";

const ProjectSection = ({ isHomePage }) => {
  return (
    <div className="md:h-screen md:px-24 md:pt-14 p-8 pb-16 leading-relaxed text-black md:flex bg-off-white">
      <Projects isHomePage={isHomePage} />
    </div>
  )
}

export default ProjectSection;
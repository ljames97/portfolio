import { useRef, useState, useEffect } from "react";
import { projects } from "../../data";
import ProjectWidget from "./ProjectWidget";
import { useInView } from "../../hooks/useInView";

const Projects = ({ isHomePage }) => {
  const containerRef = useRef(null);

  // Use the `useInView` hook for detecting when the section is visible
  const isSectionVisible = useInView(containerRef, { threshold: 0.2 });

  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    if (isSectionVisible) {
      projects.forEach((_, index) => {
        setVisibleProjects((prev) => [...prev, index]);
      });
    }
  }, [isSectionVisible]);

  return (
    <div ref={containerRef} className="md:flex md:flex-col items-center">
      <h1 className="dark:text-black text-black self-center font-thin tracking-widest text-3xl py-4 mb-8">
        {isHomePage ? "Recent Projects." : ""}
      </h1>
      <div className="md:flex gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`md:w-1/3 transition-transform transition-opacity ease-out`}
            style={{
              opacity: visibleProjects.includes(index) ? 1 : 0,
              transform: visibleProjects.includes(index)
                ? "translateX(0)"
                : "translateX(-20px)",
              transition: `transform 1s ease-out, opacity 1s ease-out`,
            }}
          >
            <ProjectWidget project={project} isHomePage={isHomePage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

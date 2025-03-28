// Projects.jsx

import { useEffect, useRef, useState } from "react";
import { projects } from "../../data";
import ProjectWidget from "./ProjectWidget";
import { useInView } from "../../hooks/useInView";

/**
 * Renders project widgets, behaviour adapts depending on whether it's used on hompage or another page.
 * @param {Object} props - Props passed to the component.
 * @param {boolean} props.isHomePage - Determines if the component is rendered on the homepage.
 * @returns {JSX.Element} The rendered projects section.
 */
const Projects = ({ isHomePage }) => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isSectionVisible = useInView(sectionRef, { threshold: isHomePage ? 0.1 : 0 });
  
  useEffect(() => {
    if (isSectionVisible && !hasAnimated) {
      console.log("✅ Animation triggered!");
      setHasAnimated(true);
    }
  }, [isSectionVisible, hasAnimated]);
  
  return (
    <div ref={sectionRef} className="md:flex md:flex-col items-center">
      <h1 className="text-black self-center font-thin tracking-wide text-3xl py-4 mb-8 transition-opacity transition-transform ease-out"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
            transition: "transform 1s ease-out, opacity 1s ease-out",
          }}
      >
        {isHomePage ? "Recent Projects." : ""}
      </h1>
      <div className={`${!isHomePage && 'flex-wrap'} md:flex gap-8 justify-center transition-opacity transition-transform ease-out`}
           style={{
           opacity: hasAnimated ? 1 : 0,
           transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
           transition: "transform 1s ease-out, opacity 1s ease-out",
         }}
      >
        {projects.map((project, index) => (
          <ProjectWidget project={project} key={index} isHomePage={isHomePage} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

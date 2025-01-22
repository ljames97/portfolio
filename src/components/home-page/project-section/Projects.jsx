import { useRef, useState, useEffect } from "react";
import { comingSoon, projects } from "../../data";
import ProjectWidget from "./ProjectWidget";
import { useInView } from "../../hooks/useInView";

const Projects = ({ isHomePage }) => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isSectionVisible = useInView(sectionRef, { threshold: isHomePage ? 0.3 : 0 });
  
  if (isSectionVisible && !hasAnimated) {
    setHasAnimated(true);
  }
  
  return (
    <div ref={sectionRef} className="md:flex md:flex-col items-center">
      <h1 className="dark:text-black text-black self-center font-thin tracking-widest text-3xl py-4 mb-8 transition-opacity transition-transform ease-out"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
            transition: "transform 1s ease-out, opacity 1s ease-out",
          }}
      >
        {isHomePage ? "Recent Projects." : ""}
      </h1>
      <div className="md:flex gap-16 transition-opacity transition-transform ease-out"
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
      <div className={`w-full pr-32 self-start ${isHomePage && 'md:hidden'} transition-opacity transition-transform ease-out hidden md:block`}
           style={{
           opacity: hasAnimated ? 1 : 0,
           transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
           transition: "transform 1s ease-out, opacity 1s ease-out",
          }}>
      <ProjectWidget project={comingSoon} isHomePage={isHomePage} />
      </div>
    </div>
  );
};

export default Projects;

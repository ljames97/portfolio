// HomePage.jsx

import AboutSection from "./AboutSection";
import LineConnector from "./LineConnector";
import ProjectSection from "./project-section/ProjectSection";
import Hero from "./hero/Hero";
import SkillsGrid from "./SkillsGrid";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <LineConnector /> */}
      <AboutSection />
      <ProjectSection />
      <SkillsGrid />
    </>
  )
}

export default HomePage;
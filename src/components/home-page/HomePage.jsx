// HomePage.jsx

import AboutSection from "./AboutSection";
import ProjectSection from "./project-section/ProjectSection";
import Hero from "./hero/Hero";
import SkillsGrid from "./SkillsGrid";
import Contact from "./Contact";

const HomePage = ({ isHomePage }) => {
  return (
    <>
      <Hero />
      {/* <LineConnector /> */}
      <AboutSection />
      <ProjectSection isHomePage={isHomePage} />
      <SkillsGrid />
      <Contact />
    </>
  )
}

export default HomePage;
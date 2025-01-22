import { useEffect, useRef, useState } from "react";
import AboutSection from "./AboutSection";
import ProjectSection from "./project-section/ProjectSection";
import Hero from "./hero/Hero";
import SkillsGrid from "./SkillsGrid";
import Contact from "./Contact";
import MenuBars from "../global/MenuBars";

/**
 * HomePage Component
 *  
 * Includes sections: (Hero, About, Projects, Skills, Contact) and dynamically controls the visibility and appearance of 
 * a sticky menu bar based on scroll position and viewport size.
 * 
 * @component
 * @param {boolean} props.isHomePage - Determines if the component is being rendered as the homepage.
 * @param {Function} props.toggleMobileMenu - Function to toggle the visibility of the mobile menu.
 * @param {boolean} props.isMobileMenuVisible - Indicates whether the mobile menu is currently visible.
 */
const HomePage = ({ isHomePage, toggleMobileMenu, isMobileMenuVisible }) => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const [menuBarOpacity, setMenuBarOpacity] = useState(0);
  const [menuFill, setMenuFill] = useState("white");
  const [isDesktop, setIsDesktop] = useState(false);

  /**
   * useEffect - Handles desktop/mobile detection on initial load and resize events.
   * Updates the `isDesktop` state based on the viewport size.
   */
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };

    checkIsDesktop(); // Check on initial render
    window.addEventListener("resize", checkIsDesktop); // Update on resize

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  /**
   * useEffect - Controls the sticky menu bar behavior.
   * Adjusts menu bar visibility and fill color dynamically based on scroll position.
   */
  useEffect(() => {
    if (!isDesktop) return; // Skip scroll handling for mobile

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Hide MenuBars when scrolling to the bottom
      if (scrollPosition >= pageHeight) {
        setMenuBarOpacity(0);
        return;
      }

      // Dynamically update `menuFill` color based on visible section
      if (
        contactRef.current &&
        scrollPosition >= contactRef.current.offsetTop + contactRef.current.offsetHeight
      ) {
        setMenuFill("black");
      } else if (
        skillsRef.current &&
        scrollPosition >= skillsRef.current.offsetTop + skillsRef.current.offsetHeight
      ) {
        setMenuFill("white");
      } else if (
        projectRef.current &&
        scrollPosition >= projectRef.current.offsetTop + projectRef.current.offsetHeight
      ) {
        setMenuFill("black");
      } else if (
        aboutRef.current &&
        scrollPosition >= aboutRef.current.offsetTop + aboutRef.current.offsetHeight
      ) {
        setMenuFill("white");
      } else {
        setMenuFill("white");
      }

      // Show/hide menu bar based on scroll position
      if (
        aboutRef.current &&
        scrollPosition >= aboutRef.current.offsetTop + aboutRef.current.offsetHeight
      ) {
        setMenuBarOpacity(1);
      } else {
        setMenuBarOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  return (
    <>
      {/* Sticky Menu Bar - Render only on desktop */}
      {isDesktop && (
        <div
          className={`${isMobileMenuVisible ? "hidden" : "fixed"} top-0 left-0 right-0 p-8 pr-10 z-50 flex justify-end`}
          style={{
            opacity: menuBarOpacity,
            pointerEvents: menuBarOpacity > 0 ? "auto" : "none",
            transition: "opacity 0.5s ease-in-out, fill 0.5s ease-in-out",
          }}
        >
          <MenuBars fill={menuFill} toggleMobileMenu={toggleMobileMenu} />
        </div>
      )}

      {/* Sections */}
      <section>
        <Hero />
      </section>
      <section id="about" ref={aboutRef}>
        <AboutSection />
      </section>
      <section id="projects" ref={projectRef}>
        <ProjectSection isHomePage={isHomePage} />
      </section>
      <section id="skills" ref={skillsRef}>
        <SkillsGrid />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
      <footer ref={footerRef}></footer>
    </>
  );
};

export default HomePage;
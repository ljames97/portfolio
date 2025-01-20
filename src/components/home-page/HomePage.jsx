import { useEffect, useRef, useState } from "react";
import AboutSection from "./AboutSection";
import ProjectSection from "./project-section/ProjectSection";
import Hero from "./hero/Hero";
import SkillsGrid from "./SkillsGrid";
import Contact from "./Contact";
import MenuBars from "../global/MenuBars";

const HomePage = ({ isHomePage, toggleMobileMenu, isMobileMenuVisible }) => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const [menuBarOpacity, setMenuBarOpacity] = useState(0);
  const [menuFill, setMenuFill] = useState("white");
  const [isDesktop, setIsDesktop] = useState(false);

  // Update the state for desktop/mobile detection
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };

    checkIsDesktop(); // Initial check
    window.addEventListener("resize", checkIsDesktop); // Update on resize

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Skip scroll handling for mobile

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight; // Full page height

      // Hide MenuBars when scrolling to the very bottom
      if (scrollPosition >= pageHeight) {
        setMenuBarOpacity(0); // Hide menu bar
        return;
      }

      // Update the `fill` property based on scroll position
      if (
        contactRef.current &&
        scrollPosition >= contactRef.current.offsetTop + contactRef.current.offsetHeight
      ) {
        setMenuFill("black"); // Black for Contact section
      } else if (
        skillsRef.current &&
        scrollPosition >= skillsRef.current.offsetTop + skillsRef.current.offsetHeight
      ) {
        setMenuFill("white"); // White for Skills section
      } else if (
        projectRef.current &&
        scrollPosition >= projectRef.current.offsetTop + projectRef.current.offsetHeight
      ) {
        setMenuFill("black"); // Black for Project section
      } else if (
        aboutRef.current &&
        scrollPosition >= aboutRef.current.offsetTop + aboutRef.current.offsetHeight
      ) {
        setMenuFill("white"); // White for About section
      } else {
        setMenuFill("white"); // Default fill for Hero section
      }

      // Show or hide the menu bar based on About section
      if (
        aboutRef.current &&
        scrollPosition >= aboutRef.current.offsetTop + aboutRef.current.offsetHeight
      ) {
        setMenuBarOpacity(1); // Show menu bar
      } else {
        setMenuBarOpacity(0); // Hide menu bar
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  

  return (
    <>
      {/* Sticky Menu Bar - Only Render on Desktop */}
      {isDesktop && (
        <div
          className={`${isMobileMenuVisible ? 'hidden' : 'fixed'} top-0 left-0 right-0 p-8 pr-10 z-50 flex justify-end`}
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
      <footer ref={footerRef}>
      </footer>
    </>
  );
};

export default HomePage;







// import { useEffect, useRef, useState } from "react";
// import AboutSection from "./AboutSection";
// import ProjectSection from "./project-section/ProjectSection";
// import Hero from "./hero/Hero";
// import SkillsGrid from "./SkillsGrid";
// import Contact from "./Contact";

// const HomePage = ({ isHomePage, footerRef }) => {
//   const heroRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectRef = useRef(null);
//   const skillsRef = useRef(null);
//   const contactRef = useRef(null);

//   const sections = [heroRef, aboutRef, projectRef, skillsRef, contactRef, footerRef];
//   const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);

//   const scrollToSection = (index) => {
//     setIsScrolling(true);
  
//     const targetPosition = sections[index]?.current.offsetTop;
//     const startPosition = window.scrollY;
//     const distance = targetPosition - startPosition;
//     const duration = 500; // Animation duration in milliseconds
//     let startTime = null;
  
//     const animationStep = (currentTime) => {
//       if (!startTime) startTime = currentTime;
//       const elapsedTime = currentTime - startTime;
//       const progress = Math.min(elapsedTime / duration, 1);
  
//       // Smooth scrolling effect (ease-in-out)
//       const ease = progress < 0.5 
//         ? 2 * progress * progress 
//         : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  
//       window.scrollTo(0, startPosition + distance * ease);
  
//       if (progress < 1) {
//         requestAnimationFrame(animationStep);
//       } else {
//         setTimeout(() => setIsScrolling(false), 1000);
//       }
//     };
  
//     requestAnimationFrame(animationStep);
//   };

//   useEffect(() => {
//     const isDesktop = window.matchMedia("(min-width: 768px)").matches; // Check screen size

//     if (!isDesktop) return; // Exit if it's not desktop

//     const handleWheel = (e) => {
//       if (isScrolling) {
//         e.preventDefault(); // Prevent manual scroll
//         return;
//       }

//       if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
//         e.preventDefault(); // Prevent default scroll
//         setCurrentSectionIndex((prev) => {
//           const newIndex = prev + 1;
//           scrollToSection(newIndex);
//           return newIndex;
//         });
//       } else if (e.deltaY < 0 && currentSectionIndex > 0) {
//         e.preventDefault(); // Prevent default scroll
//         setCurrentSectionIndex((prev) => {
//           const newIndex = prev - 1;
//           scrollToSection(newIndex);
//           return newIndex;
//         });
//       }
//     };

//     const preventDefault = (e) => e.preventDefault(); // Prevent manual scroll globally

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("touchmove", preventDefault, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchmove", preventDefault);
//     };
//   }, [currentSectionIndex, isScrolling, sections]);

//   return (
//     <>
//       <section ref={heroRef}>
//         <Hero />
//       </section>
//       <section ref={aboutRef}>
//         <AboutSection />
//       </section>
//       <section ref={projectRef}>
//         <ProjectSection isHomePage={isHomePage} />
//       </section>
//       <section ref={skillsRef}>
//         <SkillsGrid />
//       </section>
//       <section ref={contactRef}>
//         <Contact />
//       </section>
//     </>
//   );
// };

// export default HomePage;

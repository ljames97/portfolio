import { useReducer, useRef, useState } from "react"
import HomePage from "./components/home-page/HomePage"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import MobileMenu from "./components/mobile-menu/MobileMenu"
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from "./components/about-page/AboutPage"
import ProjectsPage from "./components/ProjectsPage"
import ScrollToTop from "./components/global/ScrollToTop"

/**
 * Root application component.
 *
 * Sets up routing for the application using `react-router-dom` and manages the global state for the mobile menu.
 */
const App = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const footerRef = useRef(null);

  return (
    // <Router>
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {isMobileMenuVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
        <Routes>
          <Route path="/" element={<MainContent toggleMobileMenu={toggleMobileMenu} footerRef={footerRef} isMobileMenuVisible={isMobileMenuVisible} />} />
          <Route path="/about" element={<MainContent toggleMobileMenu={toggleMobileMenu} />} />
          <Route path="/projects" element={<MainContent toggleMobileMenu={toggleMobileMenu} />} />
        </Routes>
      </div>
    </>
    // </Router>
  );
};

/**
 * MainContent Component
 *
 * Renders the header, main content, and footer for the current route.
 * Determines the page type based on the current route (`/`, `/about`, `/projects`) and renders
 * the appropriate components.
 *
 * @param {Function} props.toggleMobileMenu - Function to toggle the mobile menu.
 * @param {React.RefObject} [props.footerRef] - Reference to the footer element (used on the homepage).
 * @param {boolean} [props.isMobileMenuVisible] - Indicates if the mobile menu is visible.
 */
const MainContent = ({ toggleMobileMenu, footerRef, isMobileMenuVisible }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isProjectsPage = location.pathname === "/projects";

  return (
    <>
      <Header toggleMobileMenu={toggleMobileMenu} isHomePage={isHomePage} isAboutPage={isAboutPage} isProjectsPage={isProjectsPage} />
      <main className="flex-1">
        {isHomePage && <HomePage isHomePage={isHomePage} footerRef={footerRef} toggleMobileMenu={toggleMobileMenu} isMobileMenuVisible={isMobileMenuVisible} />}
        {location.pathname === "/about" && <AboutPage />}
        {location.pathname === "/projects" && <ProjectsPage isHomePage={isHomePage} />}
      </main>
      <Footer ref={footerRef} isHomePage={isHomePage} />
    </>
  );
};

export default App

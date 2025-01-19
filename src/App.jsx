import { useReducer, useRef, useState } from "react"
import HomePage from "./components/home-page/HomePage"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import MobileMenu from "./components/mobile-menu/MobileMenu"
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from "./components/about-page/AboutPage"
import ProjectsPage from "./components/projects-page/ProjectsPage"
import ScrollToTop from "./components/global/ScrollToTop"

const App = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const footerRef = useRef(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {isMobileMenuVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
        <Routes>
          <Route path="/" element={<MainContent toggleMobileMenu={toggleMobileMenu} footerRef={footerRef} />} />
          <Route path="/about" element={<MainContent toggleMobileMenu={toggleMobileMenu} />} />
          <Route path="/projects" element={<MainContent toggleMobileMenu={toggleMobileMenu} />} />
        </Routes>
      </div>
    </Router>
  );
};

const MainContent = ({ toggleMobileMenu, footerRef }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isProjectsPage = location.pathname === "/projects";

  return (
    <>
      <Header toggleMobileMenu={toggleMobileMenu} isHomePage={isHomePage} isAboutPage={isAboutPage} isProjectsPage={isProjectsPage} />
      <main className="flex-1">
        {isHomePage && <HomePage isHomePage={isHomePage} footerRef={footerRef} />}
        {location.pathname === "/about" && <AboutPage />}
        {location.pathname === "/projects" && <ProjectsPage isHomePage={isHomePage} />}
      </main>
      <Footer ref={footerRef} isHomePage={isHomePage} />
    </>
  );
};

export default App

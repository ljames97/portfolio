import { useState } from "react"
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

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {isMobileMenuVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
        <Routes>
          <Route path="/" element={<MainContent toggleMobileMenu={toggleMobileMenu} />} />
          <Route path="/about" element={<MainContent toggleMobileMenu={toggleMobileMenu} />} />
          <Route path="/projects" element={<MainContent toggleMobileMenu={toggleMobileMenu} />} />
        </Routes>
      </div>
    </Router>
  );
};

const MainContent = ({ toggleMobileMenu }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header toggleMobileMenu={toggleMobileMenu} isHomePage={isHomePage} />
      <main className="flex-1">
        {isHomePage && <HomePage />}
        {location.pathname === "/about" && <AboutPage />}
        {location.pathname === "/projects" && <ProjectsPage />}
      </main>
      <Footer isHomePage={isHomePage} />
    </>
  );
};

export default App

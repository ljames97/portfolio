import { useState } from "react"
import HomePage from "./components/home-page/HomePage"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import MobileMenu from "./components/mobile-menu/MobileMenu"
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from "./components/about-page/AboutPage"

const App = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  }
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {isMobileMenuVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu}/>}
        <Header toggleMobileMenu={toggleMobileMenu} />
        <main className="flex-1">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/about" element={<AboutPage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

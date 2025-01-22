// Header.jsx

import { useRef, useState } from "react";
import { useTheme } from "../../store/ThemeContext";
import MainLogo from "./MainLogo";
import { Link } from 'react-router-dom';
import MenuBars from "../global/MenuBars";
import { cv } from "../../assets";

const Header = ({ toggleMobileMenu, isHomePage, isAboutPage, isProjectsPage }) => {
  const { isDarkMode } = useTheme();
  const fill = isDarkMode ? 'white' : 'black'
  const [isCvModalVisible, setCvModalVisible] = useState(false);
  const toggleCvModal = () => setCvModalVisible(!isCvModalVisible);
  const submenuRef = useRef(null);
  return (
    <>
      <header className={`${isHomePage ? 'absolute' : ''} md:pt-16 ${isHomePage ? 'bg-transparent' : 'bg-blue-gradient-right'} ${isHomePage ? 'bg-transparent' : 'bg-blue-gradient-right'} md:p-12 flex justify-between items-center md:justify-start text-white dark:text-white p-12 w-screen`}>
        <MainLogo />
        <ul className="md:flex md:ml-20 hidden gap-16 text-xl tracking-widest tracking-wider font-thin items-center">
        <li className={`relative group`}>
          <Link to="/" className="relative inline-block">
            Home
            <span
              className={`${isHomePage ? 'w-full' : 'w-0'} absolute left-0 -bottom-2 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
          </Link>
        </li>
        <li className={`relative group`}>
          <Link to="/about" className="relative inline-block">
            About
            <span
              className={`${isAboutPage ? 'w-full' : 'w-0'} absolute left-0 -bottom-2 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
          </Link>
        </li>
        <li className={`relative group`}>
          <Link to="/projects" className="relative inline-block">
            Projects
            <span
              className={`${isProjectsPage ? 'w-full' : 'w-0'} absolute left-0 -bottom-2 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
          </Link>
        </li>
        <li className="relative" ref={submenuRef}>
          <button onMouseEnter={toggleCvModal} className="">
            CV
          </button>
          {/* CV submenu */}
          {isCvModalVisible && (
            <ul onMouseLeave={toggleCvModal} className="text-black dark:text-white absolute left-0 md:mt-0 mt-2 bg-translucent-black rounded shadow-lg w-40 text-sm py-4">
            <li className="px-4 py-2 hover:bg-white/20 rounded">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-white/20 rounded">
              <a
                href={cv}
                download="Luke_CV.pdf"
              >
                Download
              </a>
            </li>
          </ul>
          )}
        </li>
        </ul>
        <div className="md:hidden">
          <MenuBars fill={'white'} toggleMobileMenu={toggleMobileMenu} />
        </div>

      </header>
    </>
  )
}

export default Header;
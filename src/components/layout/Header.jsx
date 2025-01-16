// Header.jsx

import { useRef, useState } from "react";
import { useTheme } from "../../store/ThemeContext";
import MainLogo from "./MainLogo";
import { Link } from 'react-router-dom';

const Header = ({ toggleMobileMenu }) => {
  const { isDarkMode } = useTheme();
  const fill = isDarkMode ? 'white' : 'white'
  const [isCvModalVisible, setCvModalVisible] = useState(false);
  const toggleCvModal = () => setCvModalVisible(!isCvModalVisible);
  const submenuRef = useRef(null);
  return (
    <>
      <header className="md:absolute md:pt-16 md:dark:bg-transparent bg-dark-teal dark:bg-dark-teal p-12 flex justify-between items-center md:justify-start relative text-white dark:text-white">
        <MainLogo />
        <ul className="md:flex md:ml-20 hidden gap-16 text-xl tracking-widest tracking-wider font-thin items-center">
        <li className="tracking-widest">
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/projects">Projects</Link>
        </li>
        <li className="relative" ref={submenuRef}>
          <button onClick={toggleCvModal} className="">
            CV
          </button>
          {/* CV submenu */}
          {isCvModalVisible && (
            <ul className="text-black dark:text-white absolute left-0 mt-2 bg-translucent-black rounded shadow-lg w-40 text-sm py-4">
            <li className="px-4 py-2">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
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
      
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <svg className="p-2 w-12 h-12" width="20" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="4" width="30" height="2" fill={fill} />
              <rect x="1" y="12" width="30" height="2" fill={fill} />
              <rect x="5" y="20" width="30" height="2" fill={fill} />
          </svg>
        </div>
      </header>
    </>
  )
}

export default Header;
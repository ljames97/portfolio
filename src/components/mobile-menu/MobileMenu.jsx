// MobileMenu.jsx

import ReactDOM from "react-dom";
import Socials from "../home-page/hero/Socials";
import { Link } from 'react-router-dom';
import { cv } from "../../assets";
import { useEffect, useRef, useState } from "react";
import SunIcon from "../global/SunIcon";

const MobileMenu = ({ toggleMobileMenu }) => {
  const [isCvModalVisible, setCvModalVisible] = useState(false);
  const toggleCvModal = () => setCvModalVisible(!isCvModalVisible);
  const submenuRef = useRef(null);


  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setCvModalVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return ReactDOM.createPortal (
    <div className="fixed inset-0 flex flex-col bg-off-white dark:bg-blue-gradient-right w-full z-40 overflow-y-auto">
      <div className="flex p-12 justify-end">
        <button className="pr-4 text-2xl font-thin opacity-80" onClick={toggleMobileMenu}>X</button>
      </div>
      <ul className="p-12 mb-16 text-xl tracking-widest opacity-80 text-dark-teal dark:text-white">
        <li className="mt-8" onClick={toggleMobileMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="mt-8" onClick={toggleMobileMenu}>
        <Link to="/about">About</Link>
        </li>
        <li className="mt-8" onClick={toggleMobileMenu}>
        <Link to="/projects">Projects</Link>
        </li>
        <li className="mt-8 relative" ref={submenuRef}>
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
      <Socials />
      <p className="px-12 tracking-widest opacity-80 text-dark-teal dark:text-white">lukedesmondjames@gmail.com</p>


    </div>,
    document.getElementById("modal-root")
  )
}

export default MobileMenu;
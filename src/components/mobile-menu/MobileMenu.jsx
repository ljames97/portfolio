// MobileMenu.jsx

import ReactDOM from "react-dom";
import MainLogo from "../layout/MainLogo";
import Socials from "../home-page/hero/Socials";
import { Link } from 'react-router-dom';

const MobileMenu = ({ toggleMobileMenu }) => {
  return ReactDOM.createPortal (
    <div className="fixed inset-0 flex flex-col bg-custom-purple w-full z-40 overflow-y-auto">
      <div className="flex justify-between p-8">
        <MainLogo />
        <button onClick={toggleMobileMenu}>X</button>
      </div>
      <ul className="p-16 mb-16 text-xl tracking-widest opacity-80">
        <li className="mt-8" onClick={toggleMobileMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="mt-8" onClick={toggleMobileMenu}>
        <Link to="/about">About</Link>
        </li>
        <li className="mt-8" onClick={toggleMobileMenu}>
        <Link to="/projects">Projects</Link>
        </li>
        <li className="mt-8" onClick={toggleMobileMenu}>
        <Link to="/cv">CV</Link>
        </li>
      </ul>
      <Socials />
      <p className="p-8 tracking-widest opacity-80">lukedesmondjames@gmail.com</p>
    </div>,
    document.getElementById("modal-root")
  )
}

export default MobileMenu;
// Footer.jsx

import { useNavigate } from "react-router-dom";
import { cv } from "../../assets";
import Socials from "../home-page/hero/Socials";
import MiniSocials from "./MiniSocials";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects')
  }

  const handleCvClick = () => {
    window.open(cv, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <footer className="bg-dark-teal text-white p-8">
        <div className="mb-8">
          <h2 className="mt-8">CONTACT</h2>
          <p className="mt-2">lukedesmondjames@gmail.com</p>
        </div>
        <div className="border-b pb-8 border-black">
          <ul>
            <li onClick={handleClick}>My Projects</li>
            <li onClick={handleCvClick}>My CV</li>
          </ul>
          <MiniSocials />
        </div>
        <p className="mt-8 text-sm">© Luke James 2025</p>
      </footer>
    </>
  )
}

export default Footer;
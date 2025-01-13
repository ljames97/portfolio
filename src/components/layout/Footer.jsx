// Footer.jsx

import { useNavigate } from "react-router-dom";
import { cv } from "../../assets";
import MiniSocials from "./MiniSocials";
import SocialIcons from "../global/SocialIcons";

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
      <footer className="dark:bg-dark-teal bg-dark-teal text-white p-8">
        <div className="mb-8">
          <h2 className="mt-8">CONTACT</h2>
          <p className="mt-2">lukedesmondjames@gmail.com</p>
        </div>
        <div className="border-b pb-8 dark:border-aqua-blue border-white">
          <ul>
            <li onClick={handleClick}>My Projects</li>
            <li onClick={handleCvClick}>My CV</li>
          </ul>
          <div className="flex mt-16 gap-8">
            <SocialIcons widthHeight={'25'}/>
          </div>
        </div>
        <p className="mt-8 text-sm">© Luke James 2025</p>
      </footer>
    </>
  )
}

export default Footer;
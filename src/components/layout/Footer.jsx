// Footer.jsx

import { useNavigate } from "react-router-dom";
import { cv } from "../../assets";
import SocialIcons from "../global/SocialIcons";

const Footer = ({ isHomePage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects')
  }

  const handleCvClick = () => {
    window.open(cv, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <footer className={`md:px-24 md:gap-8 md:${isHomePage ? 'h-screen' : ''} md:flex md:flex-col md:justify-center md:w-screen dark:bg-orange-blue bg-dark-orange text-white p-8`}>
        <div className="mb-8">
          <h2 className="text-light-orange mt-8">CONTACT</h2>
          <p className="mt-2">lukedesmondjames@gmail.com</p>
        </div>
        <div className="border-b pb-24 dark:border-light-orange border-white">
          <ul>
            <li onClick={handleClick}>My Projects</li>
            <li className="mt-2" onClick={handleCvClick}>My CV</li>
          </ul>
        </div>
        <div className="mt-8 md:flex justify-between">
          <p>© Luke James 2025</p>
          <div className="flex gap-16">
            <SocialIcons widthHeight={'25'}/>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer;
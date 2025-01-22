// Footer.jsx

import { useNavigate } from "react-router-dom";
import { cv } from "../../assets";
import SocialIcons from "../global/SocialIcons";
import { forwardRef } from "react";

/**
 * Renders footer including contact links, mini menu and copyright.
 */
const Footer = forwardRef(({ isHomePage }, ref) => {
  const footer = true;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects')
  }

  const handleCvClick = () => {
    window.open(cv, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <footer ref={ref} className={`md:px-24 md:gap-8 md:${isHomePage ? 'h-screen' : ''} md:flex md:flex-col md:justify-center md:w-screen bg-dark-teal text-white p-8 pt-12 md:pt-16`}>
        <div className="mb-8">
          <h2 className="text-accent mt-8">CONTACT</h2>
          <p className="mt-2">lukedesmondjames@gmail.com</p>
        </div>
        <div className="border-b pb-24 border-accent">
          <ul>
            <li className="cursor-pointer" onClick={handleClick}>My Projects</li>
            <li className="cursor-pointer mt-2" onClick={handleCvClick}>My CV</li>
          </ul>
        </div>
        <div className="flex flex-col mt-8 md:flex md:flex-row justify-between">
          <p>© Luke James 2025</p>
          <div className="order-first flex gap-16 mt-12 mb-16 md:mt-0">
            <SocialIcons widthHeight={'25'} footer={footer}/>
          </div>
        </div>

      </footer>
    </>
  )
});

export default Footer;
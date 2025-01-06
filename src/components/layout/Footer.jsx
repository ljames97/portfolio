// Footer.jsx

import { useNavigate } from "react-router-dom";
import { cv } from "../../assets";

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
      <footer className="bg-orange-accent text-lighter-purple p-8">
        <div className="mb-8">
          <h2 className="text-black opacity-80 mt-8">SAY HELLO</h2>
          <p className="mt-2">lukedesmondjames@gmail.com</p>
        </div>
        <div className="border-b pb-8 border-black">
          <ul>
            <li onClick={handleClick}>My Projects</li>
            <li onClick={handleCvClick}>My CV</li>
          </ul>
        </div>
        <p className="mt-8 text-sm text-black">© Luke James 2025</p>
      </footer>
    </>
  )
}

export default Footer;
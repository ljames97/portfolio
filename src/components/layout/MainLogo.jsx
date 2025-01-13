// MainLogo.jsx

import { useNavigate } from "react-router-dom";

const MainLogo = ({ toggleMobileMenu }) => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    if (toggleMobileMenu) {
      toggleMobileMenu();
    }
    navigate('/');
  }
  return (
    <div onClick={handleLogoClick} className=" rounded-full flex items-center justify-center bg-dark-teal dark:bg-lighter-orange p-2 w-14 h-14 text-center font-bold text-2xl text-white dark:text-dark-blue">L</div>
  )
}

export default MainLogo;
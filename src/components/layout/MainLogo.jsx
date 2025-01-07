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
    <div onClick={handleLogoClick} className="rounded bg-light-orange p-2 w-12 h-12 text-center text-center font-bold text-2xl text-dark-blue">L</div>
  )
}

export default MainLogo;
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
    <div onClick={handleLogoClick} className="bg-white/10 p-2 rounded-full w-10 h-10 text-center">LJ</div>
  )
}

export default MainLogo;
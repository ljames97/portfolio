// MainLogo.jsx

import { useNavigate } from "react-router-dom";
import { headshot } from "../../assets";

const MainLogo = ({ toggleMobileMenu }) => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    if (toggleMobileMenu) {
      toggleMobileMenu();
    }
    navigate('/');
  }
  return (
    <>
      <div onClick={handleLogoClick} className="w-20 h-20 cursor-pointer">
        <img className="rounded-full" src={headshot}/>
      </div>
    </>
  )
}

export default MainLogo;
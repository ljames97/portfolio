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
      {/* <div onClick={handleLogoClick} className=" rounded-3xl flex items-center justify-center bg-light-orange dark:bg-lighter-orange p-2 w-14 h-14 text-center font-bold text-2xl text-black dark:text-dark-blue">L</div> */}
      <div className="w-20 h-20">
        <img className="rounded-full" src={headshot}/>
      </div>
    </>
  )
}

export default MainLogo;
// Header.jsx

import { useTheme } from "../../store/ThemeContext";
import MainLogo from "./MainLogo";

const Header = ({ toggleMobileMenu }) => {
  const { isDarkMode } = useTheme();
  const fill = isDarkMode ? 'white' : '#010f1a'
  return (
    <>
      <header className="bg-light-beige dark:bg-dark-blue p-12 flex justify-between items-center">
        <MainLogo />
        <div onClick={toggleMobileMenu}>
          <svg className="p-2 w-12 h-12" width="20" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="4" width="30" height="2" fill={fill} />
              <rect x="1" y="12" width="30" height="2" fill={fill} />
              <rect x="5" y="20" width="30" height="2" fill={fill} />
          </svg>
        </div>
      </header>
    </>
  )
}

export default Header;
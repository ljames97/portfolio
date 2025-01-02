// Header.jsx

import MainLogo from "./MainLogo";

const Header = ({ toggleMobileMenu }) => {
  const fill = 'white'

  return (
    <>
      <header className="p-6 flex justify-between">
        <MainLogo />
        <div onClick={toggleMobileMenu}>
          <svg className="p-2 rounded-full w-10 h-10 text-center" width="40" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="4" width="40" height="1" fill={fill} />
              <rect x="5" y="12" width="40" height="1" fill={fill} />
              <rect x="5" y="20" width="40" height="1" fill={fill} />
          </svg>
        </div>
      </header>
    </>
  )
}

export default Header;
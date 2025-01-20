// MenuBars.jsx 

const MenuBars = ({ fill, toggleMobileMenu }) => {
  return (
    <div className="cursor-pointer" onClick={toggleMobileMenu}>
      <svg className="p-2 w-12 h-12" width="20" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="4" width="30" height="1" fill={fill} />
          <rect x="5" y="12" width="30" height="1" fill={fill} />
          <rect x="10" y="20" width="30" height="1" fill={fill} />
      </svg>
  </div>
  )
}

export default MenuBars;
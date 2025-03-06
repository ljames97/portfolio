import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { cv } from "../../assets";
import { useEffect, useRef, useState } from "react";
import SocialIcons from "../global/SocialIcons";

/**
 * Renders mobile menu, attaching to modal-root in the DOM. 
 * @param {function} toggleMobileMenu 
 */
const MobileMenu = ({ toggleMobileMenu }) => {
  const [isCvModalVisible, setCvModalVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // New state for fade-out
  const submenuRef = useRef(null);
  const modalRef = useRef(null);
  const rootElement = document.getElementById("root");

  const handleCloseMenu = () => {
    setTimeout(() => {
      rootElement.classList.remove("blur-root");
    }, 150);
    setIsClosing(true); // Trigger fade-out animation
    setTimeout(() => {
      toggleMobileMenu(); // Unmount after animation
    }, 500); // Match duration of fade-out animation
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setCvModalVisible(false);
      }

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    };

    rootElement.classList.add("blur-root");
    document.body.classList.add("no-scroll");

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      className={` md:bg-dark-blue md:rounded-3xl md:inset-auto md:top-8 md:right-10 md:w-[25rem] md:overflow-hidden md:h-3/4 fixed inset-0 flex flex-col bg-dark-blue w-full z-40 overflow-y-auto ${
        isClosing ? "modal-fade-out" : "modal-animate"
      }`}
    >
      <div className="flex p-12 md:pb-0 md:pt-4 justify-end">
        <button
          className="md:pt-4 pr-4 md:text-3xl text-2xl font-thin opacity-80"
          onClick={handleCloseMenu}
          aria-label="close menu"
        >
          X
        </button>
      </div>
      <ul className="md:text-base md:pt-0 p-12 mb-16 overflow-visible text-xl tracking-widest opacity-80 text-dark-teal text-white">
        {["Home", "About", "Portfolio"].map((item, index) => (
          <li
            key={item}
            className={`md:hover:text-accent mt-8 animate-slide-up`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            onClick={handleCloseMenu}
          >
            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
        <li
          className="mt-8 relative animate-slide-up"
          style={{ animationDelay: "0.3s" }}
          ref={submenuRef}
        >
          <button onClick={() => setCvModalVisible(!isCvModalVisible)} className="md:hover:text-accent">
            CV
          </button>
          {isCvModalVisible && (
            <ul className="text-white absolute left-0 mt-2 bg-translucent-black rounded shadow-lg w-40 text-sm py-4">
              <li className="cursor-pointer rounded px-4 py-2 hover:bg-white/20">
                <a href={cv} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </li>
              <li className="rounded px-4 py-2 hover:bg-white/20">
                <a href={cv} download="Luke_CV.pdf">
                  Download
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div
        className="animate-slide-up"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="flex gap-8 pb-8 pl-12">
          <SocialIcons widthHeight={'25'} />
        </div>
      </div>
      <p
        className="md:text-base px-12 tracking-widest opacity-80 text-white animate-slide-up"
        style={{ animationDelay: "0.5s" }}
      >
        lukedesmondjames@gmail.com
      </p>
    </div>,
    document.getElementById("modal-root")
  );
};

export default MobileMenu;

// AboutSection.jsx

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";
import { code } from "../../assets";

/**
 * Renders the about section on the homepage. Includes a graphic, about description and CTA about me button.
 */
const AboutSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Track if animation has already been triggered
  const [hasAnimated, setHasAnimated] = useState(false);

  // Detect if the section is in view
  const isSectionVisible = useInView(sectionRef, { threshold: 0.3 });

  if (isSectionVisible && !hasAnimated) {
    setHasAnimated(true);
  }

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div
      ref={sectionRef}
      className="relative md:h-screen md:px-16 flex flex-col justify-center md:items-center bg-dark-teal md:bg-blue-gradient p-8 py-24 pb-32 leading-relaxed text-black md:mt-0"
    >
      <h1
        className="text-white text-center font-thin tracking-wide mb-8 md:mb-0 text-3xl transition-opacity transition-transform ease-out"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
          transition: "transform 1s ease-out, opacity 1s ease-out",
        }}
      >
        Bringing ideas to life...
      </h1>
      <div
        className="flex flex-col items-center z-10 md:mb-auto md:mt-10 border-off-white border p-8 rounded-3xl text-white bg-transparent md:w-1/2"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
          transition: "transform 1s ease-out 0.2s, opacity 1s ease-out", // Delay for staggered effect
        }}
      >
        <div className=" w-1/4 mb-4 mt-4">
          <img src={code} alt="coding graphic"/>
        </div>
        <p className="mt-2 font-thin text-center">
        Hi I'm Luke, I specialise in crafting modern, responsive websites with a focus on clean design and seamless user experiences.
        With experience in technologies like React, Tailwind CSS, and JavaScript, I bring ideas to life on the web.
        </p>
        {/* <p className="mt-8 font-thin text-center">
        </p> */}
        <button
          onClick={handleClick}
          className=" mt-8 mb-4 p-4 w-1/1 text-black bg-accent hover:bg-hover-accent rounded-3xl"
        >
          About me →
        </button>
      </div>
    </div>
  );
};

export default AboutSection;

// useInView.jsx

import { useEffect, useState } from "react";

/**
 * Custom hook to determine if a DOM element is in view, with dynamic threshold adjustment.
 *
 * @param {React.RefObject} ref - The React ref for the DOM element to observe.
 * @param {Object} [options] - Optional settings for the IntersectionObserver.
 * @returns {boolean} - Whether the element is in view.
 */
export const useInView = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [threshold, setThreshold] = useState(options.threshold || 0.3);

  useEffect(() => {
    // Update the threshold dynamically based on screen size
    const updateThreshold = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      setThreshold(isDesktop ? 0.3 : 0.1);
    };

    updateThreshold(); // Set initial threshold
    window.addEventListener("resize", updateThreshold); // Update on resize

    return () => {
      window.removeEventListener("resize", updateThreshold); // Clean up
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { ...options, threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options, threshold]);

  return isVisible;
};

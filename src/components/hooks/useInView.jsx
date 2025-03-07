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

  useEffect(() => {
    const observerOptions = {
      ...options,
      threshold:  options.threshold || 0,
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        console.log(`Element is ${entry.isIntersecting ? "VISIBLE" : "NOT visible"}`);
      },
      observerOptions
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return isVisible;
};

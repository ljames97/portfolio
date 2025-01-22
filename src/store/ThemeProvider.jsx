// ThemeProvider.jsx 

import { useEffect, useState } from "react"
import ThemeContext from "./ThemeContext";

/**
 * Provider for dark/light theme. Add/remove dark classlist for tailwind.
 */
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(prevTheme => !prevTheme);

  useEffect(() => {
    // Dynamically update the class on the HTML element
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
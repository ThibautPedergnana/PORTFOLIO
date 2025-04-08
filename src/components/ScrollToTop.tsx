// ScrollToTop.tsx
import { useState, useEffect } from "react";
import ArrowIcon from "../assets/icons/ArrowIcon";
import theme from "../config/theme";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:scale-110`}
      style={{ backgroundColor: theme.blue }}
    >
      <ArrowIcon />
    </button>
  );
};

export default ScrollToTop;

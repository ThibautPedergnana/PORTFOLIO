import { useState, useEffect } from "react";
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";
import theme from "../config/theme";

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkPosition = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      setIsVisible(!isAtBottom);
    };

    window.addEventListener("scroll", checkPosition);
    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  const scrollToNextSection = () => {
    const sections = Array.from(document.querySelectorAll("section"));
    let nextSection = null;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();

      if (rect.top > 0) {
        nextSection = section;
        break;
      }
    }

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToNextSection}
      className={`fixed bottom-6 right-20 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:scale-110`}
      style={{ backgroundColor: theme.blue }}
    >
      <ArrowDownIcon />
    </button>
  );
};

export default ScrollDown;

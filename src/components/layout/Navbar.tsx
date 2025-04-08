import LanguageToggle from "../LanguageToggle";
import theme from "../../config/theme";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex justify-between items-center mb-16 top-0 w-4/5 p-4 mt-6 rounded-2xl"
      style={{
        borderColor: theme.darker_gray,
      }}
    >
      <h2
        className="text-2xl"
        style={{
          color: theme.black,
          textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        THIBAUT PEDERGNANA
      </h2>

      <nav className="flex gap-6">
        <button
          onClick={() => scrollToSection("technologies")}
          className="text-xl text-[#090909] hover:text-[#1e90ff]"
          style={{ textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.3)" }}
        >
          TECHNOLOGIES
        </button>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="text-xl text-[#090909] hover:text-[#1e90ff]"
          style={{ textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.3)" }}
        >
          PORTFOLIO
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-xl text-[#090909] hover:text-[#1e90ff]"
          style={{ textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.3)" }}
        >
          CONTACT
        </button>
      </nav>

      <LanguageToggle />
    </div>
  );
};

export default Navbar;

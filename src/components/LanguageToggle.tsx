import theme from "../config/theme";
import { useLanguage } from "../hooks/useLanguage";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="relative w-20 h-10 pr-1 flex items-center justify-center">
      <input
        type="checkbox"
        id="language-checkbox"
        className="hidden"
        checked={language === "en"}
        onChange={toggleLanguage}
      />
      <label
        htmlFor="language-checkbox"
        className="select-none label flex items-center justify-between w-full h-full rounded-full border-4 cursor-pointer relative transition-transform duration-400 hover:rotate-x-5 hover:rotate-y--5 px-2"
        style={{
          borderColor: theme.blue,
          backgroundColor: "transparent",
          padding: "4px",
          boxShadow: "0px 2px 5px rgba(0, 0, 255, 0.15)", // Ombre très légère
        }}
      >
        <span
          className={`absolute left-3 text-sm font-bold ${
            language === "fr" ? "" : "hidden"
          }`}
        >
          FR
        </span>
        <span
          className={`absolute right-3 text-sm font-bold ${
            language === "en" ? "" : "hidden"
          }`}
        >
          EN
        </span>
        <span
          className="absolute w-6 h-6 rounded-full transition-all duration-400 top-1/2 transform -translate-y-1/2 shadow-sm"
          style={{
            left: language === "en" ? "8px" : "38px",
            backgroundColor: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)", // Ombre encore plus soft
          }}
        ></span>
      </label>
    </div>
  );
};

export default LanguageToggle;

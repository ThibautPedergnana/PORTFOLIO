import theme from "../config/theme";
import DownloadBtn from "./DownloadBtn";

import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../translations";

const MainCard = () => {
  const { language } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="border-solid border-2 w-3/5 rounded-xl overflow-hidden mt-12 mb-4 mr-8 shadow-2xl"
      style={{
        borderColor: theme.darker_gray,
      }}
    >
      <div className="flex flex-col md:flex">
        <div className="p-4">
          <div
            className="uppercase tracking-wide text-xl font-semibold"
            style={{
              color: theme.darker_gray,
              textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            {getTranslation(language, "hello")}
          </div>
          <div className="flex gap-2">
            <p
              className="block mt-1 text-xl leading-tight font-medium text-white"
              style={{ color: theme.darker_gray }}
            >
              {getTranslation(language, "iam")}
            </p>
            <span
              className="flex items-center"
              style={{ color: theme.darker_gray }}
            >
              -
            </span>
            <p
              className="block mt-1 text-xl leading-tight font-medium text-white"
              style={{ color: theme.darker_gray }}
            >
              {getTranslation(language, "webDeveloper")}
            </p>
          </div>
          <p className="mt-2 text-xl" style={{ color: theme.darker_gray }}>
            {getTranslation(language, "developerDescription")}
          </p>
        </div>
        <div className="flex items-center justify-between pl-4 pr-4 pb-4 space-x-4">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-xl text-[#1e90ff] hover:text-[#007acc]"
            style={{
              textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            {getTranslation(language, "viewWork")}
          </button>

          <DownloadBtn />
        </div>
      </div>
    </div>
  );
};

export default MainCard;

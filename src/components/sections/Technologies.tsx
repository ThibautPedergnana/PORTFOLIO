import CssIcon from "../../assets/icons/CssIcon";
import GitIcon from "../../assets/icons/GitIcon";
import HtmlIcon from "../../assets/icons/HtmlIcon";
import JavascriptIcon from "../../assets/icons/JavascriptIcon";
import MongoIcon from "../../assets/icons/MongoIcon";
import NodeIcon from "../../assets/icons/NodeIcon";
import NpmIcon from "../../assets/icons/NpmIcon";
import PostmanIcon from "../../assets/icons/PostmanIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import TailwindIcon from "../../assets/icons/TailwindIcon";
import TypescriptIcon from "../../assets/icons/TypescriptIcon";
import VueIcon from "../../assets/icons/VueIcon";
import TechnologiesImage from "../../assets/technologies.jpg";

import theme from "../../config/theme";

import { useLanguage } from "../../hooks/useLanguage";
import { getTranslation } from "../../translations";

const Technologies = () => {
  const { language } = useLanguage();

  const techIcons = [
    { name: "HTML", icon: <HtmlIcon className="w-20 h-20" /> },
    { name: "CSS", icon: <CssIcon className="w-20 h-20" /> },
    { name: "Tailwind", icon: <TailwindIcon className="w-20 h-20" /> },
    { name: "JavaScript", icon: <JavascriptIcon className="w-20 h-20" /> },
    { name: "React", icon: <ReactIcon className="w-20 h-20" /> },
    { name: "Vue", icon: <VueIcon className="w-20 h-20" /> },
    { name: "TypeScript", icon: <TypescriptIcon className="w-20 h-20" /> },
    { name: "Node.js", icon: <NodeIcon className="w-20 h-20" /> },
    { name: "MongoDB", icon: <MongoIcon className="w-20 h-20" /> },
    { name: "NPM", icon: <NpmIcon className="w-20 h-20" /> },
    { name: "Git", icon: <GitIcon className="w-20 h-20" /> },
    { name: "Postman", icon: <PostmanIcon className="w-20 h-20" /> },
  ];

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${TechnologiesImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-full w-3/5 flex flex-col justify-center gap-10 mr-32">
        <h1
          className="text-5xl font-bold mb-16"
          style={{
            color: theme.darker_gray,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          {getTranslation(language, "skills")}
        </h1>
        <div className="text-center mb-16 flex flex-col items-center">
          <h2
            className="text-3xl mb-8 font-bold"
            style={{ color: theme.darker_gray }}
          >
            {getTranslation(language, "skillsList")}
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 px-4 md:px-0">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className="relative group flex justify-center items-center cursor-pointer"
              >
                {tech.icon}
                {/* Tooltip */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

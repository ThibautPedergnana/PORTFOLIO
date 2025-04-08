import PortfolioImage from "../../assets/portfolio_img.jpg";
import ProjectCard from "../ProjectCard";

import theme from "../../config/theme";

const Portfolio = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${PortfolioImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full sm:w-4/5 lg:w-1/2 flex flex-col justify-center items-center text-white">
        <h1
          className="text-5xl font-bold mb-8"
          style={{
            color: theme.darker_gray,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          PORTFOLIO
        </h1>
        <div className="flex flex-col gap-8 w-full">
          {/* Trois premières cartes en haut */}
          <div className="flex justify-center gap-8 w-full">
            <div className="flex-grow max-w-[220px]">
              <ProjectCard labelItem="sports" />
            </div>
            <div className="flex-grow max-w-[220px]">
              <ProjectCard labelItem="rcpl" />
            </div>
            <div className="flex-grow max-w-[220px]">
              <ProjectCard labelItem="booking" />
            </div>
          </div>

          {/* Deux dernières cartes en bas, centrées */}
          <div className="flex justify-center gap-8 w-full">
            <div className="flex-grow max-w-[220px]">
              <ProjectCard labelItem="hrnet" />
            </div>
            <div className="flex-grow max-w-[220px]">
              <ProjectCard labelItem="groupomania" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

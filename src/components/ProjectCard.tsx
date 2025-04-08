import SportsImg from "../assets/portfolio/sports-results.png";
import BookingImg from "../assets/portfolio/booking.png";
import RcplImg from "../assets/portfolio/rcpl.png";
import HrnetImg from "../assets/portfolio/hrnet.png";
import GroupomaniaImg from "../assets/portfolio/groupomania.png";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../translations";

interface ProjetCardProps {
  labelItem: string;
}
const ProjetCard = ({ labelItem }: ProjetCardProps) => {
  const { language } = useLanguage();

  const getProjectImg = () => {
    switch (labelItem) {
      case "sports":
        return <img src={SportsImg} alt="sports-results Image" />;
      case "booking":
        return <img src={BookingImg} alt="booking Image" />;
      case "rcpl":
        return <img src={RcplImg} alt="rcpl Image" />;
      case "hrnet":
        return <img src={HrnetImg} alt="hrnet Image" />;
      case "groupomania":
        return <img src={GroupomaniaImg} alt="groupomania Image" />;
      default:
        return <div>Image not found</div>;
    }
  };

  const getTechno = () => {
    switch (labelItem) {
      case "sports":
        return (
          <div className="card__job">
            <h2 className="text-lg font-bold">
              {getTranslation(language, "sportsResults")}
            </h2>
            <hr className="border-t border-gray-300 my-2" />
            <p>React, Node, MongoDB</p>
          </div>
        );
      case "booking":
        return (
          <div className="card__job">
            <h2 className="text-lg font-bold">
              {getTranslation(language, "booking")}
            </h2>
            <hr className="border-t border-gray-300 my-2" />
            <p>React</p>
          </div>
        );
      case "rcpl":
        return (
          <div className="card__job">
            <h2 className="text-lg font-bold">
              {getTranslation(language, "rcpl")}
            </h2>
            <hr className="border-t border-gray-300 my-2" />
            <p>React, Typescript</p>
          </div>
        );
      case "hrnet":
        return (
          <div className="card__job">
            <h2 className="text-lg font-bold">
              {getTranslation(language, "hrnet")}
            </h2>
            <hr className="border-t border-gray-300 my-2" />
            <p>React</p>
          </div>
        );
      case "groupomania":
        return (
          <div className="card__job">
            <h2 className="text-lg font-bold">
              {getTranslation(language, "groupomania")}
            </h2>
            <hr className="border-t border-gray-300 my-2" />
            <p>Vue, Node, SQL</p>
          </div>
        );
      default:
        return <div>Image not found</div>;
    }
  };

  const getProjectLink = () => {
    switch (labelItem) {
      case "sports":
        return "https://github.com/ThibautPedergnana/sports-results";
      case "booking":
        return "https://github.com/ton-profil/booking-clone";
      case "rcpl":
        return "https://github.com/ThibautPedergnana/RCP_LOL";
      case "hrnet":
        return "https://github.com/ThibautPedergnana/P14_12_12_2023";
      case "groupomania":
        return "https://github.com/ThibautPedergnana/Reseau_Social_Entreprise";
      default:
        return "#";
    }
  };

  return (
    <div className="mx-auto bg-white rounded-lg p-4 text-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="card">
        <div className="flex justify-between items-center gap-4 font-bold">
          {getProjectImg()}
        </div>
        <div className="flex flex-col gap-4 py-3 font-bold text-sm">
          <div className="min-h-[100px] flex items-center gap-3">
            {getTechno()}
          </div>
          <a href={getProjectLink()} target="_blank" rel="noopener noreferrer">
            <button className="w-full font-normal text-white bg-[#1e90ff] py-2 px-5 rounded-lg text-base hover:bg-[#007acc] shadow-md hover:shadow-lg transition-shadow duration-300">
              {getTranslation(language, "view")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjetCard;

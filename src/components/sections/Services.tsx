import { useLanguage } from "../../hooks/useLanguage";
import { getTranslation } from "../../translations"; // Import des traductions
import servicesImage from "../../assets/services.jpg";
import MainCard from "../MainCard";
import Navbar from "../layout/Navbar";
import theme from "../../config/theme";

const Services = () => {
  const { language } = useLanguage(); // Récupère la langue actuelle depuis le contexte

  return (
    <div
      className="w-full h-screen flex flex-col items-center"
      style={{
        backgroundImage: `url(${servicesImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <div className="w-4/5 h-full flex flex-col justify-between items-center">
        <div
          className="flex flex-col gap-6 mt-6 mr-8"
          style={{ color: theme.darker_gray }}
        >
          <span
            className="text-7xl font-bold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            {getTranslation(language, "frontendDeveloper")}
            {/* Utilise la traduction selon la langue */}
          </span>
        </div>
        <MainCard />
        <div
          className=" mb-24 mt-8 grid gap-6 text-xl opacity-20"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, auto)",
            gridTemplateRows: "repeat(4, auto)",
            justifyContent: "center",
            alignItems: "center",
            gridTemplateAreas: `  
              "a . b . . c . d . e . ."
              ". f . g . . h . . . i ."
              ". j k . . l . . . m . n"
              ". o . p . . q . r . s . "
            `,
          }}
        >
          <span className="ml-6" style={{ gridArea: "a" }}>
            console.log()
          </span>
          <span className="mb-4" style={{ gridArea: "b" }}>
            $ npm
          </span>
          <span style={{ gridArea: "c" }}>className="grid"</span>
          <span className="mb-4" style={{ gridArea: "d" }}>
            const
          </span>
          <span style={{ gridArea: "e" }}>export</span>
          <span className="ml-6 mb-4" style={{ gridArea: "f" }}>
            useState()
          </span>
          <span style={{ gridArea: "g" }}>props</span>
          <span style={{ gridArea: "h" }}>context</span>
          <span style={{ gridArea: "i" }}>Keys</span>
          <span className="mr-32" style={{ gridArea: "j" }}>
            error
          </span>

          <span className="ml-4" style={{ gridArea: "k" }}>
            return
          </span>
          <span style={{ gridArea: "l" }}>useEffect()</span>
          <span className="ml-6" style={{ gridArea: "m" }}>
            string
          </span>
          <span style={{ gridArea: "n" }}>div</span>
          <span className="mt-4 ml-12" style={{ gridArea: "o" }}>
            Redux
          </span>
          <span style={{ gridArea: "p" }}>function()</span>
          <span style={{ gridArea: "q" }}>style</span>
          <span style={{ gridArea: "r" }}>useMemo()</span>
          <span style={{ gridArea: "s" }}>hook</span>
        </div>
      </div>
    </div>
  );
};

export default Services;

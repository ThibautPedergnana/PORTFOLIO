import Services from "./components/sections/Services";
import Technologies from "./components/sections/Technologies";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import theme from "./config/theme";
import ScrollToTop from "./components/ScrollToTop";
import ScrollDown from "./components/ScrollDown";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <section id="services" className="w-full">
        <Services />
      </section>
      <div
        className="w-full h-1 block p-0 m-0"
        style={{ backgroundColor: theme.black }}
      />

      <section id="technologies" className="w-full next-section">
        <Technologies />
      </section>
      <div
        className="w-full h-1 block p-0 m-0"
        style={{ backgroundColor: theme.black }}
      />

      <section id="portfolio" className="w-full next-section">
        <Portfolio />
      </section>
      <div
        className="w-full h-1 block p-0 m-0"
        style={{ backgroundColor: theme.black }}
      />

      <section id="contact" className="w-full next-section">
        <Contact />
      </section>
      <div>
        <ScrollToTop />
        <ScrollDown />
      </div>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";

/*-------particles effect---------- */
import Particles from "react-particles-js"



/*-------Components --------*/
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Services from "./components/Services.js";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
/*------------------------- */

/*------Style---------------*/
import "./styles/app.scss"

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type: "square",
              stroke:{
                width:6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio/>
      <Contact/>
    </>
  );
}

export default App;

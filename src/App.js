import "bootstrap/dist/css/bootstrap.min.css";

/*-------Components --------*/
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Particles from "react-particles-js"
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
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Contact, EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas, Footer} from "./components";
const App = () => {
  return (
  <BrowserRouter>
  <div className="relative z-0 bg-gradient-to-r from-sky-900 to-green-900">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    </div>
    <div className="relative z-0">
    <Hero/>
    <About/>
    {/**<Experience/>*/}
    <Tech/>
    <Works/>
    <Feedbacks/>
      <Contact/>
      <Footer/>
    </div>
  </div>
  </BrowserRouter>
  )
};

export default App;

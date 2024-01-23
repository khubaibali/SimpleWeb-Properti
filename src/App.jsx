import React from "react";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Company from "./components/Companies/company";
import Residence from "./components/Residencies/residence";
import "./App.css";
import Value from "./components/Value/value";
import Contact from "./components/Contact/contact";
import GetStarted from "./components/GetStarted/getStarted";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Company />
      <Residence />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;

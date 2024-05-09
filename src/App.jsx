//import React from 'react'
import "./index.css";
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import DailyTechs from "./components/DailyThecs";
import ProjectMenuMain from "./components/ProjectMenuMain";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <DailyTechs />
      <ProjectMenuMain />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;

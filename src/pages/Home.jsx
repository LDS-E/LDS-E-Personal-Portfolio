import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import DailyTechs from "../components/Stacks/DailyTechs";
import ProjectMenuMain from "../components/ProjectMenuMain";
import ContactMe from "../components/ContactMe";
import SideNav from "../components/SideNav"; // Importe o SideNav

const Home = () => {
  useEffect(() => {
    // Ao carregar a página Home, rola para o topo
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover bg-center min-h-screen">
      <SideNav />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="techs">
        <DailyTechs />
      </section>
      <section id="projects">
        <ProjectMenuMain />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

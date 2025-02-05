import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import DailyTechs from "../components/Stacks/DailyTechs";
import ProjectCarousel from "../components/ProjectCarousel";
import ContactMe from "../components/ContactMe";
import AboutMe from "../components/AboutMe";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-base-100">
      <HeroSection />
      <AboutMe />
      <DailyTechs />
      <ProjectCarousel />
      <ContactMe />
    </div>
  );
};

export default Home;

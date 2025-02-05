import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    // Ao carregar a página Home, rola para o topo
    window.scrollTo(0, 0);
  }, []);

  return <div className="bg-hero-pattern bg-cover bg-center">Project</div>;
};

export default Project;

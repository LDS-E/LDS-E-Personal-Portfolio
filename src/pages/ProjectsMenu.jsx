import { useEffect } from "react";

const ProjectsMenu = () => {
  useEffect(() => {
    // Ao carregar a página Home, rola para o topo
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover bg-center ">ProjectsMenu</div>
  );
};

export default ProjectsMenu;

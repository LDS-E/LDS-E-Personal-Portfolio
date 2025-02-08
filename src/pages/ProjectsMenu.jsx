import { useEffect } from "react";

const ProjectsMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-hero-pattern bg-cover bg-center ">ProjectsMenu</div>
  );
};

export default ProjectsMenu;

import { useState } from "react";

const ProjectCarousel = () => {
  const projects = [
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      title: "Project 1",
      description: "Descrição do Projeto 1",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      title: "Project 2",
      description: "Descrição do Projeto 2",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      title: "Project 3",
      description: "Descrição do Projeto 3",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      title: "Project 4",
      description: "Descrição do Projeto 4",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
      title: "Project 5",
      description: "Descrição do Projeto 5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Funções de navegação
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="bg-accent py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          My Projects
        </h2>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-secondary h-1 w-24"></div>
          <p className="text-lg">Skills I work with</p>
          <div className="bg-accent h-1 w-24"></div>
        </div>
      </div>

      {/* Carrossel com navegação por botões */}
      <div className="relative max-w-screen-xl mx-auto p-4 overflow-hidden">
        <div className="flex transition-transform duration-300">
          {/* Renderizar os projetos */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="carousel-item text-center w-1/3 p-2"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ProjectCarousel;

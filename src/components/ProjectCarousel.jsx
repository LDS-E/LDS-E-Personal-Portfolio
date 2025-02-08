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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text relative title p-4">
            <span className="relative z-10">My Projects</span>
            <div className="absolute left-0 right-0 bottom-0 mx-auto bg-primary h-1 w-1/2 mt-2"></div>
          </h2>
        </div>

        <div className="relative max-w-screen-xl mx-auto p-4 overflow-hidden">
          <div className="flex transition-transform duration-300">
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
                  <h3 className="text-lg font-semibold text-white name-project">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white description-project">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full button-navigation"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full button-navigation"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;

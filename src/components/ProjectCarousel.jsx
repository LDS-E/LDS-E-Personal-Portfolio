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

  return (
    <section className="my-16">
      <div className="carousel carousel-center rounded-box max-w-screen-xl mx-auto p-4 space-x-4">
        {projects.map((project, index) => (
          <div key={index} className="carousel-item">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-box w-96 h-auto object-cover"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-white">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;

import { useState } from "react";

const ProjectCarousel = () => {
  const projects = [
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      title: "Company Website",
      description:
        "Next.js Company Website is a modern institutional website for companies and groups",
      repoLink: "https://github.com/LDS-E/company-website",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      title: "Business Contact Page",
      description:
        "Business Contact Page – A modern and responsive contact page for small and medium businesses, built with with Next.js and TypeScript.",
      repoLink: "https://github.com/LDS-E/Business-Contact-Page",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      title: "Networkschool",
      description:
        "NetWorkSchool website, an educational platform focused on web and backend development. Created with HTML, CSS and JavaScript",
      repoLink: "https://github.com/LDS-E/networkschool-website",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      title: "To do List",
      description:
        "This is my first to-do list project developed with HTML, CSS, and JavaScript",
      repoLink: "https://github.com/LDS-E/To-do-list",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
      title: "Shift management",
      description:
        "Project focused on shift management for healthcare professionals",
      repoLink: "https://github.com/LDS-E/Schedule_Frontend",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
      title: "2wheelsacrosstworld",
      description: "My Blog",
      repoLink: "https://github.com/LDS-E/2wheelsacrosstworld",
    },
  ];

  return (
    <section className="bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text relative title p-4">
            <span className="relative z-10">My Projects</span>
            <div className="absolute left-0 right-0 bottom-0 mx-auto bg-primary h-1 w-1/2 mt-2"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-secondary mb-4">
                  {project.description}
                </p>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-primary hover:text-secondary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;

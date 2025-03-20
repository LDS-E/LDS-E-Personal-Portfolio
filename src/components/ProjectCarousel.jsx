import { useState } from "react";

const ProjectCarousel = () => {
  const projects = [
    {
      imageUrl: "/imgs/PharmaPBI.png",
      title: "Pharma Dashboard",
      description:
        "This project is PowerBI dashboard designed to provide real-time insights for Pharma companies.",
      repoLink: "https://github.com/LDS-E/kpi-dashboard",
    },
    {
      imageUrl: "/imgs/HCPproject.png ",
      title: "Shift management",
      description:
        "Project focused on shift management for healthcare professionals",
      repoLink: "https://github.com/LDS-E/Schedule_Frontend",
    },
    {
      imageUrl: "/imgs/CompanyWeb.png",
      title: "Company Website",
      description:
        "Company Website is a modern institutional website for companies and groups.",
      repoLink: "https://github.com/LDS-E/company-website",
    },
    {
      imageUrl: "/imgs/BusinessPage.png",
      title: "Business Contact Page",
      description:
        "Business Contact Page is a professional and responsive contact page designed for small and medium-sized businesses and entrepreneurs.",
      repoLink: "https://github.com/LDS-E/Business-Contact-Page",
    },
    {
      imageUrl: "/imgs/NetworkS.png",
      title: "Networkschool",
      description:
        "This project is a website developed from a PSD and aims to provide a solid structure for a responsive website, following best development practices.",
      repoLink: "https://github.com/LDS-E/networkschool-website",
    },
    {
      imageUrl: "/imgs/Medibridge.png",
      title: "MedIBridge",
      description:
        "MedIBridge is a project in healthcare sector in Germany providing a platform that connects doctors and patients seamlessly",
      repoLink: "https://github.com/LDS-E/medibridge",
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

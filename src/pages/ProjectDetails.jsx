import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import lightbulbsSvg from "/imgs/lightbulbs.svg";
import puzzle from "/imgs/puzzle.svg";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  const projects = [
    {
      id: "project1",
      title: "Project 1",
      images: [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      ],
      description:
        "This project aims to simplify the process of managing tasks efficiently. It helps users organize and prioritize their daily activities.",
      purpose:
        "To solve the problem of disorganized task management for both individuals and teams.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
    },
  ];

  useEffect(() => {
    const foundProject = projects.find((proj) => proj.id === projectId);
    setProject(foundProject);
    window.scrollTo(0, 0); //
  }, [projectId]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 py-16">
      <div className="container mx-auto px-4">
        {/* Carrossel de Imagens */}
        <div className="carousel carousel-center bg-neutral rounded-box max-w-lg space-x-4 p-4 mx-auto">
          {project.images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt={`${project.title} image ${index + 1}`}
                className="rounded-box w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Título e Descrição do Projeto */}
        <div className="text-center mt-12 text-white">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl leading-relaxed mb-8">{project.description}</p>

          {/* Detalhes do Projeto */}
          <div className="bg-white text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <p className="mb-4">
              <strong>Purpose:</strong> {project.purpose}
            </p>
            <p className="mb-4">
              <strong>Technologies Used:</strong>{" "}
              {project.technologies.join(", ")}
            </p>

            <div className="flex items-center space-x-4 mt-6 mb-4">
              <img
                src={lightbulbsSvg}
                alt="Lightbulb"
                className="w-12 h-12 transform transition-transform duration-300 hover:scale-110"
              />
              <p className="text-lg">
                This project was created with a focus on improving user
                experience through intuitive design and effective performance.
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <img
                src={puzzle}
                alt="Puzzle"
                className="w-12 h-12 transform transition-transform duration-300 hover:scale-110"
              />
              <p className="text-lg">
                The goal was to create a solution that could simplify daily
                workflows and allow for easy team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

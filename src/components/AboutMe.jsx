import { useEffect, useState } from "react";
import lightbulbsSvg from "/imgs/lightbulbs.svg";
import puzzle from "/imgs/puzzle.svg";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-section");
      const position = element.getBoundingClientRect();
      if (position.top <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about-section" className="bg-accent py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text animate__animated animate__fadeIn relative title p-4">
            <span className="relative z-10">A Little About Me</span>
            <div className="absolute left-0 right-0 bottom-0 mx-auto bg-primary h-1 w-1/2 mt-2"></div>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
          <div
            className={`${
              isVisible ? "animate__animated animate__fadeInUp" : ""
            } md:w-1/2 mb-8 md:mb-0`}
          >
            <img
              src="/imgs/profile2sf.png"
              alt="Lucas"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div
            className={`${
              isVisible ? "animate__animated animate__fadeInUp" : ""
            } md:w-1/2 space-y-8 text-2xl text-text `}
          >
            <p className="leading-relaxed">
              Hey there! I&apos;m Lucas, a passionate full-stack developer. I
              love diving into both frontend and backend development to create
              smooth, engaging, and user-friendly applications.
            </p>
            <p className="leading-relaxed">
              My background in Sales, Business Intelligence, and Marketing helps
              me approach problems from different angles, making me a strategic
              thinker and a fast problem-solver.
            </p>

            <div className="flex items-center space-x-6">
              <img
                src={lightbulbsSvg}
                alt="Lightbulb"
                className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
              />
              <p className="leading-relaxed">
                I build applications that not only look good but are functional.
                Whether it&apos;s perfecting the frontend or optimizing the
                backend, I enjoy the process of making systems both efficient
                and visually appealing.
              </p>
            </div>

            <div className="flex items-center space-x-6 ">
              <img
                src={puzzle}
                alt="Puzzle"
                className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
              />
              <p className="leading-relaxed">
                Coding feels like solving a puzzle to me. I bring together the
                right tools and strategies to build scalable solutions that work
                perfectly, no matter the challenge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

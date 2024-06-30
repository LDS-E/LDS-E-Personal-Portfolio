import lightbulbsSvg from "../assets/lightbulbs.svg";
import profilephoto from "../assets/profilephoto.jpg";
import puzzle from "../assets/puzzle.svg";

const AboutMe = () => {
  return (
    <section className="h-screen flex items-center justify-center py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center text-center mb-10">
          <div className="bg-secondary h-1 w-32 mr-4"></div>
          <h1 className="text-white text-2xl font-bold">About Me</h1>
          <div className="bg-secondary h-1 w-16 ml-4"></div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Left Side */}
          <div className="flex flex-col justify-center md:w-1/2 space-y-12">
            <div className="flex items-center space-x-4 mb-10">
              <span className="text-lg">
                Hi, I&apos;m Lucas Eifler. I&apos;m a passionate and dedicated
                developer with a love for creating engaging and interactive web
                applications. I have experience in frontend development using
                modern frameworks like React.js. I&apos;m also proficient in
                backend development with Node.js and Express.
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img src={lightbulbsSvg} alt="Lightbulb" className="w-16 h-16" />
              <span className="text-lg">
                With over 12 implemented projects, I have gathered a wide range
                of skills and experiences in the field of web development.
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img src={puzzle} alt="Puzzle" className="w-16 h-16" />
              <span className="text-lg">
                With over 12 implemented projects, I have gathered a wide range
                of skills and experiences in the field of web development.
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center md:w-1/2 md:items-end md:justify-end space-y-8">
            <img
              src={profilephoto}
              alt="Lucas Eifler Photo"
              className="rounded-full md:w-96 md:h-96 w-64 h-64 object-cover"
            />
            <div>
              <button
                className="btn bg-primary text-black text-2xl py-2 px-4 rounded-md hover:font-bold hover:bg-secondary hover:text-white"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Let’s Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

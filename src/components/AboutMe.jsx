import lightbulbsSvg from "/imgs/lightbulbs.svg";
//import profilephoto from "/imgs/profilephoto.jpg";
import puzzle from "/imgs/puzzle.svg";

const AboutMe = () => {
  return (
    <section className="h-auto flex items-center justify-center py-16 text-white">
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
                Hi, I&apos;m Lucas Eifler, a passionate and dedicated full stack
                developer with a rich background in Sales, Business
                Intelligence, and Marketing. Leveraging my comprehensive skills
                and attention to detail, I create seamless and engaging user
                experiences. My diverse experience provides a unique perspective
                and strategic insight, enhancing my ability to deliver
                high-quality, user-centric applications.
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img src={lightbulbsSvg} alt="Lightbulb" className="w-16 h-16" />
              <span className="text-lg">
                I&apos;m probably not the typical developer constantly coding
                behind an IDE, but I build. You&apos;ll often find me immersed
                in both frontend and backend environments, perfecting user
                interfaces and optimizing server performance. With a rich
                background in Sales, Business Intelligence, and Marketing, I
                bring a unique strategic insight to my work.
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img src={puzzle} alt="Puzzle" className="w-16 h-16" />
              <span className="text-lg">
                In building full stack applications, I&apos;m equipped with just
                the right tools, and can absolutely function independently of
                them to deliver fast, resilient solutions optimized for scale.
                Performance and scalability are priorities on my radar.
              </span>
            </div>
          </div>

          {/* Right Side */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

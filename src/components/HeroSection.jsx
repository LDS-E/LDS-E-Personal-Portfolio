const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-secondary hero flex flex-col md:flex-row items-center justify-center px-4 md:px-20 pt-12 md:pt-20">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-3/4 h-3/4 border-2 border-white rounded-lg transform rotate-6 opacity-40"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between z-10">
        <div className="w-full md:w-1/2 text-center lg:text-left pr-0 md:pr-10 py-8 md:py-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase animate__animated animate__fadeIn animate__delay-1s leading-tight">
            Knowledge is what transforms our BEING
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 animate__animated animate__fadeIn animate__delay-2s mt-4 md:mt-6">
            Full stack developer who turns ideas into code. From design to
            functionality, I build complete and innovative web solutions.
          </p>
          <div className="mt-6 flex justify-center w-full">
            <button className="btn btn-primary self-center animate__animated animate__fadeIn animate__delay-3s">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right">
          <img
            src="/imgs/ldselogo2.png"
            alt="Logo"
            className="max-w-full h-auto mx-auto"
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full text-center py-8 bg-gradient-to-t from-backdark to-transparent">
        <span className="text-white opacity-70 text-sm">Scroll down</span>
      </div>
    </div>
  );
};

export default HeroSection;

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-secondary hero flex items-center justify-center px-10 md:px-20">
      {/* Texto à esquerda */}
      <div className="w-1/2 text-left pr-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase animate__animated animate__fadeIn animate__delay-1s">
          Knowledge is what transforms our BEING
        </h1>
        <p className="text-lg mb-8 md:text-xl text-white opacity-90 animate__animated animate__fadeIn animate__delay-2s">
          Frontend developer passionate about creating modern, responsive, and
          user-friendly websites and apps.
        </p>
        <button className="btn btn-primary animate__animated animate__fadeIn animate__delay-3s">
          Contact Me
        </button>
      </div>

      {/* Imagem à direita */}
      <div className="w-1/2 text-right pl-10">
        <img
          src="/imgs/ldselogo2.png"
          alt="Logo"
          className="max-w-[80%] md:max-w-[60%] h-auto mx-auto md:mx-0"
        />
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-0 w-full text-center py-8 bg-gradient-to-t from-backdark to-transparent">
        <span className="text-white opacity-70 text-sm">Scroll down</span>
      </div>
    </div>
  );
};

export default HeroSection;

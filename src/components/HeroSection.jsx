const HeroSection = () => {
  return (
    <div className="relative min-h-screen  bg-secondary hero">
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-2xl px-4 py-8 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate__animated animate__fadeIn animate__delay-1s">
            Hi, I&apos;m Lucas!
          </h1>
          <p className="text-lg mb-8 md:text-xl text-white opacity-90 animate__animated animate__fadeIn animate__delay-2s">
            Frontend developer passionate about creating modern, responsive, and
            user-friendly websites and apps.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full text-center py-8 bg-gradient-to-t from-backdark to-transparent">
        <span className="text-white opacity-70 text-sm">Scroll down</span>
      </div>
    </div>
  );
};

export default HeroSection;

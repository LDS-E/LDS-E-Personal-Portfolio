const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Olá, eu sou Lucas!</h1>
          <p className="mb-5 text-lg">
            Desenvolvedor Frontend apaixonado por criar interfaces modernas e
            responsivas.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="btn btn-primary">
              Meus Projetos
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

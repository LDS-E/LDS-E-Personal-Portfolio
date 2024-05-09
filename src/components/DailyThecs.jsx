const DailyTechs = () => {
  return (
    <section className="h-screen py-16 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Daily Technologies
      </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {/* JavaScript */}
          <div className="tech-card">
            <img
              src="/javascript-logo.png"
              alt="JavaScript"
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-4">
              JavaScript
            </h3>
          </div>
          {/* TypeScript */}
          <div className="tech-card">
            <img
              src="/typescript-logo.png"
              alt="TypeScript"
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-4">
              TypeScript
            </h3>
          </div>
          {/* Next.js */}
          <div className="tech-card">
            <img src="/nextjs-logo.png" alt="Next.js" className="mx-auto" />
            <h3 className="text-lg font-semibold text-center mt-4">Next.js</h3>
          </div>
          {/* Node.js */}
          <div className="tech-card">
            <img src="/nodejs-logo.png" alt="Node.js" className="mx-auto" />
            <h3 className="text-lg font-semibold text-center mt-4">Node.js</h3>
          </div>
          {/* React.js */}
          <div className="tech-card">
            <img src="/reactjs-logo.png" alt="React.js" className="mx-auto" />
            <h3 className="text-lg font-semibold text-center mt-4">React.js</h3>
          </div>
          {/* HTML */}
          <div className="tech-card">
            <img src="/html-logo.png" alt="HTML" className="mx-auto" />
            <h3 className="text-lg font-semibold text-center mt-4">HTML</h3>
          </div>
          {/* CSS */}
          <div className="tech-card">
            <img src="/css-logo.png" alt="CSS" className="mx-auto" />
            <h3 className="text-lg font-semibold text-center mt-4">CSS</h3>
          </div>
          {/* Tailwind CSS */}
          <div className="tech-card">
            <img
              src="/tailwind-logo.png"
              alt="Tailwind CSS"
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-4">
              Tailwind CSS
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyTechs;

import Stacks from "./Stacks";

const DailyTechs = () => {
  const skills = Stacks();

  return (
    <section className="py-16 bg-secondary text-text">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-text mb-4 relative title p-4">
            <span className="relative z-10">My Tech Stacks</span>
            <div className="absolute left-0 right-0 bottom-0 mx-auto bg-accent h-1 w-1/2 mt-2"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 relative"
            >
              <div className="absolute top-4 right-4">
                {skill.experience && (
                  <span className="bg-primary text-white text-xs font-bold py-1 px-2 rounded">
                    {skill.experience}
                  </span>
                )}
              </div>
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-primary text-center nome-skill">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyTechs;

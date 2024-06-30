import Stacks from "./Stacks";

const DailyTechs = () => {
  const skills = Stacks();

  return (
    <section className="h-screen flex items-center justify-center py-16 bg-backdark text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center text-center mb-8">
          <div className="bg-secondary h-1 w-16 mr-4"></div>
          <h1 className="text-white text-2xl font-bold">My Stacks</h1>
          <div className="bg-secondary h-1 w-32 ml-4"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mb-8">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-24 h-24 mb-2 md:w-32 md:h-32"
              />
              <h3 className="text-lg font-semibold text-center">
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

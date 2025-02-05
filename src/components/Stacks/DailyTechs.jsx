import Stacks from "./Stacks";

const DailyTechs = () => {
  const skills = Stacks();

  return (
    <section className="py-16 bg-base-200 text-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            My Tech Stacks
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="bg-accent h-1 w-24"></div>
            <p className="text-lg">Skills I work with</p>
            <div className="bg-accent h-1 w-24"></div>
          </div>
        </div>

        {/* Tech Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-primary text-center">
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

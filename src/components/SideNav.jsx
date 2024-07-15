import { useState, useEffect } from "react";

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "about", "techs", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let foundSection = false;

      for (let sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
            foundSection = true;
            break;
          }
        }
      }

      if (!foundSection) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="fixed top-1/2 right-0 mr-4 transform -translate-y-1/2">
      <nav className="text-white rounded-lg p-4">
        <ul className="space-y-6 list-none">
          <li className="relative">
            <button
              onClick={() => scrollToSection("top")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "top" ? "rotate-0" : ""
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
          <li className="relative">
            <button
              onClick={() => scrollToSection("about")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "about" ? "rotate-0" : ""
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
          <li className="relative">
            <button
              onClick={() => scrollToSection("techs")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "techs" ? "rotate-0" : ""
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
          <li className="relative">
            <button
              onClick={() => scrollToSection("projects")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "projects" ? "rotate-0" : ""
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
          <li className="relative">
            <button
              onClick={() => scrollToSection("contact")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "contact" ? "rotate-0" : ""
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;

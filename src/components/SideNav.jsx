import { useState } from "react";

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (sectionId) => {
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
              onClick={() => handleScroll("top")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "top"
                  ? "bg-transparent -rotate-0"
                  : "bg-transparent"
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
          <li className="relative">
            <button
              onClick={() => handleScroll("about")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "about" ? "bg-transparent -rotate-0" : ""
              }  p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
          <li className="relative">
            <button
              onClick={() => handleScroll("techs")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "techs"
                  ? "bg-transparent -rotate-0"
                  : "bg-transparent"
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
          <li className="relative">
            <button
              onClick={() => handleScroll("projects")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "projects"
                  ? "bg-transparent -rotate-0"
                  : "bg-transparent"
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
          <li className="relative">
            <button
              onClick={() => handleScroll("contact")}
              className={`transform rotate-45 border border-[#ebebeb] ${
                activeSection === "contact"
                  ? "bg-transparent -rotate-0"
                  : "bg-transparent"
              } text-white p-1 flex items-center justify-center w-3 h-3 hover:bg-gray-600 transition duration-300`}
            ></button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;

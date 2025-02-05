/* import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent text-white px-4 flex justify-between items-center z-50">
      <div className="flex items-center w-full justify-between">
        <div className="mr-auto">
          <Link to="/">
            <img src="/imgs/ldselogo2.png" alt="Logo" className="h-24" />
          </Link>
        </div>

       
        <div className="cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <>
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="3"
                  y1="12"
                  x2="15"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </div>
      </div>

   
      <ul
        className={`fixed top-0 right-4 w-60 bg-backdark text-white text-2xl flex flex-col items-center gap-6 transition-transform duration-700 ease-in-out rounded-md ${
          isOpen ? "translate-y-20 py-6" : "-translate-y-full"
        }`}
      >
        <li>
          <Link
            to="/project-details"
            className="block text-white hover:text-gray-400 transition duration-300"
            onClick={toggleMenu}
          >
            My Work
          </Link>
        </li>
        <li>
          <Link
            to="#techs"
            className="block text-white hover:text-gray-400 transition duration-300"
            onClick={toggleMenu}
          >
            My Résumé
          </Link>
        </li>
        <li>
          <Link
            to="#projects"
            className="block text-white hover:text-gray-400 transition duration-300"
            onClick={toggleMenu}
          >
            Maybe a Blog
          </Link>
        </li>

        <br />

        <h2 className="text-primary">Say Hello</h2>
        <li className="text-lg">lucass.eifler@gmail.com</li>
        <li className="text-lg">eifler.lucas@ldsegroup.com</li>
      </ul>
    </nav>
  );
};

export default Navbar;

*/

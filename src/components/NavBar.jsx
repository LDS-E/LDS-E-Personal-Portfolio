import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-backdark text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-auto">
          <img src="/imgs/ldselogo2.png" alt="Logo" className="h-24" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
      </div>

      {/* Menu Links */}
      <ul
        className={`text-2xl md:flex gap-x-10 md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        } mt-4 md:mt-0`}
      >
        <li className="md:ml-4">
          <a
            href="#"
            className="block md:inline-block text-white hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
        </li>
        <li className="md:ml-4">
          <a
            href="#"
            className="block md:inline-block text-white hover:text-gray-400 transition duration-300"
          >
            Projects
          </a>
        </li>
        <li className="md:ml-4">
          <a
            href="#"
            className="block md:inline-block text-white hover:text-gray-400 transition duration-300"
          >
            Services
          </a>
        </li>
        <li className="md:ml-4">
          <a
            href="#"
            className="block md:inline-block text-white hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

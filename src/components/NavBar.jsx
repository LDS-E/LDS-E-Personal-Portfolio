import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="md:flex md:items-center">
        {/* Logo */}
        <div className="mr-auto">
          <img src="/src/assets/ldselogo.png" alt="Logo" className="h-24" />
        </div>
        
        {/* Botão de Menu */}
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
      
      {/* Links do Menu */}
      <ul className={`md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
        <li className="md:ml-4">
          <a href="#" className="block md:inline-block text-white hover:text-gray-400 transition duration-300">Home</a>
        </li>
        <li className="md:ml-4">
          <a href="#" className="block md:inline-block text-white hover:text-gray-400 transition duration-300">Projects Overview</a>
        </li>
        <li className="md:ml-4">
          <a href="#" className="block md:inline-block text-white hover:text-gray-400 transition duration-300">Services</a>
        </li>
        <li className="md:ml-4">
          <a href="#" className="block md:inline-block text-white hover:text-gray-400 transition duration-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
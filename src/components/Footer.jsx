import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-backdark text-gray-300 h-screen">
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <span className="text-xl font-bold mb-4">Say Hello</span>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-text hover:text-back px-4 py-2 rounded-md"
                >
                  lucass.eifler@gmail.com
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-text hover:text-back px-4 py-2 rounded-md"
                >
                  Insta Page
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex space-x-4">
            <li className="md:ml-4">
              <Link
                to="/"
                className="block md:inline-block text-white hover:text-gray-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="md:ml-4">
              <Link
                to="/projects-menu"
                className="block md:inline-block text-white hover:text-gray-400 transition duration-300"
              >
                Projects Menu
              </Link>
            </li>
            <li className="md:ml-4">
              <a
                href="#contact"
                className="block md:inline-block text-white hover:text-gray-400 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="text-text hover:text-back px-4 py-2 rounded-md"
              >
                My Résumé
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex justify-center items-center">
          <span>
            &copy; <a href="https://github.com/LDS-E">LDS-E </a> 2024
          </span>
          <ul className="flex space-x-4 ml-4">
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer noopener"
                className="text-xl hover:text-secondary"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer noopener"
                className="text-xl hover:text-secondary"
              >
                Git Hub
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer noopener"
                className="text-xl hover:text-secondary"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer noopener"
                className="text-xl hover:text-secondary"
              >
                YT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

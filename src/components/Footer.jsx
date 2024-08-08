import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-backdark text-gray-300 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto py-12 px-4 flex-grow">
        <div className="flex flex-col lg:flex-row justify-between items-center h-full">
          {/* Say Hello Section */}
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <span className="text-xl font-bold mb-4">Say Hello</span>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:lucass.eifler@gmail.com"
                  className="text-text hover:text-back px-4 py-2 rounded-md block text-center lg:text-left"
                >
                  lucass.eifler@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text hover:text-back px-4 py-2 rounded-md block text-center lg:text-left"
                >
                  Insta Page
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center">
            <li className="w-full lg:w-auto">
              <Link
                to="/"
                className="block text-white hover:text-gray-400 transition duration-300 text-center"
              >
                Home
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link
                to="/projects-menu"
                className="block text-white hover:text-gray-400 transition duration-300 text-center"
              >
                Projects Menu
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <a
                href="#contact"
                className="block text-white hover:text-gray-400 transition duration-300 text-center"
              >
                Contact
              </a>
            </li>
            <li className="w-full lg:w-auto">
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="text-text hover:text-back px-4 py-2 rounded-md block text-center"
              >
                My Résumé
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-600" />

        <div className="flex flex-col md:flex-row justify-center items-center">
          <span className="text-center md:text-left">
            &copy; <a href="https://github.com/LDS-E">LDS-E</a> 2024
          </span>
          <ul className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0 md:ml-4">
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
                GitHub
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

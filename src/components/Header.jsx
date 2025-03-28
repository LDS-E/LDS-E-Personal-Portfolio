import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background shadow-md text-text sticky top-0 z-50 w-full">
      <div className="navbar container mx-auto px-4 flex items-center justify-between">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            <img
              src="/imgs/ldselogo2.png"
              alt="Logo"
              className="h-16 md:h-24 w-auto"
            />
          </Link>
        </div>

        <div className="hidden lg:flex gap-4">
          {/*<Link to="/project-details" className="btn btn-ghost">
            My Work
          </Link>*/}
          <a
            href="/imgs/CVLDSE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            My Resume
          </a>
          <a
            href="https://github.com/LDS-E/2wheelsacrosstworld"
            target="_blank"
            className="btn btn-ghost"
          >
            Almost a blog
          </a>
          <a
            href="https://github.com/LDS-E"
            target="_blank"
            className="btn btn-ghost"
          >
            Github
          </a>
        </div>

        <div className="lg:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-4 bg-background shadow-lg rounded-lg p-4 flex flex-col gap-4 lg:hidden">
          {/*  <Link
            to="/projects-menu"
            className="btn btn-ghost"
            onClick={() => setIsOpen(false)}
          >
            My Work
          </Link>*/}
          <a
            href="/imgs/CVLDSE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            onClick={() => setIsOpen(false)}
          >
            My Resume
          </a>
          <a
            href="https://github.com/LDS-E/2wheelsacrosstworld"
            target="_blank"
            className="btn btn-ghost"
            onClick={() => setIsOpen(false)}
          >
            Almost a blog
          </a>
          <a
            href="https://github.com/LDS-E"
            target="_blank"
            className="btn btn-ghost"
          >
            Github
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

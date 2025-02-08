import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-background text-text p-10">
      <aside>
        <img src="/imgs/ldselogo2.png" alt="Logo" className="h-48" />
        <p className="font-bold">
          LDS-E
          <br />
          Fullstack developer
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/lucas-s-eifler/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xl hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M20 0h-16c-2.211 0-4 1.789-4 4v16c0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4v-16c0-2.211-1.789-4-4-4zm-12 16h-3v-8h3v8zm-1.5-9.143c-1.05 0-1.5-.647-1.5-1.457s.45-1.457 1.5-1.457c1.05 0 1.5.647 1.5 1.457s-.45 1.457-1.5 1.457zm10.5 9.143h-3v-4.071c0-2.151-2.55-1.988-2.55 0v4.071h-3v-8h3v1.286c1.56-2.928 6-2.36 6 3.029v3.685z"></path>
            </svg>
          </a>

          <a
            href="https://github.com/LDS-E"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xl hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.803 8.205 11.391.6.111.82-.261.82-.58v-2.057c-3.338.726-4.034-1.608-4.034-1.608-.546-1.396-1.333-1.768-1.333-1.768-1.09-.744.082-.73.082-.73 1.204.084 1.832 1.235 1.832 1.235 1.07 1.828 2.806 1.299 3.493.997.106-.776.417-1.3.758-1.599-2.667-.302-5.467-1.334-5.467-5.933 0-1.312.467-2.384 1.236-3.222-.124-.302-.536-.912.117-1.892 0 0 1.015-.322 3.326 1.238 1.314-.365 2.707-.548 4.05-.548 1.343 0 2.735.183 4.049.548 2.311-1.56 3.325-1.238 3.325-1.238.654.98.242 1.59.118 1.892.77.838 1.236 1.91 1.236 3.222 0 4.607-2.801 5.632-5.475 5.933.431.397.81 1.18.81 2.38v3.535c0 .319.215.698.823.58 4.767-1.588 8.205-6.088 8.205-11.391 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

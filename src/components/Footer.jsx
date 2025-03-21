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
            <img
              src="/imgs/WhiteLinkedin.png"
              alt="Linkedin"
              width="36"
              height="36"
              className="fill-current "
            />
          </a>

          <a
            href="https://github.com/LDS-E"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xl "
          >
            <img
              src="/imgs/github-mark-white.png"
              alt="GitHub"
              width="36"
              height="36"
              className="fill-current "
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

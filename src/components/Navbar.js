function Navbar({ view, setView }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <h3>Billy Mott</h3>
        <ul className="navbar-nav flex-row">
          <a
            onClick={() => setView("bio")}
            className="nav-link active me-3"
            aria-current="page"
            href="#bio"
          >
            About Me
          </a>
          <a
            onClick={() => setView("portfolio")}
            className="nav-link me-3"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            onClick={() => setView("contact")}
            className="nav-link me-3"
            href="#contact"
          >
            Contact
          </a>
          <a
            onClick={() => setView("resume")}
            className="nav-link me-3"
            href="#resume"
          >
            Resume
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

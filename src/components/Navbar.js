import React from "react";

const styles = {
  primary: {
    background: "#00243d",
    color: "#66999b",
  },
  secondary: {
    background: "#66999b",
    color: "#00243d",
  },
};

function Navbar({ view, setView }) {
  return (
    <nav style={styles.secondary} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3>Billy Mott</h3>
        <ul className="navbar-nav flex-row">
          <a
            onClick={() => setView("bio")}
            style={styles.secondary}
            className="nav-link active me-3"
            aria-current="page"
            href="#bio"
          >
            About Me
          </a>
          <a
            onClick={() => setView("portfolio")}
            style={styles.secondary}
            className="nav-link me-3"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            onClick={() => setView("contact")}
            style={styles.secondary}
            className="nav-link me-3"
            href="#contact"
          >
            Contact
          </a>
          <a
            onClick={() => setView("resume")}
            style={styles.secondary}
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

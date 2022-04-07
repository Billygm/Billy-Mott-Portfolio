import React from "react";

const styles = {
    background: "#75A3A5",
    color: "#00243d",
};

function Navbar({ view, setView }) {
  return (
    <nav style={styles} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3>Billy Mott</h3>
        <ul className="navbar-nav flex-row">
          <a
            onClick={() => setView("bio")}
            style={styles}
            className="nav-link active me-3"
            aria-current="page"
            href="#bio"
          >
            About Me
          </a>
          <a
            onClick={() => setView("portfolio")}
            style={styles}
            className="nav-link me-3"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            onClick={() => setView("contact")}
            style={styles}
            className="nav-link me-3"
            href="#contact"
          >
            Contact
          </a>
          <a
            onClick={() => setView("resume")}
            style={styles}
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

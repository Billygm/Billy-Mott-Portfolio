import React from "react";
import githubLogo from "../images/GitHub-Mark-Light-120px-plus.png";
import linkedinLogo from "../images/LI-In-Bug.png";
import stackoverflowLogo from "../images/logo-stackoverflow.png";

const styles = {
  footer: {
    background: "#00243d",
    color: "#75A3A5",
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
  },
  primary: {
    background: "#00243d",
    color: "#75A3A5",
  },
  img: {
    float: "left",
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },
};

const Footer = () => {
  return (
    <div style={styles.footer} className="d-flex justify-content-center p-3">
      <a
        href="https://github.com/Billygm"
        target="_blank"
        rel="noreferrer"
        className="btn mx-3"
        style={styles.primary}
      >
        <img
          src={githubLogo}
          style={styles.img}
          className="card-img-top"
          alt=""
        />
      </a>
      <a
        href="https://www.linkedin.com/in/william-mott-93a30a223/"
        target="_blank"
        rel="noreferrer"
        className="btn mx-3"
        style={styles.primary}
      >
        <img
          src={linkedinLogo}
          style={styles.img}
          className="card-img-top"
          alt=""
        />
      </a>
      <a
        href="https://stackoverflow.com/users/17146289/billy-mott?tab=profile"
        target="_blank"
        rel="noreferrer"
        className="btn mx-3"
        style={styles.primary}
      >
        <img
          src={stackoverflowLogo}
          style={styles.img}
          className="card-img-top"
          alt=""
        />
      </a>
    </div>
  );
};

export default Footer;

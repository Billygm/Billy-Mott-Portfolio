import React from "react";
import image from "../images/image0.jpeg";

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

function Mainbio() {
  return (
    <div style={styles.primary} className="p-3">
      <div className="row">
        <div className="col-sm-auto">
          <img src={image} width={300} height={300} alt="Billy's face" />
        </div>
        <div className="col-sm">
          <h1>Billy Mott</h1>
          <p>Some text about me</p>
        </div>
      </div>
    </div>
  );
}

export default Mainbio;

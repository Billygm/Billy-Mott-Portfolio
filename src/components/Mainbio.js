import React from "react";
import image from "../images/image0.jpeg";

const styles = {
  primary: {
    background: "#00243d",
    color: "#75A3A5",
  },
  secondary: {
    background: "#75A3A5",
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
          <p>I am a new web developer living in Seattle, WA. I'm currently
            attending the Part-Time Full Stack Flex Bootcamp through the UW. In
            my free time I like to play video games, Hike, Ski, and
            Snowboard.</p>
        </div>
      </div>
    </div>
  );
}

export default Mainbio;

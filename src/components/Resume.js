import pdf from "../images/Billy_Mott_Resume.pdf";
import image from "../images/resumeScreenshot.png"

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

function Resume() {
  return (
    <div style={styles.primary} className="p-3">
      <div className="row">
        <div className="col ps-5 py-3">
          <h1>Proficiencies</h1>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node JS</li>
            <li>MongoDB</li>
            <li>mongoose</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>Bootstrap</li>
            <li>ApolloDB</li>
            <li>GraphQL</li>
            <li>React</li>
          </ul>
        </div>
        <div className="col py-3">
          <h1>View My Resume</h1>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <img src={image} className="card-img-top" alt="" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;

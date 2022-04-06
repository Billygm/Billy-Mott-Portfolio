import pdf from "../images/Billy_Mott_Resume.pdf";

function Resume() {
  return (
    <div className="p-3 bg-dark text-info">
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
            <h1>
            <a href={pdf} target="_blank" rel="noreferrer" className="btn btn-secondary">View my Resume</a>
            </h1>
        </div>
      </div>
    </div>
  );
}

export default Resume;

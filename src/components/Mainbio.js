import image from "../images/image0.jpeg";

function Mainbio() {
  return (
    <div className="p-3 bg-dark text-info">
      <div className="row">
        <div className="col-auto">
          <img src={image} width={250} height={250} alt="Billy's face" />
        </div>
        <div className="col">
          <h1>Billy Mott</h1>
          <p>Some text about me</p>
        </div>
      </div>
    </div>
  );
}

export default Mainbio;

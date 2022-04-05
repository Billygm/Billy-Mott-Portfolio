import image from "../images/image0.jpeg";

function Mainbio() {
  return (
    <div className="p-3 bg-dark text-info">
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

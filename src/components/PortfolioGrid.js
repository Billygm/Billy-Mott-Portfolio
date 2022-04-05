import portfolioItems from "../data/portfolio";

const PortfolioGrid = () => {
  return (
    <section className="p-2 bg-dark text-black">
      <div className="container">
        <div className="row g-3">
          {portfolioItems.map(
            ({ id, title, gitHub, app, image, description }) => (
              <div className="col-md-6" key={id}>
                <div className="card h-100 bg-secondary">
                  <img src={image} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-around">
                    <a
                      href={gitHub}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark me-3"
                    >
                      View the Repository
                    </a>
                    <a
                      href={app}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark"
                    >
                      Go to Live Application
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;

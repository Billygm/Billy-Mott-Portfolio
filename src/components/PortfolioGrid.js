import React from "react";
import portfolioItems from "../data/portfolio";

const styles = {
  primary: {
    background: "#00243d",
    color: "#75A3A5",
  },
  secondary: {
    background: "#75A3A5",
    color: "#00243d",
  },
  accent: {
    background: "#003D38",
  },
};

const PortfolioGrid = () => {
  return (
    <section style={styles.primary} className="p-2">
      <div className="container">
        <div className="row g-3">
          {portfolioItems.map(
            ({ id, title, gitHub, app, image, description }) => (
              <div className="col-md-6" key={id}>
                <div style={styles.primary} className="card h-100">
                  <img src={image} className="card-img-top" alt={title} />
                  <div style={styles.secondary} className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                  <div style={styles.accent} className="card-footer d-flex justify-content-around">
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

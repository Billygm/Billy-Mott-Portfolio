import portfolioItems from "../data/portfolio.json"

const PortfolioGrid = () => {
  return (
    <section className="p-2 bg-dark text-info">
      <div className="container">
        <div className="row g-3">
          {portfolioItems.map((item) => (
            <div className="col-sm-6" key={item.id}>
              <div className="card card-body bg-secondary">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;

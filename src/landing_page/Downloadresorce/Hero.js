import React from 'react';
function Hero() {
    const resources = [
    {
      title: "Beginner's Trading Guide",
      type: "PDF Guide",
      description:
        "Learn the fundamentals of stock market trading and investing.",
      link: "#",
    },
    {
      title: "Technical Analysis Handbook",
      type: "eBook",
      description:
        "Master chart patterns, indicators, and trading strategies.",
      link: "#",
    },
    {
      title: "Market Research Report",
      type: "Report",
      description:
        "Get insights into current market trends and opportunities.",
      link: "#",
    },
    {
      title: "Risk Management Toolkit",
      type: "Template",
      description:
        "Tools and worksheets to manage trading risks effectively.",
      link: "#",
    },
    {
      title: "Trading Journal Template",
      type: "Excel Sheet",
      description:
        "Track and analyze your daily trading performance.",
      link: "#",
    },
    {
      title: "Investment Planning Guide",
      type: "PDF Guide",
      description:
        "Step-by-step guide to building a long-term investment portfolio.",
      link: "#",
    },
  ];
return ( 
        <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">
          Downloads & Resources
        </h1>
        <p className="lead text-muted">
          Access useful guides, reports, templates, and learning
          materials to improve your trading journey.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2>50+</h2>
              <p>Learning Resources</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2>20+</h2>
              <p>Trading Templates</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2>100%</h2>
              <p>Free Downloads</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="row">
        {resources.map((resource, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow border-0">
              <div className="card-body">
                <span className="badge bg-primary mb-3">
                  {resource.type}
                </span>

                <h5>{resource.title}</h5>

                <p className="text-muted">
                  {resource.description}
                </p>

                <a
                  href={resource.link}
                  className="btn btn-outline-primary"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div className="mt-5">
        <h2 className="text-center mb-4">
          Resource Categories
        </h2>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>📚</h4>
                <h6>Trading Guides</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>📊</h4>
                <h6>Market Reports</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>📝</h4>
                <h6>Templates</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>🎥</h4>
                <h6>Video Tutorials</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="card shadow border-0 mt-5">
        <div className="card-body text-center p-5">
          <h2>Stay Updated</h2>

          <p className="text-muted">
            Subscribe to receive the latest reports, guides,
            and trading resources.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
              />

              <button className="btn btn-primary">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}

export default Hero;

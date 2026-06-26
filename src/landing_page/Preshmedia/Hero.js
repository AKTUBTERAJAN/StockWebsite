import React from 'react';
function Hero() {
     const pressReleases = [
    {
      title: "TradePath Launches New Trading Platform",
      date: "June 2026",
      description:
        "TradePath introduces advanced tools and analytics for traders and investors.",
    },
    {
      title: "TradePath Reaches 100,000 Users",
      date: "May 2026",
      description:
        "The platform achieves a major milestone with rapid user growth.",
    },
    {
      title: "TradePath Expands Educational Resources",
      date: "April 2026",
      description:
        "New learning materials help traders improve their market knowledge.",
    },
  ];

    return ( 
         <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Press & Media</h1>
        <p className="text-muted">
          Stay updated with the latest news, announcements, and media resources
          from TradePath.
        </p>
      </div>

      {/* Company Overview */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h3>About TradePath</h3>
          <p>
            TradePath is a modern trading and investment platform dedicated to
            helping users access market opportunities through innovative
            technology, educational resources, and reliable financial tools.
          </p>
        </div>
      </div>

      {/* Press Releases */}
      <h2 className="mb-4">Latest Press Releases</h2>

      <div className="row">
        {pressReleases.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>{item.title}</h5>
               { /*<small className="text-muted">{item.date}</small>*/}
                <p className="mt-3">{item.description}</p>
                <button className="btn btn-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Media Resources */}
      <div className="mt-5">
        <h2>Media Resources</h2>

        <div className="card shadow-sm mt-3">
          <div className="card-body">
            <h5>Brand Assets</h5>
            <p>
              Download TradePath logos, brand guidelines, and official media
              resources.
            </p>

            <button className="btn btn-outline-dark">
              Download Media Kit
            </button>
          </div>
        </div>
      </div>

      {/* Media Contact */}
      <div className="text-center mt-5">
        <h2>Media Contact</h2>
        <p>
          For press inquiries, interviews, or partnership opportunities,
          contact our media relations team.
        </p>

        <a
          href="mailto:media@tradepath.com"
          className="btn btn-dark"
        >
          Contact Media Team
        </a>
      </div>
    </div>
     );
}

export default Hero;
import React from 'react';
function Hero() {
     const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
      description:
        "Build modern and responsive user interfaces using React JS.",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full Time",
      description:
        "Develop scalable APIs and backend services for TradePath.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Hybrid",
      type: "Full Time",
      description:
        "Help grow TradePath through digital marketing campaigns.",
    },
  ];
    return ( 
        <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Careers at TradePath</h1>
        <p className="lead text-muted">
          Join our team and help shape the future of trading and investing.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4>🚀 Growth</h4>
              <p>
                Work on exciting projects and grow your career with us.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4>🌍 Remote Friendly</h4>
              <p>
                Flexible work environment with remote opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4>💡 Innovation</h4>
              <p>
                Build cutting-edge products in the trading industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <h2 className="text-center mb-4">Open Positions</h2>

      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h4>{job.title}</h4>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Type:</strong> {job.type}
                </p>
                <p>{job.description}</p>

                <button className="btn btn-dark">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-5">
        <h3>Didn't Find a Suitable Role?</h3>
        <p>
          Send your resume and we'll contact you when a matching position
          becomes available.
        </p>

        <a
          href="mailto:careers@tradepath.com"
          className="btn btn-outline-dark"
        >
          Send Resume
        </a>
      </div>
    </div>
     );
}

export default Hero;
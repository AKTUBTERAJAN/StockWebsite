import React from 'react';
import {useState} from 'react';

function Hero() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Successfully Registered for the 60-Day Challenge!");

    setFormData({
      name: "",
      email: "",
      mobile: "",
    });
  };

return ( 
       <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          TradePath 60-Day Challenge
        </h1>

        <p className="lead text-muted">
          Build trading discipline, improve consistency, and compete for exciting rewards.
        </p>

        <button className="btn btn-dark btn-lg mt-3">
          Join Challenge
        </button>
      </div>

      {/* Challenge Overview */}
      <div className="card shadow border-0 mb-5">
        <div className="card-body p-4">
          <h2>Challenge Overview</h2>
          <p>
            The TradePath 60-Day Challenge is designed to help traders develop
            disciplined trading habits, risk management skills, and consistent
            performance over a 60-day period.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="row mb-5">
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h3>📈</h3>
              <h5>Improve Consistency</h5>
              <p>Follow structured trading practices every day.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h3>🎯</h3>
              <h5>Track Performance</h5>
              <p>Monitor your growth and trading statistics.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h3>🏆</h3>
              <h5>Win Rewards</h5>
              <p>Top performers receive certificates and prizes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h2>Challenge Rules</h2>

          <ul className="mt-3">
            <li>Complete the challenge for 60 consecutive days.</li>
            <li>Follow proper risk management practices.</li>
            <li>Maintain a trading journal.</li>
            <li>No violation of TradePath community guidelines.</li>
            <li>Performance will be reviewed weekly.</li>
          </ul>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Challenge Timeline</h2>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4>Day 1</h4>
                <p>Registration & Goal Setup</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4>Day 15</h4>
                <p>Progress Review</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4>Day 30</h4>
                <p>Mid Challenge Evaluation</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4>Day 60</h4>
                <p>Final Assessment & Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h2 className="text-center mb-4">
            Register for the Challenge
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-dark px-5"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
     );
}

export default Hero;
import React from 'react';
import  {useState } from "react";
import axios from "axios";


function Hero() {
   const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    pan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/openaccount`,
      formData
    );

    alert(response.data.message);

      setFormData({
      fullName: "",
      mobile: "",
      email: "",
      pan: "",
    });

  } catch (error) {
    console.error(error);

    alert("Failed to Open Account");
  }
};
   
return ( 
        <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">
          Open Your TradePath Account
        </h1>
        <p className="lead text-muted">
          Start investing and trading with confidence.
        </p>
      </div>

      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 mb-4">
          <h2>Why Choose TradePath?</h2>

          <div className="mt-4">
            <div className="mb-3">
              <h5>📈 Advanced Trading Platform</h5>
              <p>
                Access powerful tools, charts, and real-time market insights.
              </p>
            </div>

            <div className="mb-3">
              <h5>🔒 Secure & Reliable</h5>
              <p>
                Your investments are protected with industry-standard security.
              </p>
            </div>

            <div className="mb-3">
              <h5>💰 Low Brokerage</h5>
              <p>
                Trade efficiently with competitive pricing and transparent fees.
              </p>
            </div>

            <div className="mb-3">
              <h5>⚡ Quick Account Opening</h5>
              <p>
                Complete your registration process in just a few minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h3 className="mb-4 text-center">
                Open Account Now
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Open Account
                </button>
              </form>

              <p className="text-center text-muted mt-3 mb-0">
                By continuing, you agree to TradePath's Terms &
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="mt-5">
        <h2 className="text-center mb-4">
          Open Your Account in 3 Easy Steps
        </h2>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h1>1</h1>
                <h5>Register</h5>
                <p>Fill in your personal details.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h1>2</h1>
                <h5>Verify KYC</h5>
                <p>Upload PAN, Aadhaar, and bank details.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h1>3</h1>
                <h5>Start Trading</h5>
                <p>Fund your account and begin investing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         
     );
}

export default Hero;
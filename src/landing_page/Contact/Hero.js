import React from 'react';
import  { useState } from "react";
import axios from "axios";

function Hero() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      "http://localhost:3002/contact",
      formData
    );

    alert(response.data.message);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error(error);

    alert("Failed to send message");
  }
};

  
return ( 
        <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-lg-5 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h3>Get In Touch</h3>
              <p>
                Our team is here to help you with any questions regarding
                TradePath services, trading, investments, or partnerships.
              </p>

              <hr />

              <p>
                <strong>Email:</strong><br />
                support@tradepath.com
              </p>

              <p>
                <strong>Phone:</strong><br />
                +91 96530 28979
              </p>

              <p>
                <strong>Address:</strong><br />
                TradePath Financial Services<br />
                Lucknow, Uttar Pradesh, India
              </p>

              <p>
                <strong>Business Hours:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h3 className="mb-4">Send Us a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How do I create an account?
              </button>
            </h2>
            <div
              id="faq1"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                Sign up using your email address and complete the verification
                process.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Is TradePath secure?
              </button>
            </h2>
            <div
              id="faq2"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Yes, we use industry-standard security measures to protect user
                data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
     );
}

export default Hero;
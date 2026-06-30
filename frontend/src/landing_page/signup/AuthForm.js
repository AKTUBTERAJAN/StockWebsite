import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'https://stockwebsite-backend.onrender.com';
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || 'https://stockwebsite-dashboard.vercel.app';

function AuthForm() {
  const [mode, setMode] = useState('signup');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSignup = mode === 'signup';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const endpoint = isSignup ? '/auth/register' : '/auth/login';

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Authentication failed.');
      }

      localStorage.setItem('authToken', result.token);
      localStorage.setItem('authUser', JSON.stringify(result.user));
      window.location.href = `${DASHBOARD_URL}?token=${encodeURIComponent(result.token)}`;
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container py-5" style={{ color: '#424242' }}>
      <div className="row justify-content-center align-items-stretch g-4">
        <div className="col-lg-5">
          <div className="h-100 p-4 p-md-5 border rounded bg-light">
            <p className="text-primary fw-semibold mb-2">Start trading today</p>
            <h2 className="fs-3 mb-3">Simple access to your investing account.</h2>
            <p className="text-muted mb-4">
              Create a new account or sign in to continue managing trades, holdings,
              funds, and watchlists from one secure dashboard.
            </p>
            <div className="d-flex gap-3 text-muted small">
              <span>No account fees</span>
              <span>Secure login</span>
              <span>Fast onboarding</span>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4 p-md-5">
              <div className="btn-group w-100 mb-4" role="group" aria-label="Choose authentication form">
                <button
                  type="button"
                  className={`btn ${isSignup ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setMode('signup')}
                >
                  Sign up
                </button>
                <button
                  type="button"
                  className={`btn ${!isSignup ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setMode('signin')}
                >
                  Sign in
                </button>
              </div>

              <h3 className="fs-4 mb-1">{isSignup ? 'Create your account' : 'Welcome back'}</h3>
              <p className="text-muted mb-4">
                {isSignup ? 'Fill in your details to get started.' : 'Sign in with your registered email.'}
              </p>

              <form onSubmit={handleSubmit}>
                {isSignup && (
                  <>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="name">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="mobile">Mobile number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        autoComplete="tel"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="dob">Date of birth</label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        name="dob"
                        autoComplete="bday"
                        required
                      />
                    </div>
                  </>
                )}

                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete={isSignup ? 'new-password' : 'current-password'}
                    required
                  />
                </div>

                {isSignup && (
                  <div className="mb-3">
                    <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      required
                    />
                  </div>
                )}

                {!isSignup && (
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="button" className="btn btn-link p-0 text-decoration-none">Forgot password?</button>
                  </div>
                )}

                {message && <div className="alert alert-danger py-2">{message}</div>}

                <button type="submit" className="btn btn-primary w-100 py-2">
                  {isSubmitting ? 'Please wait...' : isSignup ? 'Create account' : 'Sign in'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;

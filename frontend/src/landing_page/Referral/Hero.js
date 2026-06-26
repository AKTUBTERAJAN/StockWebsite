import React from 'react';
function Hero() {
    return ( 
        <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">TradePath Referral Program</h1>
        <p className="text-muted">
          Invite your friends and earn exciting rewards with TradePath.
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3>1</h3>
              <h5>Share Your Link</h5>
              <p>
                Get your unique referral link and share it with friends.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3>2</h3>
              <h5>Friends Sign Up</h5>
              <p>
                Your friends register and start using TradePath.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3>3</h3>
              <h5>Earn Rewards</h5>
              <p>
                Receive referral bonuses for every successful referral.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-5 shadow">
        <div className="card-body text-center">
          <h4>Your Referral Link</h4>
          <input
            type="text"
            className="form-control my-3"
            value="https://tradepath.com/ref/USER123"
            readOnly
          />
          <button
            className="btn btn-dark"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://tradepath.com/ref/USER123"
              );
              alert("Referral Link Copied!");
            }}
          >
            Copy Link
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h3>Referral Benefits</h3>
        <ul>
          <li>Earn rewards for every successful referral.</li>
          <li>Unlimited referrals allowed.</li>
          <li>Track referral earnings in your dashboard.</li>
          <li>Instant reward updates.</li>
        </ul>
      </div>
    </div>
     );
}

export default Hero;